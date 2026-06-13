import { PromptTag } from '~/types';

export default [
  /**
   * NIGHT CORE
   */
  {
    id: 'late_night',
    comment:
      'Главный ночной тег. Универсален для UKG, Deep House, DnB, Acid Jazz, City Pop и Bass Music.',
    group: 'night_core',
    label: 'Late Night',
    positive: [
      { text: 'late-night atmosphere' },
      { text: 'after-hours mood' },
      { text: 'night-time energy' },
      { text: 'deep nocturnal feeling' },
      { text: 'music for the late night' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'nocturnal',
    comment: 'Более тёмная и глубокая версия night mood.',
    group: 'night_core',
    label: 'Nocturnal',
    positive: [
      { text: 'nocturnal atmosphere' },
      { text: 'dark night mood' },
      { text: 'deep night energy' },
      { text: 'shadowed sonic space' },
      { text: 'night-world feeling' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'midnight',
    comment: 'Середина ночи: меньше клуба, больше пустоты и концентрации.',
    group: 'night_core',
    label: 'Midnight',
    positive: [
      { text: 'midnight atmosphere' },
      { text: 'quiet midnight mood' },
      { text: 'deep night stillness' },
      { text: 'late empty hours' },
      { text: 'focused night energy' },
    ],
    type: 'atmosphere',
  },

  /**
   * NIGHT CITY
   */
  {
    id: 'night_city',
    comment:
      'Городская ночь. Очень рабочий слой для UKG, City Pop, Deep House и Jazz.',
    group: 'night_city',
    label: 'Night City',
    positive: [
      { text: 'night city atmosphere' },
      { text: 'late-night city mood' },
      { text: 'urban night ambience' },
      { text: 'city lights at night' },
      { text: 'metropolitan after-dark feeling' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'night_drive',
    comment:
      'Ночная поездка. Отлично стыкуется с City Pop, Detroit, Deep House и UKG.',
    group: 'night_city',
    label: 'Night Drive',
    positive: [
      { text: 'night drive mood' },
      { text: 'driving through the city at night' },
      { text: 'road lights and reflections' },
      { text: 'cool urban motion' },
      { text: 'late-night movement' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'city_lights',
    comment: 'Огни города: чуть более мягкий и визуальный night-city слой.',
    group: 'night_city',
    label: 'City Lights',
    positive: [
      { text: 'city lights' },
      { text: 'glowing windows at night' },
      { text: 'neon reflections' },
      { text: 'distant traffic lights' },
      { text: 'soft urban glow' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'empty_streets',
    comment:
      'Пустые улицы ночью. Хорошо для detached, reflective, LAZNCY и Burial-like настроений.',
    group: 'night_city',
    label: 'Empty Streets',
    positive: [
      { text: 'empty streets at night' },
      { text: 'quiet city roads' },
      { text: 'deserted urban spaces' },
      { text: 'late-night solitude' },
      { text: 'silent street atmosphere' },
    ],
    type: 'atmosphere',
  },

  /**
   * AFTER HOURS
   */
  {
    id: 'after_hours',
    comment:
      'После клуба / после полуночи. Работает для Deep House, UKG, Acid Jazz, Jazz House.',
    group: 'after_hours',
    label: 'After Hours',
    positive: [
      { text: 'after-hours atmosphere' },
      { text: 'post-club mood' },
      { text: 'late-night private energy' },
      { text: 'small room after midnight' },
      { text: 'intimate night session' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'small_hours',
    comment: 'Самые поздние часы ночи: усталость, тишина, остаточная энергия.',
    group: 'after_hours',
    label: 'Small Hours',
    positive: [
      { text: 'small hours mood' },
      { text: 'very late-night atmosphere' },
      { text: 'quiet exhausted energy' },
      { text: 'last moments of the night' },
      { text: 'soft fading intensity' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'late_session',
    comment: 'Поздняя студийная/клубная сессия.',
    group: 'after_hours',
    label: 'Late Session',
    positive: [
      { text: 'late-night session' },
      { text: 'after-hours studio mood' },
      { text: 'intimate late session' },
      { text: 'music made deep into the night' },
      { text: 'focused creative atmosphere' },
    ],
    type: 'atmosphere',
  },

  /**
   * DARK ROOM
   */
  {
    id: 'dark_room',
    comment:
      'Маленькая тёмная комната. Отлично для UKG, dub, house, vocals, concrete mood.',
    group: 'dark_room',
    label: 'Dark Room',
    positive: [
      { text: 'dark room atmosphere' },
      { text: 'small dark room' },
      { text: 'low-lit interior' },
      { text: 'intimate enclosed space' },
      { text: 'close night environment' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'damp_room',
    comment:
      'Влажная бетонная комната: Metalheadz / Burial / dark dub territory.',
    group: 'dark_room',
    label: 'Damp Room',
    positive: [
      { text: 'damp room atmosphere' },
      { text: 'wet concrete air' },
      { text: 'cold reverb tails' },
      { text: 'low rumble in the room' },
      { text: 'dark enclosed pressure' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'basement_night',
    comment:
      'Подвальная ночная атмосфера для underground house, UKG, bass и jungle.',
    group: 'dark_room',
    label: 'Basement Night',
    positive: [
      { text: 'basement night atmosphere' },
      { text: 'underground basement room' },
      { text: 'low ceiling club space' },
      { text: 'raw night pressure' },
      { text: 'dark intimate club room' },
    ],
    type: 'atmosphere',
  },

  /**
   * RAIN / WET NIGHT
   */
  {
    id: 'rainy_night',
    comment:
      'Дождливая ночь. Хорошо для Burial-like, UK Bass, LAZNCY, reflective UKG.',
    group: 'rain',
    label: 'Rainy Night',
    positive: [
      { text: 'rainy night atmosphere' },
      { text: 'wet streets' },
      { text: 'rain on concrete' },
      { text: 'soft rain ambience' },
      { text: 'dark urban rain mood' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'wet_concrete',
    comment:
      'Влажный бетон и отражения. Близко к dark UK bass / Metalheadz / Burial.',
    group: 'rain',
    label: 'Wet Concrete',
    positive: [
      { text: 'wet concrete atmosphere' },
      { text: 'rain-soaked concrete' },
      { text: 'cold wet surfaces' },
      { text: 'damp urban texture' },
      { text: 'dark reflective ground' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'rain_reflections',
    comment: 'Свет и отражения после дождя.',
    group: 'rain',
    label: 'Rain Reflections',
    positive: [
      { text: 'rain reflections' },
      { text: 'lights reflected on wet streets' },
      { text: 'wet neon reflections' },
      { text: 'shimmering pavement' },
      { text: 'soft reflective night mood' },
    ],
    type: 'atmosphere',
  },

  /**
   * NIGHT EMOTION
   */
  {
    id: 'introspective_night',
    comment:
      'Ночная интроспекция. Работает для Liquid, UKG, Acid Jazz, LAZNCY и Deep House.',
    group: 'night_emotion',
    label: 'Introspective Night',
    positive: [
      { text: 'introspective night mood' },
      { text: 'quiet reflection' },
      { text: 'deep internal atmosphere' },
      { text: 'late-night introspection' },
      { text: 'private emotional space' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'lonely_night',
    comment:
      'Одинокая ночь. Использовать аккуратно, чтобы не стало слишком singer-songwriter.',
    group: 'night_emotion',
    label: 'Lonely Night',
    positive: [
      { text: 'lonely night mood' },
      { text: 'urban solitude' },
      { text: 'alone in the city' },
      { text: 'distant human presence' },
      { text: 'quiet emotional isolation' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'suspended_night',
    comment: 'Ночь без движения времени. Хорошо для LAZNCY и ambient sketches.',
    group: 'night_emotion',
    label: 'Suspended Night',
    positive: [
      { text: 'suspended night atmosphere' },
      { text: 'time feels paused' },
      { text: 'weightless midnight mood' },
      { text: 'slow night drift' },
      { text: 'dreamlike night stillness' },
    ],
    type: 'atmosphere',
  },
] as PromptTag[];
