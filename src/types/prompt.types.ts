/**
 * Сторона промпта.
 *
 * positive — основной промпт.
 * negative — негативный промпт.
 */
export type PromptSide = 'positive';

/**
 * Базовый токен промпта.
 *
 * Это минимальная единица, из которой собирается итоговый prompt.
 *
 * Пример:
 * {
 *   text: 'rain',
 *   weight: 1.2
 * }
 */
export type PromptToken = {
  /**
   * Текст токена, который попадёт в итоговый prompt.
   *
   * Примеры:
   * - 'rain'
   * - 'wet streets'
   * - 'masterpiece'
   * - 'cinematic lighting'
   */
  text: string;

  /**
   * Вес токена по умолчанию.
   *
   * Используется только как стартовое значение при добавлении токена в активное состояние.
   * Сам пользовательский вес хранится уже в ActivePromptToken.
   *
   * Если не указан — считается 1.
   */
  weight?: number;

  /**
   * Флаг включения токена по умолчанию.
   *
   * Полезно, если внутри тега есть дополнительные токены,
   * которые должны быть видны пользователю, но не включаться сразу.
   *
   * Если не указан — считается true.
   */
  enabled?: boolean;
};

/**
 * Шаблон промпта.
 *
 * Шаблон используется как стартовый скелет.
 * Например: Anime, Realistic, Cyberpunk, Watercolor.
 */
export type PromptTemplate = {
  /**
   * Уникальный id шаблона.
   *
   * Используется в коде, пресетах и связях.
   *
   * Примеры:
   * - 'anime'
   * - 'realistic'
   * - 'cyberpunk'
   */
  id: string;

  /**
   * Человекочитаемое название шаблона для UI.
   *
   * Примеры:
   * - 'Anime'
   * - 'Realistic'
   * - 'Cyberpunk'
   */
  label: string;

  /**
   * Токены, которые попадут в positive prompt сразу после выбора шаблона.
   */
  positive?: PromptToken[];

  /**
   * Токены, которые попадут в negative prompt сразу после выбора шаблона.
   */
  negative?: PromptToken[];
};

/**
 * Тег промпта.
 *
 * Это основная сущность базы.
 * Теги группируются по category и type автоматически.
 *
 * Пример:
 * category: 'anime'
 * type: 'weather'
 * label: 'Heavy Rain'
 */
export type PromptTag = {
  /**
   * Уникальный id тега.
   *
   * Используется в active state и пресетах.
   *
   * Примеры:
   * - 'heavy_rain'
   * - 'school_uniform'
   * - 'city_landscape'
   */
  id: string;

  /**
   * Название тега для UI.
   *
   * Примеры:
   * - 'Heavy Rain'
   * - 'School Uniform'
   * - 'City Landscape'
   */
  label: string;

  /**
   * Комментарий
   */
  comment?: string;

  /**
   * Категория тега.
   *
   * Это meta-фильтр верхнего уровня.
   * Отдельно категория нигде не хранится — собирается автоматически из тегов.
   *
   * Примеры:
   * - 'anime'
   * - 'realistic'
   * - 'cyberpunk'
   */
  category?: string;

  /**
   * Тип тега.
   *
   * Это второй уровень группировки внутри категории.
   * Отдельно тип нигде не хранится — собирается автоматически из тегов.
   *
   * Примеры:
   * - 'weather'
   * - 'landscape'
   * - 'clothes'
   * - 'pose'
   * - 'expression'
   * - 'lighting'
   */
  type: string;

  /**
   * Относительный вес для randomizer.
   *
   * 0 = никогда не участвует в random.
   * По умолчанию = 1.
   */
  randomWeight?: number;

  /**
   * Запрещает наслаивание похожих тегов
   * при random генерации.
   */
  group?: string;

  /**
   * Positive-токены тега.
   *
   * Попадают в основной prompt при включении тега.
   */
  positive?: PromptToken[];
};

/**
 * Активный токен.
 *
 * Это runtime-версия PromptToken.
 * Именно здесь хранятся пользовательские настройки:
 * - включён / выключен
 * - текущий вес
 */
export type ActivePromptToken = {
  /**
   * Текст токена.
   *
   * Дублируется из PromptToken, чтобы preset был самодостаточным
   * и не ломался полностью при изменении базы тегов.
   */
  text: string;

  /**
   * Текущий пользовательский вес токена.
   *
   * Если weight === 1, рендерим просто:
   * rain
   *
   * Если weight !== 1, рендерим:
   * (rain:1.2)
   */
  weight: number;
};

/**
 * Активный тег.
 *
 * Это runtime-версия PromptTag.
 * Создаётся в момент, когда пользователь включает тег чекбоксом.
 */
export type ActivePromptTag = {
  /**
   * id исходного тега из базы.
   */
  tagId: string;

  /**
   * Тип группы.
   *
   * Например:
   * - 'weather'
   * - 'landscape'
   * - 'clothes'
   */
  type?: string;

  /**
   * Помечаем random tags,
   * чтобы потом можно было
   * очистить их при reroll.
   */
  isRandom?: boolean;

  /**
   * Активные positive-токены тега.
   */
  positive: ActivePromptToken[];
};

/**
 * Сохранённый preset prompt builder.
 *
 * Preset хранит:
 * - template
 * - активные categories
 * - active runtime tags
 * - пользовательские веса
 */
export type PromptPreset = {
  /**
   * Уникальный id пресета.
   *
   * Примеры:
   * - anime-heavy-rain
   * - cyberpunk-neon-city
   */
  id: string;

  /**
   * Название пресета для UI.
   */
  label: string;

  /**
   * id выбранного template.
   */
  templateId: string;

  /**
   * Активные категории.
   *
   * [] = только global tags
   */
  categories?: string[];

  /**
   * Активные runtime-теги
   * со всеми пользовательскими настройками.
   */
  activeTags: ActivePromptTag[];

  /**
   * Название файла
   */
  fileName?: string;
};

/**
 * Результат рендера промпта.
 *
 * Это уже готовый текст для копирования в ComfyUI.
 */
export type RenderedPrompt = {
  /**
   * Готовый positive prompt.
   */
  positive: string;

  /**
   * Готовый negative prompt.
   */
  negative: string;
};

/**
 * Токен после сборки, но до финального рендера.
 *
 * Используется внутри prompt engine:
 * collect → normalize → dedupe → max weight wins → render.
 */
export type RuntimePromptToken = {
  /**
   * Текст токена.
   */
  text: string;

  /**
   * Финальный вес токена после merge.
   */
  weight: number;

  /**
   * Источники, из которых пришёл токен.
   *
   * Полезно для отладки дублей.
   *
   * Примеры:
   * - 'template:anime'
   * - 'tag:heavy_rain'
   */
  sources: string[];
};

/**
 * Группа тегов для UI.
 *
 * Не хранится в JSON.
 * Собирается автоматически из PromptTag[].
 */
export type PromptTagGroup = {
  /**
   * Тип группы.
   *
   * Например:
   * - 'weather'
   * - 'landscape'
   * - 'clothes'
   */
  type: string;

  /**
   * Теги внутри группы.
   */
  tags: PromptTag[];
};
