import { PromptTag } from '~/types';

export default [
  {
    id: 'space_disco',
    comment:
      'Space Disco / cosmic disco слой. Даёт arpeggios, 80s synths, retro futuristic atmosphere и cosmic melodic phrases.',
    group: 'disco',
    label: 'Space Disco',
    positive: [
      { text: 'space-disco atmosphere' },
      { text: 'cosmic pads' },
      { text: 'arpeggiated space-disco melodies' },
      { text: 'retro futuristic atmosphere' },
      { text: '80s analog and FM synthesizers' },
    ],
    type: 'genre',
  },
  {
    id: 'italo_disco',
    comment:
      'Italo Disco как ретро-синтовый модификатор для Balearic / tropical / house комбинаций.',
    group: 'disco',
    label: 'Italo Disco',
    positive: [
      { text: 'italo-disco influence' },
      { text: 'bright arpeggiated synth lines' },
      { text: 'dreamy chord stabs' },
      { text: 'retro electronic atmosphere' },
      { text: 'analog color' },
    ],
    type: 'genre',
  },
] as PromptTag[];
