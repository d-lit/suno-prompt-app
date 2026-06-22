import { PromptTag } from '~/types';

export const fieldRecordingPositive = [
  { text: 'Field Recordings' },
  { text: 'Found Sounds' },
  { text: 'Location Recordings' },
  { text: 'Environmental Recordings' },
];

export const ambientEnvironmentPositive = [
  { text: 'Room Ambience' },
  { text: 'Street Ambience' },
  { text: 'Train Interior' },
  { text: 'Subway Ambience' },
  { text: 'Environmental Atmosphere' },
];

export const mechanicalPositive = [
  { text: 'Mechanical Clicks' },
  { text: 'Switch Clicks' },
  { text: 'Machine Clicks' },
  { text: 'Mechanical Whirring' },
  { text: 'Industrial Sounds' },
  { text: 'Relay Clicks' },
];

export const industrialPositive = [
  { text: 'Industrial Sounds' },
  { text: 'Machine Whirring' },
  { text: 'Hydraulic Movement' },
  { text: 'Servo Motors' },
  { text: 'Mechanical Movement' },
];

export const paperPositive = [
  { text: 'Paper Rustling' },
  { text: 'Page Turns' },
  { text: 'Paper Textures' },
];

export const fabricPositive = [
  { text: 'Fabric Movement' },
  { text: 'Cloth Rustling' },
  { text: 'Leather Creaks' },
];

export const movementPositive = [
  { text: 'Footsteps' },
  { text: 'Walking Sounds' },
  { text: 'Running Footsteps' },
  { text: 'Concrete Footsteps' },
  { text: 'Metal Footsteps' },
];

export const objectPositive = [
  { text: 'Object Handling' },
  { text: 'Wood Knocks' },
  { text: 'Plastic Taps' },
  { text: 'Metal Impacts' },
];

export const weatherPositive = [
  { text: 'Rain Foley' },
  { text: 'Water Droplets' },
  { text: 'Wind Noise' },
];

export const cinematicFoleyPositive = [
  ...movementPositive,
  ...objectPositive,
  ...paperPositive,
  ...fabricPositive,
];

export const documentaryPositive = [
  ...fieldRecordingPositive,
  { text: 'Documentary Sound Design' },
  { text: 'Real World Textures' },
];

export const concreteMusicPositive = [
  { text: 'Musique Concrète' },
  { text: 'Concrete Music' },
  { text: 'Found Sounds' },
  { text: 'Experimental Sound Collage' },
];

export default [
  {
    id: 'field_recordings',
    comment:
      'Один из самых перспективных тегов файла. Реальные звуки окружающей среды как часть музыкального материала.',
    group: 'foley',
    label: 'Field Recordings',
    positive: [
      { text: 'Field Recordings' },
      ...fieldRecordingPositive,
      ...ambientEnvironmentPositive,
    ],
    type: 'sound',
  },

  {
    id: 'found_sounds',
    comment: 'Музыка из найденных бытовых и окружающих звуков.',
    group: 'foley',
    label: 'Found Sounds',
    positive: [
      { text: 'Found Sounds' },
      ...fieldRecordingPositive,
      ...mechanicalPositive,
      ...ambientEnvironmentPositive,
    ],
    type: 'sound',
  },

  {
    id: 'cinematic_foley',
    comment: 'Киношный слой деталей и микро-звуков поверх музыки.',
    group: 'foley',
    label: 'Cinematic Foley',
    positive: [{ text: 'Cinematic Foley' }, ...cinematicFoleyPositive],
    type: 'sound',
  },

  {
    id: 'mechanical_foley',
    comment:
      'Механические клики, переключатели и машинные шумы. Хороший кандидат для sci-fi и cyberpunk.',
    group: 'foley',
    label: 'Mechanical Foley',
    positive: [{ text: 'Mechanical Foley' }, ...mechanicalPositive],
    type: 'sound',
  },

  {
    id: 'industrial_foley',
    comment: 'Индустриальная среда как источник ритмов и текстур.',
    group: 'foley',
    label: 'Industrial Foley',
    positive: [
      { text: 'Industrial Foley' },
      ...industrialPositive,
      ...mechanicalPositive,
    ],
    type: 'sound',
  },

  {
    id: 'documentary_sound',
    comment: 'Документальная и реалистичная звуковая среда.',
    group: 'foley',
    label: 'Documentary Sound',
    positive: [
      { text: 'Documentary Sound' },
      ...documentaryPositive,
      ...ambientEnvironmentPositive,
    ],
    type: 'sound',
  },

  {
    id: 'musique_concrete',
    comment:
      'Музыка из найденных и записанных звуков. Самый экспериментальный тег файла.',
    group: 'foley',
    label: 'Musique Concrète',
    positive: [
      { text: 'Musique Concrète' },
      ...concreteMusicPositive,
      ...fieldRecordingPositive,
      ...mechanicalPositive,
    ],
    type: 'sound',
  },
] as PromptTag[];
