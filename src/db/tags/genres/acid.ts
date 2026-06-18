import { PromptTag } from '~/types';

const acidPositive = [
  { text: 'TB-303' },
  { text: 'Roland TB-303' },
  { text: 'Resonant Basslines' },
  { text: '303 Filter Sweep' },
  { text: 'Acid Filter Sweep' },
  { text: 'Squelchy Acid' },
  { text: 'Squelchy 303 Bassline' },
];

export default [
  {
    id: 'acid_house',
    group: 'acid',
    label: 'Acid House',
    positive: [{ text: 'Acid House' }, ...acidPositive],
    type: 'genre',
  },
  {
    id: 'acid_techno',
    group: 'acid',
    label: 'Acid Techno',
    positive: [{ text: 'Acid Techno' }, ...acidPositive],
    type: 'genre',
  },
  {
    id: 'deep_acid',
    group: 'acid',
    label: 'Deep Acid',
    positive: [{ text: 'Deep Acid' }, ...acidPositive],
    type: 'genre',
  },
  {
    id: 'minimal_acid',
    group: 'acid',
    label: 'Minimal Acid',
    positive: [{ text: 'Minimal Acid' }, ...acidPositive],
    type: 'genre',
  },
  {
    id: 'hypnotic_acid',
    group: 'acid',
    label: 'Hypnotic Acid',
    positive: [{ text: 'Hypnotic Acid' }, ...acidPositive],
    type: 'genre',
  },

  {
    id: 'acid_breaks',
    group: 'acid_breaks',
    label: 'Acid Breaks',
    positive: [{ text: 'Acid Breaks' }, ...acidPositive],
    type: 'genre',
  },
  {
    id: 'acid_electro',
    group: 'acid_breaks',
    label: 'Acid Electro',
    positive: [{ text: 'Acid Electro' }, ...acidPositive],
    type: 'genre',
  },
  {
    id: 'acid_funk',
    group: 'acid_breaks',
    label: 'Acid Funk',
    positive: [{ text: 'Acid Funk' }, ...acidPositive],
    type: 'genre',
  },

  {
    id: 'acid_jazz',
    group: 'acid_jazz',
    label: 'Acid Jazz',
    positive: [{ text: 'Acid Jazz' }, ...acidPositive],
    type: 'genre',
  },
  {
    id: 'deep_acid_jazz',
    group: 'acid_jazz',
    label: 'Deep Acid Jazz',
    positive: [{ text: 'Deep Acid Jazz' }, ...acidPositive],
    type: 'genre',
  },
  {
    id: 'jazzy_acid',
    group: 'acid_jazz',
    label: 'Jazzy Acid',
    positive: [{ text: 'Jazzy Acid' }, ...acidPositive],
    type: 'genre',
  },

  {
    id: 'tb303',
    group: 'tb303',
    label: 'TB-303',
    positive: [{ text: 'TB-303' }, ...acidPositive],
    type: 'genre',
  },
  {
    id: 'acid_lines',
    group: 'tb303',
    label: 'Acid Lines',
    positive: [{ text: 'Acid Lines' }, ...acidPositive],
    type: 'genre',
  },
  {
    id: 'resonant_acid',
    group: 'tb303',
    label: 'Resonant Acid',
    positive: [{ text: 'Resonant Acid' }, ...acidPositive],
    type: 'genre',
  },
] as PromptTag[];
