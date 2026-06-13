import { PromptTag } from '~/types';

export default [
  /**
   * CHANTS CORE
   */
  {
    id: 'vocal_chant',
    comment:
      'Базовый chant-слой. Использовать как атмосферный или ритмический вокальный элемент, не как песенный вокал.',
    group: 'chant_core',
    label: 'Vocal Chant',
    positive: [
      { text: 'vocal chant' },
      { text: 'chant-like vocal phrases' },
      { text: 'rhythmic vocal chanting' },
      { text: 'human vocal texture' },
      { text: 'voice as ritual element' },
    ],
    type: 'vocals',
  },
  {
    id: 'deep_male_chant',
    comment:
      'Глубокий мужской chant для tribal, deep house, dub и dark club атмосферы.',
    group: 'chant_core',
    label: 'Deep Male Chant',
    positive: [
      { text: 'deep male chant' },
      { text: 'low male chant-like phrases' },
      { text: 'grounded vocal drone' },
      { text: 'deep human vocal texture' },
      { text: 'ritual male presence' },
    ],
    type: 'vocals',
  },
  {
    id: 'chant_like_phrases',
    comment:
      'Мягкая версия chant без ухода в полноценное хоровое или этническое исполнение.',
    group: 'chant_core',
    label: 'Chant-Like Phrases',
    positive: [
      { text: 'chant-like phrases' },
      { text: 'short repeated vocal phrases' },
      { text: 'rhythmic spoken chants' },
      { text: 'minimal vocal repetition' },
      { text: 'voice locked to percussion' },
    ],
    type: 'vocals',
  },

  /**
   * TRIBAL / RITUAL
   */
  {
    id: 'tribal_chant',
    comment: 'Основной chant-тег для tribal house и Afro-inspired grooves.',
    group: 'ritual',
    label: 'Tribal Chant',
    positive: [
      { text: 'tribal chant' },
      { text: 'tribal vocal phrases' },
      { text: 'chanting over percussion' },
      { text: 'ritual vocal presence' },
      { text: 'grounded human voice' },
    ],
    type: 'vocals',
  },
  {
    id: 'ritual_chant',
    comment: 'Более тёмный и ceremonial вариант chant-вокала.',
    group: 'ritual',
    label: 'Ritual Chant',
    positive: [
      { text: 'ritual chant' },
      { text: 'ceremonial vocal layer' },
      { text: 'deep ritual voice' },
      { text: 'spiritual vocal texture' },
      { text: 'hypnotic chant atmosphere' },
    ],
    type: 'vocals',
  },
  {
    id: 'spiritual_vocal_phrases',
    comment: 'Spiritual presence без превращения в госпел или поп-соул.',
    group: 'ritual',
    label: 'Spiritual Vocal Phrases',
    positive: [
      { text: 'spiritual vocal phrases' },
      { text: 'grounded spiritual presence' },
      { text: 'human vocal texture' },
      { text: 'deep emotional restraint' },
      { text: 'minimal sacred feeling' },
    ],
    type: 'vocals',
  },
  {
    id: 'ceremonial_voice',
    comment: 'Голос как часть церемонии / ritual groove.',
    group: 'ritual',
    label: 'Ceremonial Voice',
    positive: [
      { text: 'ceremonial voice' },
      { text: 'ritual human voice' },
      { text: 'voice embedded in percussion' },
      { text: 'hypnotic ceremonial phrases' },
      { text: 'deep communal vocal tone' },
    ],
    type: 'vocals',
  },

  /**
   * DRONES
   */
  {
    id: 'vocal_drone',
    comment: 'Голос как drone / texture, не как мелодия.',
    group: 'drone',
    label: 'Vocal Drone',
    positive: [
      { text: 'vocal drone' },
      { text: 'sustained human voice texture' },
      { text: 'low vocal resonance' },
      { text: 'voice as atmospheric layer' },
      { text: 'continuous vocal tone' },
    ],
    type: 'vocals',
  },
  {
    id: 'deep_vocal_drone',
    comment:
      'Низкий vocal drone для dark tribal, dub, LAZNCY и hypnotic house.',
    group: 'drone',
    label: 'Deep Vocal Drone',
    positive: [
      { text: 'deep vocal drone' },
      { text: 'low male vocal drone' },
      { text: 'subtle throat resonance' },
      { text: 'dark human resonance' },
      { text: 'slow evolving vocal tone' },
    ],
    type: 'vocals',
  },
  {
    id: 'wordless_vocal_drone',
    comment: 'Wordless drone без лирики и песенной структуры.',
    group: 'drone',
    label: 'Wordless Vocal Drone',
    positive: [
      { text: 'wordless vocal drone' },
      { text: 'non-lyrical vocal tone' },
      { text: 'sustained vowel texture' },
      { text: 'human voice as pad' },
      { text: 'no lyrical focus' },
    ],
    type: 'vocals',
  },

  /**
   * LAYERS
   */
  {
    id: 'human_vocal_texture',
    comment: 'Голос как текстура внутри микса.',
    group: 'layers',
    label: 'Human Vocal Texture',
    positive: [
      { text: 'human vocal texture' },
      { text: 'voice blended into atmosphere' },
      { text: 'textural vocal layer' },
      { text: 'non-lead vocal presence' },
      { text: 'organic human sound' },
    ],
    type: 'vocals',
  },
  {
    id: 'background_chant_layer',
    comment: 'Фоновый chant layer без выхода на передний план.',
    group: 'layers',
    label: 'Background Chant Layer',
    positive: [
      { text: 'background chant layer' },
      { text: 'distant chant texture' },
      { text: 'subtle vocal ritual layer' },
      { text: 'chant buried in the mix' },
      { text: 'atmospheric human voice' },
    ],
    type: 'vocals',
  },
  {
    id: 'communal_vocal_layer',
    comment: 'Лёгкое ощущение нескольких голосов без хора и gospel.',
    group: 'layers',
    label: 'Communal Vocal Layer',
    positive: [
      { text: 'communal vocal layer' },
      { text: 'multiple distant voices' },
      { text: 'human group vocal texture' },
      { text: 'ritual group presence' },
      { text: 'subtle collective voice' },
    ],
    type: 'vocals',
  },

  /**
   * CONTROL
   */
  {
    id: 'no_gospel_choir',
    comment: 'Контроль против gospel / choir / big vocal drama.',
    group: 'control',
    label: 'No Gospel Choir',
    positive: [
      { text: 'no gospel choir' },
      { text: 'minimal chant texture' },
      { text: 'restrained human vocal layer' },
      { text: 'no big choir arrangement' },
      { text: 'subtle ritual voice' },
    ],
    type: 'vocals',
  },
  {
    id: 'no_ethnic_cliche',
    comment: 'Контроль против карикатурной ethnic/world-music подачи.',
    group: 'control',
    label: 'No Ethnic Cliche',
    positive: [
      { text: 'subtle tribal vocal texture' },
      { text: 'restrained ritual presence' },
      { text: 'modern club context' },
      { text: 'no theatrical world-music vocal' },
      { text: 'understated human voice' },
    ],
    type: 'vocals',
  },
] as PromptTag[];
