import { PromptTag } from '~/types';

export default [
  /**
   * ANIME HIP-HOP
   */
  {
    id: 'anime_hip_hop',
    comment:
      'Общий аниме-хип-хоп архетип. Ближе к Nujabes и Champloo, чем к современному рэпу.',
    group: 'anime_hip_hop',
    label: 'Anime Hip-Hop',
    positive: [
      { text: 'anime hip-hop atmosphere' },
      { text: 'jazzy hip-hop mood' },
      { text: 'urban reflection' },
      { text: 'melodic boom bap energy' },
      { text: 'cinematic hip-hop storytelling' },
    ],
    type: 'anime',
  },
  {
    id: 'jazzy_anime_hip_hop',
    comment: 'Самый очевидный кандидат для проверки.',
    group: 'anime_hip_hop',
    label: 'Jazzy Anime Hip-Hop',
    positive: [
      { text: 'jazzy anime hip-hop' },
      { text: 'warm jazz samples' },
      { text: 'urban nostalgia' },
      { text: 'thoughtful groove' },
      { text: 'reflective hip-hop atmosphere' },
    ],
    type: 'anime',
  },
  {
    id: 'cinematic_hip_hop',
    comment: 'Хип-хоп как саундтрек к фильму.',
    group: 'anime_hip_hop',
    label: 'Cinematic Hip-Hop',
    positive: [
      { text: 'cinematic hip-hop' },
      { text: 'visual storytelling' },
      { text: 'urban narrative' },
      { text: 'soundtrack-like composition' },
      { text: 'emotional scene building' },
    ],
    type: 'anime',
  },

  /**
   * CHAMPLOO
   */
  {
    id: 'nomadic_spirit',
    comment: 'Один из главных архетипов Samurai Champloo.',
    group: 'champloo',
    label: 'Nomadic Spirit',
    positive: [
      { text: 'nomadic spirit' },
      { text: 'wandering without destination' },
      { text: 'constant movement' },
      { text: 'journey through changing places' },
      { text: 'freedom and uncertainty' },
    ],
    type: 'anime',
  },
  {
    id: 'wandering_through_the_city',
    comment: 'Городская версия пути без цели.',
    group: 'champloo',
    label: 'Wandering Through The City',
    positive: [
      { text: 'wandering through the city' },
      { text: 'aimless urban exploration' },
      { text: 'following side streets' },
      { text: 'movement without urgency' },
      { text: 'urban drifting' },
    ],
    type: 'anime',
  },
  {
    id: 'roadside_conversations',
    comment: 'Очень чамплушный тег.',
    group: 'champloo',
    label: 'Roadside Conversations',
    positive: [
      { text: 'roadside conversations' },
      { text: 'small encounters during a journey' },
      { text: 'passing human connections' },
      { text: 'stories shared briefly' },
      { text: 'travel atmosphere' },
    ],
    type: 'anime',
  },

  /**
   * REFLECTION
   */
  {
    id: 'street_philosophy',
    comment: 'Главный кандидат на пересечение с LAZNCY.',
    group: 'reflection',
    label: 'Street Philosophy',
    positive: [
      { text: 'street philosophy' },
      { text: 'reflection through everyday life' },
      { text: 'quiet wisdom' },
      { text: 'urban observation' },
      { text: 'thoughts while moving through the city' },
    ],
    type: 'anime',
  },
  {
    id: 'urban_reflection',
    comment: 'Очень близко к тому что ты часто описываешь в музыке.',
    group: 'reflection',
    label: 'Urban Reflection',
    positive: [
      { text: 'urban reflection' },
      { text: 'city observed quietly' },
      { text: 'thoughtful movement through urban spaces' },
      { text: 'watching life unfold' },
      { text: 'reflective city atmosphere' },
    ],
    type: 'anime',
  },
  {
    id: 'youthful_drift',
    comment: 'Не про романтику, а про поиск себя.',
    group: 'reflection',
    label: 'Youthful Drift',
    positive: [
      { text: 'youthful drift' },
      { text: 'uncertain direction' },
      { text: 'personal exploration' },
      { text: 'wandering through life' },
      { text: 'searching without a map' },
    ],
    type: 'anime',
  },

  /**
   * LO-FI
   */
  {
    id: 'lo_fi_anime',
    comment: 'Лофай-аниме как отдельный культурный архетип.',
    group: 'lofi',
    label: 'Lo-Fi Anime',
    positive: [
      { text: 'lo-fi anime atmosphere' },
      { text: 'quiet study-night mood' },
      { text: 'soft urban nostalgia' },
      { text: 'calm introspection' },
      { text: 'warm evening atmosphere' },
    ],
    type: 'anime',
  },
  {
    id: 'rooftop_beats',
    comment: 'Максимально лофайный образ.',
    group: 'lofi',
    label: 'Rooftop Beats',
    positive: [
      { text: 'rooftop beats' },
      { text: 'city skyline at dusk' },
      { text: 'music above the city' },
      { text: 'relaxed evening mood' },
      { text: 'urban calm' },
    ],
    type: 'anime',
  },
  {
    id: 'dusty_summer_evening',
    comment: 'Очень близко к Nujabes territory.',
    group: 'lofi',
    label: 'Dusty Summer Evening',
    positive: [
      { text: 'dusty summer evening' },
      { text: 'warm fading daylight' },
      { text: 'summer memories' },
      { text: 'slow nostalgic mood' },
      { text: 'golden evening atmosphere' },
    ],
    type: 'anime',
  },

  /**
   * QUIET REBELLION
   */
  {
    id: 'quiet_rebellion',
    comment: 'Не агрессия, а независимость.',
    group: 'rebellion',
    label: 'Quiet Rebellion',
    positive: [
      { text: 'quiet rebellion' },
      { text: 'independent spirit' },
      { text: 'walking your own path' },
      { text: 'gentle resistance' },
      { text: 'individual perspective' },
    ],
    type: 'anime',
  },
  {
    id: 'outsider_perspective',
    comment: 'Взгляд со стороны на происходящее.',
    group: 'rebellion',
    label: 'Outsider Perspective',
    positive: [
      { text: 'outsider perspective' },
      { text: 'standing slightly apart' },
      { text: 'watching from the margins' },
      { text: 'independent viewpoint' },
      { text: 'distance from the crowd' },
    ],
    type: 'anime',
  },
  {
    id: 'walking_your_own_path',
    comment: 'Практически слоган Champloo.',
    group: 'rebellion',
    label: 'Walking Your Own Path',
    positive: [
      { text: 'walking your own path' },
      { text: 'personal journey' },
      { text: 'self-directed movement' },
      { text: 'freedom of direction' },
      { text: 'independent road ahead' },
    ],
    type: 'anime',
  },
] as PromptTag[];
