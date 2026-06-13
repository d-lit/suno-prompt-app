import { PromptTag } from '~/types';

export default [
  /**
   * KITCHEN FUNK
   */
  {
    id: 'kitchen_funk',
    comment:
      'Один из самых сильных экспериментальных модификаторов. Добавляет Amon Tobin territory, object percussion и abstract groove.',
    group: 'kitchen_funk',
    label: 'Kitchen Funk',
    positive: [
      { text: 'kitchen-funk percussion' },
      { text: 'found-object percussion' },
      { text: 'abstract rhythmic textures' },
      { text: 'organic mechanical sounds' },
      { text: 'experimental groove architecture' },
    ],
    type: 'sound',
  },
  {
    id: 'kitchen_objects',
    comment: 'Кухонные объекты как источник ритма.',
    group: 'kitchen_funk',
    label: 'Kitchen Objects',
    positive: [
      { text: 'kitchen objects as percussion' },
      { text: 'metal bowls' },
      { text: 'cups and plates' },
      { text: 'found kitchen sounds' },
      { text: 'organic object rhythm' },
    ],
    type: 'sound',
  },
  {
    id: 'utensil_percussion',
    comment: 'Ложки, вилки, металлические предметы как микро-перкуссия.',
    group: 'kitchen_funk',
    label: 'Utensil Percussion',
    positive: [
      { text: 'utensil percussion' },
      { text: 'small metallic impacts' },
      { text: 'kitchen utensil clicks' },
      { text: 'tiny metallic rhythms' },
      { text: 'high-frequency detail' },
    ],
    type: 'sound',
  },
  /**
   * FOUND SOUNDS
   */
  {
    id: 'found_sounds',
    comment: 'Сильный слой найденных звуков.',
    group: 'found',
    label: 'Found Sounds',
    positive: [
      { text: 'found sounds' },
      { text: 'field-recorded objects' },
      { text: 'everyday sound sources' },
      { text: 'non-musical sounds used rhythmically' },
      { text: 'organic texture events' },
    ],
    type: 'sound',
  },
  {
    id: 'object_percussion',
    comment: 'Объекты вместо традиционной перкуссии.',
    group: 'found',
    label: 'Object Percussion',
    positive: [
      { text: 'object percussion' },
      { text: 'physical object impacts' },
      { text: 'found-object rhythm section' },
      { text: 'unconventional percussion sources' },
      { text: 'textural rhythmic details' },
    ],
    type: 'sound',
  },
  {
    id: 'foley_percussion',
    comment: 'Фоли и бытовые звуки как перкуссия.',
    group: 'found',
    label: 'Foley Percussion',
    positive: [
      { text: 'foley percussion' },
      { text: 'recorded physical interactions' },
      { text: 'cloth movement' },
      { text: 'surface interaction sounds' },
      { text: 'natural object detail' },
    ],
    type: 'sound',
  },
  /**
   * METAL
   */
  {
    id: 'metal_clicks',
    comment: 'Один из ключевых строительных блоков Kitchen Funk.',
    group: 'metal',
    label: 'Metal Clicks',
    positive: [
      { text: 'metallic clicks' },
      { text: 'tiny metal impacts' },
      { text: 'high-frequency metallic detail' },
      { text: 'sharp click textures' },
      { text: 'dry metallic percussion' },
    ],
    type: 'sound',
  },
  {
    id: 'metal_hits',
    comment: 'Более тяжёлые металлические удары.',
    group: 'metal',
    label: 'Metal Hits',
    positive: [
      { text: 'metal impacts' },
      { text: 'metal strikes' },
      { text: 'industrial percussion hits' },
      { text: 'resonant metal sounds' },
      { text: 'physical metal interaction' },
    ],
    type: 'sound',
  },
  {
    id: 'resonant_metal',
    comment: 'Звенящий металл с хвостом.',
    group: 'metal',
    label: 'Resonant Metal',
    positive: [
      { text: 'resonant metal tones' },
      { text: 'ringing metallic resonance' },
      { text: 'sustained metallic harmonics' },
      { text: 'metal resonance' },
      { text: 'industrial overtones' },
    ],
    type: 'sound',
  },
  /**
   * WOOD
   */
  {
    id: 'wood_taps',
    comment: 'Один из основных элементов органической микро-перкуссии.',
    group: 'wood',
    label: 'Wood Taps',
    positive: [
      { text: 'wood taps' },
      { text: 'wood percussion' },
      { text: 'dry wooden clicks' },
      { text: 'organic rhythmic detail' },
      { text: 'natural wood resonance' },
    ],
    type: 'sound',
  },
  {
    id: 'wood_blocks',
    comment: 'Более музыкальная деревянная перкуссия.',
    group: 'wood',
    label: 'Wood Blocks',
    positive: [
      { text: 'wood block percussion' },
      { text: 'wooden rhythmic accents' },
      { text: 'tight wood transients' },
      { text: 'organic groove support' },
      { text: 'percussive wood sounds' },
    ],
    type: 'sound',
  },
  {
    id: 'wood_resonance',
    comment: 'Деревянные резонансы и корпусные звуки.',
    group: 'wood',
    label: 'Wood Resonance',
    positive: [
      { text: 'wood resonance' },
      { text: 'hollow wooden tones' },
      { text: 'natural wooden body resonance' },
      { text: 'organic low-mid texture' },
      { text: 'acoustic object resonance' },
    ],
    type: 'sound',
  },
  /**
   * CERAMIC & GLASS
   */
  {
    id: 'ceramic_percussion',
    comment: 'Керамические объекты как источник перкуссии.',
    group: 'ceramic',
    label: 'Ceramic Percussion',
    positive: [
      { text: 'ceramic percussion' },
      { text: 'ceramic taps' },
      { text: 'cup and bowl impacts' },
      { text: 'brittle transient detail' },
      { text: 'ceramic resonance' },
    ],
    type: 'sound',
  },
  {
    id: 'glass_percussion',
    comment: 'Стеклянные щелчки и удары.',
    group: 'glass',
    label: 'Glass Percussion',
    positive: [
      { text: 'glass percussion' },
      { text: 'glass taps' },
      { text: 'glass clicks' },
      { text: 'high-frequency transient detail' },
      { text: 'fragile glass textures' },
    ],
    type: 'sound',
  },
  {
    id: 'glass_resonance',
    comment: 'Звон стекла и резонансные стеклянные тона.',
    group: 'glass',
    label: 'Glass Resonance',
    positive: [
      { text: 'glass resonance' },
      { text: 'ringing glass tones' },
      { text: 'resonant glass harmonics' },
      { text: 'sustained glass overtones' },
      { text: 'crystalline resonance' },
    ],
    type: 'sound',
  },
  /**
   * TRIBAL
   */
  {
    id: 'tribal_percussion',
    comment:
      'Один из самых сильных стилевых модификаторов. Даёт ritual motion, Afro influence и глубокую полиритмию.',
    group: 'tribal',
    label: 'Tribal Percussion',
    positive: [
      { text: 'tribal percussion layers' },
      { text: 'ritual-like movement' },
      { text: 'deep tribal groove' },
      { text: 'organic percussion architecture' },
      { text: 'hypnotic rhythmic energy' },
    ],
    type: 'sound',
  },
  {
    id: 'tribal_drums',
    comment: 'Глубокие tribal drums как основной двигатель грува.',
    group: 'tribal',
    label: 'Tribal Drums',
    positive: [
      { text: 'tribal drums' },
      { text: 'deep ceremonial percussion' },
      { text: 'layered drum patterns' },
      { text: 'grounded rhythmic movement' },
      { text: 'organic rhythmic drive' },
    ],
    type: 'sound',
  },
  {
    id: 'ritual_percussion',
    comment: 'Ритуальная и медитативная перкуссионная окраска.',
    group: 'tribal',
    label: 'Ritual Percussion',
    positive: [
      { text: 'ritual percussion' },
      { text: 'ceremonial rhythm' },
      { text: 'meditative pulse' },
      { text: 'ancestral rhythmic energy' },
      { text: 'deep hypnotic motion' },
    ],
    type: 'sound',
  },
  {
    id: 'polyrhythmic_percussion',
    comment:
      'Полиритмический слой для tribal, Afro house и experimental grooves.',
    group: 'tribal',
    label: 'Polyrhythmic Percussion',
    positive: [
      { text: 'polyrhythmic percussion' },
      { text: 'interlocking rhythmic layers' },
      { text: 'complex rhythmic interaction' },
      { text: 'multiple rhythmic cycles' },
      { text: 'organic rhythmic complexity' },
    ],
    type: 'sound',
  },
  /**
   * AFRO
   */
  {
    id: 'afro_percussion',
    comment:
      'Широкий Afro-inspired слой. Хорош для deep house, tribal house, broken beat.',
    group: 'afro',
    label: 'Afro Percussion',
    positive: [
      { text: 'Afro-inspired percussion' },
      { text: 'African rhythmic influence' },
      { text: 'organic percussion patterns' },
      { text: 'syncopated percussion movement' },
      { text: 'deep groove foundation' },
    ],
    type: 'sound',
  },
  {
    id: 'afro_syncopation',
    comment: 'Африканская синкопированная логика поверх основного грува.',
    group: 'afro',
    label: 'Afro Syncopation',
    positive: [
      { text: 'African-inspired rhythmic syncopation' },
      { text: 'syncopated hand percussion' },
      { text: 'off-grid percussion accents' },
      { text: 'organic rhythmic displacement' },
      { text: 'fluid groove movement' },
    ],
    type: 'sound',
  },
  {
    id: 'afro_rhythm_layers',
    comment: 'Слои независимой Afro-перкуссии.',
    group: 'afro',
    label: 'Afro Rhythm Layers',
    positive: [
      { text: 'layered Afro-style rhythms' },
      { text: 'multiple percussion voices' },
      { text: 'interwoven percussion layers' },
      { text: 'complex groove architecture' },
      { text: 'organic rhythmic depth' },
    ],
    type: 'sound',
  },
  /**
   * CONGAS
   */
  {
    id: 'congas',
    comment: 'Главный tribal house инструмент.',
    group: 'congas',
    label: 'Congas',
    positive: [
      { text: 'congas' },
      { text: 'deep conga grooves' },
      { text: 'organic hand percussion' },
      { text: 'warm skin-drum tone' },
      { text: 'tribal rhythmic support' },
    ],
    type: 'sound',
  },
  {
    id: 'rolling_congas',
    comment: 'Катящиеся конги для гипнотического движения.',
    group: 'congas',
    label: 'Rolling Congas',
    positive: [
      { text: 'rolling conga patterns' },
      { text: 'continuous conga movement' },
      { text: 'flowing percussion phrases' },
      { text: 'deep tribal momentum' },
      { text: 'organic rhythmic propulsion' },
    ],
    type: 'sound',
  },
  {
    id: 'sparse_congas',
    comment: 'Редкие конги как акценты.',
    group: 'congas',
    label: 'Sparse Congas',
    positive: [
      { text: 'sparse conga accents' },
      { text: 'minimal conga phrases' },
      { text: 'occasional hand-drum accents' },
      { text: 'subtle tribal flavor' },
      { text: 'controlled percussion detail' },
    ],
    type: 'sound',
  },
  /**
   * SHAKERS
   */
  {
    id: 'shakers',
    comment:
      'Один из самых часто используемых элементов в tribal, bossa и Balearic.',
    group: 'shakers',
    label: 'Shakers',
    positive: [
      { text: 'shakers' },
      { text: 'organic shaker patterns' },
      { text: 'constant high-frequency motion' },
      { text: 'light rhythmic texture' },
      { text: 'groove support' },
    ],
    type: 'sound',
  },
  {
    id: 'soft_shakers',
    comment: 'Мягкие шейкеры для Balearic и Bossa.',
    group: 'shakers',
    label: 'Soft Shakers',
    positive: [
      { text: 'soft shaker textures' },
      { text: 'gentle shaker movement' },
      { text: 'light rhythmic air' },
      { text: 'subtle groove support' },
      { text: 'organic texture' },
    ],
    type: 'sound',
  },
  {
    id: 'tribal_shakers',
    comment: 'Более агрессивные и плотные tribal shaker layers.',
    group: 'shakers',
    label: 'Tribal Shakers',
    positive: [
      { text: 'tribal shaker layers' },
      { text: 'dense shaker movement' },
      { text: 'continuous rhythmic detail' },
      { text: 'polyrhythmic high-frequency motion' },
      { text: 'tribal groove energy' },
    ],
    type: 'sound',
  },
  /**
   * HAND DRUMS
   */
  {
    id: 'hand_drums',
    comment: 'Общий слой ручных барабанов.',
    group: 'hand_drums',
    label: 'Hand Drums',
    positive: [
      { text: 'hand drums' },
      { text: 'organic hand percussion' },
      { text: 'skin drum textures' },
      { text: 'human-played percussion' },
      { text: 'natural groove' },
    ],
    type: 'sound',
  },
  {
    id: 'layered_hand_drums',
    comment: 'Несколько ручных барабанов одновременно.',
    group: 'hand_drums',
    label: 'Layered Hand Drums',
    positive: [
      { text: 'layered hand drums' },
      { text: 'multiple hand percussion instruments' },
      { text: 'interlocking percussion voices' },
      { text: 'complex organic groove' },
      { text: 'deep rhythmic texture' },
    ],
    type: 'sound',
  },
  {
    id: 'hand_drum_accents',
    comment: 'Редкие акцентные удары ручных барабанов.',
    group: 'hand_drums',
    label: 'Hand Drum Accents',
    positive: [
      { text: 'hand drum accents' },
      { text: 'occasional percussion strikes' },
      { text: 'tribal rhythmic punctuation' },
      { text: 'organic accents' },
      { text: 'human rhythmic gestures' },
    ],
    type: 'sound',
  },
  /**
   * LIVE PERCUSSION
   */
  {
    id: 'live_percussion',
    comment: 'Живая перкуссия вместо drum machine эстетики.',
    group: 'live',
    label: 'Live Percussion',
    positive: [
      { text: 'live percussion' },
      { text: 'human-played percussion' },
      { text: 'natural groove fluctuations' },
      { text: 'organic timing' },
      { text: 'live rhythmic feel' },
    ],
    type: 'sound',
  },
  {
    id: 'organic_percussion',
    comment:
      'Очень полезный универсальный модификатор для house, jazz и tribal.',
    group: 'live',
    label: 'Organic Percussion',
    positive: [
      { text: 'organic percussion' },
      { text: 'natural rhythmic texture' },
      { text: 'human feel' },
      { text: 'acoustic percussion layers' },
      { text: 'organic groove detail' },
    ],
    type: 'sound',
  },
  {
    id: 'humanized_percussion',
    comment: 'Небольшие несовершенства и живость исполнения.',
    group: 'live',
    label: 'Humanized Percussion',
    positive: [
      { text: 'humanized percussion' },
      { text: 'slight timing imperfections' },
      { text: 'natural rhythmic variation' },
      { text: 'live performer feel' },
      { text: 'organic groove behavior' },
    ],
    type: 'sound',
  },
  /**
   * BOSSA PERCUSSION
   */
  {
    id: 'bossa_percussion',
    comment:
      'Главный bossa-модификатор. Обычно работает лучше как добавка к House, UKG и City Pop.',
    group: 'bossa',
    label: 'Bossa Percussion',
    positive: [
      { text: 'bossa-style percussion' },
      { text: 'soft Latin percussion' },
      { text: 'light rhythmic accents' },
      { text: 'gentle syncopation' },
      { text: 'organic Brazilian feel' },
    ],
    type: 'sound',
  },
  {
    id: 'rim_accents',
    comment: 'Очень характерный bossa-элемент.',
    group: 'bossa',
    label: 'Rim Accents',
    positive: [
      { text: 'rim accents' },
      { text: 'light rim percussion' },
      { text: 'subtle offbeat accents' },
      { text: 'soft rhythmic punctuation' },
      { text: 'gentle groove support' },
    ],
    type: 'sound',
  },
  {
    id: 'soft_bossa_shakers',
    comment: 'Мягкие bossa-шейкеры для City Pop, Deep House и Balearic.',
    group: 'bossa',
    label: 'Soft Bossa Shakers',
    positive: [
      { text: 'soft bossa shakers' },
      { text: 'gentle shaker movement' },
      { text: 'light tropical texture' },
      { text: 'subtle rhythmic air' },
      { text: 'organic groove detail' },
    ],
    type: 'sound',
  },
  /**
   * DRUM MACHINES
   */
  {
    id: 'drum_machine',
    comment: 'Общий драм-машинный слой.',
    group: 'drum_machine',
    label: 'Drum Machine',
    positive: [
      { text: 'drum machine' },
      { text: 'electronic drum patterns' },
      { text: 'machine-driven rhythm' },
      { text: 'programmed percussion' },
      { text: 'electronic groove' },
    ],
    type: 'sound',
  },
  {
    id: 'lofi_drum_machine',
    comment: 'Один из ключевых тегов для Raw House и dusty club music.',
    group: 'drum_machine',
    label: 'Lo-Fi Drum Machine',
    positive: [
      { text: 'lo-fi drum machine sound' },
      { text: 'dusty drum machine texture' },
      { text: 'degraded drum samples' },
      { text: 'raw electronic drums' },
      { text: 'vintage club character' },
    ],
    type: 'sound',
  },
  {
    id: 'vintage_drum_machine',
    comment: 'Более мягкая версия без явного lo-fi характера.',
    group: 'drum_machine',
    label: 'Vintage Drum Machine',
    positive: [
      { text: 'vintage drum machine' },
      { text: 'classic electronic drums' },
      { text: 'retro groove box sound' },
      { text: 'old-school drum programming' },
      { text: 'warm electronic rhythm' },
    ],
    type: 'sound',
  },
  {
    id: 'crunchy_drum_machine',
    comment: 'Сухая перегруженная драм-машина для Raw House.',
    group: 'drum_machine',
    label: 'Crunchy Drum Machine',
    positive: [
      { text: 'crunchy drum machine' },
      { text: 'overdriven drum hits' },
      { text: 'saturated drum transients' },
      { text: 'raw club percussion' },
      { text: 'distorted rhythmic texture' },
    ],
    type: 'sound',
  },
  /**
   * MICRO PERCUSSION
   */
  {
    id: 'micro_percussion',
    comment: 'Один из важнейших строительных блоков experimental grooves.',
    group: 'micro',
    label: 'Micro Percussion',
    positive: [
      { text: 'micro-percussion' },
      { text: 'tiny rhythmic details' },
      { text: 'small transient events' },
      { text: 'microscopic groove layers' },
      { text: 'high-detail rhythm' },
    ],
    type: 'sound',
  },
  {
    id: 'syncopated_micro_percussion',
    comment: 'Микро-перкуссия как отдельный groove layer.',
    group: 'micro',
    label: 'Syncopated Micro Percussion',
    positive: [
      { text: 'syncopated micro-percussion' },
      { text: 'tiny off-grid percussion events' },
      { text: 'fragmented rhythmic details' },
      { text: 'micro-groove architecture' },
      { text: 'organic rhythmic complexity' },
    ],
    type: 'sound',
  },
  {
    id: 'high_frequency_details',
    comment: 'Микро-события в верхнем диапазоне.',
    group: 'micro',
    label: 'High Frequency Details',
    positive: [
      { text: 'high-frequency rhythmic detail' },
      { text: 'tiny transient layers' },
      { text: 'small texture events' },
      { text: 'air-frequency percussion' },
      { text: 'microscopic groove accents' },
    ],
    type: 'sound',
  },
  /**
   * CLICKS & TICKS
   */
  {
    id: 'clicks',
    comment: 'Щелчки как отдельный перкуссионный слой.',
    group: 'clicks',
    label: 'Clicks',
    positive: [
      { text: 'click textures' },
      { text: 'tiny clicks' },
      { text: 'percussive clicks' },
      { text: 'dry click details' },
      { text: 'minimal transient events' },
    ],
    type: 'sound',
  },
  {
    id: 'ticks',
    comment: 'Часы, механика и микро-события.',
    group: 'clicks',
    label: 'Ticks',
    positive: [
      { text: 'tiny ticks' },
      { text: 'clock-like events' },
      { text: 'small mechanical sounds' },
      { text: 'micro rhythmic pulses' },
      { text: 'repeating tiny details' },
    ],
    type: 'sound',
  },
  {
    id: 'mechanical_clicks',
    comment:
      'Механические щелчки для abstract electronic и Amon Tobin territory.',
    group: 'clicks',
    label: 'Mechanical Clicks',
    positive: [
      { text: 'mechanical clicks' },
      { text: 'machine detail sounds' },
      { text: 'tiny mechanical impacts' },
      { text: 'mechanical rhythmic texture' },
      { text: 'clockwork-like events' },
    ],
    type: 'sound',
  },
  /**
   * RUSTLES & SURFACE SOUNDS
   */
  {
    id: 'rustles',
    comment: 'Шуршания и поверхностные звуки.',
    group: 'surface',
    label: 'Rustles',
    positive: [
      { text: 'rustling textures' },
      { text: 'paper-like movement' },
      { text: 'soft surface noise' },
      { text: 'light physical interaction sounds' },
      { text: 'organic texture motion' },
    ],
    type: 'sound',
  },
  {
    id: 'surface_interactions',
    comment: 'Физические взаимодействия с поверхностями.',
    group: 'surface',
    label: 'Surface Interactions',
    positive: [
      { text: 'surface interaction sounds' },
      { text: 'physical contact noises' },
      { text: 'object movement textures' },
      { text: 'tactile sound details' },
      { text: 'natural interaction events' },
    ],
    type: 'sound',
  },
  {
    id: 'cloth_textures',
    comment: 'Тканевые и мягкие шумовые элементы.',
    group: 'surface',
    label: 'Cloth Textures',
    positive: [
      { text: 'cloth movement sounds' },
      { text: 'fabric textures' },
      { text: 'soft friction noise' },
      { text: 'close-mic cloth detail' },
      { text: 'subtle tactile textures' },
    ],
    type: 'sound',
  },
  /**
   * ABSTRACT PERCUSSION
   */
  {
    id: 'abstract_percussion',
    comment: 'Перкуссия как текстура и структура, а не барабаны.',
    group: 'abstract',
    label: 'Abstract Percussion',
    positive: [
      { text: 'abstract percussion' },
      { text: 'non-traditional rhythm sources' },
      { text: 'textural groove design' },
      { text: 'sound-as-percussion' },
      { text: 'experimental rhythm architecture' },
    ],
    type: 'sound',
  },
  {
    id: 'fragmented_percussion',
    comment: 'Очень полезный тег для LAZNCY, Leftfield Bass и Raw House.',
    group: 'abstract',
    label: 'Fragmented Percussion',
    positive: [
      { text: 'fragmented percussion' },
      { text: 'broken rhythmic pieces' },
      { text: 'disconnected percussion events' },
      { text: 'non-linear groove' },
      { text: 'scattered rhythmic activity' },
    ],
    type: 'sound',
  },
  {
    id: 'atonal_percussion',
    comment: 'Перкуссия с неопределённой высотой тона.',
    group: 'abstract',
    label: 'Atonal Percussion',
    positive: [
      { text: 'atonal percussion' },
      { text: 'pitchless rhythmic events' },
      { text: 'abstract impact sounds' },
      { text: 'non-harmonic percussion textures' },
      { text: 'experimental rhythmic sound design' },
    ],
    type: 'sound',
  },
  {
    id: 'percussion_as_texture',
    comment: 'Классический LAZNCY-подход: перкуссия растворяется в текстуре.',
    group: 'abstract',
    label: 'Percussion As Texture',
    positive: [
      { text: 'percussion behaving as texture' },
      { text: 'blurred rhythmic elements' },
      { text: 'texture-first percussion' },
      { text: 'non-drum rhythmic movement' },
      { text: 'percussive atmosphere' },
    ],
    type: 'sound',
  },
  /**
   * GLITCH PERCUSSION
   */
  {
    id: 'glitch_percussion',
    comment:
      'Общий glitch-перкуссионный слой для leftfield electronic, UK Bass и abstract grooves.',
    group: 'glitch',
    label: 'Glitch Percussion',
    positive: [
      { text: 'glitch percussion' },
      { text: 'digital rhythmic artifacts' },
      { text: 'micro-edited drum fragments' },
      { text: 'fragmented digital percussion' },
      { text: 'rhythmic glitch textures' },
    ],
    type: 'sound',
  },
  {
    id: 'glitch_micro_edits',
    comment:
      'Микро-нарезка ритма. Очень близко к IDM и современному sound design.',
    group: 'glitch',
    label: 'Glitch Micro Edits',
    positive: [
      { text: 'glitchy micro-edits' },
      { text: 'micro rhythmic edits' },
      { text: 'tiny digital cuts' },
      { text: 'fragmented transient manipulation' },
      { text: 'micro-groove processing' },
    ],
    type: 'sound',
  },
  {
    id: 'digital_artifacts',
    comment: 'Цифровые артефакты как часть ритмической структуры.',
    group: 'glitch',
    label: 'Digital Artifacts',
    positive: [
      { text: 'digital artifacts' },
      { text: 'glitch artifacts' },
      { text: 'digital texture events' },
      { text: 'computer-generated noise details' },
      { text: 'machine-like rhythmic fragments' },
    ],
    type: 'sound',
  },
  {
    id: 'buffer_stutters',
    comment: 'Заикания, повторения и цифровые сбои.',
    group: 'glitch',
    label: 'Buffer Stutters',
    positive: [
      { text: 'buffer stutters' },
      { text: 'repeating digital fragments' },
      { text: 'stuttering percussion' },
      { text: 'micro-loop artifacts' },
      { text: 'digital interruption effects' },
    ],
    type: 'sound',
  },
  {
    id: 'granular_percussion',
    comment: 'Гранулярная перкуссия из микрочастиц звука.',
    group: 'glitch',
    label: 'Granular Percussion',
    positive: [
      { text: 'granular percussion' },
      { text: 'micro-particle rhythm' },
      { text: 'granular rhythmic texture' },
      { text: 'fragmented audio particles' },
      { text: 'grain-based percussion events' },
    ],
    type: 'sound',
  },
  /**
   * CIRCUIT PERCUSSION
   */
  {
    id: 'circuit_percussion',
    comment:
      'Перкуссия из электроники, плат, микросхем и электронных устройств.',
    group: 'circuit',
    label: 'Circuit Percussion',
    positive: [
      { text: 'circuit percussion' },
      { text: 'electronic hardware sounds' },
      { text: 'circuit-generated clicks' },
      { text: 'electronic component noises' },
      { text: 'machine rhythm details' },
    ],
    type: 'sound',
  },
  {
    id: 'circuit_clicks',
    comment: 'Щелчки электронных компонентов.',
    group: 'circuit',
    label: 'Circuit Clicks',
    positive: [
      { text: 'circuit clicks' },
      { text: 'electronic switching sounds' },
      { text: 'relay clicks' },
      { text: 'tiny electronic transients' },
      { text: 'machine control sounds' },
    ],
    type: 'sound',
  },
  {
    id: 'relay_clicks',
    comment: 'Очень характерный индустриально-электронный элемент.',
    group: 'circuit',
    label: 'Relay Clicks',
    positive: [
      { text: 'relay clicks' },
      { text: 'electromechanical switching' },
      { text: 'hardware switching sounds' },
      { text: 'mechanical electronic events' },
      { text: 'industrial micro-percussion' },
    ],
    type: 'sound',
  },
  {
    id: 'data_noise_percussion',
    comment: 'Ритмика из цифрового шума и передачи данных.',
    group: 'circuit',
    label: 'Data Noise Percussion',
    positive: [
      { text: 'data-noise percussion' },
      { text: 'digital transmission sounds' },
      { text: 'binary texture events' },
      { text: 'machine communication artifacts' },
      { text: 'electronic signal fragments' },
    ],
    type: 'sound',
  },
  {
    id: 'microchip_textures',
    comment: 'Старые компьютеры, платы, микросхемы, embedded electronics.',
    group: 'circuit',
    label: 'Microchip Textures',
    positive: [
      { text: 'microchip textures' },
      { text: 'electronic board sounds' },
      { text: 'circuit board ambience' },
      { text: 'embedded electronics textures' },
      { text: 'computer hardware details' },
    ],
    type: 'sound',
  },
] as PromptTag[];
