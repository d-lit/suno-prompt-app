export type RandomConfigValue = number | number[];

/**
 * Возвращает новую копию массива со случайным порядком элементов.
 *
 * Исходный массив не изменяется. Для перемешивания используется
 * алгоритм Фишера—Йейтса, обеспечивающий равномерное распределение
 * всех возможных перестановок.
 *
 * @template T
 * @param {T[]} items - Исходный массив
 * @returns {T[]} Новый массив со случайным порядком элементов
 */
export const shuffle = <T>(items: T[]) => {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

/**
 * Возвращает вес объекта для случайного выбора.
 *
 * Если объект содержит числовое свойство `randomWeight`,
 * используется его значение. Во всех остальных случаях
 * возвращается вес `1`.
 *
 * @template T
 * @param {T} item - Объект с необязательным свойством randomWeight
 * @returns {number} Вес объекта
 */
export const getRandomWeight = <T extends object>(item: T) => {
  return 'randomWeight' in item && typeof item.randomWeight === 'number'
    ? item.randomWeight
    : 1;
};

/**
 * Нормализует описание диапазона случайных значений.
 *
 * Поддерживает как фиксированное число, так и массив диапазона.
 *
 * Правила обработки массива:
 * - `[value]` → диапазон от `0` до `value`;
 * - `[min, max]` → диапазон от `min` до `max`.
 *
 * @param {RandomConfigValue} value - Значение или диапазон
 * @returns {{ min: number; max: number }} Нормализованный диапазон
 */
export const getRandomRange = (value: RandomConfigValue) => {
  if (Array.isArray(value)) {
    return {
      max: value.length > 1 ? value[1] : (value[0] ?? 0),
      min: value.length > 1 ? value[0] : 0,
    };
  }

  return {
    max: value,
    min: value,
  };
};

/**
 * Возвращает случайное целое число в заданном диапазоне.
 *
 * Диапазон включителен с обеих сторон.
 * Формат входного значения соответствует {@link getRandomRange}.
 *
 * @param {RandomConfigValue} value - Значение или диапазон
 * @returns {number} Случайное целое число
 */
export const getRandomIterations = (value: RandomConfigValue) => {
  const { max, min } = getRandomRange(value);

  return min + Math.floor(Math.random() * (max - min + 1));
};

/**
 * Выбирает случайный объект с учётом его веса.
 *
 * Вес определяется числовым свойством `randomWeight`.
 * Элементы с весом `0` и меньше исключаются из выбора.
 *
 * Если свойство отсутствует, используется вес `1`.
 *
 * @template T
 * @param {T[]} items - Список объектов для случайного выбора
 * @returns {T | undefined} Выбранный объект или undefined, если доступных элементов нет
 */
export const pickWeightedRandom = <T extends object>(items: T[]) => {
  const available = items.filter((item) => {
    return getRandomWeight(item) > 0;
  });

  if (available.length === 0) {
    return undefined;
  }

  const totalWeight = available.reduce((sum, item) => {
    return sum + getRandomWeight(item);
  }, 0);

  let threshold = Math.random() * totalWeight;

  for (const item of available) {
    threshold -= getRandomWeight(item);

    if (threshold <= 0) {
      return item;
    }
  }

  return available[0];
};
