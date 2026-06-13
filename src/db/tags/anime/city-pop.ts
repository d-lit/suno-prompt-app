import { PromptTag } from '~/types';

export default [
  /**
   * CITY POP ANIME
   */
  {
    id: 'anime_city_pop',
    comment: 'Главный city-pop anime слой.',
    group: 'city_pop',
    label: 'Anime City Pop',
    positive: [
      { text: 'anime city-pop atmosphere' },
      { text: 'Japanese urban nostalgia' },
      { text: 'late-night city mood' },
      { text: 'retro Tokyo feeling' },
      { text: 'warm urban memories' },
    ],
    type: 'anime',
  },
  {
    id: 'bubble_era_dream',
    comment: 'Япония 80-х как культурный архетип.',
    group: 'city_pop',
    label: 'Bubble Era Dream',
    positive: [
      { text: 'bubble era dream' },
      { text: 'economic miracle nostalgia' },
      { text: 'retro-futuristic optimism' },
      { text: '1980s Tokyo atmosphere' },
      { text: 'city-pop dreamscape' },
    ],
    type: 'anime',
  },
  {
    id: 'retro_tokyo',
    comment: 'Ночной Токио времён city-pop.',
    group: 'city_pop',
    label: 'Retro Tokyo',
    positive: [
      { text: 'retro Tokyo atmosphere' },
      { text: 'city lights and highways' },
      { text: 'night-time metropolis' },
      { text: 'urban Japanese nostalgia' },
      { text: 'late-night Tokyo energy' },
    ],
    type: 'anime',
  },
  {
    id: 'tokyo_at_dusk',
    comment: 'Граница между днём и ночью.',
    group: 'city_pop',
    label: 'Tokyo At Dusk',
    positive: [
      { text: 'Tokyo at dusk' },
      { text: 'city sunset' },
      { text: 'evening train rides' },
      { text: 'warm fading daylight' },
      { text: 'urban evening glow' },
    ],
    type: 'anime',
  },

  /**
   * NIGHT CITY
   */
  {
    id: 'neon_tokyo',
    comment: 'Классический городской аниме-архетип.',
    group: 'night_city',
    label: 'Neon Tokyo',
    positive: [
      { text: 'neon Tokyo' },
      { text: 'night-time city lights' },
      { text: 'urban neon reflections' },
      { text: 'busy streets after dark' },
      { text: 'Japanese city nightlife' },
    ],
    type: 'anime',
  },
  {
    id: 'rainy_platform',
    comment: 'Очень сильный анимешный архетип.',
    group: 'night_city',
    label: 'Rainy Platform',
    positive: [
      { text: 'rainy train platform' },
      { text: 'wet station lights' },
      { text: 'evening departure' },
      { text: 'rain and city reflections' },
      { text: 'quiet urban melancholy' },
    ],
    type: 'anime',
  },
  {
    id: 'night_train',
    comment: 'Один из важнейших японских культурных образов.',
    group: 'night_city',
    label: 'Night Train',
    positive: [
      { text: 'night train atmosphere' },
      { text: 'passing city lights' },
      { text: 'quiet train ride' },
      { text: 'urban transit at night' },
      { text: 'movement through the city' },
    ],
    type: 'anime',
  },
  {
    id: 'late_night_convenience_store',
    comment: 'Слишком специфично, чтобы не проверить.',
    group: 'night_city',
    label: 'Late-Night Convenience Store',
    positive: [
      { text: 'late-night convenience store' },
      { text: 'quiet fluorescent lights' },
      { text: 'small urban moments' },
      { text: 'city life after midnight' },
      { text: 'everyday Japanese atmosphere' },
    ],
    type: 'anime',
  },

  /**
   * YOUTH
   */
  {
    id: 'youthful_nostalgia',
    comment: 'Очень близко к Макото Синкаю и city-pop романтике.',
    group: 'youth',
    label: 'Youthful Nostalgia',
    positive: [
      { text: 'youthful nostalgia' },
      { text: 'remembering younger days' },
      { text: 'coming-of-age memories' },
      { text: 'soft adolescent longing' },
      { text: 'fading youth' },
    ],
    type: 'anime',
  },
  {
    id: 'summer_memory',
    comment: 'Лето как воспоминание.',
    group: 'youth',
    label: 'Summer Memory',
    positive: [
      { text: 'summer memory' },
      { text: 'warm seasonal nostalgia' },
      { text: 'remembered summer evenings' },
      { text: 'golden youth memories' },
      { text: 'fading seasonal warmth' },
    ],
    type: 'anime',
  },
  {
    id: 'first_love',
    comment: 'Стоит проверить насколько Suno понимает этот архетип.',
    group: 'youth',
    label: 'First Love',
    positive: [
      { text: 'first love atmosphere' },
      { text: 'gentle romantic memory' },
      { text: 'young emotional intensity' },
      { text: 'bittersweet affection' },
      { text: 'soft emotional awakening' },
    ],
    type: 'anime',
  },

  /**
   * CITY POP DREAM
   */
  {
    id: 'city_pop_dreamscape',
    comment: 'Смесь city-pop, сна и городской романтики.',
    group: 'dream',
    label: 'City-Pop Dreamscape',
    positive: [
      { text: 'city-pop dreamscape' },
      { text: 'urban dream state' },
      { text: 'soft neon haze' },
      { text: 'nostalgic city fantasy' },
      { text: 'dreamlike Tokyo night' },
    ],
    type: 'anime',
  },
  {
    id: 'neon_reflections',
    comment: 'Визуальный городской слой.',
    group: 'dream',
    label: 'Neon Reflections',
    positive: [
      { text: 'neon reflections' },
      { text: 'wet pavement lights' },
      { text: 'urban glow' },
      { text: 'city reflected in rain' },
      { text: 'night-time atmosphere' },
    ],
    type: 'anime',
  },
  {
    id: 'distant_city_lights',
    comment: 'Наблюдение за городом издалека.',
    group: 'dream',
    label: 'Distant City Lights',
    positive: [
      { text: 'distant city lights' },
      { text: 'view over the city' },
      { text: 'quiet urban horizon' },
      { text: 'watching the city at night' },
      { text: 'soft metropolitan glow' },
    ],
    type: 'anime',
  },
] as PromptTag[];
