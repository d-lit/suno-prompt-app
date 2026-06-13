import { PromptTag } from '~/types';

export default [
  /**
   * BALEARIC
   */
  {
    id: 'balearic',
    comment: 'Один из самых сильных атмосферных модификаторов в Suno.',
    group: 'balearic',
    label: 'Balearic',
    positive: [
      { text: 'Balearic atmosphere' },
      { text: 'Mediterranean mood' },
      { text: 'island feeling' },
      { text: 'open-air lifestyle' },
      { text: 'sunset relaxation' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'balearic_lounge',
    comment: 'Мягкая lounge-сторона Balearic.',
    group: 'balearic',
    label: 'Balearic Lounge',
    positive: [
      { text: 'Balearic lounge atmosphere' },
      { text: 'relaxed coastal mood' },
      { text: 'warm evening comfort' },
      { text: 'laid-back Mediterranean feeling' },
      { text: 'gentle sunset energy' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'mediterranean_mood',
    comment: 'Тёплый южный климат без прямой привязки к танцевальной музыке.',
    group: 'balearic',
    label: 'Mediterranean Mood',
    positive: [
      { text: 'Mediterranean mood' },
      { text: 'southern coastal atmosphere' },
      { text: 'warm sea climate' },
      { text: 'sunlit relaxation' },
      { text: 'slow island rhythm' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'island_life',
    comment: 'Спокойная островная атмосфера.',
    group: 'balearic',
    label: 'Island Life',
    positive: [
      { text: 'island life' },
      { text: 'slow coastal rhythm' },
      { text: 'open-air living' },
      { text: 'ocean surroundings' },
      { text: 'carefree atmosphere' },
    ],
    type: 'atmosphere',
  },

  /**
   * SUNSET
   */
  {
    id: 'sunset',
    comment: 'Ключевой тег для Deep House, Balearic и City Pop.',
    group: 'sunset',
    label: 'Sunset',
    positive: [
      { text: 'sunset atmosphere' },
      { text: 'end of the day' },
      { text: 'warm horizon' },
      { text: 'golden evening light' },
      { text: 'slow transition into night' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'golden_hour',
    comment: 'Последний тёплый свет перед ночью.',
    group: 'sunset',
    label: 'Golden Hour',
    positive: [
      { text: 'golden hour' },
      { text: 'warm sunlight' },
      { text: 'soft golden glow' },
      { text: 'evening warmth' },
      { text: 'beautiful fading light' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'evening_glow',
    comment: 'Более мягкая версия sunset.',
    group: 'sunset',
    label: 'Evening Glow',
    positive: [
      { text: 'evening glow' },
      { text: 'warm fading daylight' },
      { text: 'gentle evening atmosphere' },
      { text: 'soft light reflections' },
      { text: 'calm evening mood' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'fading_sunlight',
    comment: 'Последние минуты света.',
    group: 'sunset',
    label: 'Fading Sunlight',
    positive: [
      { text: 'fading sunlight' },
      { text: 'day slowly ending' },
      { text: 'soft evening transition' },
      { text: 'warm horizon light' },
      { text: 'quiet evening energy' },
    ],
    type: 'atmosphere',
  },

  /**
   * SEASIDE
   */
  {
    id: 'seaside',
    comment: 'Один из самых рабочих атмосферных слоёв для Balearic.',
    group: 'seaside',
    label: 'Seaside',
    positive: [
      { text: 'seaside atmosphere' },
      { text: 'coastal mood' },
      { text: 'ocean nearby' },
      { text: 'salt air' },
      { text: 'shoreline environment' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'ocean_breeze',
    comment: 'Очень часто встречается в рабочих промптах.',
    group: 'seaside',
    label: 'Ocean Breeze',
    positive: [
      { text: 'ocean breeze' },
      { text: 'sea air' },
      { text: 'cool coastal wind' },
      { text: 'open shoreline atmosphere' },
      { text: 'fresh ocean feeling' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'coastal_atmosphere',
    comment: 'Нейтральная прибрежная атмосфера.',
    group: 'seaside',
    label: 'Coastal Atmosphere',
    positive: [
      { text: 'coastal atmosphere' },
      { text: 'life near the sea' },
      { text: 'shoreline mood' },
      { text: 'wide coastal horizon' },
      { text: 'ocean surroundings' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'shoreline_mood',
    comment: 'Пляжи, набережные, морской горизонт.',
    group: 'seaside',
    label: 'Shoreline Mood',
    positive: [
      { text: 'shoreline mood' },
      { text: 'walking near the sea' },
      { text: 'coastal reflections' },
      { text: 'waves in the distance' },
      { text: 'quiet ocean atmosphere' },
    ],
    type: 'atmosphere',
  },

  /**
   * TROPICAL
   */
  {
    id: 'tropical',
    comment: 'Очень сильный модификатор. Часто меняет инструменты и гармонию.',
    group: 'tropical',
    label: 'Tropical',
    positive: [
      { text: 'tropical atmosphere' },
      { text: 'warm climate' },
      { text: 'island energy' },
      { text: 'lush environment' },
      { text: 'relaxed tropical mood' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'tropical_evening',
    comment: 'Тропический вечер без фестивальной EDM-подачи.',
    group: 'tropical',
    label: 'Tropical Evening',
    positive: [
      { text: 'tropical evening' },
      { text: 'warm island sunset' },
      { text: 'humid evening air' },
      { text: 'soft tropical atmosphere' },
      { text: 'relaxed coastal warmth' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'palm_shadows',
    comment: 'Очень визуальный Balearic / City Pop тег.',
    group: 'tropical',
    label: 'Palm Shadows',
    positive: [
      { text: 'palm shadows' },
      { text: 'tropical silhouettes' },
      { text: 'warm evening palms' },
      { text: 'sunset through palm trees' },
      { text: 'island night beginning' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'island_night',
    comment: 'Ночной тропический слой.',
    group: 'tropical',
    label: 'Island Night',
    positive: [
      { text: 'island night' },
      { text: 'warm tropical darkness' },
      { text: 'ocean air at night' },
      { text: 'night-time island mood' },
      { text: 'quiet coastal nightlife' },
    ],
    type: 'atmosphere',
  },

  /**
   * OPEN AIR
   */
  {
    id: 'open_air',
    comment: 'Музыка вне помещений.',
    group: 'open_air',
    label: 'Open Air',
    positive: [
      { text: 'open-air atmosphere' },
      { text: 'music under the sky' },
      { text: 'outdoor environment' },
      { text: 'fresh open space' },
      { text: 'wide natural surroundings' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'fresh_air',
    comment: 'Лёгкость, пространство и воздух.',
    group: 'open_air',
    label: 'Fresh Air',
    positive: [
      { text: 'fresh air' },
      { text: 'breathing space' },
      { text: 'open environment' },
      { text: 'light atmosphere' },
      { text: 'natural openness' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'wide_horizon',
    comment: 'Большие пространства и открытый обзор.',
    group: 'open_air',
    label: 'Wide Horizon',
    positive: [
      { text: 'wide horizon' },
      { text: 'distant landscape' },
      { text: 'open sky' },
      { text: 'expansive surroundings' },
      { text: 'sense of freedom' },
    ],
    type: 'atmosphere',
  },

  /**
   * SUMMER
   */
  {
    id: 'summer_evening',
    comment: 'Очень сильный универсальный атмосферный слой.',
    group: 'summer',
    label: 'Summer Evening',
    positive: [
      { text: 'summer evening' },
      { text: 'warm evening air' },
      { text: 'relaxed seasonal mood' },
      { text: 'long summer day' },
      { text: 'comfortable warmth' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'warm_night',
    comment: 'Летняя ночь без клубного давления.',
    group: 'summer',
    label: 'Warm Night',
    positive: [
      { text: 'warm night atmosphere' },
      { text: 'comfortable night air' },
      { text: 'slow evening movement' },
      { text: 'night under open sky' },
      { text: 'gentle nocturnal warmth' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'endless_summer',
    comment: 'Почти архетипический Balearic тег.',
    group: 'summer',
    label: 'Endless Summer',
    positive: [
      { text: 'endless summer' },
      { text: 'timeless warm season' },
      { text: 'carefree atmosphere' },
      { text: 'sunlit memories' },
      { text: 'long warm days' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'holiday_mood',
    comment: 'Отпускная атмосфера без cheesy tropical house.',
    group: 'summer',
    label: 'Holiday Mood',
    positive: [
      { text: 'holiday atmosphere' },
      { text: 'time away from routine' },
      { text: 'relaxed travel mood' },
      { text: 'carefree energy' },
      { text: 'slow seasonal rhythm' },
    ],
    type: 'atmosphere',
  },
] as PromptTag[];
