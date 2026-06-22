import { PromptTag } from '~/types';

export default [
  /**
   * BREAKBEAT
   */
  {
    id: 'breakbeat',
    comment:
      'Базовый breakbeat-тег. Хорошая отправная точка для проверки влияния на грув.',
    group: 'breakbeat',
    label: 'Breakbeat',
    positive: [
      { text: 'Breakbeat' },
      { text: 'broken drum patterns' },
      { text: 'syncopated break grooves' },
      { text: 'sampled drum breaks' },
      { text: 'break-driven rhythm section' },
    ],
    type: 'genre',
  },
  {
    id: 'classic_breakbeat',
    comment: 'Классическая breakbeat школа до сильного разделения на жанры.',
    group: 'breakbeat',
    label: 'Classic Breakbeat',
    positive: [
      { text: 'Classic Breakbeat' },
      { text: 'old school breakbeat grooves' },
      { text: 'sample-based drum breaks' },
      { text: 'vintage rave energy' },
      { text: 'classic breakbeat rhythm' },
    ],
    type: 'genre',
  },
  {
    id: 'big_beat',
    comment:
      'Большой британский breakbeat-жанр конца 90-х. Агрессивные брейки, жирные лупы и роковая энергетика.',
    group: 'big_beat',
    label: 'Big Beat',
    positive: [
      { text: 'Big Beat' },
      { text: 'heavy breakbeat grooves' },
      { text: 'sample-driven energy' },
      { text: 'fat drum loops' },
      { text: 'festival-sized breakbeats' },
      { text: 'British breakbeat culture' },
    ],
    type: 'genre',
  },

  /**
   * RAVE
   */
  {
    id: 'breakbeat_hardcore',
    comment: 'Самый интересный кандидат из старой рейв-сцены.',
    group: 'rave',
    label: 'Breakbeat Hardcore',
    positive: [
      { text: 'Breakbeat Hardcore' },
      { text: 'rave breakbeats' },
      { text: 'oldskool rave energy' },
      { text: 'hardcore break rhythms' },
      { text: 'early jungle influence' },
    ],
    type: 'genre',
  },
  {
    id: 'oldskool_hardcore',
    comment: 'Ранняя британская рейвовая школа начала 90-х.',
    group: 'rave',
    label: 'Oldskool Hardcore',
    positive: [
      { text: 'Oldskool Hardcore' },
      { text: 'classic rave breaks' },
      { text: 'piano rave energy' },
      { text: 'UK hardcore roots' },
      { text: 'breakbeat rave culture' },
    ],
    type: 'genre',
  },
  {
    id: 'jungle_techno',
    comment: 'Переходная форма между рейвом, техно и будущим джанглом.',
    group: 'rave',
    label: 'Jungle Techno',
    positive: [
      { text: 'Jungle Techno' },
      { text: 'techno breakbeats' },
      { text: 'early jungle rhythms' },
      { text: 'rave basslines' },
      { text: 'hardcore break groove' },
    ],
    type: 'genre',
  },

  /**
   * MODERN BREAKS
   */
  {
    id: 'raw_breaks',
    comment:
      'Современная сырая breakbeat эстетика. Возможно один из самых полезных тегов файла.',
    group: 'modern_breaks',
    label: 'Raw Breaks',
    positive: [
      { text: 'Raw Breaks' },
      { text: 'raw breakbeat grooves' },
      { text: 'underground break rhythms' },
      { text: 'stripped-back breakbeat production' },
      { text: 'modern breakbeat energy' },
    ],
    type: 'genre',
  },
  {
    id: 'underground_breaks',
    comment: 'Современная андеграундная breakbeat сцена.',
    group: 'modern_breaks',
    label: 'Underground Breaks',
    positive: [
      { text: 'Underground Breaks' },
      { text: 'warehouse breakbeat atmosphere' },
      { text: 'club-focused break rhythms' },
      { text: 'modern underground groove' },
      { text: 'bass-driven breakbeats' },
    ],
    type: 'genre',
  },

  /**
   * ELECTRO BREAKS
   */
  {
    id: 'electro_breaks',
    comment: 'Breaks через electro-фундамент и драм-машины.',
    group: 'electro_breaks',
    label: 'Electro Breaks',
    positive: [
      { text: 'Electro Breaks' },
      { text: 'electro breakbeat groove' },
      { text: '808-driven break rhythms' },
      { text: 'electronic break patterns' },
      { text: 'robotic groove movement' },
    ],
    type: 'genre',
  },
  {
    id: 'nu_skool_breaks',
    comment:
      'Большой breakbeat-жанр 2000-х. Очень вероятный датасетный термин.',
    group: 'electro_breaks',
    label: 'Nu Skool Breaks',
    positive: [
      { text: 'Nu Skool Breaks' },
      { text: 'modern breakbeat production' },
      { text: 'electronic break grooves' },
      { text: 'club-oriented breakbeat sound' },
      { text: 'driving break rhythms' },
    ],
    type: 'genre',
  },
] as PromptTag[];
