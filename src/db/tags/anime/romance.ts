import { PromptTag } from '~/types';

export default [
  /**
   * ROMANCE CORE
   */
  {
    id: 'anime_romance',
    comment: 'Аниме-романтика без поп-эпоса и драматического перебора.',
    group: 'romance',
    label: 'Anime Romance',
    positive: [
      { text: 'anime romance atmosphere' },
      { text: 'gentle romantic mood' },
      { text: 'soft emotional tension' },
      { text: 'young affection' },
      { text: 'bittersweet intimacy' },
    ],
    type: 'anime',
  },
  {
    id: 'gentle_romance',
    comment: 'Мягкая романтика без большой драмы.',
    group: 'romance',
    label: 'Gentle Romance',
    positive: [
      { text: 'gentle romance' },
      { text: 'quiet affection' },
      { text: 'soft emotional closeness' },
      { text: 'warm romantic feeling' },
      { text: 'understated intimacy' },
    ],
    type: 'anime',
  },
  {
    id: 'bittersweet_romance',
    comment: 'Романтика с лёгкой меланхолией.',
    group: 'romance',
    label: 'Bittersweet Romance',
    positive: [
      { text: 'bittersweet romance' },
      { text: 'love and distance' },
      { text: 'gentle heartbreak' },
      { text: 'warm sadness' },
      { text: 'romantic melancholy' },
    ],
    type: 'anime',
  },

  /**
   * FIRST LOVE
   */
  {
    id: 'first_love',
    comment: 'Один из сильных anime romance архетипов.',
    group: 'first_love',
    label: 'First Love',
    positive: [
      { text: 'first love atmosphere' },
      { text: 'young emotional awakening' },
      { text: 'innocent affection' },
      { text: 'soft adolescent longing' },
      { text: 'tender romantic memory' },
    ],
    type: 'anime',
  },
  {
    id: 'shy_affection',
    comment: 'Неловкая, тихая романтическая близость.',
    group: 'first_love',
    label: 'Shy Affection',
    positive: [
      { text: 'shy affection' },
      { text: 'unspoken feelings' },
      { text: 'quiet romantic tension' },
      { text: 'nervous closeness' },
      { text: 'gentle hesitation' },
    ],
    type: 'anime',
  },
  {
    id: 'unspoken_feelings',
    comment: 'Романтика через недосказанность.',
    group: 'first_love',
    label: 'Unspoken Feelings',
    positive: [
      { text: 'unspoken feelings' },
      { text: 'feelings left unsaid' },
      { text: 'quiet emotional distance' },
      { text: 'romantic silence' },
      { text: 'subtle emotional pressure' },
    ],
    type: 'anime',
  },

  /**
   * GOODBYE
   */
  {
    id: 'train_station_goodbye',
    comment: 'Максимально сильный японский романтический архетип.',
    group: 'goodbye',
    label: 'Train Station Goodbye',
    positive: [
      { text: 'train station goodbye' },
      { text: 'farewell at the platform' },
      { text: 'last train atmosphere' },
      { text: 'romantic distance' },
      { text: 'bittersweet departure' },
    ],
    type: 'anime',
  },
  {
    id: 'quiet_farewell',
    comment: 'Прощание без истерики и большой драмы.',
    group: 'goodbye',
    label: 'Quiet Farewell',
    positive: [
      { text: 'quiet farewell' },
      { text: 'soft goodbye' },
      { text: 'gentle separation' },
      { text: 'leaving without words' },
      { text: 'emotional restraint' },
    ],
    type: 'anime',
  },
  {
    id: 'distance_between_people',
    comment: 'Очень полезно для city-pop / night / romance пересечения.',
    group: 'goodbye',
    label: 'Distance Between People',
    positive: [
      { text: 'distance between people' },
      { text: 'emotional distance' },
      { text: 'two people drifting apart' },
      { text: 'quiet longing' },
      { text: 'connection across distance' },
    ],
    type: 'anime',
  },

  /**
   * SEASONAL ROMANCE
   */
  {
    id: 'cherry_blossom_afternoon',
    comment:
      'Классика романтического аниме. Возможно слишком прямой, но проверить стоит.',
    group: 'seasonal',
    label: 'Cherry Blossom Afternoon',
    positive: [
      { text: 'cherry blossom afternoon' },
      { text: 'spring romantic atmosphere' },
      { text: 'soft petals in the air' },
      { text: 'gentle seasonal beauty' },
      { text: 'first love in spring' },
    ],
    type: 'anime',
  },
  {
    id: 'summer_festival',
    comment: 'Летний фестиваль, вечер, огни, юношеская романтика.',
    group: 'seasonal',
    label: 'Summer Festival',
    positive: [
      { text: 'summer festival atmosphere' },
      { text: 'festival lights at night' },
      { text: 'warm evening romance' },
      { text: 'youthful summer memory' },
      { text: 'bittersweet festival mood' },
    ],
    type: 'anime',
  },
  {
    id: 'fireworks_distance',
    comment: 'Фейерверки как романтическая дистанция и память.',
    group: 'seasonal',
    label: 'Fireworks Distance',
    positive: [
      { text: 'distant fireworks' },
      { text: 'summer night fireworks' },
      { text: 'romantic distance' },
      { text: 'bright lights fading away' },
      { text: 'youthful night memory' },
    ],
    type: 'anime',
  },
] as PromptTag[];
