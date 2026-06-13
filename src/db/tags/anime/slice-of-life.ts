import { PromptTag } from '~/types';

export default [
  /**
   * SLICE OF LIFE
   */
  {
    id: 'slice_of_life',
    comment: 'Базовый slice-of-life слой.',
    group: 'slice_of_life',
    label: 'Slice Of Life',
    positive: [
      { text: 'slice-of-life atmosphere' },
      { text: 'everyday moments' },
      { text: 'ordinary life' },
      { text: 'small human stories' },
      { text: 'quiet daily rhythm' },
    ],
    type: 'anime',
  },
  {
    id: 'everyday_anime',
    comment: 'Обычная жизнь как главный сюжет.',
    group: 'slice_of_life',
    label: 'Everyday Anime',
    positive: [
      { text: 'everyday anime atmosphere' },
      { text: 'ordinary daily experiences' },
      { text: 'comfortable routine' },
      { text: 'human-scale storytelling' },
      { text: 'life unfolding naturally' },
    ],
    type: 'anime',
  },

  /**
   * AFTER SCHOOL
   */
  {
    id: 'after_school',
    comment: 'Один из самых узнаваемых японских атмосферных архетипов.',
    group: 'after_school',
    label: 'After School',
    positive: [
      { text: 'after-school atmosphere' },
      { text: 'late afternoon sunlight' },
      { text: 'end of the school day' },
      { text: 'quiet transition into evening' },
      { text: 'lingering conversations' },
    ],
    type: 'anime',
  },
  {
    id: 'empty_classroom',
    comment: 'Скорее интересно как эксперимент.',
    group: 'after_school',
    label: 'Empty Classroom',
    positive: [
      { text: 'empty classroom atmosphere' },
      { text: 'quiet room after everyone leaves' },
      { text: 'late afternoon silence' },
      { text: 'sunlight through windows' },
      { text: 'lingering memories' },
    ],
    type: 'anime',
  },
  {
    id: 'school_rooftop',
    comment: 'Максимально анимешный тег, но может оказаться рабочим.',
    group: 'after_school',
    label: 'School Rooftop',
    positive: [
      { text: 'school rooftop atmosphere' },
      { text: 'open sky above the city' },
      { text: 'afternoon wind' },
      { text: 'quiet conversation' },
      { text: 'urban horizon in the distance' },
    ],
    type: 'anime',
  },

  /**
   * SMALL MOMENTS
   */
  {
    id: 'quiet_afternoon',
    comment: 'Очень вероятный кандидат для jazzy и city-pop генераций.',
    group: 'small_moments',
    label: 'Quiet Afternoon',
    positive: [
      { text: 'quiet afternoon' },
      { text: 'slow passing time' },
      { text: 'warm daylight' },
      { text: 'comfortable stillness' },
      { text: 'unhurried atmosphere' },
    ],
    type: 'anime',
  },
  {
    id: 'neighborhood_walk',
    comment: 'Прогулка без конкретной цели.',
    group: 'small_moments',
    label: 'Neighborhood Walk',
    positive: [
      { text: 'neighborhood walk' },
      { text: 'wandering through familiar streets' },
      { text: 'everyday surroundings' },
      { text: 'quiet local atmosphere' },
      { text: 'slow movement through the city' },
    ],
    type: 'anime',
  },
  {
    id: 'small_everyday_moments',
    comment: 'Очень близко к документальному кино.',
    group: 'small_moments',
    label: 'Small Everyday Moments',
    positive: [
      { text: 'small everyday moments' },
      { text: 'ordinary beauty' },
      { text: 'unremarkable but meaningful details' },
      { text: 'quiet daily observations' },
      { text: 'human-scale atmosphere' },
    ],
    type: 'anime',
  },

  /**
   * SUMMER
   */
  {
    id: 'summer_cicadas',
    comment: 'Прямо интересно, знает ли Suno этот архетип.',
    group: 'summer',
    label: 'Summer Cicadas',
    positive: [
      { text: 'summer cicadas' },
      { text: 'hot summer afternoon' },
      { text: 'seasonal stillness' },
      { text: 'air filled with summer sounds' },
      { text: 'long warm days' },
    ],
    type: 'anime',
  },
  {
    id: 'summer_break',
    comment: 'Школьное лето как состояние.',
    group: 'summer',
    label: 'Summer Break',
    positive: [
      { text: 'summer break atmosphere' },
      { text: 'carefree summer days' },
      { text: 'seasonal freedom' },
      { text: 'warm memories' },
      { text: 'slow summer rhythm' },
    ],
    type: 'anime',
  },
  {
    id: 'end_of_summer',
    comment: 'Очень японская меланхолия.',
    group: 'summer',
    label: 'End Of Summer',
    positive: [
      { text: 'end of summer' },
      { text: 'season slowly fading away' },
      { text: 'last warm evenings' },
      { text: 'bittersweet seasonal nostalgia' },
      { text: 'summer becoming memory' },
    ],
    type: 'anime',
  },

  /**
   * COMFORT
   */
  {
    id: 'comforting_routine',
    comment: 'Повседневность без конфликта и драмы.',
    group: 'comfort',
    label: 'Comforting Routine',
    positive: [
      { text: 'comforting routine' },
      { text: 'familiar rhythm of life' },
      { text: 'predictable everyday comfort' },
      { text: 'small pleasures' },
      { text: 'gentle normality' },
    ],
    type: 'anime',
  },
  {
    id: 'peaceful_evening',
    comment: 'Спокойный вечер дома.',
    group: 'comfort',
    label: 'Peaceful Evening',
    positive: [
      { text: 'peaceful evening' },
      { text: 'warm lights indoors' },
      { text: 'quiet end of the day' },
      { text: 'comfortable atmosphere' },
      { text: 'gentle emotional warmth' },
    ],
    type: 'anime',
  },
  {
    id: 'simple_happiness',
    comment: 'Тоже спорный кандидат, но проверить стоит.',
    group: 'comfort',
    label: 'Simple Happiness',
    positive: [
      { text: 'simple happiness' },
      { text: 'small joys' },
      { text: 'quiet contentment' },
      { text: 'appreciation of ordinary life' },
      { text: 'gentle optimism' },
    ],
    type: 'anime',
  },
] as PromptTag[];
