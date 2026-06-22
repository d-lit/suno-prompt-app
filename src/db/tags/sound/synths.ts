import { PromptTag } from '~/types';

export default [
  /**
   * SYNTHS
   */
  {
    id: 'analog_synth',
    comment:
      'Базовый аналоговый синтезаторный слой для UKG, House, DnB, Jazz hybrids и Bass Music.',
    group: 'analog',
    label: 'Analog Synth',
    positive: [
      { text: 'analog synthesizer' },
      { text: 'warm analog synth tones' },
      { text: 'subtle analog instability' },
      { text: 'rich analog harmonics' },
      { text: 'vintage synthesizer character' },
    ],
    type: 'sound',
  },
  {
    id: 'analog_synth_stabs',
    comment: 'Короткие синтовые акценты вместо лидов и падов.',
    group: 'analog',
    label: 'Analog Synth Stabs',
    positive: [
      { text: 'analog synth stabs' },
      { text: 'short synth accents' },
      { text: 'sparse analog chord hits' },
      { text: 'minimal synth punctuation' },
      { text: 'short harmonic synth events' },
    ],
    type: 'sound',
  },
  {
    id: 'analog_synth_layers',
    comment: 'Фоновые аналоговые слои для глубины и теплоты микса.',
    group: 'analog',
    label: 'Analog Synth Layers',
    positive: [
      { text: 'subtle analog synth layers' },
      { text: 'warm background synthesizers' },
      { text: 'soft analog texture' },
      { text: 'supporting synth bed' },
      { text: 'understated analog atmosphere' },
    ],
    type: 'sound',
  },
  {
    id: 'polysynth_chords',
    comment:
      'Ключевой слой для electronic jazz, future jazz, synth-led jazz и anime drumfunk.',
    group: 'analog',
    label: 'Polysynth Chords',
    positive: [
      { text: 'polysynth chords' },
      { text: 'lush polysynth harmony' },
      { text: 'modern synth jazz harmony' },
      { text: 'wide synth chords' },
      { text: 'synth replacing traditional piano' },
    ],
    type: 'sound',
  },
  {
    id: 'polysynth_textures',
    comment: 'Менее гармонический и более атмосферный polysynth слой.',
    group: 'analog',
    label: 'Polysynth Textures',
    positive: [
      { text: 'soft polysynth textures' },
      { text: 'evolving synth layers' },
      { text: 'ambient polysynth bed' },
      { text: 'wide stereo synth texture' },
      { text: 'subtle harmonic support' },
    ],
    type: 'sound',
  },
  {
    id: 'expressive_synth_lead',
    comment:
      'Синтовый лид вместо саксофона или трубы. Особенно полезен для electronic jazz.',
    group: 'lead',
    label: 'Expressive Synth Lead',
    positive: [
      { text: 'expressive analog synth lead' },
      { text: 'melodic synthesizer lead' },
      { text: 'synth carries melodic phrases' },
      { text: 'emotional synth lead' },
      { text: 'human-like phrasing' },
    ],
    type: 'sound',
  },
  {
    id: 'electronic_jazz_lead',
    comment: 'Future jazz / electronic jazz лид с джазовой фразировкой.',
    group: 'lead',
    label: 'Electronic Jazz Lead',
    positive: [
      { text: 'electronic jazz lead' },
      { text: 'synth improvisation' },
      { text: 'jazz-inspired synth phrasing' },
      { text: 'fluid synth melodies' },
      { text: 'modern jazz synthesizer lead' },
    ],
    type: 'sound',
  },
  {
    id: 'anime_synth_lead',
    comment:
      'Эмоциональный синтовый лид для anime drumfunk / city-night territory.',
    group: 'lead',
    label: 'Anime Synth Lead',
    positive: [
      { text: 'emotional analog synth lead' },
      { text: 'nostalgic synth melody' },
      { text: 'anime ending atmosphere' },
      { text: 'lyrical synth phrases' },
      { text: 'late-night city mood' },
    ],
    type: 'sound',
  },
  /**
   * Fm
   */
  {
    id: 'fm_synth',
    comment:
      'Сильный тембровый модификатор. Даёт digital glass, bell tones и 80s character.',
    group: 'fm',
    label: 'FM Synth',
    positive: [
      { text: 'FM synthesizer' },
      { text: 'digital FM synthesis' },
      { text: 'glassy digital tones' },
      { text: '80s synthesizer character' },
      { text: 'clean digital timbre' },
    ],
    type: 'sound',
  },
  {
    id: 'fm_bells',
    comment: 'Колокольчиковые FM-тембры для Balearic, Tropical и City Pop.',
    group: 'fm',
    label: 'FM Bells',
    positive: [
      { text: 'digital bell-like tones' },
      { text: 'FM bell sounds' },
      { text: 'crystalline synth tones' },
      { text: 'bright digital accents' },
      { text: 'glassy melodic phrases' },
    ],
    type: 'sound',
  },
  {
    id: 'glassy_synth_chords',
    comment:
      'Стеклянные цифровые аккорды для tropical, Balearic и retro-futuristic territory.',
    group: 'fm',
    label: 'Glassy Synth Chords',
    positive: [
      { text: 'glassy synth chords' },
      { text: 'bright digital harmony' },
      { text: 'clean FM chord texture' },
      { text: 'dreamy synthetic harmony' },
      { text: 'retro digital warmth' },
    ],
    type: 'sound',
  },
  /**
   * Atmosphere
   */
  {
    id: 'space_disco_synth',
    comment: 'Космический ретро-футуристичный синтезаторный слой.',
    group: 'cosmic',
    label: 'Space Disco Synth',
    positive: [
      { text: 'space-disco synthesizers' },
      { text: 'retro futuristic synths' },
      { text: 'cosmic analog synthesizers' },
      { text: '80s electronic atmosphere' },
      { text: 'space-disco character' },
    ],
    type: 'sound',
  },
  {
    id: 'italo_synth',
    comment: 'Italo-disco синтезаторная окраска.',
    group: 'cosmic',
    label: 'Italo Synth',
    positive: [
      { text: 'italo-disco synthesizers' },
      { text: 'bright analog synth lines' },
      { text: 'retro electronic melodies' },
      { text: 'dreamy synth hooks' },
      { text: 'vintage European synth sound' },
    ],
    type: 'sound',
  },
  {
    id: 'arpeggiators',
    comment:
      'Арпеджиаторы для space disco, Detroit, cosmic и Balearic hybrids.',
    group: 'cosmic',
    label: 'Arpeggiators',
    positive: [
      { text: 'arpeggiated synth lines' },
      { text: 'analog arpeggiators' },
      { text: 'repeating synth sequences' },
      { text: 'hypnotic arpeggios' },
      { text: 'retro electronic motion' },
    ],
    type: 'sound',
  },
  {
    id: 'detroit_synth',
    comment: 'Холодный Detroit-синтезаторный язык.',
    group: 'detroit',
    label: 'Detroit Synth',
    positive: [
      { text: 'Detroit-style synthesizers' },
      { text: 'cold analog synths' },
      { text: 'minimal futuristic tones' },
      { text: 'mechanical precision' },
      { text: 'urban isolation atmosphere' },
    ],
    type: 'sound',
  },
  {
    id: 'detached_synth_textures',
    comment:
      'Отстранённые атмосферные синты для Detroit, minimal UKG и deep house.',
    group: 'detroit',
    label: 'Detached Synth Textures',
    positive: [
      { text: 'detached synth textures' },
      { text: 'cool atmospheric synth layers' },
      { text: 'minimal emotional expression' },
      { text: 'restrained synth atmosphere' },
      { text: 'night-drive mood' },
    ],
    type: 'sound',
  },
  /**
   * Pads
   */
  {
    id: 'atmospheric_pads',
    comment: 'Самый универсальный pad слой в базе.',
    group: 'pads',
    label: 'Atmospheric Pads',
    positive: [
      { text: 'atmospheric pads' },
      { text: 'airy pads' },
      { text: 'wide ambient pads' },
      { text: 'spacious synthesizer layers' },
      { text: 'immersive atmosphere' },
    ],
    type: 'sound',
  },
  {
    id: 'cinematic_pads',
    comment: 'Кинематографичные пады с большим пространством.',
    group: 'pads',
    label: 'Cinematic Pads',
    positive: [
      { text: 'wide cinematic pads' },
      { text: 'large atmospheric layers' },
      { text: 'deep emotional space' },
      { text: 'slow evolving ambience' },
      { text: 'cinematic atmosphere' },
    ],
    type: 'sound',
  },
  {
    id: 'cosmic_pads',
    comment: 'Космические и ретро-футуристичные пады.',
    group: 'pads',
    label: 'Cosmic Pads',
    positive: [
      { text: 'cosmic pads' },
      { text: 'floating synth clouds' },
      { text: 'retro futuristic atmosphere' },
      { text: 'space-inspired ambience' },
      { text: 'deep cosmic textures' },
    ],
    type: 'sound',
  },
  {
    id: 'ambient_layers',
    comment: 'Фоновый ambient слой без явной мелодической функции.',
    group: 'pads',
    label: 'Ambient Layers',
    positive: [
      { text: 'ambient layers' },
      { text: 'subtle background textures' },
      { text: 'soft evolving atmosphere' },
      { text: 'slow moving ambience' },
      { text: 'environmental synth bed' },
    ],
    type: 'sound',
  },
  {
    id: 'airy_textures',
    comment:
      'Воздушные синтовые текстуры для liquid, Balearic, atmospheric DnB и LAZNCY.',
    group: 'pads',
    label: 'Airy Textures',
    positive: [
      { text: 'airy textures' },
      { text: 'light atmospheric layers' },
      { text: 'floating synth tones' },
      { text: 'soft high-frequency ambience' },
      { text: 'open spacious atmosphere' },
    ],
    type: 'sound',
  },
  /**
   * Ambient
   */
  {
    id: 'drifting_synths',
    comment: 'Медленно дрейфующие синты для LAZNCY и sound studies.',
    group: 'ambient',
    label: 'Drifting Synths',
    positive: [
      { text: 'drifting synthesizer layers' },
      { text: 'slow evolving synth movement' },
      { text: 'gradual modulation' },
      { text: 'continuous harmonic drift' },
      { text: 'slow atmospheric evolution' },
    ],
    type: 'sound',
  },
  {
    id: 'unstable_synth_motion',
    comment: 'Психоделический синтовый слой с нестабильной высотой тона.',
    group: 'ambient',
    label: 'Unstable Synth Motion',
    positive: [
      { text: 'unstable pitch movement' },
      { text: 'psychedelic synth motion' },
      { text: 'slow detuning' },
      { text: 'strange modulation' },
      { text: 'organic synth instability' },
    ],
    type: 'sound',
  },
  {
    id: 'granular_synth_texture',
    comment: 'Гранулярные цифровые текстуры для abstract electronic и LAZNCY.',
    group: 'ambient',
    label: 'Granular Synth Texture',
    positive: [
      { text: 'granular synth texture' },
      { text: 'micro-fragmented synth sounds' },
      { text: 'digital particles' },
      { text: 'subtle granular processing' },
      { text: 'texture-driven synthesis' },
    ],
    type: 'sound',
  },
  /**
   * BASS
   */
  {
    id: 'analog_synth_bass',
    comment:
      'Жирный аналоговый синт-бас. Один из ключевых элементов Euro Disco и Synth Pop.',
    group: 'bass',
    label: 'Analog Synth Bass',
    positive: [
      { text: 'Analog Synth Bass' },
      { text: 'fat synth bassline' },
      { text: 'warm analog low-end' },
      { text: 'driving bass groove' },
    ],
    type: 'sound',
  },
  {
    id: 'driving_synth_bass',
    comment: 'Напористый синт-бас для Italo Disco и Hi-NRG.',
    group: 'bass',
    label: 'Driving Synth Bass',
    positive: [
      { text: 'Driving Synth Bass' },
      { text: 'energetic bass pulse' },
      { text: 'sequenced bass movement' },
      { text: 'dancefloor bassline' },
    ],
    type: 'sound',
  },
  {
    id: 'sequenced_synth_bass',
    comment: 'Секвенсорный синт-бас в духе европейской электроники 80-х.',
    group: 'bass',
    label: 'Sequenced Synth Bass',
    positive: [
      { text: 'Sequenced Synth Bass' },
      { text: 'step-sequenced bassline' },
      { text: 'electronic bass pattern' },
      { text: 'repetitive synth groove' },
    ],
    type: 'sound',
  },

  /**
   * DRUM MACHINES
   */
  {
    id: 'linndrum',
    comment:
      'Легендарная LinnDrum. Вероятно один из самых сильных токенов всего файла.',
    group: 'drums',
    label: 'LinnDrum',
    positive: [
      { text: 'LinnDrum' },
      { text: 'Linn Drum Machine' },
      { text: 'classic 80s drum machine' },
      { text: 'punchy electronic drums' },
    ],
    type: 'sound',
  },
  {
    id: 'eighties_drum_machine',
    comment: 'Обобщённый звук драм-машин 80-х.',
    group: 'drums',
    label: '80s Drum Machine',
    positive: [
      { text: '80s Drum Machine' },
      { text: 'vintage drum machine' },
      { text: 'electronic drum groove' },
      { text: 'retro rhythm section' },
    ],
    type: 'sound',
  },
  {
    id: 'vintage_drum_machine',
    comment: 'Менее конкретный, но потенциально сильный датасетный токен.',
    group: 'drums',
    label: 'Vintage Drum Machine',
    positive: [
      { text: 'Vintage Drum Machine' },
      { text: 'retro electronic drums' },
      { text: 'old-school drum programming' },
    ],
    type: 'sound',
  },

  /**
   * SNARES & CLAPS
   */
  {
    id: 'gated_reverb_snare',
    comment: 'Один из символов 80-х. Огромный хлопающий снейр с гейтом.',
    group: 'snare',
    label: 'Gated Reverb Snare',
    positive: [
      { text: 'Gated Reverb Snare' },
      { text: 'big gated snare' },
      { text: 'explosive snare reverb' },
      { text: 'classic 80s drum sound' },
    ],
    type: 'sound',
  },
  {
    id: 'bright_hand_claps',
    comment: 'Яркие клэпы в духе Euro Disco, Sandra и Bananarama.',
    group: 'snare',
    label: 'Bright Hand Claps',
    positive: [
      { text: 'Bright Hand Claps' },
      { text: 'sharp electronic claps' },
      { text: 'layered hand claps' },
      { text: 'dance-pop percussion' },
    ],
    type: 'sound',
  },
  {
    id: 'layered_hand_claps',
    comment: 'Многослойные синтетические клэпы для танцевального попа.',
    group: 'snare',
    label: 'Layered Hand Claps',
    positive: [
      { text: 'Layered Hand Claps' },
      { text: 'stacked clap layers' },
      { text: 'wide stereo claps' },
      { text: 'bright rhythmic accents' },
    ],
    type: 'sound',
  },

  /**
   * ARPEGGIATORS
   */
  {
    id: 'synth_arpeggios',
    comment: 'Классические арпеджио для synth-pop, Italo Disco и New Wave.',
    group: 'arp',
    label: 'Synth Arpeggios',
    positive: [
      { text: 'Synth Arpeggios' },
      { text: 'sequenced synth patterns' },
      { text: 'repeating melodic figures' },
      { text: 'electronic motion' },
    ],
    type: 'sound',
  },
  {
    id: 'analog_arpeggiators',
    comment: 'Арпеджиаторы аналоговых синтов.',
    group: 'arp',
    label: 'Analog Arpeggiators',
    positive: [
      { text: 'Analog Arpeggiators' },
      { text: 'analog synth sequences' },
      { text: 'vintage electronic patterns' },
    ],
    type: 'sound',
  },
  {
    id: 'shimmering_arpeggiators',
    comment: 'Яркие мерцающие арпеджио для Italo Disco и Hi-NRG.',
    group: 'arp',
    label: 'Shimmering Arpeggiators',
    positive: [
      { text: 'Shimmering Arpeggiators' },
      { text: 'sparkling synth sequences' },
      { text: 'bright melodic motion' },
      { text: 'energetic electronic texture' },
    ],
    type: 'sound',
  },

  /**
   * FX
   */
  {
    id: 'analog_chorus',
    comment:
      'Знаменитый хорусовский звук Juno и большинства synth-pop записей.',
    group: 'fx',
    label: 'Analog Chorus',
    positive: [
      { text: 'Analog Chorus' },
      { text: 'stereo chorus effect' },
      { text: 'wide synth image' },
      { text: 'lush modulation' },
    ],
    type: 'sound',
  },
  {
    id: 'tape_saturation',
    comment: 'Мягкая аналоговая сатурация и винтажная теплота.',
    group: 'fx',
    label: 'Tape Saturation',
    positive: [
      { text: 'Tape Saturation' },
      { text: 'analog tape warmth' },
      { text: 'soft harmonic saturation' },
      { text: 'vintage studio character' },
    ],
    type: 'sound',
  },
  {
    id: 'vintage_analog_warmth',
    comment: 'Общий винтажный аналоговый характер записи.',
    group: 'fx',
    label: 'Vintage Analog Warmth',
    positive: [
      { text: 'Vintage Analog Warmth' },
      { text: 'retro studio sound' },
      { text: 'analog production character' },
      { text: 'warm vintage tone' },
    ],
    type: 'sound',
  },
] as PromptTag[];
