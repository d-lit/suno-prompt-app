import { PromptTag } from '~/types';

const synthPopPositive = [
  { text: 'bright 80s synthesizers' },
  { text: 'melodic synth hooks' },
  { text: 'electronic pop arrangement' },
  { text: 'drum machine groove' },
  { text: 'big reverb production' },
];

const euroPositive = [
  { text: 'European 80s dance-pop energy' },
  { text: 'bright hand claps' },
  { text: 'driving synth bass' },
  { text: 'catchy melodic hooks' },
  { text: 'glossy late-80s production' },
];

export default [
  /**
   * SYNTH POP CORE
   */
  {
    id: 'synth_pop',
    comment:
      'Базовый synth-pop архетип. Синты, драм-машины, яркие хуки и электронная поп-структура.',
    group: 'synth_pop',
    label: 'Synth Pop',
    positive: [{ text: 'Synth Pop' }, ...synthPopPositive],
    type: 'genre',
  },
  {
    id: 'eighties_synth_pop',
    comment:
      '80s synth-pop с ярким электронным продакшеном, драм-машинами и большими реверберациями.',
    group: 'synth_pop',
    label: '80s Synth Pop',
    positive: [
      { text: '80s Synth Pop' },
      ...synthPopPositive,
      { text: 'vintage 80s pop production' },
      { text: 'analog synth textures' },
      { text: 'wide chorus effects' },
    ],
    type: 'genre',
  },
  {
    id: 'vintage_synth_pop',
    comment: 'Винтажная synth-pop эстетика без современного synthwave-глянца.',
    group: 'synth_pop',
    label: 'Vintage Synth Pop',
    positive: [
      { text: 'Vintage Synth Pop' },
      ...synthPopPositive,
      { text: 'classic analog synth character' },
      { text: 'old drum machine sound' },
      { text: 'retro electronic warmth' },
    ],
    type: 'genre',
  },
  {
    id: 'melodic_synth_pop',
    comment: 'Акцент на мелодичные синтовые хуки и песенную структуру.',
    group: 'synth_pop',
    label: 'Melodic Synth Pop',
    positive: [
      { text: 'Melodic Synth Pop' },
      ...synthPopPositive,
      { text: 'strong melodic synth lines' },
      { text: 'memorable electronic hooks' },
      { text: 'clear pop phrasing' },
    ],
    type: 'genre',
  },

  /**
   * NEW WAVE / ELECTRO POP
   */
  {
    id: 'new_wave',
    comment:
      'New Wave как более холодная и стильная ветка synth-pop / post-punk / pop electronics.',
    group: 'new_wave',
    label: 'New Wave',
    positive: [
      { text: 'New Wave' },
      { text: 'stylish 80s electronic rock influence' },
      { text: 'angular pop rhythm' },
      { text: 'bright synthetic textures' },
      { text: 'cool vocal attitude' },
      { text: 'clean retro production' },
    ],
    type: 'genre',
  },
  {
    id: 'electro_pop',
    comment:
      'Electro-pop как электронная поп-ветка с драм-машинами, синтовым басом и яркой мелодикой.',
    group: 'new_wave',
    label: 'Electro Pop',
    positive: [
      { text: 'Electro Pop' },
      ...synthPopPositive,
      { text: 'electronic pop groove' },
      { text: 'sequenced synth bass' },
      { text: 'clean digital pop sound' },
    ],
    type: 'genre',
  },
  {
    id: 'art_pop',
    comment: 'Более интеллектуальная и аранжировочно изящная ветка synth-pop.',
    group: 'new_wave',
    label: 'Art Pop',
    positive: [
      { text: 'Art Pop' },
      { text: 'sophisticated pop arrangement' },
      { text: 'creative electronic textures' },
      { text: 'unusual harmonic color' },
      { text: 'stylized production choices' },
      { text: 'artistic pop sensibility' },
    ],
    type: 'genre',
  },
  {
    id: 'sophisti_pop',
    comment:
      'Sophisti-pop: дорогая, гладкая, джазово-поповая 80s эстетика. Полезно для city-pop и smooth house гибридов.',
    group: 'new_wave',
    label: 'Sophisti-Pop',
    positive: [
      { text: 'Sophisti-Pop' },
      { text: 'polished 80s pop sophistication' },
      { text: 'smooth jazz-pop harmony' },
      { text: 'elegant electronic arrangement' },
      { text: 'warm adult pop atmosphere' },
      { text: 'refined studio production' },
    ],
    type: 'genre',
  },

  /**
   * EURO / ITALO
   */
  {
    id: 'euro_disco',
    comment:
      'Euro Disco — главный тег для Sandra / C.C. Catch / Modern Talking territory: яркие клэпы, синтовый бас, европейская танцевальная поп-энергия.',
    group: 'euro',
    label: 'Euro Disco',
    positive: [
      { text: 'Euro Disco' },
      ...euroPositive,
      { text: 'continental disco feel' },
      { text: 'late-80s European dancefloor' },
      { text: 'big synthetic chorus energy' },
    ],
    type: 'genre',
  },
  {
    id: 'italo_disco',
    comment:
      'Italo Disco: синтовая европейская диско-ветка с арпеджиаторами, романтической мелодикой и жирным басом.',
    group: 'euro',
    label: 'Italo Disco',
    positive: [
      { text: 'Italo Disco' },
      ...euroPositive,
      { text: 'romantic synth melodies' },
      { text: 'driving arpeggiators' },
      { text: 'pulsing analog bassline' },
      { text: 'Mediterranean disco color' },
    ],
    type: 'genre',
  },
  {
    id: 'euro_synth_pop',
    comment:
      'Euro Synth Pop — мост между synth-pop и Euro Disco. Хорошо подходит для Sandra-like звучания без прямой ссылки.',
    group: 'euro',
    label: 'Euro Synth Pop',
    positive: [
      { text: 'Euro Synth Pop' },
      ...synthPopPositive,
      ...euroPositive,
      { text: 'European melodic synth-pop' },
      { text: 'bright romantic electronic hooks' },
    ],
    type: 'genre',
  },
  {
    id: 'continental_disco',
    comment:
      'Continental Disco как более широкий европейский disco/synth-pop токен.',
    group: 'euro',
    label: 'Continental Disco',
    positive: [
      { text: 'Continental Disco' },
      ...euroPositive,
      { text: 'European club-pop atmosphere' },
      { text: 'smooth synthetic dance groove' },
      { text: 'romantic dancefloor melody' },
    ],
    type: 'genre',
  },

  /**
   * HI-NRG / DANCE POP
   */
  {
    id: 'hi_nrg',
    comment:
      'Hi-NRG — ускоренная и более напористая 80s dance-pop/disco ветка. Полезно для яркого драйва без electro-house.',
    group: 'hi_nrg',
    label: 'Hi-NRG',
    positive: [
      { text: 'Hi-NRG' },
      { text: 'high energy disco' },
      { text: 'driving dancefloor pulse' },
      { text: 'pumping synth bass' },
      { text: 'bright hand claps' },
      { text: 'energetic 80s club sound' },
    ],
    type: 'genre',
  },
  {
    id: 'high_energy_disco',
    comment: 'Развёрнутая версия Hi-NRG, если аббревиатура сработает слабо.',
    group: 'hi_nrg',
    label: 'High Energy Disco',
    positive: [
      { text: 'High Energy Disco' },
      { text: 'driving disco tempo' },
      { text: 'bright dancefloor hooks' },
      { text: 'big claps and snare hits' },
      { text: 'pulsing synth bassline' },
      { text: 'late-80s club energy' },
    ],
    type: 'genre',
  },
  {
    id: 'eighties_dance_pop',
    comment:
      '80s Dance Pop как широкий тег для Bananarama-like поп-танцевальной эстетики.',
    group: 'hi_nrg',
    label: '80s Dance Pop',
    positive: [
      { text: '80s Dance Pop' },
      ...euroPositive,
      { text: 'catchy pop chorus structure' },
      { text: 'bright dance-pop arrangement' },
      { text: 'radio-friendly 80s production' },
    ],
    type: 'genre',
  },

  /**
   * ROMANTIC / NIGHT
   */
  {
    id: 'romantic_synth_pop',
    comment:
      'Романтическая synth-pop ветка: мягче, мелодичнее, ближе к Sandra / late-night Euro pop.',
    group: 'romantic',
    label: 'Romantic Synth Pop',
    positive: [
      { text: 'Romantic Synth Pop' },
      ...synthPopPositive,
      { text: 'romantic electronic melody' },
      { text: 'warm nostalgic chorus' },
      { text: 'soft emotional synth lines' },
      { text: 'late-night pop atmosphere' },
    ],
    type: 'genre',
  },
  {
    id: 'neon_synth_pop',
    comment:
      'Неоновая synth-pop эстетика для ночных city-pop / euro-disco гибридов.',
    group: 'romantic',
    label: 'Neon Synth Pop',
    positive: [
      { text: 'Neon Synth Pop' },
      ...synthPopPositive,
      { text: 'neon night atmosphere' },
      { text: 'glossy synth lights' },
      { text: 'urban electronic romance' },
      { text: 'bright nocturnal production' },
    ],
    type: 'genre',
  },
] as PromptTag[];
