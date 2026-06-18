import { PromptTag } from '~/types';

export default [
  {
    id: 'deep_house',
    comment:
      'Базовый Deep House якорь. Работает через 4x4 groove, deep rolling bass, hypnotic repetition и late-night club mood.',
    group: 'house',
    label: 'Deep House',
    positive: [
      { text: 'deep house first' },
      { text: 'steady four-on-the-floor groove' },
      { text: 'deep rolling bassline' },
      { text: 'hypnotic repetition' },
      { text: 'underground deep house character' },
    ],
    type: 'genre',
  },
  {
    id: 'chicago_house',
    comment:
      'Chicago House добавляет более тёплый, soulful, human groove характер. Хороший слой для city pop / bossa / deep house комбинаций.',
    group: 'house',
    label: 'Chicago House',
    positive: [
      { text: 'Chicago house' },
      { text: 'warm 4x4 groove' },
      { text: 'soft claps' },
      { text: 'shuffled hi-hats' },
      { text: 'soulful house feeling' },
    ],
    type: 'genre',
  },
  {
    id: 'detroit_house',
    comment:
      'Detroit House даёт более холодный, минимальный, detached и hypnotic характер с urban isolation и precise repetition.',
    group: 'house',
    label: 'Detroit House',
    positive: [
      { text: 'Detroit house' },
      { text: 'minimal house drums' },
      { text: 'clean low-end' },
      { text: 'cool hypnotic mood' },
      { text: 'space and repetition emphasized' },
    ],
    type: 'genre',
  },
  {
    id: 'minimal_house',
    comment:
      'Минимальная house / club ветка. Полезна для сухого грува, пространства, коротких басовых пульсов и sparse arrangement.',
    group: 'house',
    label: 'Minimal House',
    positive: [
      { text: 'minimal house' },
      { text: '120 BPM pulse' },
      { text: 'sparse arrangement' },
      { text: 'minimal bass pulses' },
      { text: 'hypnotic minimal club energy' },
    ],
    type: 'genre',
  },
  {
    id: 'raw_house',
    comment:
      'Сырой experimental house режим с lo-fi drum machine, crunchy percussion, distortion и found-object textures.',
    group: 'house',
    label: 'Raw House',
    positive: [
      { text: 'experimental raw house groove' },
      { text: 'lo-fi drum machine sound' },
      { text: 'dry saturated kick' },
      { text: 'crunchy snare' },
      { text: 'dusty underground house texture' },
    ],
    type: 'genre',
  },
  {
    id: 'balearic_house',
    comment:
      'Balearic House / Balearic mood. Сильный модификатор: sunset, coast, open air, lounge, sea breeze, airy pads.',
    group: 'house',
    label: 'Balearic House',
    positive: [
      { text: 'Balearic house' },
      { text: 'Balearic sunset atmosphere' },
      { text: 'open-air club feeling' },
      { text: 'warm sea-breeze ambience' },
      { text: 'airy pads and spacious soundscape' },
    ],
    type: 'genre',
  },
  {
    id: 'tropical_house',
    comment:
      'Tropical House в твоём наборе ближе к chilled tropical / Balearic / 80s synth character, а не EDM-pop.',
    group: 'house',
    label: 'Tropical House',
    positive: [
      { text: 'tropical balearic house groove' },
      { text: 'warm sea breeze mood' },
      { text: 'tropical sunset atmosphere' },
      { text: 'relaxed flowing groove' },
      { text: 'clean vintage mix' },
    ],
    type: 'genre',
  },
] as PromptTag[];
