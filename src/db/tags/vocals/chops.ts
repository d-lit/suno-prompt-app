// src/db/tags/vocals/chops.ts

import { PromptTag } from '~/types';

export default [
  /**
   * VOCAL CHOPS CORE
   */
  {
    id: 'vocal_chops',
    comment:
      'Базовый vocal chops слой. Для UKG это скорее инструмент, чем вокал.',
    group: 'chops',
    label: 'Vocal Chops',
    positive: [
      { text: 'vocal chops' },
      { text: 'chopped vocal phrases' },
      { text: 'rhythmic vocal snippets' },
      { text: 'vocal fragments as instrument' },
      { text: 'groove-driven vocal edits' },
    ],
    type: 'vocals',
  },
  {
    id: 'subtle_vocal_chops',
    comment: 'Лёгкие чопы на фоне без превращения трека в future bass.',
    group: 'chops',
    label: 'Subtle Vocal Chops',
    positive: [
      { text: 'subtle vocal chops' },
      { text: 'light vocal snippets' },
      { text: 'minimal vocal edits' },
      { text: 'small chopped phrases' },
      { text: 'understated vocal texture' },
    ],
    type: 'vocals',
  },
  {
    id: 'sparse_vocal_chops',
    comment: 'Редкие вокальные акценты.',
    group: 'chops',
    label: 'Sparse Vocal Chops',
    positive: [
      { text: 'sparse vocal chops' },
      { text: 'occasional vocal snippets' },
      { text: 'isolated vocal edits' },
      { text: 'few vocal events' },
      { text: 'minimal vocal presence' },
    ],
    type: 'vocals',
  },

  /**
   * UKG CHOPS
   */
  {
    id: 'garage_vocal_chops',
    comment: 'Один из основных UKG-инструментов.',
    group: 'garage_chops',
    label: 'Garage Vocal Chops',
    positive: [
      { text: 'garage vocal chops' },
      { text: 'UK garage vocal edits' },
      { text: 'pitched vocal snippets' },
      { text: 'rhythmic chopped vocals' },
      { text: 'classic garage vocal texture' },
    ],
    type: 'vocals',
  },
  {
    id: 'deep_garage_chops',
    comment: 'Более глубокая и ночная версия UKG-чопов.',
    group: 'garage_chops',
    label: 'Deep Garage Chops',
    positive: [
      { text: 'deep garage vocal chops' },
      { text: 'moody vocal fragments' },
      { text: 'night-time vocal edits' },
      { text: 'minimal chopped vocals' },
      { text: 'deep UKG atmosphere' },
    ],
    type: 'vocals',
  },
  {
    id: 'jazzy_garage_chops',
    comment: 'Чопы для jazzy UKG и city-pop garage.',
    group: 'garage_chops',
    label: 'Jazzy Garage Chops',
    positive: [
      { text: 'jazzy vocal chops' },
      { text: 'soulful chopped vocals' },
      { text: 'garage vocal phrases' },
      { text: 'warm vocal fragments' },
      { text: 'jazzy garage atmosphere' },
    ],
    type: 'vocals',
  },

  /**
   * FEMALE CHOPS
   */
  {
    id: 'female_vocal_chops',
    comment: 'Самый универсальный вариант для UKG, House и DnB.',
    group: 'female_chops',
    label: 'Female Vocal Chops',
    positive: [
      { text: 'female vocal chops' },
      { text: 'chopped female vocals' },
      { text: 'pitched female snippets' },
      { text: 'female vocal fragments' },
      { text: 'rhythmic female edits' },
    ],
    type: 'vocals',
  },
  {
    id: 'airy_female_chops',
    comment: 'Воздушные женские чопы для atmospheric territory.',
    group: 'female_chops',
    label: 'Airy Female Chops',
    positive: [
      { text: 'airy female vocal chops' },
      { text: 'soft female snippets' },
      { text: 'ethereal chopped vocals' },
      { text: 'floating vocal edits' },
      { text: 'light atmospheric vocal texture' },
    ],
    type: 'vocals',
  },
  {
    id: 'dreamy_female_chops',
    comment: 'Dreamy chopped vocals для Balearic, City Pop и Liquid.',
    group: 'female_chops',
    label: 'Dreamy Female Chops',
    positive: [
      { text: 'dreamy female vocal chops' },
      { text: 'nostalgic vocal snippets' },
      { text: 'soft melodic vocal edits' },
      { text: 'floating chopped phrases' },
      { text: 'dreamlike vocal atmosphere' },
    ],
    type: 'vocals',
  },

  /**
   * SOULFUL CHOPS
   */
  {
    id: 'soulful_vocal_chops',
    comment: 'Soulful chops для UKG, Deep House и Liquid.',
    group: 'soulful_chops',
    label: 'Soulful Vocal Chops',
    positive: [
      { text: 'soulful vocal chops' },
      { text: 'warm vocal fragments' },
      { text: 'soul-inspired snippets' },
      { text: 'emotional vocal edits' },
      { text: 'groove-oriented vocal texture' },
    ],
    type: 'vocals',
  },
  {
    id: 'deep_house_chops',
    comment: 'House-вариант вокальных чопов.',
    group: 'soulful_chops',
    label: 'Deep House Chops',
    positive: [
      { text: 'deep house vocal chops' },
      { text: 'house vocal snippets' },
      { text: 'short vocal hooks' },
      { text: 'minimal vocal phrases' },
      { text: 'club-oriented vocal texture' },
    ],
    type: 'vocals',
  },
  {
    id: 'liquid_vocal_chops',
    comment: 'Liquid DnB вариант вокальных фрагментов.',
    group: 'soulful_chops',
    label: 'Liquid Vocal Chops',
    positive: [
      { text: 'liquid vocal chops' },
      { text: 'atmospheric vocal snippets' },
      { text: 'soft female vocal fragments' },
      { text: 'floating vocal phrases' },
      { text: 'liquid drum and bass atmosphere' },
    ],
    type: 'vocals',
  },

  /**
   * PITCHED CHOPS
   */
  {
    id: 'pitched_vocal_chops',
    comment: 'Классические питченные UKG-чопы.',
    group: 'pitched',
    label: 'Pitched Vocal Chops',
    positive: [
      { text: 'pitched vocal chops' },
      { text: 'pitch-shifted vocal snippets' },
      { text: 'processed vocal phrases' },
      { text: 'melodic vocal edits' },
      { text: 'pitched vocal texture' },
    ],
    type: 'vocals',
  },
  {
    id: 'high_pitched_chops',
    comment: 'Более лёгкий и воздушный вариант.',
    group: 'pitched',
    label: 'High Pitched Chops',
    positive: [
      { text: 'high-pitched vocal chops' },
      { text: 'pitched-up vocal snippets' },
      { text: 'light vocal edits' },
      { text: 'bright chopped vocals' },
      { text: 'airy vocal texture' },
    ],
    type: 'vocals',
  },
  {
    id: 'low_pitched_chops',
    comment: 'Более тёмные и глубокие chopped vocals.',
    group: 'pitched',
    label: 'Low Pitched Chops',
    positive: [
      { text: 'low-pitched vocal chops' },
      { text: 'pitched-down vocal snippets' },
      { text: 'dark vocal texture' },
      { text: 'deep chopped phrases' },
      { text: 'low vocal atmosphere' },
    ],
    type: 'vocals',
  },

  /**
   * ATMOSPHERIC CHOPS
   */
  {
    id: 'atmospheric_vocal_fragments',
    comment: 'Вокал как часть атмосферы, а не ритма.',
    group: 'atmospheric',
    label: 'Atmospheric Vocal Fragments',
    positive: [
      { text: 'atmospheric vocal fragments' },
      { text: 'distant vocal snippets' },
      { text: 'reverb-washed vocal edits' },
      { text: 'vocal atmosphere layers' },
      { text: 'ambient vocal texture' },
    ],
    type: 'vocals',
  },
  {
    id: 'blurred_vocal_fragments',
    comment: 'Размытые фрагменты для LAZNCY и atmospheric sketches.',
    group: 'atmospheric',
    label: 'Blurred Vocal Fragments',
    positive: [
      { text: 'blurred vocal fragments' },
      { text: 'indistinct vocal snippets' },
      { text: 'vocals dissolved into texture' },
      { text: 'soft vocal haze' },
      { text: 'no lyrical focus' },
    ],
    type: 'vocals',
  },
  {
    id: 'vocal_texture_layer',
    comment: 'Голос как синтезаторный слой.',
    group: 'atmospheric',
    label: 'Vocal Texture Layer',
    positive: [
      { text: 'vocal texture layer' },
      { text: 'voice used as texture' },
      { text: 'textural vocal ambience' },
      { text: 'harmonic vocal layer' },
      { text: 'non-verbal vocal atmosphere' },
    ],
    type: 'vocals',
  },

  /**
   * CONTROL
   */
  {
    id: 'no_future_bass_chops',
    comment:
      'Чтобы чопы оставались UKG/House-инструментом, а не превращались в EDM-хук.',
    group: 'control',
    label: 'No Future Bass Chops',
    positive: [
      { text: 'understated vocal edits' },
      { text: 'no EDM-style vocal lead' },
      { text: 'minimal chopped vocals' },
      { text: 'groove-supporting vocal texture' },
      { text: 'no festival vocal hook' },
    ],
    type: 'vocals',
  },
] as PromptTag[];
