import { PromptTag } from '~/types';

const gFunkPositive = [
  { text: 'West Coast Hip-Hop' },
  { text: 'slow rolling groove' },
  { text: 'funk-inspired basslines' },
  { text: 'laid-back street rhythm' },
  { text: 'deep pocket groove' },
];

export default [
  {
    id: 'g_funk',
    comment:
      'Главный G-Funk тег. Воющие синты, фанковый бас и расслабленный west coast грув.',
    group: 'g_funk',
    label: 'G-Funk',
    positive: [
      { text: 'G-Funk' },
      ...gFunkPositive,
      { text: 'whiny synth leads' },
      { text: 'funk synth melodies' },
      { text: 'Parliament influence' },
      { text: 'lowrider atmosphere' },
    ],
    type: 'genre',
  },

  {
    id: 'west_coast_hip_hop',
    comment: 'Классический west coast звук без обязательного рэпа.',
    group: 'g_funk',
    label: 'West Coast Hip-Hop',
    positive: [
      { text: 'West Coast Hip-Hop' },
      ...gFunkPositive,
      { text: 'sun-soaked groove' },
      { text: 'street funk energy' },
      { text: 'warm analog production' },
    ],
    type: 'genre',
  },

  {
    id: 'g_funk_groove',
    comment:
      'Акцент именно на груве и басе без сильной жанровой окраски хип-хопа.',
    group: 'g_funk',
    label: 'G-Funk Groove',
    positive: [
      { text: 'G-Funk Groove' },
      ...gFunkPositive,
      { text: 'rolling bass movement' },
      { text: 'laid-back swing' },
      { text: 'funk rhythm section' },
    ],
    type: 'genre',
  },

  {
    id: 'talkbox_funk',
    comment: 'Talkbox и вокодерная эстетика west coast и Parliament.',
    group: 'g_funk',
    label: 'Talkbox Funk',
    positive: [
      { text: 'Talkbox Funk' },
      { text: 'talkbox melodies' },
      { text: 'vocoder harmonies' },
      { text: 'electronic funk vocals' },
      { text: 'robotic soul phrasing' },
    ],
    type: 'genre',
  },

  {
    id: 'p_funk_influence',
    comment: 'Parliament/Funkadelic сторона G-Funk.',
    group: 'g_funk',
    label: 'P-Funk Influence',
    positive: [
      { text: 'P-Funk Influence' },
      { text: 'Parliament Funkadelic' },
      { text: 'cosmic funk' },
      { text: 'synth funk leads' },
      { text: 'rubbery basslines' },
    ],
    type: 'genre',
  },

  {
    id: 'lowrider_soul',
    comment: 'Медленный круизный вайб Лос-Анджелеса.',
    group: 'g_funk',
    label: 'Lowrider Soul',
    positive: [
      { text: 'Lowrider Soul' },
      { text: 'cruising atmosphere' },
      { text: 'slow boulevard groove' },
      { text: 'sunset funk mood' },
      { text: 'smooth bass movement' },
    ],
    type: 'genre',
  },
] as PromptTag[];
