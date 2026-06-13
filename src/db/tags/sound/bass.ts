// src/db/tags/sound/bass.ts

import { PromptTag } from '~/types';

export default [
  {
    id: 'deep_sub_bass',
    comment:
      'Базовый глубокий саб. Универсален для UKG, UK Bass, DnB, Deep House и experimental bass.',
    group: 'sub_bass',
    label: 'Deep Sub Bass',
    positive: [
      { text: 'deep sub bass' },
      { text: 'heavy low-end pressure' },
      { text: 'clean controlled low-end' },
      { text: 'sub bass weight' },
      { text: 'low-end depth' },
    ],
    type: 'sound',
  },
  {
    id: 'rolling_sub_bass',
    comment:
      'Катящийся саб с движением. Хорош для UKG, UK Bass, Deep House, Jungle и 140 bass.',
    group: 'sub_bass',
    label: 'Rolling Sub Bass',
    positive: [
      { text: 'deep rolling sub bass' },
      { text: 'smooth rolling movement' },
      { text: 'groove-locked low-end' },
      { text: 'rolling low-end pressure' },
      { text: 'bassline following the rhythm' },
    ],
    type: 'sound',
  },
  {
    id: 'sine_sub_40_50hz',
    comment:
      'Конкретный sine-sub диапазон. Хорош для dub, halfstep, UK Bass и clean sub pressure.',
    group: 'sub_bass',
    label: '40-50Hz Sine Sub',
    positive: [
      { text: 'rolling sine 40-50hz' },
      { text: 'deep sub 40-50hz' },
      { text: 'smooth sine sub bass' },
      { text: 'mono sub below 100hz' },
      { text: 'clean sub pressure' },
    ],
    type: 'sound',
  },
  {
    id: 'garage_sub_bass',
    comment:
      'UKG-саб: тёплый, упругий, locked to groove, без mid-range wobble.',
    group: 'sub_bass',
    label: 'Garage Sub Bass',
    positive: [
      { text: 'deep garage sub bass' },
      { text: 'rolling sub bass following the garage rhythm' },
      { text: 'warm rounded low-end' },
      { text: 'locked to the kick pattern' },
      { text: 'no mid-range wobble' },
    ],
    type: 'sound',
  },
  {
    id: 'offbeat_sub_bass',
    comment: 'Off-beat саб для garage, speed garage, dark garage и 2-step.',
    group: 'sub_bass',
    label: 'Offbeat Sub Bass',
    positive: [
      { text: 'off-beat sub bass hits' },
      { text: 'bass hits on off-beats' },
      { text: 'locked to kick pattern' },
      { text: 'deep sub with analog warmth' },
      { text: 'warm, not aggressive' },
    ],
    type: 'sound',
  },
  {
    id: 'functional_sub_bass',
    comment:
      'Функциональный бас без мелодической роли. Для Jungle / Paradox / raw DnB: давление под брейками.',
    group: 'sub_bass',
    label: 'Functional Sub Bass',
    positive: [
      { text: 'functional low-end' },
      { text: 'repetitive functional bass pressure' },
      { text: 'deep sub bass locked to the break' },
      { text: 'simple sine or reese' },
      { text: 'not melodic' },
    ],
    type: 'sound',
  },
  {
    id: 'steady_sub_pulse',
    comment:
      'Стабильный саб-пульс для Deep House, Detroit, Tribal и минимальных грувов.',
    group: 'sub_bass',
    label: 'Steady Sub Pulse',
    positive: [
      { text: 'deep steady sub bass' },
      { text: 'warm sub pulse' },
      { text: 'stable low-end anchor' },
      { text: 'simple repeating bass pattern' },
      { text: 'locked with percussion' },
    ],
    type: 'sound',
  },
  {
    id: 'breathing_sub_field',
    comment:
      'LAZNCY / abstract texture режим: саб как дыхание и среда, а не басовая партия.',
    group: 'sub_bass',
    label: 'Breathing Sub Field',
    positive: [
      { text: 'breathing sub texture' },
      { text: 'sub layer behaving like breath' },
      { text: 'expanding and contracting low-end' },
      { text: 'slow evolving low-end' },
      { text: 'felt more than heard' },
    ],
    type: 'sound',
  },
  {
    id: 'neuro_sub_bass',
    comment:
      'Один из сильных басовых тегов. Даёт глубину, современный низ и controlled movement без обязательной neurofunk-агрессии.',
    group: 'neuro',
    label: 'Neuro Sub Bass',
    positive: [
      { text: 'deep neuro sub' },
      { text: 'smooth neuro-inspired bass' },
      { text: 'subtle FM modulation' },
      { text: 'controlled low-end movement' },
      { text: 'deep bass with modern depth' },
    ],
    type: 'sound',
  },
  {
    id: 'melodic_neuro_bass',
    comment:
      'Neuro tone, но музыкальный и мелодический. Хорош для electronic jazz / drumfunk future / anime jazz.',
    group: 'neuro',
    label: 'Melodic Neuro Bass',
    positive: [
      { text: 'deep melodic bassline with smooth neuro-inspired tone' },
      { text: 'melodic neuro bass' },
      { text: 'smooth neuro-inspired character' },
      { text: 'controlled movement' },
      { text: 'rich low-mid presence' },
    ],
    type: 'sound',
  },
  {
    id: 'dark_neuro_bass',
    comment:
      'Более тёмный neuro-inspired низ для Paradox / Metalheadz / dark drumfunk без plastic wobble.',
    group: 'neuro',
    label: 'Dark Neuro Bass',
    positive: [
      { text: 'deep neuro sub with analog warmth' },
      { text: 'dark neuro-inspired tone' },
      { text: 'subtle harmonic distortion' },
      { text: 'slight tape wobble' },
      { text: 'no plastic sound' },
    ],
    type: 'sound',
  },
  {
    id: 'no_neuro_aggression',
    comment:
      'Контрольный тег, если нужен глубокий низ без агрессивного neurofunk характера.',
    group: 'neuro',
    label: 'No Neuro Aggression',
    positive: [
      { text: 'no neuro aggression' },
      { text: 'no aggressive neuro sound' },
      { text: 'smooth bass movement' },
      { text: 'controlled sub depth' },
      { text: 'bass remains smooth and musical' },
    ],
    type: 'sound',
  },
  {
    id: 'reese_bass',
    comment:
      'Классический DnB/Jungle reese как simple functional low-end. Не перегружать, чтобы не ушло в современный neuro.',
    group: 'dnb_bass',
    label: 'Reese Bass',
    positive: [
      { text: 'simple reese bass' },
      { text: 'deep reese low-end' },
      { text: 'functional reese bass' },
      { text: 'locked tightly to the break' },
      { text: 'raw jungle bass character' },
    ],
    type: 'sound',
  },
  {
    id: 'warm_electric_bass',
    comment:
      'Тёплый electric bass для UK Jazz, Deep House, Acid Jazz, Balearic и City Pop hybrids.',
    group: 'live_bass',
    label: 'Warm Electric Bass',
    positive: [
      { text: 'warm electric bassline' },
      { text: 'melodic electric bass' },
      { text: 'rounded low-mid presence' },
      { text: 'smooth melodic movement' },
      { text: 'locked to the groove' },
    ],
    type: 'sound',
  },
  {
    id: 'melodic_electric_bass',
    comment:
      'Более активный melodic bass для UK Jazz / City Pop / Acid Jazz / Liquid DnB.',
    group: 'live_bass',
    label: 'Melodic Electric Bass',
    positive: [
      { text: 'melodic electric bass' },
      { text: 'live-feel bass lines' },
      { text: 'syncopated funk movement' },
      { text: 'melodic but restrained' },
      { text: 'bass and drums locked into a deep pocket' },
    ],
    type: 'sound',
  },
  {
    id: 'upright_bass',
    comment:
      'Acid Jazz / abstract hip-hop / Nu-Jazz бас: woody, grounded, steady, minimal repeating pattern.',
    group: 'live_bass',
    label: 'Upright Bass',
    positive: [
      { text: 'acoustic upright bass' },
      { text: 'woody tone' },
      { text: 'minimal repeating pattern' },
      { text: 'grounded steady low-end' },
      { text: 'warm natural bass resonance' },
    ],
    type: 'sound',
  },
  {
    id: 'funk_bassline',
    comment:
      'Funky bass для Broken Beat, UK Jazz, Tribal House и Acid Jazz. Добавляет rhythmic interaction.',
    group: 'live_bass',
    label: 'Funk Bassline',
    positive: [
      { text: 'funky electric bassline' },
      { text: 'rhythmic bass interaction' },
      { text: 'syncopated funk movement' },
      { text: 'deep pocket' },
      { text: 'bassline driving the groove' },
    ],
    type: 'sound',
  },
  {
    id: 'balearic_bassline',
    comment:
      'Мягкий Balearic / lounge bass: smooth repeating movement, warm, relaxed.',
    group: 'house_bass',
    label: 'Balearic Bassline',
    positive: [
      { text: 'warm repeating bassline' },
      { text: 'smooth low-end movement' },
      { text: 'gentle groove' },
      { text: 'mellow electric bass' },
      { text: 'relaxed flowing movement' },
    ],
    type: 'sound',
  },
  {
    id: 'deep_house_bassline',
    comment:
      'Deep House бас: deep, rolling, hypnotic, repetitive, supporting the 4x4 groove.',
    group: 'house_bass',
    label: 'Deep House Bassline',
    positive: [
      { text: 'deep rolling bassline' },
      { text: 'hypnotic repetition' },
      { text: 'warm low-end pulse' },
      { text: 'supporting the groove' },
      { text: 'smooth and groovy' },
    ],
    type: 'sound',
  },
  {
    id: 'chicago_house_bass',
    comment:
      'Chicago-style house bass: warmer, more soulful, slightly more melodic.',
    group: 'house_bass',
    label: 'Chicago House Bass',
    positive: [
      { text: 'deep warm house bass' },
      { text: 'melodic movement inspired by city pop' },
      { text: 'rounded low-mid presence' },
      { text: 'smooth and groovy' },
      { text: 'warm groove-oriented bass' },
    ],
    type: 'sound',
  },
  {
    id: 'detroit_house_bass',
    comment:
      'Detroit-style bass: darker, more static, hypnotic, less warm, more precise.',
    group: 'house_bass',
    label: 'Detroit House Bass',
    positive: [
      { text: 'deep controlled bass' },
      { text: 'less melodic, more hypnotic' },
      { text: 'subtle movement' },
      { text: 'more static groove' },
      { text: 'clean low-end' },
    ],
    type: 'sound',
  },
  {
    id: 'percussive_bass_notes',
    comment:
      'Короткие bass pulses для raw house / atonal club / minimal techno. Бас как ударный элемент.',
    group: 'experimental_bass',
    label: 'Percussive Bass Notes',
    positive: [
      { text: 'minimal bass pulses' },
      { text: 'short percussive bass notes' },
      { text: 'short distorted bass notes' },
      { text: 'funky percussive low-end movement' },
      { text: 'bass notes supporting the rhythm' },
    ],
    type: 'sound',
  },
  {
    id: 'evolving_sub_bass',
    comment:
      'Slow evolving sub для abstract bass / LAZNCY / texture-driven sketches.',
    group: 'experimental_bass',
    label: 'Evolving Sub Bass',
    positive: [
      { text: 'deep evolving sub bass' },
      { text: 'slow evolving movement' },
      { text: 'smooth evolving tone' },
      { text: 'slow harmonic drift' },
      { text: 'subtle modulation' },
    ],
    type: 'sound',
  },
  {
    id: 'analog_warm_bass',
    comment:
      'Analog warmth для саба и баса: tape wobble, saturation, warm filter.',
    group: 'bass_color',
    label: 'Analog Warm Bass',
    positive: [
      { text: 'deep sub with analog warmth' },
      { text: 'warm analog bass' },
      { text: 'smooth warm filter' },
      { text: 'light saturation' },
      { text: 'slight tape wobble' },
    ],
    type: 'sound',
  },
  {
    id: 'heavy_low_end_pressure',
    comment:
      'Усилитель давления низа. Полезен для UK Bass, Jungle, Deep House, Garage и Metalheadz-like пресетов.',
    group: 'bass_color',
    label: 'Heavy Low-End Pressure',
    positive: [
      { text: 'heavy low-end pressure' },
      { text: 'deep low-end weight' },
      { text: 'controlled low-end pressure' },
      { text: 'sub-pressure as texture' },
      { text: 'dark weighty bass' },
    ],
    type: 'sound',
  },
  {
    id: 'clean_mono_sub',
    comment:
      'Технический production-тег для чистого саба: mono low-end, no reverb on bass.',
    group: 'bass_color',
    label: 'Clean Mono Sub',
    positive: [
      { text: 'clean sub mono below 100hz' },
      { text: 'mono sub' },
      { text: 'ultra-clean sub' },
      { text: 'no reverb on bass' },
      { text: 'controlled low-end clarity' },
    ],
    type: 'sound',
  },
  {
    id: 'no_midrange_wobble',
    comment:
      'Ограничитель против wobble / brostep / neuro-wobble. Лучше как positive-описание clean low-end.',
    group: 'bass_control',
    label: 'No Midrange Wobble',
    positive: [
      { text: 'no mid-range wobble' },
      { text: 'smooth deep sub' },
      { text: 'clean low-end movement' },
      { text: 'warm rounded bass' },
      { text: 'controlled sub bass' },
    ],
    type: 'sound',
  },
  {
    id: 'no_bass_aggression',
    comment:
      'Для soulful/liquid/balearic/city-pop направлений: низ глубокий, но не агрессивный.',
    group: 'bass_control',
    label: 'No Bass Aggression',
    positive: [
      { text: 'no aggressive bass tone' },
      { text: 'warm rounded low-end' },
      { text: 'smooth bass movement' },
      { text: 'bass remains musical' },
      { text: 'controlled low-end' },
    ],
    type: 'sound',
  },
] as PromptTag[];
