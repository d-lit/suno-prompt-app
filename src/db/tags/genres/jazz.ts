import { PromptTag } from '~/types';

export default [
  {
    id: 'acid_jazz',
    comment:
      'Acid Jazz / abstract hip-hop / Nu-Jazz мост. Средне управляемый, но полезный для Rhodes, dusty drums, upright bass и jazzy late-night mood.',
    group: 'jazz',
    label: 'Acid Jazz',
    positive: [
      { text: 'acid-jazz' },
      { text: 'abstract hip-hop influence' },
      { text: 'Rhodes and electric piano dominant' },
      { text: 'minor tonal center' },
      { text: 'dusty sample-based production' },
    ],
    type: 'genre',
  },
  {
    id: 'nu_jazz',
    comment:
      'Nu-Jazz слой для гибридов с house, DnB и broken beat. Лучше работает через инструменты и гармонию, чем через прямую джазовую отсылку.',
    group: 'jazz',
    label: 'Nu-Jazz',
    positive: [
      { text: 'nu-jazz influence' },
      { text: 'modern jazz harmony' },
      { text: 'electric piano chords' },
      { text: 'organic percussion' },
      { text: 'instrumental jazz color' },
    ],
    type: 'genre',
  },
  {
    id: 'uk_jazz',
    comment:
      'Modern UK Jazz / London Jazz слой. Полезен для live drums, electric bass, Rhodes, hip-hop swing и club-jazz textures.',
    group: 'jazz',
    label: 'UK Jazz',
    positive: [
      { text: 'modern UK jazz' },
      { text: 'London jazz groove' },
      { text: 'hip-hop influenced swing' },
      { text: 'live drums with ghost notes' },
      { text: 'Rhodes electric piano chords' },
    ],
    type: 'genre',
  },
  {
    id: 'electronic_jazz',
    comment:
      'Electronic Jazz ветка, где synth lead и polysynth chords заменяют традиционные джазовые инструменты.',
    group: 'jazz',
    label: 'Electronic Jazz',
    positive: [
      { text: 'electronic jazz' },
      { text: 'modern electronic jazz harmony' },
      { text: 'polysynth chord textures' },
      { text: 'expressive analog synth lead' },
      { text: 'wide cinematic pads' },
    ],
    type: 'genre',
  },
] as PromptTag[];
