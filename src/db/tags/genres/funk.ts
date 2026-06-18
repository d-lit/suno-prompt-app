import { PromptTag } from '~/types';

export default [
  /**
   * FUNK
   */
  {
    id: 'funk',
    comment: 'Базовый фанк как источник грува, баса и синкоп.',
    group: 'funk',
    label: 'Funk',
    positive: [
      { text: 'funk' },
      { text: 'syncopated groove' },
      { text: 'funk rhythm section' },
      { text: 'groove-driven bassline' },
      { text: 'rhythmic pocket' },
    ],
    type: 'genre',
  },
  {
    id: 'deep_funk',
    comment: 'Тяжёлый медленный грув.',
    group: 'funk',
    label: 'Deep Funk',
    positive: [
      { text: 'deep funk' },
      { text: 'heavy groove' },
      { text: 'deep rhythmic pocket' },
      { text: 'fat bass movement' },
      { text: 'slow-burning funk energy' },
    ],
    type: 'genre',
  },
  {
    id: 'raw_funk',
    comment: 'Грязный живой фанк.',
    group: 'funk',
    label: 'Raw Funk',
    positive: [
      { text: 'raw funk' },
      { text: 'unpolished groove' },
      { text: 'live funk energy' },
      { text: 'rough rhythm section' },
      { text: 'street-level funk' },
    ],
    type: 'genre',
  },

  /**
   * STREET FUNK
   */
  {
    id: 'street_funk',
    comment: 'Городской грув без диско-глянца.',
    group: 'street_funk',
    label: 'Street Funk',
    positive: [
      { text: 'street funk' },
      { text: 'urban groove' },
      { text: 'city rhythm culture' },
      { text: 'raw bass movement' },
      { text: 'gritty funk atmosphere' },
    ],
    type: 'genre',
  },
  {
    id: 'broken_funk',
    comment: 'Особенно интересно для UK Bass и Broken Beat.',
    group: 'street_funk',
    label: 'Broken Funk',
    positive: [
      { text: 'broken funk' },
      { text: 'fragmented groove' },
      { text: 'off-grid syncopation' },
      { text: 'irregular rhythmic motion' },
      { text: 'broken rhythm funk' },
    ],
    type: 'genre',
  },
  {
    id: 'future_funk',
    comment: 'Проверка современного понимания термина.',
    group: 'street_funk',
    label: 'Future Funk',
    positive: [
      { text: 'future funk' },
      { text: 'modern funk groove' },
      { text: 'electronic funk influence' },
      { text: 'danceable syncopation' },
      { text: 'updated funk energy' },
    ],
    type: 'genre',
  },

  /**
   * JAZZ FUNK
   */
  {
    id: 'jazz_funk',
    comment: 'Самый полезный тег файла для твоих задач.',
    group: 'jazz_funk',
    label: 'Jazz Funk',
    positive: [
      { text: 'jazz funk' },
      { text: 'groovy jazz rhythm section' },
      { text: 'syncopated jazz groove' },
      { text: 'funk-driven harmony' },
      { text: 'electric jazz movement' },
    ],
    type: 'genre',
  },
  {
    id: 'fusion_funk',
    comment: 'Фьюжновая сторона фанка.',
    group: 'jazz_funk',
    label: 'Fusion Funk',
    positive: [
      { text: 'fusion funk' },
      { text: 'complex groove interplay' },
      { text: 'electric fusion energy' },
      { text: 'technical rhythm section' },
      { text: 'jazz-rock funk influence' },
    ],
    type: 'genre',
  },
  {
    id: 'electric_funk',
    comment: 'Rhodes, Clavinet, электрический бас.',
    group: 'jazz_funk',
    label: 'Electric Funk',
    positive: [
      { text: 'electric funk' },
      { text: 'Rhodes and clavinet textures' },
      { text: 'electric bass groove' },
      { text: 'electrified rhythm section' },
      { text: 'vintage fusion character' },
    ],
    type: 'genre',
  },

  /**
   * P-FUNK
   */
  {
    id: 'p_funk',
    comment: 'Психоделическая сторона фанка.',
    group: 'pfunk',
    label: 'P-Funk',
    positive: [
      { text: 'P-Funk' },
      { text: 'psychedelic funk' },
      { text: 'cosmic groove' },
      { text: 'rubbery basslines' },
      { text: 'funkadelic energy' },
    ],
    type: 'genre',
  },
  {
    id: 'cosmic_funk',
    comment: 'Может хорошо пересекаться с sci-fi ветками.',
    group: 'pfunk',
    label: 'Cosmic Funk',
    positive: [
      { text: 'cosmic funk' },
      { text: 'space-age groove' },
      { text: 'interstellar funk' },
      { text: 'psychedelic rhythm movement' },
      { text: 'future-funk atmosphere' },
    ],
    type: 'genre',
  },
  {
    id: 'psychedelic_funk',
    comment: 'Фанк через психоделию.',
    group: 'pfunk',
    label: 'Psychedelic Funk',
    positive: [
      { text: 'psychedelic funk' },
      { text: 'trippy groove' },
      { text: 'mind-bending rhythm section' },
      { text: 'funk with psychedelic textures' },
      { text: 'expanded groove perception' },
    ],
    type: 'genre',
  },

  /**
   * RARE GROOVE
   */
  {
    id: 'rare_groove',
    comment: 'Очень интересный термин для проверки.',
    group: 'rare_groove',
    label: 'Rare Groove',
    positive: [
      { text: 'rare groove' },
      { text: 'crate-digger funk' },
      { text: 'obscure groove records' },
      { text: 'deep collector culture' },
      { text: 'vintage groove aesthetic' },
    ],
    type: 'genre',
  },
  {
    id: 'library_funk',
    comment: 'Библиотечная музыка и саундтречная эстетика.',
    group: 'rare_groove',
    label: 'Library Funk',
    positive: [
      { text: 'library funk' },
      { text: 'vintage soundtrack groove' },
      { text: 'session musician energy' },
      { text: 'instrumental funk composition' },
      { text: 'cinematic groove' },
    ],
    type: 'genre',
  },
  {
    id: 'crate_digger_funk',
    comment: 'Для проверки влияния crate digger вне hip-hop.',
    group: 'rare_groove',
    label: 'Crate Digger Funk',
    positive: [
      { text: 'crate digger funk' },
      { text: 'forgotten groove records' },
      { text: 'rare funk discoveries' },
      { text: 'deep vinyl culture' },
      { text: 'collector-driven groove' },
    ],
    type: 'genre',
  },
] as PromptTag[];
