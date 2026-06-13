import { PromptTag } from '~/types';

export default [
  /**
   * COSMIC
   */
  {
    id: 'cosmic',
    comment:
      'Главный космический модификатор. Особенно интересен для LAZNCY, Balearic и ambient-ориентированных жанров.',
    group: 'cosmic',
    label: 'Cosmic',
    positive: [
      { text: 'cosmic atmosphere' },
      { text: 'vastness beyond the horizon' },
      { text: 'expansive space' },
      { text: 'celestial perspective' },
      { text: 'beyond everyday reality' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'space',
    comment: 'Более нейтральный космический слой.',
    group: 'cosmic',
    label: 'Space',
    positive: [
      { text: 'space atmosphere' },
      { text: 'open cosmic environment' },
      { text: 'deep space surroundings' },
      { text: 'vast distance' },
      { text: 'weightless environment' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'celestial',
    comment: 'Мягкий астрономический оттенок без sci-fi.',
    group: 'cosmic',
    label: 'Celestial',
    positive: [
      { text: 'celestial atmosphere' },
      { text: 'star-filled surroundings' },
      { text: 'heavenly distance' },
      { text: 'astronomical scale' },
      { text: 'cosmic calm' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'astral',
    comment: 'Более абстрактная и мечтательная версия cosmic.',
    group: 'cosmic',
    label: 'Astral',
    positive: [
      { text: 'astral atmosphere' },
      { text: 'dreamlike space' },
      { text: 'floating beyond reality' },
      { text: 'cosmic dreaming' },
      { text: 'ethereal distance' },
    ],
    type: 'atmosphere',
  },

  /**
   * MOVEMENT THROUGH SPACE
   */
  {
    id: 'orbiting',
    comment: 'Движение вокруг объекта вместо движения вперёд.',
    group: 'movement',
    label: 'Orbiting',
    positive: [
      { text: 'orbiting motion' },
      { text: 'slow circular movement' },
      { text: 'gravitational drift' },
      { text: 'constant orbital motion' },
      { text: 'rotation through space' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'weightless_drift',
    comment: 'Очень сильный LAZNCY-кандидат.',
    group: 'movement',
    label: 'Weightless Drift',
    positive: [
      { text: 'weightless drift' },
      { text: 'slow floating motion' },
      { text: 'movement without effort' },
      { text: 'drifting through space' },
      { text: 'gentle suspension' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'floating_through_space',
    comment: 'Классическая ambient-космическая атмосфера.',
    group: 'movement',
    label: 'Floating Through Space',
    positive: [
      { text: 'floating through space' },
      { text: 'slow movement through the void' },
      { text: 'open cosmic drift' },
      { text: 'endless travel' },
      { text: 'quiet motion' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'deep_space_calm',
    comment: 'Космос без экшена и драматургии.',
    group: 'movement',
    label: 'Deep Space Calm',
    positive: [
      { text: 'deep space calm' },
      { text: 'absolute stillness' },
      { text: 'silent cosmic environment' },
      { text: 'infinite quiet' },
      { text: 'vast peaceful distance' },
    ],
    type: 'atmosphere',
  },

  /**
   * DISTANCE
   */
  {
    id: 'infinite_horizon',
    comment: 'Бесконечный горизонт как эмоциональная метафора.',
    group: 'distance',
    label: 'Infinite Horizon',
    positive: [
      { text: 'infinite horizon' },
      { text: 'unreachable distance' },
      { text: 'endless perspective' },
      { text: 'vast open future' },
      { text: 'far beyond sight' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'signals_from_afar',
    comment: 'Очень близко к теме информационного поля.',
    group: 'distance',
    label: 'Signals From Afar',
    positive: [
      { text: 'signals from afar' },
      { text: 'distant transmissions' },
      { text: 'messages crossing space' },
      { text: 'remote communication' },
      { text: 'faint signals in the distance' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'distant_presence',
    comment: 'Есть ощущение присутствия чего-то далёкого.',
    group: 'distance',
    label: 'Distant Presence',
    positive: [
      { text: 'distant presence' },
      { text: 'something far away' },
      { text: 'unseen connection' },
      { text: 'remote awareness' },
      { text: 'quiet distance' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'beyond_the_horizon',
    comment: 'Поиск того, что находится за пределами наблюдаемого.',
    group: 'distance',
    label: 'Beyond The Horizon',
    positive: [
      { text: 'beyond the horizon' },
      { text: 'beyond known boundaries' },
      { text: 'exploring the unknown' },
      { text: 'far-reaching perspective' },
      { text: 'endless curiosity' },
    ],
    type: 'atmosphere',
  },

  /**
   * SCI-FI NOSTALGIA
   */
  {
    id: 'sci_fi_nostalgia',
    comment: 'Очень перспективный тег для проверки.',
    group: 'scifi',
    label: 'Sci-Fi Nostalgia',
    positive: [
      { text: 'sci-fi nostalgia' },
      { text: 'retro future memories' },
      { text: 'faded visions of the future' },
      { text: 'retro-futuristic longing' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'retro_futuristic',
    comment: 'Классическая ретрофутуристическая эстетика.',
    group: 'scifi',
    label: 'Retro Futuristic',
    positive: [
      { text: 'retro futuristic atmosphere' },
      { text: 'future imagined in the past' },
      { text: 'optimistic technology' },
      { text: 'analog visions of tomorrow' },
      { text: 'future nostalgia' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'satellite_view',
    comment: 'Очень близко к позиции наблюдателя.',
    group: 'scifi',
    label: 'Satellite View',
    positive: [
      { text: 'satellite view' },
      { text: 'observing from above' },
      { text: 'planetary perspective' },
      { text: 'watching systems in motion' },
      { text: 'distant observation' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'planetary_scale',
    comment: 'Смена масштаба с человеческого на планетарный.',
    group: 'scifi',
    label: 'Planetary Scale',
    positive: [
      { text: 'planetary scale' },
      { text: 'large-scale systems' },
      { text: 'view from orbit' },
      { text: 'global perspective' },
      { text: 'beyond human scale' },
    ],
    type: 'atmosphere',
  },

  /**
   * COSMIC EMOTION
   */
  {
    id: 'cosmic_isolation',
    comment: 'Одиночество не социальное, а пространственное.',
    group: 'emotion',
    label: 'Cosmic Isolation',
    positive: [
      { text: 'cosmic isolation' },
      { text: 'alone in vast space' },
      { text: 'distance from everything' },
      { text: 'silent solitude' },
      { text: 'expansive loneliness' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'cosmic_wonder',
    comment: 'Любопытство и восхищение масштабом мира.',
    group: 'emotion',
    label: 'Cosmic Wonder',
    positive: [
      { text: 'cosmic wonder' },
      { text: 'sense of awe' },
      { text: 'vast unknown beauty' },
      { text: 'curiosity about the universe' },
      { text: 'infinite possibilities' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'quiet_awe',
    comment: 'Восхищение без пафоса и голливудского эпика.',
    group: 'emotion',
    label: 'Quiet Awe',
    positive: [
      { text: 'quiet awe' },
      { text: 'silent admiration' },
      { text: 'gentle wonder' },
      { text: 'calm amazement' },
      { text: 'subtle sense of scale' },
    ],
    type: 'atmosphere',
  },
] as PromptTag[];
