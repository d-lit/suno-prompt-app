import { PromptTag } from '~/types';

export default [
  {
    id: 'city_pop',
    comment:
      'Japanese City Pop как гармонический и атмосферный слой: maj7, lush harmony, nostalgia, clean guitar и smooth voice leading.',
    group: 'japanese',
    label: 'City Pop',
    positive: [
      { text: 'Japanese city pop influence' },
      { text: 'lush city pop harmony' },
      { text: 'maj7 chords' },
      { text: 'smooth voice leading' },
      { text: 'nostalgic Japanese tone' },
    ],
    type: 'genre',
  },
  {
    id: 'j_pop',
    comment:
      'J-Pop слой. Может давать мягкий женский вокал, более чистую мелодику и японскую pop-harmony окраску.',
    group: 'japanese',
    label: 'J-Pop',
    positive: [
      { text: 'J-pop influence' },
      { text: 'Japanese pop harmony' },
      { text: 'soft melodic phrasing' },
      { text: 'clean emotional tone' },
      { text: 'gentle female vocal color' },
    ],
    type: 'genre',
  },
] as PromptTag[];
