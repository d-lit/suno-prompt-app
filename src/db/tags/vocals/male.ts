import { PromptTag } from '~/types';

export default [
  /**
   * MALE VOCAL CORE
   */
  {
    id: 'adult_male_vocal',
    comment:
      'Базовый взрослый мужской вокал без подростковой, попсовой или сладкой окраски.',
    group: 'male_core',
    label: 'Adult Male Vocal',
    positive: [
      { text: 'adult male vocal' },
      { text: 'mature male voice' },
      { text: 'deep male presence' },
      { text: 'controlled vocal delivery' },
      { text: 'no pop sheen' },
    ],
    type: 'vocals',
  },
  {
    id: 'black_male_vocal',
    comment:
      'Чёрный мужской вокал для UKG, house, jazz, garage и soulful/ghetto направлений.',
    group: 'male_core',
    label: 'Black Male Vocal',
    positive: [
      { text: 'black male vocal' },
      { text: 'deep soulful male tone' },
      { text: 'mature black male voice' },
      { text: 'streetwise vocal presence' },
      { text: 'warm low-register delivery' },
    ],
    type: 'vocals',
  },
  {
    id: 'deep_male_voice',
    comment: 'Глубокий мужской голос без прямой привязки к рэпу или пению.',
    group: 'male_core',
    label: 'Deep Male Voice',
    positive: [
      { text: 'deep male voice' },
      { text: 'low-register male vocal' },
      { text: 'deep vocal tone' },
      { text: 'grounded male presence' },
      { text: 'calm low voice' },
    ],
    type: 'vocals',
  },
  {
    id: 'male_baritone',
    comment:
      'Один из основных вокальных архетипов проекта. Работает для UKG, Deep House, Tribal, Jazz и Garage.',
    group: 'male_core',
    label: 'Male Baritone',
    positive: [
      { text: 'male baritone vocal' },
      { text: 'deep baritone tone' },
      { text: 'adult male baritone' },
      { text: 'low baritone voice' },
      { text: 'mature voice with weight' },
    ],
    type: 'vocals',
  },
  {
    id: 'low_tenor',
    comment:
      'Чуть выше баритона, но всё ещё взрослый и глубокий мужской диапазон.',
    group: 'male_core',
    label: 'Low Tenor',
    positive: [
      { text: 'low tenor male voice' },
      { text: 'adult low tenor' },
      { text: 'warm low tenor tone' },
      { text: 'controlled male vocal range' },
      { text: 'mature low-tenor presence' },
    ],
    type: 'vocals',
  },

  /**
   * MALE NARRATOR
   */
  {
    id: 'male_narrator',
    comment:
      'Ключевой архетип: не певец и не рэпер, а голос-рассказчик, встроенный в грув.',
    group: 'male_narrator',
    label: 'Male Narrator',
    positive: [
      { text: 'male narrator voice' },
      { text: 'spoken male presence' },
      { text: 'storyteller-like delivery' },
      { text: 'measured cadence' },
      { text: 'groove-locked phrasing' },
    ],
    type: 'vocals',
  },
  {
    id: 'baritone_narrator',
    comment:
      'Баритон-рассказчик. Главный вокальный тип для deep UKG / house / ghetto garage.',
    group: 'male_narrator',
    label: 'Baritone Narrator',
    positive: [
      { text: 'baritone narrator' },
      { text: 'deep spoken baritone' },
      { text: 'calm authoritative voice' },
      { text: 'measured spoken delivery' },
      { text: 'understated vocal presence' },
    ],
    type: 'vocals',
  },
  {
    id: 'calm_male_authority',
    comment:
      'Calm authority — один из самых повторяющихся и рабочих вокальных признаков.',
    group: 'male_narrator',
    label: 'Calm Male Authority',
    positive: [
      { text: 'calm authority' },
      { text: 'controlled male delivery' },
      { text: 'confident but restrained tone' },
      { text: 'measured pacing' },
      { text: 'grounded vocal presence' },
    ],
    type: 'vocals',
  },
  {
    id: 'measured_cadence',
    comment: 'Ровная взрослая каденция без hype MC и без поп-пения.',
    group: 'male_narrator',
    label: 'Measured Cadence',
    positive: [
      { text: 'measured cadence' },
      { text: 'steady vocal pacing' },
      { text: 'rhythmic spoken timing' },
      { text: 'controlled phrasing' },
      { text: 'natural speech rhythm' },
    ],
    type: 'vocals',
  },
  {
    id: 'groove_locked_phrasing',
    comment: 'Вокал как часть грува, а не как песенный центр.',
    group: 'male_narrator',
    label: 'Groove-Locked Phrasing',
    positive: [
      { text: 'groove-locked phrasing' },
      { text: 'vocal locked into the groove' },
      { text: 'pocket-focused vocal delivery' },
      { text: 'rhythmic vocal placement' },
      { text: 'voice supporting the groove' },
    ],
    type: 'vocals',
  },

  /**
   * SPOKEN / HALF-RAPPED
   */
  {
    id: 'spoken_male_delivery',
    comment: 'Мужская spoken delivery без полноценного рэпа.',
    group: 'spoken_male',
    label: 'Spoken Male Delivery',
    positive: [
      { text: 'spoken male delivery' },
      { text: 'spoken vocal lines' },
      { text: 'rhythmically delivered lines' },
      { text: 'natural spoken phrasing' },
      { text: 'not sung' },
    ],
    type: 'vocals',
  },
  {
    id: 'half_rapped_delivery',
    comment:
      'Полурэп / полуречь. Хорошо для UKG, acid jazz, deep house и ghetto garage.',
    group: 'spoken_male',
    label: 'Half-Rapped Delivery',
    positive: [
      { text: 'half-rapped delivery' },
      { text: 'spoken or half-rapped vocal' },
      { text: 'rap-vocal hybrid delivery' },
      { text: 'rhythmic spoken flow' },
      { text: 'short phrases locked to the groove' },
    ],
    type: 'vocals',
  },
  {
    id: 'relaxed_groove_talk',
    comment:
      'House / garage vocal attitude: разговор в груве, не рэп и не песня.',
    group: 'spoken_male',
    label: 'Relaxed Groove Talk',
    positive: [
      { text: 'relaxed groove talk' },
      { text: 'half-spoken club vocal' },
      { text: 'cool pocket-focused delivery' },
      { text: 'understated spoken tone' },
      { text: 'never sung' },
    ],
    type: 'vocals',
  },
  {
    id: 'streetwise_spoken_flow',
    comment: 'Streetwise spoken flow для ghetto UKG, acid jazz и raw house.',
    group: 'spoken_male',
    label: 'Streetwise Spoken Flow',
    positive: [
      { text: 'streetwise spoken flow' },
      { text: 'low-register streetwise delivery' },
      { text: 'restrained street vocal presence' },
      { text: 'urban spoken phrasing' },
      { text: 'controlled underground attitude' },
    ],
    type: 'vocals',
  },

  /**
   * VELVET / SOULFUL BARITONE
   */
  {
    id: 'velvet_baritone',
    comment:
      'Мягкий, тёплый, интимный баритон. Хорош для soulful UKG, deep garage и late-night house.',
    group: 'velvet',
    label: 'Velvet Baritone',
    positive: [
      { text: 'velvet baritone' },
      { text: 'low male velvet baritone' },
      { text: 'smooth warm baritone' },
      { text: 'intimate male vocal' },
      { text: 'soft tape echo on voice' },
    ],
    type: 'vocals',
  },
  {
    id: 'black_velvet_baritone',
    comment:
      'Более конкретная версия velvet baritone с black male vocal color.',
    group: 'velvet',
    label: 'Black Velvet Baritone',
    positive: [
      { text: 'black velvet baritone' },
      { text: 'smooth black male baritone' },
      { text: 'warm intimate male tone' },
      { text: 'deep soulful voice' },
      { text: 'close-mic baritone presence' },
    ],
    type: 'vocals',
  },
  {
    id: 'soulful_male_baritone',
    comment: 'Soulful baritone без превращения трека в R&B-песню.',
    group: 'velvet',
    label: 'Soulful Male Baritone',
    positive: [
      { text: 'soulful male baritone' },
      { text: 'warm soulful male tone' },
      { text: 'deep emotional restraint' },
      { text: 'smooth but understated delivery' },
      { text: 'no pop chorus' },
    ],
    type: 'vocals',
  },
  {
    id: 'intimate_male_vocal',
    comment:
      'Близкий dry/close vocal для UKG, deep house и ASMR-adjacent sketches.',
    group: 'velvet',
    label: 'Intimate Male Vocal',
    positive: [
      { text: 'intimate male vocal' },
      { text: 'dry close-mic vocal' },
      { text: 'close vocal presence' },
      { text: 'warm mids' },
      { text: 'short room reverb' },
    ],
    type: 'vocals',
  },

  /**
   * GARAGE / MC PRESENCE
   */
  {
    id: 'garage_male_vocal',
    comment:
      'UKG male vocal без hype MC. Хорош для deep jazzy garage и ghetto garage.',
    group: 'garage_male',
    label: 'Garage Male Vocal',
    positive: [
      { text: 'garage male vocal' },
      { text: 'male vocal over UK garage groove' },
      { text: 'rhythmic garage phrasing' },
      { text: 'short phrases' },
      { text: 'intimate vocal space' },
    ],
    type: 'vocals',
  },
  {
    id: 'rap_vocal_hybrid',
    comment:
      'Rap-vocal hybrid для UKG / acid-jazz / abstract hip-hop, но не full rap track.',
    group: 'garage_male',
    label: 'Rap-Vocal Hybrid',
    positive: [
      { text: 'rap-vocal hybrid' },
      { text: 'hip-hop influenced delivery' },
      { text: 'light rapping' },
      { text: 'short phrases' },
      { text: 'not full rap track' },
    ],
    type: 'vocals',
  },
  {
    id: 'ghetto_male_vocal',
    comment:
      'Ghetto / street male vocal presence. Добавляет raw underground attitude.',
    group: 'garage_male',
    label: 'Ghetto Male Vocal',
    positive: [
      { text: 'ghetto male vocal' },
      { text: 'raw underground vocal character' },
      { text: 'street-level vocal attitude' },
      { text: 'confident but restrained delivery' },
      { text: 'dry forward vocal' },
    ],
    type: 'vocals',
  },
  {
    id: 'low_male_adlibs',
    comment:
      'Короткие мужские ad-libs для speed garage / shout step / call-response.',
    group: 'garage_male',
    label: 'Low Male Ad-Libs',
    positive: [
      { text: 'low male baritone ad-libs' },
      { text: 'short one-shot ad-libs' },
      { text: 'Hey, Yo, Ah, Come on, Yeah' },
      { text: 'dry close vocal hits' },
      { text: 'call-response with drums' },
    ],
    type: 'vocals',
  },
  {
    id: 'garage_shouts',
    comment:
      'Более энергичные garage shouts. Использовать аккуратно, чтобы не стало hype.',
    group: 'garage_male',
    label: 'Garage Shouts',
    positive: [
      { text: 'short garage shouts' },
      { text: 'one-shot vocal hits' },
      { text: 'dry vocal shouts' },
      { text: 'echoed ad-libs' },
      { text: 'instrumental between shouts' },
    ],
    type: 'vocals',
  },

  /**
   * VOCAL CONTROL
   */
  {
    id: 'no_pop_male_vocal',
    comment: 'Контроль против попсового вокала, хуков и коммерческой подачи.',
    group: 'control',
    label: 'No Pop Male Vocal',
    positive: [
      { text: 'no pop hooks' },
      { text: 'no commercial vocal sheen' },
      { text: 'not a pop vocal' },
      { text: 'no big chorus' },
      { text: 'understated vocal presence' },
    ],
    type: 'vocals',
  },
  {
    id: 'no_hype_mc',
    comment: 'Контроль против hype MC / shouting / festival voice.',
    group: 'control',
    label: 'No Hype MC',
    positive: [
      { text: 'not hype MC' },
      { text: 'no shouting' },
      { text: 'calm controlled energy' },
      { text: 'restrained delivery' },
      { text: 'cool understated tone' },
    ],
    type: 'vocals',
  },
  {
    id: 'no_singing_style',
    comment: 'Если нужен spoken / narrator vocal, а не sung vocal.',
    group: 'control',
    label: 'No Singing Style',
    positive: [
      { text: 'no singing style' },
      { text: 'spoken delivery' },
      { text: 'not sung' },
      { text: 'no melisma' },
      { text: 'rhythmic speech-like phrasing' },
    ],
    type: 'vocals',
  },
  {
    id: 'no_rnb_tone',
    comment: 'Контроль против R&B tone, melisma и чрезмерной сладости.',
    group: 'control',
    label: 'No R&B Tone',
    positive: [
      { text: 'no R&B tone' },
      { text: 'no melisma' },
      { text: 'not soulful pop singing' },
      { text: 'dry spoken vocal' },
      { text: 'restrained male presence' },
    ],
    type: 'vocals',
  },
] as PromptTag[];
