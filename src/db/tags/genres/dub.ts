import { PromptTag } from '~/types';

const dubPositive = [
  { text: 'deep echo space' },
  { text: 'tape delay feedback' },
  { text: 'spring reverb tails' },
  { text: 'heavy bass weight' },
  { text: 'studio as instrument' },
  { text: 'analog saturation' },
  { text: 'minimal arrangement' },
];

export default [
  /**
   * DUB
   */
  {
    id: 'dub',
    comment:
      'Базовый dub-архетип. Пространство, задержки, бас и минимализм важнее мелодии.',
    group: 'dub',
    label: 'Dub',
    positive: [{ text: 'Dub' }, ...dubPositive],
    type: 'genre',
  },
  {
    id: 'roots_dub',
    comment:
      'Классический roots dub с регги-базой, органом, басом и аналоговыми эффектами.',
    group: 'dub',
    label: 'Roots Dub',
    positive: [
      { text: 'Roots Dub' },
      ...dubPositive,
      { text: 'organic rhythm section' },
      { text: 'deep reggae bass foundation' },
      { text: 'echoed guitar and organ stabs' },
      { text: 'warm analog mixer sound' },
    ],
    type: 'genre',
  },
  {
    id: 'deep_dub',
    comment:
      'Глубокий атмосферный dub с акцентом на саб, пространство и медленное развитие.',
    group: 'dub',
    label: 'Deep Dub',
    positive: [
      { text: 'Deep Dub' },
      ...dubPositive,
      { text: 'sub-heavy atmosphere' },
      { text: 'slow-moving echo space' },
      { text: 'deep low-end pressure' },
      { text: 'dark analog delay trails' },
    ],
    type: 'genre',
  },
  {
    id: 'minimal_dub',
    comment:
      'Минималистичная сторона dub с большим количеством воздуха и малым количеством событий.',
    group: 'dub',
    label: 'Minimal Dub',
    positive: [
      { text: 'Minimal Dub' },
      ...dubPositive,
      { text: 'minimal rhythmic movement' },
      { text: 'sparse arrangement' },
      { text: 'large negative space' },
    ],
    type: 'genre',
  },
  {
    id: 'modern_dub',
    comment:
      'Современная интерпретация dub с электронной аранжировкой и актуальным продакшеном.',
    group: 'dub',
    label: 'Modern Dub',
    positive: [
      { text: 'Modern Dub' },
      ...dubPositive,
      { text: 'modern electronic production' },
      { text: 'clean low-end' },
      { text: 'contemporary dub aesthetics' },
    ],
    type: 'genre',
  },
  {
    id: 'digital_dub',
    comment:
      'Dub с цифровыми эффектами, драм-машинами и синтетическим характером.',
    group: 'dub',
    label: 'Digital Dub',
    positive: [
      { text: 'Digital Dub' },
      ...dubPositive,
      { text: 'digital delay lines' },
      { text: 'dubwise drum machine groove' },
      { text: 'synthetic echo space' },
    ],
    type: 'genre',
  },
  {
    id: 'dubwise',
    comment:
      'Dubwise-подход. Микшер, дилеи и эффекты используются как полноценный музыкальный инструмент.',
    group: 'dub',
    label: 'Dubwise',
    positive: [
      { text: 'Dubwise' },
      ...dubPositive,
      { text: 'live effect manipulation' },
      { text: 'creative delay throws' },
      { text: 'mixing console performance' },
    ],
    type: 'genre',
  },

  /**
   * SPACE
   */
  {
    id: 'ambient_dub',
    comment:
      'Ambient + Dub. Максимум воздуха, реверберации и медленного развития.',
    group: 'dub',
    label: 'Ambient Dub',
    positive: [
      { text: 'Ambient Dub' },
      ...dubPositive,
      { text: 'floating echo textures' },
      { text: 'wide atmospheric reverb' },
      { text: 'slow evolving delay trails' },
    ],
    type: 'genre',
  },
  {
    id: 'space_dub',
    comment:
      'Космическая версия dub с огромным пространством и бесконечными хвостами эффектов.',
    group: 'dub',
    label: 'Space Dub',
    positive: [
      { text: 'Space Dub' },
      ...dubPositive,
      { text: 'cosmic echo chamber' },
      { text: 'wide stereo delay field' },
      { text: 'echoes disappearing into space' },
    ],
    type: 'genre',
  },
  {
    id: 'ghost_dub',
    comment:
      'Призрачный dub. Полурастворённые звуки, фантомные эхо и минимальное присутствие.',
    group: 'dub',
    label: 'Ghost Dub',
    positive: [
      { text: 'Ghost Dub' },
      ...dubPositive,
      { text: 'faint echoes' },
      { text: 'haunted delay trails' },
      { text: 'subtle bass presence' },
      { text: 'distant reverb ghosts' },
    ],
    type: 'genre',
  },
  {
    id: 'hypnotic_dub',
    comment:
      'Гипнотический dub с циклическим движением и повторяющимися пространственными структурами.',
    group: 'dub',
    label: 'Hypnotic Dub',
    positive: [
      { text: 'Hypnotic Dub' },
      ...dubPositive,
      { text: 'repetitive delay cycles' },
      { text: 'looping atmosphere' },
      { text: 'hypnotic pulse' },
    ],
    type: 'genre',
  },
  {
    id: 'spiritual_dub',
    comment:
      'Медитативный dub с духовным оттенком и созерцательной атмосферой.',
    group: 'dub',
    label: 'Spiritual Dub',
    positive: [
      { text: 'Spiritual Dub' },
      ...dubPositive,
      { text: 'meditative atmosphere' },
      { text: 'deep contemplation' },
      { text: 'organic spiritual energy' },
    ],
    type: 'genre',
  },

  /**
   * PRESSURE
   */
  {
    id: 'sub_bass_dub',
    comment: 'Акцент на саб-бас и физическое ощущение давления низких частот.',
    group: 'dub',
    label: 'Sub-Bass Dub',
    positive: [
      { text: 'Sub-Bass Dub' },
      ...dubPositive,
      { text: 'deep sub frequencies' },
      { text: 'bass pressure' },
      { text: 'low-end dominance' },
    ],
    type: 'genre',
  },
  {
    id: 'sub_pressure',
    comment:
      'Концентрированный низкочастотный напор без обязательной привязки к регги-корням.',
    group: 'dub',
    label: 'Sub Pressure',
    positive: [
      { text: 'Sub Pressure' },
      ...dubPositive,
      { text: 'physical bass impact' },
      { text: 'deep sub energy' },
    ],
    type: 'genre',
  },
  {
    id: 'bass_weight',
    comment: 'Тяжёлый вес баса как основной элемент композиции.',
    group: 'dub',
    label: 'Bass Weight',
    positive: [
      { text: 'Bass Weight' },
      ...dubPositive,
      { text: 'heavy low-end foundation' },
      { text: 'weighty bass presence' },
    ],
    type: 'genre',
  },
  {
    id: 'slow_motion_dub',
    comment:
      'Замедленное ощущение времени через пространство, эхо и тяжёлый бас.',
    group: 'dub',
    label: 'Slow Motion Dub',
    positive: [
      { text: 'Slow Motion Dub' },
      ...dubPositive,
      { text: 'slow-moving atmosphere' },
      { text: 'stretched time feeling' },
    ],
    type: 'genre',
  },
  {
    id: 'low_end_pressure',
    comment: 'Низкочастотное давление и массивный фундамент микса.',
    group: 'dub',
    label: 'Low-End Pressure',
    positive: [
      { text: 'Low-End Pressure' },
      ...dubPositive,
      { text: 'massive low frequencies' },
      { text: 'sub bass foundation' },
    ],
    type: 'genre',
  },

  /**
   * FX
   */
  {
    id: 'echo_dub',
    comment:
      'Dub через эхо. Пространство строится прежде всего повторениями и отражениями.',
    group: 'dub',
    label: 'Echo Dub',
    positive: [
      { text: 'Echo Dub' },
      ...dubPositive,
      { text: 'echo-driven production' },
      { text: 'repeating delay reflections' },
    ],
    type: 'genre',
  },
  {
    id: 'delay_dub',
    comment: 'Dub через задержки и длинные feedback-цепочки.',
    group: 'dub',
    label: 'Delay Dub',
    positive: [
      { text: 'Delay Dub' },
      ...dubPositive,
      { text: 'long feedback chains' },
      { text: 'delay-focused sound design' },
    ],
    type: 'genre',
  },
  {
    id: 'echo_chamber',
    comment:
      'Образ большого эхо-пространства, работающего как отдельный инструмент.',
    group: 'dub',
    label: 'Echo Chamber',
    positive: [
      { text: 'Echo Chamber' },
      ...dubPositive,
      { text: 'large reflective space' },
      { text: 'echo architecture' },
    ],
    type: 'genre',
  },
  {
    id: 'infinite_echo',
    comment:
      'Максимально длинные и затухающие повторения, уходящие за пределы микса.',
    group: 'dub',
    label: 'Infinite Echo',
    positive: [
      { text: 'Infinite Echo' },
      ...dubPositive,
      { text: 'endless delay tails' },
      { text: 'infinite feedback feel' },
    ],
    type: 'genre',
  },
  {
    id: 'studio_dub',
    comment: 'Студийный dub-подход, где эффекты становятся частью композиции.',
    group: 'dub',
    label: 'Studio Dub',
    positive: [
      { text: 'Studio Dub' },
      ...dubPositive,
      { text: 'studio experimentation' },
      { text: 'effects as instruments' },
    ],
    type: 'genre',
  },

  /**
   * DUB TECHNO
   */
  {
    id: 'dub_techno',
    comment:
      'Пересечение dub и techno. Эхо-хорды, повторение и гипнотический пульс.',
    group: 'dub',
    label: 'Dub Techno',
    positive: [
      { text: 'Dub Techno' },
      { text: 'echo-soaked chords' },
      { text: 'deep repetitive pulse' },
      { text: 'filtered chord stabs' },
      { text: 'long delay feedback' },
      { text: 'minimal hypnotic movement' },
      { text: 'sub bass pressure' },
    ],
    type: 'genre',
  },
  {
    id: 'deep_dub_techno',
    comment:
      'Глубокий атмосферный dub techno с акцентом на пространство и текстуры.',
    group: 'dub',
    label: 'Deep Dub Techno',
    positive: [
      { text: 'Deep Dub Techno' },
      { text: 'submerged chord echoes' },
      { text: 'deep atmospheric pulse' },
      { text: 'slow filter movement' },
      { text: 'distant reverb haze' },
      { text: 'warm analog saturation' },
    ],
    type: 'genre',
  },
  {
    id: 'minimal_dub_techno',
    comment:
      'Минималистичный dub techno с сокращённой аранжировкой и циклическим развитием.',
    group: 'dub',
    label: 'Minimal Dub Techno',
    positive: [
      { text: 'Minimal Dub Techno' },
      { text: 'minimal techno pulse' },
      { text: 'echoing chord stabs' },
      { text: 'repetitive structure' },
    ],
    type: 'genre',
  },
  {
    id: 'atmospheric_dub_techno',
    comment:
      'Максимально атмосферная сторона dub techno с большим количеством пространства.',
    group: 'dub',
    label: 'Atmospheric Dub Techno',
    positive: [
      { text: 'Atmospheric Dub Techno' },
      { text: 'immersive spatial textures' },
      { text: 'ambient dub chords' },
      { text: 'deep atmosphere' },
    ],
    type: 'genre',
  },
  {
    id: 'berlin_dub_techno',
    comment:
      'Берлинская школа dub techno: минимализм, повторение и глубокая фактура.',
    group: 'dub',
    label: 'Berlin Dub Techno',
    positive: [
      { text: 'Berlin Dub Techno' },
      { text: 'Berlin underground atmosphere' },
      { text: 'minimal hypnotic repetition' },
      { text: 'deep techno pulse' },
    ],
    type: 'genre',
  },
  {
    id: 'basic_channel',
    comment:
      'Референс на Basic Channel. Один из фундаментальных архетипов dub techno.',
    group: 'dub',
    label: 'Basic Channel',
    positive: [
      { text: 'Basic Channel' },
      { text: 'minimal dub techno' },
      { text: 'echoing chord stabs' },
      { text: 'deep analog pulse' },
      { text: 'Berlin dub techno atmosphere' },
      { text: 'repetitive hypnotic structure' },
    ],
    type: 'genre',
  },
  {
    id: 'deep_chord',
    comment:
      'Референс на Deep Chord. Мягкие размытые хорды и глубокое атмосферное пространство.',
    group: 'dub',
    label: 'Deep Chord',
    positive: [
      { text: 'Deep Chord' },
      { text: 'deep dub techno chords' },
      { text: 'washed-out chord echoes' },
      { text: 'soft atmospheric saturation' },
      { text: 'endless reverb space' },
      { text: 'hypnotic chord decay' },
    ],
    type: 'genre',
  },

  /**
   * EXPERIMENTAL
   */
  {
    id: 'industrial_dub',
    comment:
      'Смешение dub-пространства с индустриальными текстурами и механической средой.',
    group: 'dub',
    label: 'Industrial Dub',
    positive: [
      { text: 'Industrial Dub' },
      { text: 'metallic delay trails' },
      { text: 'concrete reverb space' },
      { text: 'machine-like bass pressure' },
      { text: 'distorted dub echoes' },
      { text: 'cold industrial atmosphere' },
    ],
    type: 'genre',
  },
  {
    id: 'dark_dub',
    comment:
      'Тёмный dub с мрачной атмосферой, холодным пространством и тяжёлым низом.',
    group: 'dub',
    label: 'Dark Dub',
    positive: [
      { text: 'Dark Dub' },
      { text: 'heavy low-end pressure' },
      { text: 'cold echo space' },
      { text: 'dark delay feedback' },
      { text: 'minimal ominous rhythm' },
      { text: 'shadowy dub atmosphere' },
    ],
    type: 'genre',
  },
  {
    id: 'experimental_dub',
    comment:
      'Экспериментальная сторона dub с нетипичными эффектами и звуковым дизайном.',
    group: 'dub',
    label: 'Experimental Dub',
    positive: [
      { text: 'Experimental Dub' },
      { text: 'unusual delay processing' },
      { text: 'abstract sound design' },
      { text: 'non-standard dub textures' },
      { text: 'creative studio experimentation' },
    ],
    type: 'genre',
  },
] as PromptTag[];
