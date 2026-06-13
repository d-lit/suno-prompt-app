import { PromptTag } from '~/types';

export default [
  /**
   * NOSTALGIA
   */
  {
    id: 'nostalgic',
    comment: 'Один из самых важных атмосферных тегов всей базы.',
    group: 'nostalgia',
    label: 'Nostalgic',
    positive: [
      { text: 'nostalgic atmosphere' },
      { text: 'sense of memory' },
      { text: 'looking back' },
      { text: 'familiar emotional landscape' },
      { text: 'gentle recollection' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'warm_nostalgia',
    comment: 'Тёплая ностальгия без грусти.',
    group: 'nostalgia',
    label: 'Warm Nostalgia',
    positive: [
      { text: 'warm nostalgia' },
      { text: 'fond memories' },
      { text: 'comforting recollection' },
      { text: 'soft emotional warmth' },
      { text: 'gentle remembrance' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'urban_nostalgia',
    comment: 'Ностальгия по городу, поездкам и местам.',
    group: 'nostalgia',
    label: 'Urban Nostalgia',
    positive: [
      { text: 'urban nostalgia' },
      { text: 'memories of the city' },
      { text: 'familiar streets' },
      { text: 'city remembered at night' },
      { text: 'urban recollection' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'analog_nostalgia',
    comment: 'Ностальгия через ощущение времени и носителей.',
    group: 'nostalgia',
    label: 'Analog Nostalgia',
    positive: [
      { text: 'analog nostalgia' },
      { text: 'faded memories' },
      { text: 'old recordings' },
      { text: 'time-worn atmosphere' },
      { text: 'memory preserved in sound' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'future_nostalgia',
    comment: 'Очень city-pop и electronic-jazz настроение.',
    group: 'nostalgia',
    label: 'Future Nostalgia',
    positive: [
      { text: 'future nostalgia' },
      { text: 'nostalgia for something not yet gone' },
      { text: 'modern memories' },
      { text: 'retro-futuristic longing' },
      { text: 'emotional time displacement' },
    ],
    type: 'atmosphere',
  },

  /**
   * REFLECTION
   */
  {
    id: 'reflective',
    comment: 'Созерцательная атмосфера без явной грусти.',
    group: 'reflection',
    label: 'Reflective',
    positive: [
      { text: 'reflective atmosphere' },
      { text: 'quiet reflection' },
      { text: 'thoughtful mood' },
      { text: 'personal observation' },
      { text: 'inner focus' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'introspective',
    comment: 'Внутренний взгляд и внимание к собственным мыслям.',
    group: 'reflection',
    label: 'Introspective',
    positive: [
      { text: 'introspective atmosphere' },
      { text: 'inner dialogue' },
      { text: 'personal contemplation' },
      { text: 'deep reflection' },
      { text: 'quiet emotional space' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'contemplative',
    comment: 'Более спокойная и философская версия reflective.',
    group: 'reflection',
    label: 'Contemplative',
    positive: [
      { text: 'contemplative mood' },
      { text: 'slow reflection' },
      { text: 'unhurried thought' },
      { text: 'meditative observation' },
      { text: 'calm awareness' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'observational',
    comment: 'Очень близко к философии LAZNCY.',
    group: 'reflection',
    label: 'Observational',
    positive: [
      { text: 'observational atmosphere' },
      { text: 'watching rather than acting' },
      { text: 'detached observation' },
      { text: 'quiet awareness' },
      { text: 'documenting the moment' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'thoughtful',
    comment: 'Лёгкая интеллектуальная окраска без академичности.',
    group: 'reflection',
    label: 'Thoughtful',
    positive: [
      { text: 'thoughtful atmosphere' },
      { text: 'careful reflection' },
      { text: 'considered emotional tone' },
      { text: 'gentle focus' },
      { text: 'quiet intelligence' },
    ],
    type: 'atmosphere',
  },

  /**
   * DREAMY
   */
  {
    id: 'dreamy',
    comment: 'Универсальный dreamy слой для UKG, Liquid, City Pop и Balearic.',
    group: 'dreamy',
    label: 'Dreamy',
    positive: [
      { text: 'dreamy atmosphere' },
      { text: 'soft dreamlike mood' },
      { text: 'gentle unreality' },
      { text: 'floating emotions' },
      { text: 'soft focus feeling' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'floating',
    comment: 'Ощущение плавания и отсутствия веса.',
    group: 'dreamy',
    label: 'Floating',
    positive: [
      { text: 'floating atmosphere' },
      { text: 'weightless feeling' },
      { text: 'slow drift' },
      { text: 'soft suspension' },
      { text: 'gentle movement through space' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'weightless',
    comment: 'Почти космическое ощущение лёгкости.',
    group: 'dreamy',
    label: 'Weightless',
    positive: [
      { text: 'weightless atmosphere' },
      { text: 'absence of gravity' },
      { text: 'effortless motion' },
      { text: 'light suspended feeling' },
      { text: 'open emotional space' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'soft_focus',
    comment: 'Мягкие края, размытые детали и эмоциональная дымка.',
    group: 'dreamy',
    label: 'Soft Focus',
    positive: [
      { text: 'soft focus atmosphere' },
      { text: 'blurred edges' },
      { text: 'gentle haze' },
      { text: 'dreamlike softness' },
      { text: 'imperfect memory' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'dreamlike',
    comment: 'Более кинематографичная версия dreamy.',
    group: 'dreamy',
    label: 'Dreamlike',
    positive: [
      { text: 'dreamlike atmosphere' },
      { text: 'half-remembered scenes' },
      { text: 'subtle unreality' },
      { text: 'slow emotional drift' },
      { text: 'cinematic dream state' },
    ],
    type: 'atmosphere',
  },

  /**
   * DETACHED
   */
  {
    id: 'detached',
    comment: 'Один из важнейших тегов для LAZNCY и observational музыки.',
    group: 'detached',
    label: 'Detached',
    positive: [
      { text: 'detached atmosphere' },
      { text: 'emotional distance' },
      { text: 'calm observation' },
      { text: 'restrained emotional expression' },
      { text: 'watching from afar' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'emotionally_restrained',
    comment: 'Эмоции есть, но не выставляются напоказ.',
    group: 'detached',
    label: 'Emotionally Restrained',
    positive: [
      { text: 'emotionally restrained' },
      { text: 'controlled emotional tone' },
      { text: 'quiet feeling' },
      { text: 'subtle emotional presence' },
      { text: 'understated mood' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'observational_distance',
    comment: 'Наблюдение вместо участия.',
    group: 'detached',
    label: 'Observational Distance',
    positive: [
      { text: 'observational distance' },
      { text: 'watching events unfold' },
      { text: 'objective perspective' },
      { text: 'distance from the action' },
      { text: 'quiet awareness' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'neutral_presence',
    comment: 'Минимум драматизма и эмоционального давления.',
    group: 'detached',
    label: 'Neutral Presence',
    positive: [
      { text: 'neutral presence' },
      { text: 'calm emotional state' },
      { text: 'unforced atmosphere' },
      { text: 'quiet balance' },
      { text: 'no emotional extremes' },
    ],
    type: 'atmosphere',
  },

  /**
   * WARMTH
   */
  {
    id: 'warm',
    comment: 'Универсальный тёплый эмоциональный слой.',
    group: 'warmth',
    label: 'Warm',
    positive: [
      { text: 'warm atmosphere' },
      { text: 'human warmth' },
      { text: 'comforting mood' },
      { text: 'gentle emotional glow' },
      { text: 'soft welcoming feeling' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'human',
    comment: 'Подчёркивает человеческое присутствие внутри музыки.',
    group: 'warmth',
    label: 'Human',
    positive: [
      { text: 'human atmosphere' },
      { text: 'human presence' },
      { text: 'personal scale' },
      { text: 'everyday emotional reality' },
      { text: 'lived experience' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'gentle',
    comment: 'Мягкость без сентиментальности.',
    group: 'warmth',
    label: 'Gentle',
    positive: [
      { text: 'gentle atmosphere' },
      { text: 'soft emotional movement' },
      { text: 'quiet warmth' },
      { text: 'careful emotional tone' },
      { text: 'subtle kindness' },
    ],
    type: 'atmosphere',
  },

  /**
   * SOULFUL
   */
  {
    id: 'soulful',
    comment: 'Один из ключевых тегов для UKG, House и Deep Jazz.',
    group: 'soulful',
    label: 'Soulful',
    positive: [
      { text: 'soulful atmosphere' },
      { text: 'deep human feeling' },
      { text: 'warm emotional resonance' },
      { text: 'sincere expression' },
      { text: 'emotional depth' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'deep_soulful',
    comment: 'Более взрослый и ночной soulful.',
    group: 'soulful',
    label: 'Deep Soulful',
    positive: [
      { text: 'deep soulful atmosphere' },
      { text: 'late-night emotional depth' },
      { text: 'restrained soulfulness' },
      { text: 'warm inner feeling' },
      { text: 'human emotional gravity' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'heartfelt',
    comment: 'Искренность без драматического пафоса.',
    group: 'soulful',
    label: 'Heartfelt',
    positive: [
      { text: 'heartfelt atmosphere' },
      { text: 'genuine emotional tone' },
      { text: 'quiet sincerity' },
      { text: 'personal warmth' },
      { text: 'honest feeling' },
    ],
    type: 'atmosphere',
  },

  /**
   * MELANCHOLY
   */
  {
    id: 'melancholic',
    comment: 'Классический liquid / city-pop / deep-house слой.',
    group: 'melancholy',
    label: 'Melancholic',
    positive: [
      { text: 'melancholic atmosphere' },
      { text: 'gentle sadness' },
      { text: 'quiet longing' },
      { text: 'emotional shadow' },
      { text: 'beautiful melancholy' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'bittersweet',
    comment: 'Один из самых полезных эмоциональных оттенков.',
    group: 'melancholy',
    label: 'Bittersweet',
    positive: [
      { text: 'bittersweet atmosphere' },
      { text: 'mixed emotions' },
      { text: 'joy and sadness together' },
      { text: 'warm melancholy' },
      { text: 'tender emotional contrast' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'fading_memory',
    comment: 'Очень хорошо ложится на nostalgic + dreamy.',
    group: 'melancholy',
    label: 'Fading Memory',
    positive: [
      { text: 'fading memory' },
      { text: 'distant recollection' },
      { text: 'memory slowly disappearing' },
      { text: 'soft emotional residue' },
      { text: 'echo of the past' },
    ],
    type: 'atmosphere',
  },
] as PromptTag[];
