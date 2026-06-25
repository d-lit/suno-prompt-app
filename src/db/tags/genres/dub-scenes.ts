import { PromptTag } from '~/types';

const dubScenePositive = [
  { text: 'deep echo space' },
  { text: 'heavy bass pressure' },
  { text: 'spring reverb tails' },
  { text: 'tape delay feedback' },
  { text: 'dubwise mixing' },
];

export default [
  /**
   * JAMAICAN DUB
   */
  {
    id: 'jamaican_dub',
    comment:
      'Классический ямайский студийный dub: аналоговый микшер, tape echo, spring reverb и бас как центр трека.',
    group: 'jamaican',
    label: 'Jamaican Dub',
    positive: [
      { text: 'Jamaican Dub' },
      ...dubScenePositive,
      { text: 'classic analog dub mixing' },
      { text: 'organic reggae foundation' },
      { text: 'warm studio dub atmosphere' },
    ],
    type: 'genre',
  },
  {
    id: 'roots_dub_scene',
    comment:
      'Roots dub как глубокая, органичная и басовая версия reggae-продакшена.',
    group: 'jamaican',
    label: 'Roots Dub Scene',
    positive: [
      { text: 'Roots Dub' },
      ...dubScenePositive,
      { text: 'deep reggae bass foundation' },
      { text: 'echoed guitar and organ stabs' },
      { text: 'organic rhythm section' },
    ],
    type: 'genre',
  },

  /**
   * UK / SOUND SYSTEM
   */
  {
    id: 'uk_dub',
    comment:
      'Британская sound system школа: сабовое давление, тёмная комната, физический бас.',
    group: 'uk',
    label: 'UK Dub',
    positive: [
      { text: 'UK Dub' },
      ...dubScenePositive,
      { text: 'sound system culture' },
      { text: 'sub-heavy groove' },
      { text: 'bass weight and pressure' },
    ],
    type: 'genre',
  },
  {
    id: 'sound_system_dub',
    comment:
      'Dub как sound system experience: не песня, а давление, пространство и басовая физика.',
    group: 'uk',
    label: 'Sound System Dub',
    positive: [
      { text: 'Sound System Dub' },
      ...dubScenePositive,
      { text: 'large speaker stack pressure' },
      { text: 'physical sub bass' },
      { text: 'dub siren atmosphere' },
    ],
    type: 'genre',
  },

  /**
   * STEPPERS
   */
  {
    id: 'steppers_dub',
    comment:
      '4x4 dub pulse. Самый полезный мост между reggae, dub, techno и bass music.',
    group: 'steppers',
    label: 'Steppers Dub',
    positive: [
      { text: 'Steppers Dub' },
      { text: 'dub steppers' },
      { text: 'four on the floor dub pulse' },
      { text: 'driving sound system groove' },
      { text: 'militant bass pressure' },
      { text: 'deep echo space' },
    ],
    type: 'genre',
  },
  {
    id: 'militant_steppers',
    comment: 'Более жёсткая и маршево-гипнотическая steppers-ветка.',
    group: 'steppers',
    label: 'Militant Steppers',
    positive: [
      { text: 'Militant Steppers' },
      { text: 'militant dub rhythm' },
      { text: 'driving 4x4 bass pulse' },
      { text: 'sound system pressure' },
      { text: 'hypnotic steppers groove' },
    ],
    type: 'genre',
  },

  /**
   * FRENCH / EUROPEAN DUB
   */
  {
    id: 'french_dub',
    comment:
      'Французская/европейская dub-сцена: темнее, кинематографичнее и электроннее классической Ямайки.',
    group: 'european',
    label: 'French Dub',
    positive: [
      { text: 'French Dub' },
      ...dubScenePositive,
      { text: 'dark dub atmosphere' },
      { text: 'cinematic bass textures' },
      { text: 'moody electronic dub production' },
    ],
    type: 'genre',
  },
  {
    id: 'dark_european_dub',
    comment:
      'Тёмный европейский dub с электронным продакшеном, холодным пространством и плотным сабом.',
    group: 'european',
    label: 'Dark European Dub',
    positive: [
      { text: 'Dark European Dub' },
      { text: 'dark dub atmosphere' },
      { text: 'industrial dub textures' },
      { text: 'deep low-end weight' },
      { text: 'haunted echo spaces' },
      { text: 'cinematic dub production' },
    ],
    type: 'genre',
  },
  {
    id: 'electronic_dub',
    comment:
      'Dub с более электронной ритм-секцией и синтетическими текстурами.',
    group: 'european',
    label: 'Electronic Dub',
    positive: [
      { text: 'Electronic Dub' },
      { text: 'electronic dub production' },
      { text: 'synthetic bass pressure' },
      { text: 'digital delay lines' },
      { text: 'dubwise electronic groove' },
      { text: 'deep echo textures' },
    ],
    type: 'genre',
  },

  /**
   * MODERN / BASS
   */
  {
    id: 'modern_dub_scene',
    comment:
      'Современная bass-oriented dub-сцена: саб, минимализм, электронные эффекты и тёмная клубная подача.',
    group: 'modern',
    label: 'Modern Dub Scene',
    positive: [
      { text: 'Modern Dub' },
      { text: 'modern dub scene' },
      { text: 'bass-oriented dub production' },
      { text: 'minimal dub arrangement' },
      { text: 'deep electronic low-end' },
      { text: 'dark club atmosphere' },
    ],
    type: 'genre',
  },
  {
    id: 'bass_dub',
    comment:
      'Dub как часть bass music: меньше roots-эстетики, больше саба, пространства и клубного давления.',
    group: 'modern',
    label: 'Bass Dub',
    positive: [
      { text: 'Bass Dub' },
      { text: 'dubwise bass music' },
      { text: 'sub-heavy electronic groove' },
      { text: 'deep bass pressure' },
      { text: 'minimal dark arrangement' },
      { text: 'echo-driven sound design' },
    ],
    type: 'genre',
  },
] as PromptTag[];
