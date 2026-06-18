import { PromptTag } from '~/types';

export default [
  /**
   * SOUL
   */
  {
    id: 'soul',
    comment:
      'Базовый soul. Сильнее влияет на вокал, гармонию и бас, чем на атмосферу.',
    group: 'soul',
    label: 'Soul',
    positive: [
      { text: 'soul' },
      { text: 'soulful groove' },
      { text: 'warm emotional delivery' },
      { text: 'organic rhythm section' },
      { text: 'deep musical expression' },
    ],
    type: 'genre',
  },
  {
    id: 'deep_soul',
    comment: 'Более зрелый и глубокий вариант soul.',
    group: 'soul',
    label: 'Deep Soul',
    positive: [
      { text: 'deep soul' },
      { text: 'emotional depth' },
      { text: 'warm human performance' },
      { text: 'heartfelt groove' },
      { text: 'rich soulful atmosphere' },
    ],
    type: 'genre',
  },
  {
    id: 'modern_soul',
    comment: 'Современная интерпретация жанра.',
    group: 'soul',
    label: 'Modern Soul',
    positive: [
      { text: 'modern soul' },
      { text: 'contemporary soulful production' },
      { text: 'smooth vocal character' },
      { text: 'modern groove language' },
      { text: 'warm emotional tone' },
    ],
    type: 'genre',
  },

  /**
   * NEO SOUL
   */
  {
    id: 'neo_soul',
    comment: 'Один из важнейших жанров для твоих экспериментов.',
    group: 'neo_soul',
    label: 'Neo Soul',
    positive: [
      { text: 'neo soul' },
      { text: 'rich chord extensions' },
      { text: 'deep pocket groove' },
      { text: 'Rhodes harmony' },
      { text: 'modern soulful musicianship' },
    ],
    type: 'genre',
  },
  {
    id: 'alternative_soul',
    comment: 'Neo-soul без явной привязки к радио-формату.',
    group: 'neo_soul',
    label: 'Alternative Soul',
    positive: [
      { text: 'alternative soul' },
      { text: 'modern soul exploration' },
      { text: 'creative harmony' },
      { text: 'independent soul aesthetic' },
      { text: 'experimental groove sensibility' },
    ],
    type: 'genre',
  },
  {
    id: 'future_soul',
    comment: 'Интересный мост между soul и электронной музыкой.',
    group: 'neo_soul',
    label: 'Future Soul',
    positive: [
      { text: 'future soul' },
      { text: 'electronic soul influence' },
      { text: 'modern groove architecture' },
      { text: 'forward-looking harmony' },
      { text: 'contemporary soulful textures' },
    ],
    type: 'genre',
  },

  /**
   * VINTAGE
   */
  {
    id: 'vintage_soul',
    comment: 'Классический аналоговый soul.',
    group: 'vintage',
    label: 'Vintage Soul',
    positive: [
      { text: 'vintage soul' },
      { text: 'classic soul recording aesthetic' },
      { text: 'warm analog character' },
      { text: 'timeless vocal expression' },
      { text: 'traditional soul groove' },
    ],
    type: 'genre',
  },
  {
    id: 'southern_soul',
    comment: 'Проверка насколько Suno знает этот термин.',
    group: 'vintage',
    label: 'Southern Soul',
    positive: [
      { text: 'southern soul' },
      { text: 'deep emotional vocals' },
      { text: 'earthy rhythm section' },
      { text: 'warm organic production' },
      { text: 'classic soul tradition' },
    ],
    type: 'genre',
  },
  {
    id: 'retro_soul',
    comment: 'Ретро без конкретной эпохи.',
    group: 'vintage',
    label: 'Retro Soul',
    positive: [
      { text: 'retro soul' },
      { text: 'old-school soul influence' },
      { text: 'vintage groove character' },
      { text: 'classic musical sensibility' },
      { text: 'warm nostalgic sound' },
    ],
    type: 'genre',
  },

  /**
   * GOSPEL ROOTS
   */
  {
    id: 'gospel_soul',
    comment: 'Корни soul через госпел.',
    group: 'gospel',
    label: 'Gospel Soul',
    positive: [
      { text: 'gospel soul' },
      { text: 'spiritual vocal energy' },
      { text: 'uplifting harmony' },
      { text: 'deep emotional expression' },
      { text: 'gospel-inspired musicianship' },
    ],
    type: 'genre',
  },
  {
    id: 'spiritual_soul',
    comment: 'Менее религиозная версия gospel influence.',
    group: 'gospel',
    label: 'Spiritual Soul',
    positive: [
      { text: 'spiritual soul' },
      { text: 'uplifting emotional energy' },
      { text: 'inner depth and warmth' },
      { text: 'human connection through music' },
      { text: 'soulful transcendence' },
    ],
    type: 'genre',
  },
  {
    id: 'uplifting_soul',
    comment: 'Позитивная сторона soul.',
    group: 'gospel',
    label: 'Uplifting Soul',
    positive: [
      { text: 'uplifting soul' },
      { text: 'hopeful emotional tone' },
      { text: 'warm human energy' },
      { text: 'positive soulful expression' },
      { text: 'open-hearted groove' },
    ],
    type: 'genre',
  },

  /**
   * RHODES SOUL
   */
  {
    id: 'rhodes_soul',
    comment: 'Почти отдельный жанр для современных продюсеров.',
    group: 'rhodes',
    label: 'Rhodes Soul',
    positive: [
      { text: 'Rhodes soul' },
      { text: 'electric piano harmony' },
      { text: 'warm Rhodes chords' },
      { text: 'deep pocket groove' },
      { text: 'soulful keyboard textures' },
    ],
    type: 'genre',
  },
  {
    id: 'late_night_soul',
    comment: 'Ночной soul без романтических соплей.',
    group: 'rhodes',
    label: 'Late-Night Soul',
    positive: [
      { text: 'late-night soul' },
      { text: 'after-hours groove' },
      { text: 'warm urban mood' },
      { text: 'deep soulful atmosphere' },
      { text: 'night-time musicianship' },
    ],
    type: 'genre',
  },
  {
    id: 'soul_jazz',
    comment: 'Очень интересный кандидат для UKG и Deep House связок.',
    group: 'rhodes',
    label: 'Soul Jazz',
    positive: [
      { text: 'soul jazz' },
      { text: 'jazz harmony with soulful groove' },
      { text: 'warm instrumental interplay' },
      { text: 'organic musicianship' },
      { text: 'groove-oriented jazz feeling' },
    ],
    type: 'genre',
  },

  /**
   * CONTEMPORARY
   */
  {
    id: 'independent_soul',
    comment: 'Современная независимая soul-сцена.',
    group: 'contemporary',
    label: 'Independent Soul',
    positive: [
      { text: 'independent soul' },
      { text: 'alternative soulful music' },
      { text: 'modern artistic expression' },
      { text: 'creative vocal identity' },
      { text: 'non-commercial soul approach' },
    ],
    type: 'genre',
  },
  {
    id: 'soulful_house_roots',
    comment: 'Интересно проверить влияние на Deep House.',
    group: 'contemporary',
    label: 'Soulful House Roots',
    positive: [
      { text: 'soulful house roots' },
      { text: 'house music soul influence' },
      { text: 'warm groove tradition' },
      { text: 'deep emotional house character' },
      { text: 'dancefloor soul energy' },
    ],
    type: 'genre',
  },
  {
    id: 'urban_soul',
    comment: 'Городская современная soul-эстетика.',
    group: 'contemporary',
    label: 'Urban Soul',
    positive: [
      { text: 'urban soul' },
      { text: 'modern city soul atmosphere' },
      { text: 'contemporary groove language' },
      { text: 'warm metropolitan mood' },
      { text: 'soulful urban expression' },
    ],
    type: 'genre',
  },
] as PromptTag[];
