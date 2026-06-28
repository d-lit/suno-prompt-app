import { ActivePromptToken, PromptTag } from '~/types';

const SINGULAR_OBJECT_TYPES: Record<string, string> = {
  blocks: 'block',
  elements: 'element',
  entities: 'entity',
  forms: 'form',
  fragments: 'fragment',
  masses: 'mass',
  objects: 'object',
  shapes: 'shape',
  structures: 'structure',
};

/**
 * Приводит название типа объектов к единственному числу.
 *
 * Используется при генерации промптов, когда требуется описать
 * один объект вместо группы объектов.
 *
 * Изменяется только последнее слово строки, если для него
 * существует соответствие в словаре `SINGULAR_OBJECT_TYPES`.
 *
 * @param {string} objectType - Название типа объектов
 * @param {boolean} isSingle - Нужно ли использовать единственное число
 * @returns {string} Название типа объектов в нужной форме
 */
export const singularizeObjectType = (
  objectType: string,
  isSingle: boolean
): string => {
  if (!isSingle) return objectType;

  const words = objectType.split(' ');
  const lastWord = words.at(-1);

  if (!lastWord) return objectType;

  const singular = SINGULAR_OBJECT_TYPES[lastWord];

  if (!singular) return objectType;

  words[words.length - 1] = singular;

  return words.join(' ');
};

/**
 * Возвращает текст первого положительного токена тега.
 *
 * Если тег не содержит положительных токенов,
 * возвращает undefined.
 *
 * @param {PromptTag} [tag] - Тег
 * @returns {string | undefined} Текст первого положительного токена
 */
export const getFirstPositiveText = (tag?: PromptTag) => {
  return tag?.positive?.[0]?.text;
};

/**
 * Преобразует токен в строку промпта.
 *
 * Токены с весом `0` и меньше исключаются из результата.
 * Если вес равен `1`, возвращается только текст токена.
 * Для остальных значений используется синтаксис `(text:weight)`.
 *
 * @param {ActivePromptToken} token - Токен промпта
 * @returns {string} Строковое представление токена
 */
export const renderToken = (token: ActivePromptToken) => {
  if (token.weight <= 0) {
    return '';
  }

  if (token.weight === 1) {
    return token.text;
  }

  return `(${token.text}:${token.weight})`;
};

/**
 * Объединяет список токенов в строку промпта.
 *
 * Перед объединением каждый токен преобразуется функцией
 * {@link renderToken}. Пустые значения автоматически исключаются.
 *
 * @param {ActivePromptToken[]} tokens - Список токенов
 * @returns {string} Строка промпта
 */
export const renderTokensLine = (tokens: ActivePromptToken[]) => {
  return tokens.map(renderToken).filter(Boolean).join(', ');
};
