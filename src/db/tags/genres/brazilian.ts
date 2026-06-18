import { PromptTag } from '~/types';

const brazilianPositive = [
  { text: 'Brazilian rhythmic language' },
  { text: 'syncopated percussion' },
  { text: 'organic groove movement' },
  { text: 'warm instrumental interplay' },
  { text: 'acoustic percussion textures' },
];

const brazilianJazzPositive = [
  ...brazilianPositive,
  { text: 'jazz harmony with Brazilian rhythm' },
  { text: 'fluid percussion movement' },
  { text: 'sophisticated instrumental groove' },
  { text: 'warm ensemble playing' },
];

const mpbPositive = [
  { text: 'warm Brazilian harmony' },
  { text: 'sophisticated songwriting' },
  { text: 'organic musicianship' },
  { text: 'gentle rhythmic flow' },
  { text: 'rich melodic phrasing' },
];

export default [
  /**
   * Bossa-Nova
   */
  {
    id: 'bossa_nova',
    comment:
      'Bossa Nova работает как мягкий ритмический и инструментальный модификатор: guitar comping, shaker, rim accents, soft swing.',
    group: 'brazilian',
    label: 'Bossa Nova',
    positive: [
      { text: 'subtle bossa nova influence' },
      { text: 'soft bossa swing' },
      { text: 'clean electric guitar with light bossa comping' },
      { text: 'shaker and rim accents' },
      { text: 'gentle organic feel' },
    ],
    type: 'genre',
  },

  /**
   * BRAZILIAN JAZZ
   */
  {
    id: 'brazilian_jazz',
    comment:
      'Главный Brazilian Jazz тег. Джазовая гармония поверх бразильской ритмики.',
    group: 'brazilian_jazz',
    label: 'Brazilian Jazz',
    positive: [{ text: 'Brazilian Jazz' }, ...brazilianJazzPositive],
    type: 'genre',
  },
  {
    id: 'modern_brazilian_jazz',
    comment:
      'Современная Brazilian Jazz ветка: чище продакшен, больше fusion-логики и аккуратной перкуссии.',
    group: 'brazilian_jazz',
    label: 'Modern Brazilian Jazz',
    positive: [
      { text: 'Modern Brazilian Jazz' },
      ...brazilianJazzPositive,
      { text: 'contemporary jazz production' },
      { text: 'modern instrumental clarity' },
    ],
    type: 'genre',
  },
  {
    id: 'samba_jazz',
    comment:
      'Самый сильный грувовый модификатор файла. Быстрая перкуссия и джазовая импровизационность.',
    group: 'brazilian_jazz',
    label: 'Samba Jazz',
    positive: [
      { text: 'Samba Jazz' },
      ...brazilianPositive,
      { text: 'fast Brazilian jazz groove' },
      { text: 'syncopated drum patterns' },
      { text: 'jazz improvisation' },
      { text: 'energetic acoustic rhythm section' },
    ],
    type: 'genre',
  },
  {
    id: 'brazilian_fusion',
    comment: 'Мост между fusion, jazz, Rhodes и бразильской ритмикой.',
    group: 'brazilian_jazz',
    label: 'Brazilian Fusion',
    positive: [
      { text: 'Brazilian Fusion' },
      ...brazilianPositive,
      { text: 'electric piano harmony' },
      { text: 'fusion rhythm section' },
      { text: 'contemporary Brazilian jazz' },
      { text: 'complex groove movement' },
    ],
    type: 'genre',
  },
  {
    id: 'jazz_brasileiro',
    comment:
      'Португальский вариант Brazilian Jazz. Стоит проверить как отдельный культурный токен.',
    group: 'brazilian_jazz',
    label: 'Jazz Brasileiro',
    positive: [
      { text: 'Jazz Brasileiro' },
      ...brazilianJazzPositive,
      { text: 'Brazilian jazz identity' },
    ],
    type: 'genre',
  },

  /**
   * MPB
   */
  {
    id: 'mpb',
    comment:
      'Musica Popular Brasileira. Один из самых интересных кандидатов для проверки в Suno.',
    group: 'mpb',
    label: 'MPB',
    positive: [
      { text: 'MPB' },
      ...mpbPositive,
      { text: 'Brazilian popular music' },
      { text: 'subtle vocal or instrumental phrasing' },
    ],
    type: 'genre',
  },
  {
    id: 'musica_popular_brasileira',
    comment: 'Развёрнутая версия MPB, если аббревиатура сработает слабо.',
    group: 'mpb',
    label: 'Musica Popular Brasileira',
    positive: [
      { text: 'Musica Popular Brasileira' },
      ...mpbPositive,
      { text: 'Brazilian popular music tradition' },
    ],
    type: 'genre',
  },

  /**
   * GROOVE
   */
  {
    id: 'brazilian_groove',
    comment:
      'Общий Brazilian groove слой: ритм, перкуссия, бас и мягкая синкопа.',
    group: 'brazilian',
    label: 'Brazilian Groove',
    positive: [
      { text: 'Brazilian Groove' },
      ...brazilianPositive,
      { text: 'warm bass and percussion lock' },
      { text: 'gentle syncopated movement' },
    ],
    type: 'genre',
  },
  {
    id: 'deep_brazilian_groove',
    comment:
      'Более глубокий и менее пляжный Brazilian groove для house, jazz и broken beat связок.',
    group: 'brazilian',
    label: 'Deep Brazilian Groove',
    positive: [
      { text: 'Deep Brazilian Groove' },
      ...brazilianPositive,
      { text: 'deep pocket rhythm' },
      { text: 'restrained tropical color' },
      { text: 'no carnival mood' },
    ],
    type: 'genre',
  },
  {
    id: 'acoustic_brazilian_groove',
    comment:
      'Живой акустический Brazilian groove: гитара, перкуссия, натуральная динамика.',
    group: 'brazilian',
    label: 'Acoustic Brazilian Groove',
    positive: [
      { text: 'Acoustic Brazilian Groove' },
      ...brazilianPositive,
      { text: 'acoustic guitar rhythm' },
      { text: 'live hand percussion' },
      { text: 'natural dynamic feel' },
    ],
    type: 'genre',
  },
  {
    id: 'percussive_brazilian_jazz',
    comment:
      'Акцент на перкуссию и джазовую живость. Хорошо для energetic / complex groove.',
    group: 'brazilian',
    label: 'Percussive Brazilian Jazz',
    positive: [
      { text: 'Percussive Brazilian Jazz' },
      ...brazilianJazzPositive,
      { text: 'dense percussion detail' },
      { text: 'rhythmic ensemble interaction' },
    ],
    type: 'genre',
  },
  {
    id: 'rhodes_brazilian_groove',
    comment:
      'Brazilian groove с Rhodes / electric piano. Мост к Nu-Jazz, Deep House и Fusion.',
    group: 'brazilian',
    label: 'Rhodes Brazilian Groove',
    positive: [
      { text: 'Rhodes Brazilian Groove' },
      ...brazilianPositive,
      { text: 'warm Rhodes chords' },
      { text: 'electric piano harmony' },
      { text: 'jazzy syncopated bassline' },
    ],
    type: 'genre',
  },

  /**
   * CITY / NIGHT
   */
  {
    id: 'rio_night',
    comment: 'Ночной городской Brazilian Jazz / MPB вайб.',
    group: 'brazilian',
    label: 'Rio Night',
    positive: [
      { text: 'Rio Night' },
      { text: 'late-night Brazilian city atmosphere' },
      { text: 'warm urban groove' },
      { text: 'coastal night energy' },
      { text: 'jazz-infused rhythm section' },
    ],
    type: 'genre',
  },
  {
    id: 'rio_after_dark',
    comment:
      'Более глубокая ночная версия Rio Night: меньше открытки, больше клуба и города.',
    group: 'brazilian',
    label: 'Rio After Dark',
    positive: [
      { text: 'Rio After Dark' },
      { text: 'late-night Rio mood' },
      { text: 'urban Brazilian jazz groove' },
      { text: 'warm nocturnal percussion' },
      { text: 'coastal city after midnight' },
    ],
    type: 'genre',
  },
  {
    id: 'urban_brazilian_groove',
    comment: 'Городская Brazilian-грув эстетика без пляжной попсовости.',
    group: 'brazilian',
    label: 'Urban Brazilian Groove',
    positive: [
      { text: 'Urban Brazilian Groove' },
      ...brazilianPositive,
      { text: 'city rhythm culture' },
      { text: 'night-time instrumental groove' },
      { text: 'no beach-party mood' },
    ],
    type: 'genre',
  },

  /**
   * COASTAL
   */
  {
    id: 'tropical_jazz',
    comment:
      'Tropical Jazz без tropical house попсы: мягкий климат, джазовая гармония, лёгкая перкуссия.',
    group: 'brazilian',
    label: 'Tropical Jazz',
    positive: [
      { text: 'Tropical Jazz' },
      { text: 'warm coastal atmosphere' },
      { text: 'Brazilian rhythmic influence' },
      { text: 'light percussion movement' },
      { text: 'jazz harmony' },
    ],
    type: 'genre',
  },
  {
    id: 'coastal_jazz',
    comment: 'Прибрежный jazz mood: тёплый, воздушный, но не lounge-пластик.',
    group: 'brazilian',
    label: 'Coastal Jazz',
    positive: [
      { text: 'Coastal Jazz' },
      { text: 'warm sea-air atmosphere' },
      { text: 'soft instrumental jazz groove' },
      { text: 'organic percussion accents' },
      { text: 'open coastal space' },
    ],
    type: 'genre',
  },
  {
    id: 'late_night_brazilian_jazz',
    comment:
      'Ночной Brazilian Jazz: мягкий, взрослый, городской, без карнавальности.',
    group: 'brazilian',
    label: 'Late-Night Brazilian Jazz',
    positive: [
      { text: 'Late-Night Brazilian Jazz' },
      ...brazilianJazzPositive,
      { text: 'after-hours instrumental mood' },
      { text: 'warm nocturnal harmony' },
      { text: 'no carnival mood' },
    ],
    type: 'genre',
  },

  /**
   * ENSEMBLES
   */
  {
    id: 'brazilian_instrumental',
    comment: 'Инструментальная Brazilian music без акцента на вокал.',
    group: 'brazilian',
    label: 'Brazilian Instrumental',
    positive: [
      { text: 'Brazilian Instrumental' },
      ...brazilianPositive,
      { text: 'instrumental focus' },
      { text: 'live ensemble performance' },
      { text: 'melodic instrumental phrasing' },
    ],
    type: 'genre',
  },
  {
    id: 'brazilian_jazz_trio',
    comment: 'Малый состав: пиано/Rhodes, бас, барабаны/перкуссия.',
    group: 'brazilian',
    label: 'Brazilian Jazz Trio',
    positive: [
      { text: 'Brazilian Jazz Trio' },
      ...brazilianJazzPositive,
      { text: 'small ensemble interplay' },
      { text: 'piano bass drums format' },
    ],
    type: 'genre',
  },
  {
    id: 'brazilian_jazz_quartet',
    comment:
      'Чуть более полный состав с дополнительным солирующим инструментом.',
    group: 'brazilian',
    label: 'Brazilian Jazz Quartet',
    positive: [
      { text: 'Brazilian Jazz Quartet' },
      ...brazilianJazzPositive,
      { text: 'small jazz ensemble' },
      { text: 'instrumental dialogue' },
    ],
    type: 'genre',
  },
] as PromptTag[];
