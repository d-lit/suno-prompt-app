import { PromptTag } from '~/types';

export default [
  {
    id: 'drum_and_bass',
    comment:
      'Базовый Drum & Bass якорь. Сильно задаёт 170 BPM, rolling breakbeats, sub bass и классическую DnB структуру.',
    group: 'dnb',
    label: 'Drum & Bass',
    positive: [
      { text: 'Drum & Bass first' },
      { text: '170 BPM' },
      { text: 'rolling breakbeats' },
      { text: 'deep sub bass' },
      { text: 'instrumental focus' },
    ],
    type: 'genre',
  },
  {
    id: 'atmospheric_dnb',
    comment:
      'Атмосферный DnB / intelligent DnB. Даёт airy pads, restrained emotion, 90s spirit и более мягкий rolling groove.',
    group: 'dnb',
    label: 'Atmospheric DnB',
    positive: [
      { text: 'atmospheric drum and bass' },
      { text: 'intelligent 90s drum and bass spirit' },
      { text: 'smooth rolling breakbeats' },
      { text: 'airy atmospheric pads' },
      { text: 'emotional but restrained mood' },
    ],
    type: 'genre',
  },
  {
    id: 'liquid_dnb',
    comment:
      'Liquid / soulful DnB ветка. Работает через smooth rolling breaks, Rhodes, soulful fragments и тёплую гармонию без EDM-глянца.',
    group: 'dnb',
    label: 'Liquid DnB',
    positive: [
      { text: 'jazzy liquid drum and bass' },
      { text: 'smooth rolling breakbeats' },
      { text: 'warm Rhodes chords' },
      { text: 'deep smooth sub bass' },
      { text: 'soulful atmospheric layers' },
    ],
    type: 'genre',
  },
  {
    id: 'jungle',
    comment:
      'Jungle / 90s jungle якорь. Хорошо тянет classic breakbeat foundation, amen chopping, raw sampler character и underground energy.',
    group: 'dnb',
    label: 'Jungle',
    positive: [
      { text: 'classic mid-90s jungle' },
      { text: 'Amen break dominant foundation' },
      { text: 'heavy Amen chopping' },
      { text: 'hardware sampler character' },
      { text: 'authentic underground jungle' },
    ],
    type: 'genre',
  },
  {
    id: 'drumfunk',
    comment:
      'Drumfunk как ритмически сложная DnB/Jungle ветка. Сильно усиливает break manipulation, ghost notes, irregular accents и phrasing chaos.',
    group: 'dnb',
    label: 'Drumfunk',
    positive: [
      { text: 'drumfunk' },
      { text: 'advanced drumfunk programming' },
      { text: 'complex rolling breakbeats' },
      { text: 'chopped Amen edits' },
      { text: 'ghost notes and rapid fills' },
    ],
    type: 'genre',
  },
] as PromptTag[];
