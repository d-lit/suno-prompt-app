import { PromptTag } from '~/types';

export default [
  /**
   * AFRO CORE
   */
  {
    id: 'afro',
    comment:
      'Общий Afro-жанровый якорь. Использовать как грувовый и перкуссионный модификатор без ухода в Afropop.',
    group: 'afro_core',
    label: 'Afro',
    positive: [
      { text: 'Afro-influenced groove' },
      { text: 'African rhythmic foundation' },
      { text: 'organic percussion layers' },
      { text: 'syncopated bass movement' },
      { text: 'deep rhythmic pocket' },
    ],
    type: 'genre',
  },
  {
    id: 'afro_groove',
    comment: 'Более нейтральный Afro groove без прямой жанровой привязки.',
    group: 'afro_core',
    label: 'Afro Groove',
    positive: [
      { text: 'Afro groove' },
      { text: 'African syncopated rhythm' },
      { text: 'interlocking percussion' },
      { text: 'fluid bass and drums' },
      { text: 'hypnotic rhythmic motion' },
    ],
    type: 'genre',
  },
  {
    id: 'african_jazz_roots',
    comment:
      'Африканская ритмическая база с джазовой гармонией и живым ансамблевым ощущением.',
    group: 'afro_core',
    label: 'African Jazz Roots',
    positive: [
      { text: 'African jazz roots' },
      { text: 'African rhythmic language' },
      { text: 'jazz harmony over Afro percussion' },
      { text: 'live ensemble groove' },
      { text: 'organic instrumental dialogue' },
    ],
    type: 'genre',
  },

  /**
   * AFROBEAT
   */
  {
    id: 'afrobeat',
    comment:
      'Классический Afrobeat, не Afrobeats-pop. Длинный гипнотический грув, перкуссия, бас, духовые.',
    group: 'afrobeat',
    label: 'Afrobeat',
    positive: [
      { text: 'classic Afrobeat' },
      { text: 'Fela Kuti-inspired groove' },
      { text: 'long hypnotic rhythm section' },
      { text: 'interlocking guitars and percussion' },
      { text: 'brass stabs over deep groove' },
    ],
    type: 'genre',
  },
  {
    id: 'deep_afrobeat',
    comment: 'Более тёмный, глубокий и менее праздничный Afrobeat.',
    group: 'afrobeat',
    label: 'Deep Afrobeat',
    positive: [
      { text: 'deep Afrobeat' },
      { text: 'heavy hypnotic Afro groove' },
      { text: 'deep bass and percussion lock' },
      { text: 'restrained brass accents' },
      { text: 'underground Afrobeat energy' },
    ],
    type: 'genre',
  },
  {
    id: 'minimal_afrobeat',
    comment:
      'Урезанный Afrobeat: меньше оркестровости, больше грува и повторения.',
    group: 'afrobeat',
    label: 'Minimal Afrobeat',
    positive: [
      { text: 'minimal Afrobeat' },
      { text: 'stripped-down Afrobeat groove' },
      { text: 'repetitive percussion cycles' },
      { text: 'sparse guitar and bass figures' },
      { text: 'hypnotic rhythmic restraint' },
    ],
    type: 'genre',
  },

  /**
   * AFRO JAZZ
   */
  {
    id: 'afro_jazz',
    comment:
      'Самый важный тег файла для твоих Nu-Jazz / UK Jazz / Deep House связок.',
    group: 'afro_jazz',
    label: 'Afro Jazz',
    positive: [
      { text: 'Afro jazz' },
      { text: 'African jazz fusion' },
      { text: 'jazz harmony with African rhythm' },
      { text: 'polyrhythmic percussion' },
      { text: 'warm instrumental improvisation' },
    ],
    type: 'genre',
  },
  {
    id: 'spiritual_afro_jazz',
    comment: 'Более глубокий, медитативный Afro Jazz без лаунжевой попсы.',
    group: 'afro_jazz',
    label: 'Spiritual Afro Jazz',
    positive: [
      { text: 'spiritual Afro jazz' },
      { text: 'deep modal jazz feeling' },
      { text: 'African percussion and jazz harmony' },
      { text: 'meditative ensemble groove' },
      { text: 'earthy spiritual atmosphere' },
    ],
    type: 'genre',
  },
  {
    id: 'modal_afro_jazz',
    comment:
      'Модальный Afro Jazz: меньше песенности, больше длительного гипнотического движения.',
    group: 'afro_jazz',
    label: 'Modal Afro Jazz',
    positive: [
      { text: 'modal Afro jazz' },
      { text: 'modal harmony' },
      { text: 'African rhythmic cycles' },
      { text: 'long improvisational groove' },
      { text: 'restrained melodic development' },
    ],
    type: 'genre',
  },
  {
    id: 'uk_afro_jazz',
    comment:
      'Современный UK Jazz + Afro rhythmic influence. Хороший мост к London jazz / broken beat.',
    group: 'afro_jazz',
    label: 'UK Afro Jazz',
    positive: [
      { text: 'UK Afro jazz' },
      { text: 'modern London jazz with Afro rhythms' },
      { text: 'broken beat and African percussion' },
      { text: 'deep electric bass groove' },
      { text: 'contemporary jazz club energy' },
    ],
    type: 'genre',
  },

  /**
   * AFRO FUNK
   */
  {
    id: 'afro_funk',
    comment:
      'Afro + Funk. Сильный грувовый тег: бас, гитара, перкуссия, синкопы.',
    group: 'afro_funk',
    label: 'Afro Funk',
    positive: [
      { text: 'Afro funk' },
      { text: 'African funk groove' },
      { text: 'syncopated electric bass' },
      { text: 'interlocking guitar rhythms' },
      { text: 'raw percussion-driven funk' },
    ],
    type: 'genre',
  },
  {
    id: 'deep_afro_funk',
    comment: 'Более тяжёлая и менее праздничная версия Afro Funk.',
    group: 'afro_funk',
    label: 'Deep Afro Funk',
    positive: [
      { text: 'deep Afro funk' },
      { text: 'heavy African funk rhythm' },
      { text: 'deep pocket bassline' },
      { text: 'raw guitar and percussion groove' },
      { text: 'earthy underground funk energy' },
    ],
    type: 'genre',
  },
  {
    id: 'psychedelic_afro_funk',
    comment:
      'Психоделическая Afro Funk ветка: гитары, орган, цикличность, грязная фактура.',
    group: 'afro_funk',
    label: 'Psychedelic Afro Funk',
    positive: [
      { text: 'psychedelic Afro funk' },
      { text: 'trippy African groove' },
      { text: 'fuzzy guitar textures' },
      { text: 'hypnotic percussion loops' },
      { text: 'raw analog funk atmosphere' },
    ],
    type: 'genre',
  },

  /**
   * AFRO HOUSE / DEEP
   */
  {
    id: 'afro_house',
    comment:
      'Afro House без попсового Afrobeats и без amapiano-gloss. Глубокий 4x4 + перкуссия.',
    group: 'afro_house',
    label: 'Afro House',
    positive: [
      { text: 'deep Afro house' },
      { text: 'four-on-the-floor with African percussion' },
      { text: 'hypnotic hand drum layers' },
      { text: 'deep rolling bassline' },
      { text: 'underground Afro house groove' },
    ],
    type: 'genre',
  },
  {
    id: 'tribal_afro_house',
    comment:
      'Более tribal-ориентированный Afro House. Очень сильный грувовый модификатор.',
    group: 'afro_house',
    label: 'Tribal Afro House',
    positive: [
      { text: 'tribal Afro house' },
      { text: 'dense hand percussion layers' },
      { text: 'ritual-like house groove' },
      { text: 'polyrhythmic club movement' },
      { text: 'deep hypnotic percussion drive' },
    ],
    type: 'genre',
  },
  {
    id: 'minimal_afro_house',
    comment:
      'Минимальный Afro House: меньше вокала, меньше попсы, больше повторения и перкуссии.',
    group: 'afro_house',
    label: 'Minimal Afro House',
    positive: [
      { text: 'minimal Afro house' },
      { text: 'stripped-down percussion groove' },
      { text: 'deep repetitive bass pulse' },
      { text: 'sparse hypnotic arrangement' },
      { text: 'organic percussion over 4x4' },
    ],
    type: 'genre',
  },

  /**
   * AFRO LATIN / CROSSOVER
   */
  {
    id: 'afro_latin_jazz',
    comment:
      'Afro-Latin Jazz как аккуратный мост, без мамбо-попсы и карнавала.',
    group: 'afro_latin',
    label: 'Afro-Latin Jazz',
    positive: [
      { text: 'Afro-Latin jazz' },
      { text: 'African and Latin percussion interplay' },
      { text: 'jazz harmony with hand percussion' },
      { text: 'restrained Latin rhythmic color' },
      { text: 'deep instrumental groove' },
    ],
    type: 'genre',
  },
  {
    id: 'afro_cuban_jazz',
    comment:
      'Afro-Cuban Jazz, но сдержанно: перкуссия, джазовая гармония, не salsa party.',
    group: 'afro_latin',
    label: 'Afro-Cuban Jazz',
    positive: [
      { text: 'Afro-Cuban jazz' },
      { text: 'Cuban percussion with jazz harmony' },
      { text: 'clave-informed rhythm' },
      { text: 'deep hand drum groove' },
      { text: 'instrumental jazz ensemble feeling' },
    ],
    type: 'genre',
  },
  {
    id: 'restrained_afro_latin',
    comment: 'Контрольный Afro-Latin слой без ярмарочного латин-попа.',
    group: 'afro_latin',
    label: 'Restrained Afro-Latin',
    positive: [
      { text: 'restrained Afro-Latin groove' },
      { text: 'subtle Latin percussion color' },
      { text: 'no carnival mood' },
      { text: 'deep rhythmic sophistication' },
      { text: 'controlled instrumental movement' },
    ],
    type: 'genre',
  },

  /**
   * CONTROL
   */
  {
    id: 'no_afropop',
    comment: 'Контроль против современной попсовой Afrobeats/Afropop подачи.',
    group: 'control',
    label: 'No Afropop',
    positive: [
      { text: 'no Afropop' },
      { text: 'no commercial Afrobeats gloss' },
      { text: 'no pop vocal hook' },
      { text: 'instrumental groove focus' },
      { text: 'deep traditional rhythmic foundation' },
    ],
    type: 'genre',
  },
  {
    id: 'no_mambo_party',
    comment: 'Контроль против мамбо/карнавала/латино-попа.',
    group: 'control',
    label: 'No Mambo Party',
    positive: [
      { text: 'no mambo party mood' },
      { text: 'no carnival brass section' },
      { text: 'restrained percussion focus' },
      { text: 'deep club-oriented groove' },
      { text: 'serious instrumental atmosphere' },
    ],
    type: 'genre',
  },
  {
    id: 'no_tropical_pop',
    comment: 'Контроль против тропической попсы и пляжной открыточности.',
    group: 'control',
    label: 'No Tropical Pop',
    positive: [
      { text: 'no tropical pop' },
      { text: 'no beach-party mood' },
      { text: 'no glossy summer hit sound' },
      { text: 'earthy percussion-driven groove' },
      { text: 'underground rhythmic character' },
    ],
    type: 'genre',
  },
] as PromptTag[];
