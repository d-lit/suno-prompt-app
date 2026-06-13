import { ActivePromptTag, ActivePromptToken, PromptSide } from '~/types';

export const PROMPT_TYPE_ORDER = [
  'genre',
  'style',
  'atmosphere',

  'anime',

  'sound',
  'rhythm',

  'vocals',

  '__template__',
];

/**
 * Нормализует токен.
 *
 * Используется для dedupe.
 */
const normalizeToken = (value: string) => {
  return value.trim().toLowerCase();
};

/**
 * Рендерит токен в prompt string.
 */
const renderToken = (token: ActivePromptToken) => {
  /**
   * weight <= 0
   * считаем отключённым токеном.
   */
  if (token.weight <= 0) {
    return '';
  }

  /**
   * weight === 1
   * рендерим без скобок.
   */
  if (token.weight === 1) {
    return token.text;
  }

  return `(${token.text}:${token.weight})`;
};

type RenderPromptParams = {
  side: PromptSide;

  activeTags: ActivePromptTag[];
};

/**
 * Возвращает порядок типа тега.
 */
const getTypeOrder = (type?: string) => {
  const index = PROMPT_TYPE_ORDER.indexOf(type ?? '');

  if (index < 0) {
    return 999;
  }

  return index;
};

/**
 * Универсальный renderer
 * для positive / negative prompt.
 *
 * Особенности:
 * - dedupe token texts
 * - max weight wins
 * - стабильный порядок типов
 * - пустая строка между type groups
 */
export const renderPrompt = ({ activeTags, side }: RenderPromptParams) => {
  /**
   * Глобальный dedupe map.
   *
   * Нужен чтобы:
   * - не рендерить duplicate tokens
   * - хранить max weight
   */
  const tokenMap = new Map<string, ActivePromptToken>();

  /**
   * Финальные строки prompt.
   */
  const lines: string[] = [];

  /**
   * Сортируем active tags
   * по semantic order.
   */
  const sortedTags = [...activeTags].sort((a, b) => {
    return getTypeOrder(a.type) - getTypeOrder(b.type);
  });

  let previousType: string | undefined;

  sortedTags.forEach((tag) => {
    /**
     * Tokens текущей группы.
     */
    const renderedTokens: string[] = [];

    tag[side].forEach((token) => {
      /**
       * weight <= 0
       * считаем отключённым.
       */
      if (token.weight <= 0) {
        return;
      }

      const key = normalizeToken(token.text);

      const existing = tokenMap.get(key);

      /**
       * Если токена ещё нет —
       * резервируем его.
       */
      if (!existing) {
        tokenMap.set(key, token);

        renderedTokens.push(renderToken(token));

        return;
      }

      /**
       * Max weight wins.
       *
       * Duplicate token
       * второй раз НЕ рендерим.
       */
      if (token.weight > existing.weight) {
        tokenMap.set(key, token);
      }
    });

    /**
     * Пустые группы пропускаем.
     */
    if (renderedTokens.length <= 0) {
      return;
    }

    /**
     * Между разными типами тегов
     * добавляем пустую строку.
     */
    if (previousType && previousType !== tag.type) {
      lines.push('');
    }

    /**
     * Каждая tag group
     * отдельной строкой.
     */
    lines.push(`${renderedTokens.join(', ')},`);

    previousType = tag.type;
  });

  /**
   * Финальный prompt.
   */
  return lines.join('\n');
};
