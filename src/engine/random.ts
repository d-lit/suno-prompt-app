import { ActivePromptTag, PromptTag } from '~/types';
import { getRandomRange, pickWeightedRandom, shuffle } from '~/utils';

import { createActiveTag } from './createActiveTag';

type RandomConfigValue = number | number[];

type SceneRule = {
  allows?: string[];
  blocks?: string[];
};

export const RANDOM_CONFIG: Record<string, RandomConfigValue> = {
  atmosphere: [1],
  genre: [1],
  style: [1],

  anime: [1],

  rhythm: [1, 3],
  sound: [1, 3],

  vocals: 0,
};

/**
 * Мягкие правила совместимости scene-типов.
 *
 * Нужны, чтобы random не собирал очевидно конфликтующие сцены:
 * например interior + landscape или transport + environment.
 *
 * Логика:
 * - allows не задан — разрешены все типы
 * - allows: [] — не разрешён ни один следующий тип
 * - blocks не задан — ничего не блокируется
 */
export const RANDOM_SCENE_RULES: Record<string, SceneRule> = {};

const RANDOM_TYPE_ORDER = [
  'atmosphere',
  'genre',
  'style',
  'anime',
  'rhythm',
  'sound',
  'vocals',
];

/**
 * Возвращает порядок random-обработки типа.
 *
 * Нужен, чтобы scene anchors обрабатывались предсказуемо:
 * interior / transport раньше более общих environment / landscape.
 */
const getRandomTypeOrder = (type: string) => {
  const index = RANDOM_TYPE_ORDER.indexOf(type);

  if (index < 0) {
    return 999;
  }

  return index;
};

/**
 * Генерирует random-набор active tags.
 *
 * Особенности:
 * - сохраняет ручные и template-теги
 * - удаляет прошлые random-теги
 * - учитывает RANDOM_CONFIG
 * - учитывает selectedCategories
 * - не дублирует уже активные теги
 * - не выбирает больше одного тега из одной group
 * - применяет мягкие scene rules
 */
export const generateRandomTags = ({
  activeTags,
  config = RANDOM_CONFIG,
  selectedCategories,
  tags,
}: {
  activeTags: ActivePromptTag[];
  config?: Record<string, RandomConfigValue>;
  tags: PromptTag[];
  selectedCategories: string[];
}) => {
  /**
   * Оставляем только НЕ-random tags.
   *
   * Это:
   * - template foundation
   * - ручные теги
   *
   * Но удаляет прошлый random result,
   * чтобы теги не копились.
   */
  const baseTags = activeTags.filter((activeTag) => {
    return !activeTag.isRandom;
  });

  const nextTags: ActivePromptTag[] = [...baseTags];

  const groupedTags = tags.reduce<Record<string, PromptTag[]>>((acc, tag) => {
    if (!acc[tag.type]) {
      acc[tag.type] = [];
    }

    acc[tag.type].push(tag);

    return acc;
  }, {});

  /**
   * Быстрая проверка уже выбранных тегов.
   *
   * Нужна, чтобы random не мог выбрать один и тот же tagId
   * несколько раз внутри одного запуска.
   */
  const selectedTagIds = new Set(
    nextTags.map((activeTag) => {
      return activeTag.tagId;
    })
  );

  /**
   * Типы, запрещённые текущей scene hierarchy.
   */
  const blockedTypes = new Set<string>();

  /**
   * Типы, разрешённые текущей scene hierarchy.
   *
   * undefined = allow all.
   */
  let allowedTypes: Set<string> | undefined;

  Object.entries(groupedTags)
    .sort(([typeA], [typeB]) => {
      return getRandomTypeOrder(typeA) - getRandomTypeOrder(typeB);
    })
    .forEach(([type, groupTags]) => {
      /**
       * Type явно заблокирован.
       */
      if (blockedTypes.has(type)) {
        return;
      }

      /**
       * Если active allow-list существует —
       * пропускаем всё вне списка.
       */
      if (allowedTypes && !allowedTypes.has(type)) {
        return;
      }

      const typeConfig = config[type];

      const { max, min } = getRandomRange(typeConfig ?? 1);

      /**
       * Тип отключён для random.
       */
      if (max <= 0) {
        return;
      }

      const availableTags = shuffle(
        groupTags.filter((tag) => {
          /**
           * Category filtering.
           */
          if (
            selectedCategories.length > 0 &&
            tag.category &&
            !selectedCategories.includes(tag.category)
          ) {
            return false;
          }

          /**
           * Не дублируем уже активные tags.
           */
          return !selectedTagIds.has(tag.id);
        })
      );

      /**
       * group dedupe.
       */
      const usedGroups = new Set<string>();

      /**
       * Собираем уже используемые группы
       * из active tags.
       */
      nextTags.forEach((activeTag) => {
        const sourceTag = tags.find((tag) => {
          return tag.id === activeTag.tagId;
        });

        if (sourceTag?.group) {
          usedGroups.add(sourceTag.group);
        }
      });

      const iterations = min + Math.floor(Math.random() * (max - min + 1));

      let hasSuccessfulRoll = false;

      for (let i = 0; i < iterations; i++) {
        const filteredTags = availableTags.filter((tag) => {
          if (selectedTagIds.has(tag.id)) {
            return false;
          }

          if (!tag.group) {
            return true;
          }

          return !usedGroups.has(tag.group);
        });

        const randomTag = pickWeightedRandom(filteredTags);

        if (!randomTag) {
          continue;
        }

        hasSuccessfulRoll = true;
        selectedTagIds.add(randomTag.id);

        nextTags.push({
          ...createActiveTag(randomTag),

          /**
           * Помечаем random tags,
           * чтобы потом можно было
           * очистить их при reroll.
           */
          isRandom: true,
        });

        if (randomTag.group) {
          usedGroups.add(randomTag.group);
        }
      }

      /**
       * Scene hierarchy rules
       * применяем только если
       * type реально что-то зароллил.
       */
      if (hasSuccessfulRoll) {
        const rules = RANDOM_SCENE_RULES[type];

        /**
         * allow-list.
         */
        if (rules?.allows) {
          allowedTypes = new Set(rules.allows);
        }

        /**
         * block-list.
         */
        rules?.blocks?.forEach((blockedType) => {
          blockedTypes.add(blockedType);
        });
      }
    });

  return nextTags;
};
