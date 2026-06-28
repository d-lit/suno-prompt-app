import { tags } from '~/db';
import {
  ActivePromptTag,
  PromptTag,
  PromptTagGroup,
  PromptTemplate,
} from '~/types';

/**
 * Нормализует текст токена для последующего сравнения.
 *
 * Удаляет пробелы по краям строки и приводит текст к нижнему регистру,
 * чтобы сравнение токенов не зависело от регистра и случайных пробелов.
 *
 * @param {string} value - Исходный текст токена
 * @returns {string} Нормализованный текст токена
 */
export const normalizeTokenText = (value: string) => {
  return value.trim().toLowerCase();
};

/**
 * Проверяет, полностью ли содержимое тега присутствует в шаблоне.
 *
 * Тег считается полностью включённым, если каждый его positive- и
 * negative-токен присутствует среди токенов шаблона.
 * Пустые теги всегда считаются несовпадающими.
 *
 * @param {PromptTag} tag - Проверяемый тег
 * @param {Set<string>} templateTokenKeys - Множество нормализованных токенов шаблона
 * @returns {boolean} true, если все токены тега присутствуют в шаблоне
 */
export const isTagFullyIncludedInTemplate = (
  tag: PromptTag,
  templateTokenKeys: Set<string>
) => {
  const tagTokens = tag.positive ?? [];

  if (tagTokens.length === 0) {
    return false;
  }

  return tagTokens.every((token) => {
    return templateTokenKeys.has(normalizeTokenText(token.text));
  });
};

/**
 * Проверяет, добавлен ли runtime-тег шаблона в список активных тегов.
 *
 * Runtime-теги имеют идентификатор вида `template:<id>` и используются
 * для хранения информации о выбранном шаблоне.
 *
 * @param {ActivePromptTag[]} activeTags - Список активных тегов
 * @param {string} templateId - Идентификатор шаблона
 * @returns {boolean} true, если runtime-тег шаблона найден
 */
export const hasTemplateRuntimeTag = (
  activeTags: ActivePromptTag[],
  templateId: string
) => {
  return activeTags.some((tag) => {
    return tag.tagId === `template:${templateId}`;
  });
};

/**
 * Возвращает список уникальных типов тегов.
 *
 * Порядок соответствует первому появлению каждого типа
 * во входном массиве.
 *
 * @param {PromptTag[]} tags - Список тегов
 * @returns {string[]} Массив уникальных типов
 */
export const getTagTypes = (tags: PromptTag[]) => {
  return Array.from(new Set(tags.map((tag) => tag.type)));
};

/**
 * Возвращает список уникальных типов активных тегов.
 *
 * Если тип уже сохранён в ActivePromptTag, используется он.
 * В противном случае выполняется поиск исходного тега в базе.
 *
 * @param {ActivePromptTag[]} activeTags - Список активных тегов
 * @returns {string[]} Массив уникальных типов
 */
export const getActiveTagTypes = (activeTags: ActivePromptTag[]) => {
  const activeTypes = new Set<string>();

  activeTags.forEach((activeTag) => {
    if (activeTag.type) {
      activeTypes.add(activeTag.type);

      return;
    }

    const sourceTag = tags.find((tag) => tag.id === activeTag.tagId);

    if (sourceTag) {
      activeTypes.add(sourceTag.type);
    }
  });

  return Array.from(activeTypes);
};

/**
 * Возвращает первый активный тип.
 *
 * Если среди активных тегов не найдено ни одного типа,
 * используется первый элемент из списка резервных типов.
 *
 * @param {ActivePromptTag[]} activeTags - Список активных тегов
 * @param {string[]} fallbackTypes - Резервный список типов
 * @returns {string | undefined} Первый найденный тип
 */
export const getFirstActiveType = (
  activeTags: ActivePromptTag[],
  fallbackTypes: string[]
) => {
  return getActiveTagTypes(activeTags)[0] ?? fallbackTypes[0];
};

/**
 * Создаёт множество нормализованных токенов шаблона.
 *
 * Используется для быстрого поиска и проверки наличия токенов
 * без учёта регистра и лишних пробелов.
 *
 * @param {PromptTemplate} template - Шаблон промпта
 * @returns {Set<string>} Множество нормализованных токенов
 */
export const getTemplateTokenKeys = (template: PromptTemplate) => {
  return new Set(
    [...(template.positive ?? []), ...(template.negative ?? [])].map((token) =>
      normalizeTokenText(token.text)
    )
  );
};

/**
 * Возвращает список тегов, полностью совпадающих с содержимым шаблона.
 *
 * Используется для автоматического восстановления тегов,
 * которые уже представлены токенами выбранного шаблона.
 *
 * @param {PromptTemplate} template - Шаблон промпта
 * @returns {PromptTag[]} Список автоматически определённых тегов
 */
export const getTemplatePreloadTags = (template: PromptTemplate) => {
  const templateTokenKeys = getTemplateTokenKeys(template);

  return tags.filter((tag) => {
    return isTagFullyIncludedInTemplate(tag, templateTokenKeys);
  });
};

type GetVisibleTagsParams = {
  activeTags: ActivePromptTag[];
  selectedCategories: string[];
  tags: PromptTag[];
};

/**
 * Возвращает список тегов, доступных для отображения.
 *
 * Активные теги отображаются всегда, даже если их категория
 * в данный момент не выбрана. Теги без категории также
 * отображаются независимо от фильтра.
 *
 * @param {GetVisibleTagsParams} params - Параметры фильтрации
 * @param {ActivePromptTag[]} params.activeTags - Список активных тегов
 * @param {string[]} params.selectedCategories - Выбранные категории
 * @param {PromptTag[]} params.tags - Исходный список тегов
 * @returns {PromptTag[]} Отфильтрованный список тегов
 */
export const getVisibleTags = ({
  activeTags,
  selectedCategories,
  tags,
}: GetVisibleTagsParams) => {
  return tags.filter((tag) => {
    const isActive = activeTags.some((item) => {
      return item.tagId === tag.id;
    });

    if (isActive) {
      return true;
    }

    if (!tag.category) {
      return true;
    }

    return selectedCategories.includes(tag.category);
  });
};

/**
 * Группирует теги по их типу.
 *
 * Сохраняет порядок появления типов и порядок тегов
 * внутри каждой группы.
 *
 * @param {PromptTag[]} tags - Список тегов
 * @returns {PromptTagGroup[]} Массив групп тегов
 */
export const groupTagsByType = (tags: PromptTag[]): PromptTagGroup[] => {
  const groupsMap = new Map<string, PromptTag[]>();

  for (const tag of tags) {
    const existing = groupsMap.get(tag.type);

    if (existing) {
      existing.push(tag);

      continue;
    }

    groupsMap.set(tag.type, [tag]);
  }

  return Array.from(groupsMap.entries()).map(([type, tags]) => {
    return {
      tags,
      type,
    };
  });
};
