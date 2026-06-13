// src/db/tags/styles.ts

import { PromptTag } from '~/types';

export default [
  {
    id: 'ghetto',
    comment:
      'Сквозной модификатор характера. Добавляет street-level, raw, club-focused, less academic energy без прямой агрессии.',
    group: 'character',
    label: 'Ghetto',
    positive: [
      { text: 'ghetto' },
      { text: 'street-level energy' },
      { text: 'raw underground character' },
      { text: 'club-focused pulse' },
      { text: 'unpolished groove' },
    ],
    type: 'style',
  },
  {
    id: 'underground',
    comment:
      'Базовый underground-модификатор. Убирает commercial sheen и тянет звук в сторону сырого клубного характера.',
    group: 'character',
    label: 'Underground',
    positive: [
      { text: 'underground' },
      { text: 'raw underground sound' },
      { text: 'no commercial sheen' },
      { text: 'club-focused' },
      { text: 'non-mainstream character' },
    ],
    type: 'style',
  },
  {
    id: 'raw',
    comment:
      'Сырой характер: меньше полировки, больше transient detail, imperfect timing, rough texture и живого ощущения.',
    group: 'character',
    label: 'Raw',
    positive: [
      { text: 'raw' },
      { text: 'unpolished sound' },
      { text: 'rough texture' },
      { text: 'natural dynamics' },
      { text: 'imperfect human feel' },
    ],
    type: 'style',
  },
  {
    id: 'dusty',
    comment:
      'Пыльный lo-fi характер. Даёт degraded texture, vinyl grit, tape warmth, sampler dirt и aged surface.',
    group: 'character',
    label: 'Dusty',
    positive: [
      { text: 'dusty texture' },
      { text: 'lo-fi character' },
      { text: 'vinyl grit' },
      { text: 'tape warmth' },
      { text: 'slightly degraded sound' },
    ],
    type: 'style',
  },
  {
    id: 'intelligent',
    comment:
      'Intelligent-модификатор: restrained, detailed, thoughtful, less obvious, без festival/drop логики.',
    group: 'character',
    label: 'Intelligent',
    positive: [
      { text: 'intelligent' },
      { text: 'restrained arrangement' },
      { text: 'detailed rhythmic design' },
      { text: 'subtle complexity' },
      { text: 'no festival build-up structure' },
    ],
    type: 'style',
  },
  {
    id: 'leftfield',
    comment:
      'Левопольный experimental характер. Полезен для strange phrasing, abstract structure, odd textures и менее жанрового результата.',
    group: 'character',
    label: 'Leftfield',
    positive: [
      { text: 'leftfield' },
      { text: 'experimental character' },
      { text: 'abstract structure' },
      { text: 'unusual sound design' },
      { text: 'less predictable arrangement' },
    ],
    type: 'style',
  },
  {
    id: 'abstract',
    comment:
      'Абстрактный характер. Добавляет fragmented percussion, minimal harmony, texture focus и меньше song-based логики.',
    group: 'character',
    label: 'Abstract',
    positive: [
      { text: 'abstract' },
      { text: 'fragmented percussion' },
      { text: 'texture-focused' },
      { text: 'minimal harmonic movement' },
      { text: 'non-linear feel' },
    ],
    type: 'style',
  },
  {
    id: 'experimental',
    comment:
      'Общий experimental-модификатор. Хорош для raw house, leftfield bass, LAZNCY и atonal club territories.',
    group: 'character',
    label: 'Experimental',
    positive: [
      { text: 'experimental' },
      { text: 'unconventional structure' },
      { text: 'sound design focus' },
      { text: 'unusual rhythmic details' },
      { text: 'raw experimental atmosphere' },
    ],
    type: 'style',
  },
  {
    id: 'cerebral',
    comment:
      'Холодный, умный, meditative модификатор. Работает для abstract UKG, halftime, dub и leftfield bass.',
    group: 'character',
    label: 'Cerebral',
    positive: [
      { text: 'cerebral' },
      { text: 'meditative' },
      { text: 'cinematic' },
      { text: 'controlled intensity' },
      { text: 'deep focus atmosphere' },
    ],
    type: 'style',
  },
  {
    id: 'hypnotic',
    comment:
      'Гипнотический модификатор. Усиливает repetition, deep pocket, loop-driven движение и club trance без EDM.',
    group: 'movement',
    label: 'Hypnotic',
    positive: [
      { text: 'hypnotic' },
      { text: 'loop-driven structure' },
      { text: 'repetitive groove' },
      { text: 'deep pocket' },
      { text: 'slow evolving movement' },
    ],
    type: 'style',
  },
  {
    id: 'minimal',
    comment:
      'Минимальный стиль. Меньше элементов, больше space, negative space, sparse percussion и restrained harmony.',
    group: 'movement',
    label: 'Minimal',
    positive: [
      { text: 'minimal' },
      { text: 'sparse arrangement' },
      { text: 'negative space' },
      { text: 'few elements' },
      { text: 'restrained harmonic content' },
    ],
    type: 'style',
  },
  {
    id: 'restrained',
    comment:
      'Сдержанный характер. Полезен против избыточной сладости, попсовости, лишней драматургии и чрезмерных хуков.',
    group: 'movement',
    label: 'Restrained',
    positive: [
      { text: 'restrained energy' },
      { text: 'understated intensity' },
      { text: 'controlled dynamics' },
      { text: 'no big hooks' },
      { text: 'subtle emotional pressure' },
    ],
    type: 'style',
  },
  {
    id: 'groove_focused',
    comment:
      'Акцент на грув вместо песенности, соло или мелодической драматургии.',
    group: 'movement',
    label: 'Groove Focused',
    positive: [
      { text: 'groove-focused' },
      { text: 'rhythm and bass driving the track' },
      { text: 'pocket-focused' },
      { text: 'head-nod groove' },
      { text: 'flowing movement' },
    ],
    type: 'style',
  },
  {
    id: 'texture_driven',
    comment:
      'Акцент на texture, micro details, surface noise, fragmented sounds и sound design вместо мелодической темы.',
    group: 'movement',
    label: 'Texture Driven',
    positive: [
      { text: 'texture-driven' },
      { text: 'micro details' },
      { text: 'surface noise' },
      { text: 'fragmented sound layers' },
      { text: 'sound design focus' },
    ],
    type: 'style',
  },
  {
    id: 'dub',
    comment:
      'Dub-модификатор: tape echo, spring reverb, delay tails, spatial movement и басовое давление.',
    group: 'space',
    label: 'Dub',
    positive: [
      { text: 'dub-influenced space' },
      { text: 'tape echo' },
      { text: 'spring reverb' },
      { text: 'long delay tails' },
      { text: 'spatial movement' },
    ],
    type: 'style',
  },
  {
    id: 'dubbed_out',
    comment:
      'Более выраженный dub-space режим. Хорош для UK Bass, halfstep, minimal club и deep house.',
    group: 'space',
    label: 'Dubbed Out',
    positive: [
      { text: 'deep dub space' },
      { text: 'wide echo trails' },
      { text: 'degraded repeats' },
      { text: 'delay tails interacting with percussion' },
      { text: 'elements fading into space' },
    ],
    type: 'style',
  },
  {
    id: 'psychedelic',
    comment:
      'Психоделический модификатор. Работает через modulation, strange synth movement, unstable pitch и spatial depth.',
    group: 'space',
    label: 'Psychedelic',
    positive: [
      { text: 'psychedelic electronic textures' },
      { text: 'strange modulation' },
      { text: 'unstable pitch movement' },
      { text: 'evolving atmospheric layers' },
      { text: 'wide spatial depth' },
    ],
    type: 'style',
  },
  {
    id: 'cosmic',
    comment:
      'Cosmic / retro-futuristic окраска для Balearic, Detroit, space disco и electronic jazz.',
    group: 'space',
    label: 'Cosmic',
    positive: [
      { text: 'cosmic atmosphere' },
      { text: 'retro futuristic mood' },
      { text: 'cosmic pads' },
      { text: 'floating electronic textures' },
      { text: 'wide spatial depth' },
    ],
    type: 'style',
  },
  {
    id: 'cinematic',
    comment:
      'Кинематографичный стиль. Добавляет cinematic pads, spatial depth, emotional framing и scene-like ощущение.',
    group: 'space',
    label: 'Cinematic',
    positive: [
      { text: 'cinematic' },
      { text: 'wide cinematic pads' },
      { text: 'spacious atmosphere' },
      { text: 'emotional but controlled' },
      { text: 'evolving textures' },
    ],
    type: 'style',
  },
  {
    id: 'atmospheric',
    comment:
      'Атмосферный модификатор. Универсален, но не слишком сильный. Лучше работает в связке с конкретным жанром.',
    group: 'space',
    label: 'Atmospheric',
    positive: [
      { text: 'atmospheric' },
      { text: 'airy pads' },
      { text: 'spacious soundscape' },
      { text: 'subtle ambient textures' },
      { text: 'wide stereo field' },
    ],
    type: 'style',
  },
  {
    id: 'balearic',
    comment:
      'Сильный стилевой модификатор. Даёт seaside, sunset, open-air, airy, lounge, warm coastal vibe.',
    group: 'place',
    label: 'Balearic',
    positive: [
      { text: 'Balearic' },
      { text: 'sunset seaside mood' },
      { text: 'open-air club feeling' },
      { text: 'warm sea breeze' },
      { text: 'airy spacious soundscape' },
    ],
    type: 'style',
  },
  {
    id: 'tropical',
    comment:
      'Тёплый tropical модификатор: sunset, sea breeze, relaxed warmth, bright but mellow synth color.',
    group: 'place',
    label: 'Tropical',
    positive: [
      { text: 'tropical' },
      { text: 'warm sea breeze mood' },
      { text: 'tropical sunset atmosphere' },
      { text: 'bright but mellow harmonic color' },
      { text: 'relaxed flowing groove' },
    ],
    type: 'style',
  },
  {
    id: 'urban',
    comment:
      'Городской модификатор. Лучше работает как поддержка late-night, underground, UKG, deep house, jazz и bass music.',
    group: 'place',
    label: 'Urban',
    positive: [
      { text: 'urban' },
      { text: 'late-night city mood' },
      { text: 'night city ambience' },
      { text: 'street-level atmosphere' },
      { text: 'metropolitan club feeling' },
    ],
    type: 'style',
  },
  {
    id: 'nocturnal',
    comment:
      'Ночная окраска. Работает как mood-support: late-night, moody, dark, intimate.',
    group: 'place',
    label: 'Nocturnal',
    positive: [
      { text: 'nocturnal' },
      { text: 'late-night atmosphere' },
      { text: 'dark club space' },
      { text: 'night-time mood' },
      { text: 'intimate night energy' },
    ],
    type: 'style',
  },
  {
    id: 'concrete',
    comment:
      'Concrete / damp-room эстетика. Хороша для Metalheadz-like, halfstep, dub, dark UK Bass и raw basement mood.',
    group: 'place',
    label: 'Concrete',
    positive: [
      { text: 'damp concrete room' },
      { text: 'cold reverb tails' },
      { text: 'low rumble' },
      { text: 'dark pressure' },
      { text: 'underground room atmosphere' },
    ],
    type: 'style',
  },
  {
    id: 'tribal',
    comment:
      'Сильный модификатор. Добавляет Afro-style percussion, ritual movement, polyrhythm, grounded hypnotic groove.',
    group: 'rhythmic_style',
    label: 'Tribal',
    positive: [
      { text: 'tribal' },
      { text: 'Afro-inspired percussion layers' },
      { text: 'polyrhythmic groove' },
      { text: 'ritual-like movement' },
      { text: 'grounded hypnotic presence' },
    ],
    type: 'style',
  },
  {
    id: 'afro_influenced',
    comment:
      'Мягче, чем Tribal. Добавляет African-inspired rhythmic syncopation, hand percussion и organic groove.',
    group: 'rhythmic_style',
    label: 'Afro Influenced',
    positive: [
      { text: 'Afro-style rhythms' },
      { text: 'African-inspired rhythmic syncopation' },
      { text: 'hand percussion' },
      { text: 'organic percussion patterns' },
      { text: 'fluid polyrhythmic motion' },
    ],
    type: 'style',
  },
  {
    id: 'bossa_touch',
    comment:
      'Bossa как лёгкий модификатор, не полноценный жанр: soft bossa swing, clean guitar comping, shaker, rim accents.',
    group: 'rhythmic_style',
    label: 'Bossa Touch',
    positive: [
      { text: 'subtle bossa nova influence' },
      { text: 'soft bossa swing' },
      { text: 'light bossa-style percussion accents' },
      { text: 'clean electric guitar with light bossa comping' },
      { text: 'gentle organic timing' },
    ],
    type: 'style',
  },
  {
    id: 'hip_hop_attitude',
    comment:
      'Hip-hop attitude без boom-bap и без полноценного рэпа. Полезно для мужского spoken-вокала в house/UKG/jazz.',
    group: 'vocal_attitude',
    label: 'Hip-Hop Attitude',
    positive: [
      { text: 'hip-hop attitude only' },
      { text: 'relaxed groove talk' },
      { text: 'half-spoken delivery' },
      { text: 'calm authority' },
      { text: 'pocket-focused phrasing' },
    ],
    type: 'style',
  },
  {
    id: 'soulful',
    comment:
      'Soulful-модификатор. Может добавлять теплоту, vocal fragments, мягкость и emotional color. Не перегружать.',
    group: 'vocal_attitude',
    label: 'Soulful',
    positive: [
      { text: 'soulful' },
      { text: 'warm emotional tone' },
      { text: 'soft vocal fragments' },
      { text: 'intimate feeling' },
      { text: 'emotional depth without sweetness overload' },
    ],
    type: 'style',
  },
  {
    id: 'velvet',
    comment:
      'Мягкий, тёплый, интимный vocal/style модификатор. Особенно хорошо для male baritone / soulful garage.',
    group: 'vocal_attitude',
    label: 'Velvet',
    positive: [
      { text: 'velvet tone' },
      { text: 'smooth and warm' },
      { text: 'intimate presence' },
      { text: 'soft tape echo' },
      { text: 'late-night sensual mood' },
    ],
    type: 'style',
  },
  {
    id: 'jazzy',
    comment:
      'Общий jazzy-модификатор. Работает средне, лучше в связке с Rhodes, m7/m9, electric piano и конкретным жанром.',
    group: 'harmony_style',
    label: 'Jazzy',
    positive: [
      { text: 'jazzy harmony' },
      { text: 'extended chords' },
      { text: 'm7 and m9 chords' },
      { text: 'warm Rhodes chords' },
      { text: 'subtle harmonic motion' },
    ],
    type: 'style',
  },
  {
    id: 'city_pop_harmony',
    comment:
      'City Pop как harmony-style: maj7, lush transitions, nostalgic Japanese tone, clean guitar и soft soulful color.',
    group: 'harmony_style',
    label: 'City Pop Harmony',
    positive: [
      { text: 'lush city pop harmony' },
      { text: 'maj7 chords' },
      { text: 'smooth transitions' },
      { text: 'nostalgic Japanese tone' },
      { text: 'clean guitar licks' },
    ],
    type: 'style',
  },
  {
    id: 'minor_moody',
    comment:
      'Minor tonal center / moody harmonic color. Сквозной безопасный модификатор для UKG, house, bass, jazz, DnB.',
    group: 'harmony_style',
    label: 'Minor Moody',
    positive: [
      { text: 'minor tonal center' },
      { text: 'moody harmonic color' },
      { text: 'restrained tension' },
      { text: 'sparse chord movement' },
      { text: 'unresolved feeling' },
    ],
    type: 'style',
  },
  {
    id: 'atonal',
    comment:
      'Atonal / dissonant стиль для experimental club и raw house. Даёт unstable clusters, dissonant fragments и nervous energy.',
    group: 'harmony_style',
    label: 'Atonal',
    positive: [
      { text: 'atonal synth fragments' },
      { text: 'dissonant intervals' },
      { text: 'unstable harmonic clusters' },
      { text: 'strange modulation' },
      { text: 'abstract nervous energy' },
    ],
    type: 'style',
  },
  {
    id: 'nostalgic',
    comment:
      'Ностальгический стиль. Хорошо работает с city pop, balearic, 90s DnB, analog warmth и late-night mood.',
    group: 'mood',
    label: 'Nostalgic',
    positive: [
      { text: 'nostalgic' },
      { text: 'warm memory-like tone' },
      { text: 'retro emotional mood' },
      { text: 'soft melodic fragments' },
      { text: 'analog warmth' },
    ],
    type: 'style',
  },
  {
    id: 'melancholic',
    comment:
      'Меланхоличный стиль без сладости. Подходит для anime ending vibe, liquid, atmospheric DnB, UKG и city night.',
    group: 'mood',
    label: 'Melancholic',
    positive: [
      { text: 'melancholic but restrained' },
      { text: 'subtle sadness' },
      { text: 'emotional but controlled' },
      { text: 'late-night reflective mood' },
      { text: 'no sweetness overload' },
    ],
    type: 'style',
  },
  {
    id: 'detached',
    comment:
      'Detached / cool mood. Хорош для Detroit, minimal UKG, deep house, night drive и restrained male vocal.',
    group: 'mood',
    label: 'Detached',
    positive: [
      { text: 'slightly detached mood' },
      { text: 'cool atmosphere' },
      { text: 'controlled emotional distance' },
      { text: 'night drive mood' },
      { text: 'minimal precise feeling' },
    ],
    type: 'style',
  },
  {
    id: 'warm',
    comment:
      'Тёплый стиль: warm bass, warm chords, analog color, soft saturation, soulful but controlled.',
    group: 'mood',
    label: 'Warm',
    positive: [
      { text: 'warm' },
      { text: 'warm analog character' },
      { text: 'rounded low-end' },
      { text: 'soft saturation' },
      { text: 'gentle harmonic color' },
    ],
    type: 'style',
  },
  {
    id: 'cold',
    comment:
      'Холодный стиль: dark pressure, cold reverb, metallic room, detached mood, less warmth.',
    group: 'mood',
    label: 'Cold',
    positive: [
      { text: 'cold' },
      { text: 'cold reverb tails' },
      { text: 'dark pressure' },
      { text: 'less warmth' },
      { text: 'detached atmosphere' },
    ],
    type: 'style',
  },
] as PromptTag[];
