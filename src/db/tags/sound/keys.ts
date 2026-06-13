import { PromptTag } from '~/types';

export default [
  {
    id: 'rhodes',
    comment:
      'Главный клавишный тег для почти всей базы: UKG, Deep House, Acid Jazz, Liquid DnB, City Pop hybrids.',
    group: 'electric_piano',
    label: 'Rhodes',
    positive: [
      { text: 'Rhodes' },
      { text: 'warm Rhodes chords' },
      { text: 'Rhodes electric piano' },
      { text: 'electric piano chords' },
      { text: 'warm jazz harmony' },
    ],
    type: 'sound',
  },
  {
    id: 'rhodes_stabs',
    comment:
      'Короткие Rhodes stabs вместо длинных падов. Хорошо для UKG, deep garage, deep house и minimal club.',
    group: 'electric_piano',
    label: 'Rhodes Stabs',
    positive: [
      { text: 'Rhodes chord stabs' },
      { text: 'short Rhodes stabs' },
      { text: 'sparse electric piano accents' },
      { text: 'short harmonic accents' },
      { text: 'chord hits every 2-4 bars' },
    ],
    type: 'sound',
  },
  {
    id: 'dark_rhodes',
    comment:
      'Тёмный Rhodes для acid jazz, UKG, deep house и moody minor grooves.',
    group: 'electric_piano',
    label: 'Dark Rhodes',
    positive: [
      { text: 'dark electric piano' },
      { text: 'dark Rhodes chords' },
      { text: 'minor tonal center' },
      { text: 'sparse tense chord voicings' },
      { text: 'moody electric piano textures' },
    ],
    type: 'sound',
  },
  {
    id: 'sparse_rhodes_fragments',
    comment:
      'Редкие Rhodes fragments для DnB, Jungle, LAZNCY и atmospheric sketches.',
    group: 'electric_piano',
    label: 'Sparse Rhodes Fragments',
    positive: [
      { text: 'sparse Rhodes fragments' },
      { text: 'isolated Rhodes tones' },
      { text: 'Rhodes fragments' },
      { text: 'distant Rhodes chords' },
      { text: 'minimal Rhodes tones' },
    ],
    type: 'sound',
  },
  {
    id: 'dissolved_rhodes',
    comment:
      'Rhodes как текстура, а не явный инструмент. Для LAZNCY / ambient / ASMR sketches.',
    group: 'electric_piano',
    label: 'Dissolved Rhodes',
    positive: [
      { text: 'Rhodes dissolved into texture' },
      { text: 'blurred Rhodes fragments' },
      { text: 'no clear attack' },
      { text: 'harmonic haze' },
      { text: 'barely defined tonal color' },
    ],
    type: 'sound',
  },
  {
    id: 'electric_piano',
    comment:
      'Более общий electric piano слой, если не хочется слишком явно просить Rhodes.',
    group: 'electric_piano',
    label: 'Electric Piano',
    positive: [
      { text: 'electric piano chords' },
      { text: 'soft electric piano stabs' },
      { text: 'mellow electric piano' },
      { text: 'warm electric piano texture' },
      { text: 'jazzy electric piano color' },
    ],
    type: 'sound',
  },
  {
    id: 'soft_piano_chords',
    comment: 'Мягкие piano chords для liquid, city pop, deep house и Balearic.',
    group: 'piano',
    label: 'Soft Piano Chords',
    positive: [
      { text: 'soft piano chords' },
      { text: 'gentle piano voicings' },
      { text: 'warm piano harmony' },
      { text: 'light melodic piano fragments' },
      { text: 'smooth harmonic color' },
    ],
    type: 'sound',
  },
  {
    id: 'jazzy_piano_chords',
    comment:
      'Jazzy piano для acid jazz / liquid / deep house. Работает средне, лучше вместе с m7/m9.',
    group: 'piano',
    label: 'Jazzy Piano Chords',
    positive: [
      { text: 'jazzy piano chords' },
      { text: 'extended jazz chords' },
      { text: '7ths and 9ths' },
      { text: 'soft jazz voicings' },
      { text: 'subtle harmonic movement' },
    ],
    type: 'sound',
  },
  {
    id: 'soft_organ_textures',
    comment:
      'Органные текстуры для Balearic, Nu-Jazz, Deep House и lounge окраски.',
    group: 'organ',
    label: 'Soft Organ Textures',
    positive: [
      { text: 'soft organ textures' },
      { text: 'mellow organ layers' },
      { text: 'subtle organ harmony' },
      { text: 'warm harmonic bed' },
      { text: 'lounge deep house color' },
    ],
    type: 'sound',
  },
  {
    id: 'm7_chords',
    comment: 'Minor 7th voicings. Базовый jazzy/UKG/deep house/liquid цвет.',
    group: 'harmony',
    label: 'm7 Chords',
    positive: [
      { text: 'm7 chords' },
      { text: 'minor seventh chords' },
      { text: 'warm m7 voicings' },
      { text: 'jazzy minor color' },
      { text: 'extended minor harmony' },
    ],
    type: 'sound',
  },
  {
    id: 'm9_chords',
    comment:
      'Minor 9th voicings. Один из самых используемых гармонических цветов в базе.',
    group: 'harmony',
    label: 'm9 Chords',
    positive: [
      { text: 'm9 chords' },
      { text: 'minor ninth chords' },
      { text: 'warm m9 voicings' },
      { text: 'soft tension' },
      { text: 'extended jazz harmony' },
    ],
    type: 'sound',
  },
  {
    id: 'm11_chords',
    comment:
      'Minor 11th / extended chord color. Полезно для UK Bass, Liquid, City Pop, synth jazz.',
    group: 'harmony',
    label: 'm11 Chords',
    positive: [
      { text: 'm11 chords' },
      { text: 'minor eleventh chords' },
      { text: 'extended harmonic color' },
      { text: 'soft jazz color tones' },
      { text: 'lush but controlled harmony' },
    ],
    type: 'sound',
  },
  {
    id: 'maj7_chords',
    comment:
      'Major 7th voicings. Главный цвет City Pop / J-Pop / Balearic / soulful house combinations.',
    group: 'harmony',
    label: 'maj7 Chords',
    positive: [
      { text: 'maj7 chords' },
      { text: 'major seventh chords' },
      { text: 'lush city pop harmony' },
      { text: 'nostalgic major color' },
      { text: 'smooth voice leading' },
    ],
    type: 'sound',
  },
  {
    id: 'maj9_chords',
    comment:
      'Major 9th voicings для LAZNCY, City Pop, Balearic, ambient jazz и soft sketches.',
    group: 'harmony',
    label: 'maj9 Chords',
    positive: [
      { text: 'maj9 chords' },
      { text: 'major ninth chords' },
      { text: 'soft major color' },
      { text: 'floating harmonic tone' },
      { text: 'gentle harmonic drift' },
    ],
    type: 'sound',
  },
  {
    id: 'extended_jazz_harmony',
    comment:
      'Общий расширенный jazzy harmony слой. Лучше работает как поддержка конкретных m7/m9/maj7 токенов.',
    group: 'harmony',
    label: 'Extended Jazz Harmony',
    positive: [
      { text: 'extended jazz harmony' },
      { text: '7ths, 9ths and 11ths' },
      { text: 'jazzy extensions' },
      { text: 'warm harmonic color' },
      { text: 'smooth transitions' },
    ],
    type: 'sound',
  },
  {
    id: 'city_pop_harmony',
    comment:
      'City Pop harmony как отдельный гармонический пакет: maj7, smooth transitions, nostalgic Japanese tone.',
    group: 'harmony',
    label: 'City Pop Harmony',
    positive: [
      { text: 'lush city pop harmony' },
      { text: 'Japanese city pop harmony' },
      { text: 'maj7 chords' },
      { text: 'smooth voice leading' },
      { text: 'emotional but controlled' },
    ],
    type: 'sound',
  },
  {
    id: 'simplified_city_pop_harmony',
    comment:
      'City Pop гармония, но минимальнее и повторнее. Хорошо для Detroit / minimal UKG.',
    group: 'harmony',
    label: 'Simplified City Pop Harmony',
    positive: [
      { text: 'simplified city pop harmony' },
      { text: 'repetitive and hypnotic' },
      { text: 'light jazz color tones' },
      { text: 'restrained Rhodes chords' },
      { text: 'reduced harmonic density' },
    ],
    type: 'sound',
  },
  {
    id: 'minor_tonal_center',
    comment:
      'Безопасный сквозной тег для moody UKG, Deep House, Acid Jazz, DnB, Bass и Jungle.',
    group: 'harmony',
    label: 'Minor Tonal Center',
    positive: [
      { text: 'minor tonal center' },
      { text: 'minor key' },
      { text: 'moody harmonic color' },
      { text: 'restrained tension' },
      { text: 'unresolved feeling' },
    ],
    type: 'sound',
  },
  {
    id: 'sparse_chord_stabs',
    comment:
      'Короткие редкие chord stabs вместо длинной гармонии. Хорошо для deep garage, house, jungle и minimal bass.',
    group: 'harmony',
    label: 'Sparse Chord Stabs',
    positive: [
      { text: 'sparse chord stabs' },
      { text: 'short harmonic accents' },
      { text: 'chord hits every 2-4 bars' },
      { text: 'minimal harmonic movement' },
      { text: 'space between chord phrases' },
    ],
    type: 'sound',
  },
  {
    id: 'slow_evolving_progressions',
    comment:
      'Медленные прогрессии для Dilla groove, deep jazz, mellow UK jazz и late-night house.',
    group: 'harmony',
    label: 'Slow Evolving Progressions',
    positive: [
      { text: 'slow evolving chord progressions' },
      { text: 'subtle chord changes' },
      { text: 'slow harmonic movement' },
      { text: 'mellow jazz harmony' },
      { text: 'loop-driven harmonic structure' },
    ],
    type: 'sound',
  },
  {
    id: 'harmonic_haze',
    comment:
      'Размытая гармония без явной атаки. Для LAZNCY, ambient, ASMR и abstract electronic.',
    group: 'harmony_texture',
    label: 'Harmonic Haze',
    positive: [
      { text: 'harmonic haze' },
      { text: 'blurred jazz harmony' },
      { text: 'no clear attack' },
      { text: 'tonal color only' },
      { text: 'chords emerge and dissolve' },
    ],
    type: 'sound',
  },
  {
    id: 'harmonic_drift',
    comment:
      'Гармония как медленный дрейф, а не прогрессия. Хорошо для LAZNCY / nature / ASMR.',
    group: 'harmony_texture',
    label: 'Harmonic Drift',
    positive: [
      { text: 'gentle harmonic drift' },
      { text: 'slow harmonic shifts' },
      { text: 'no clear progression' },
      { text: 'minimal color-based harmony' },
      { text: 'long gaps between harmonic events' },
    ],
    type: 'sound',
  },
  {
    id: 'atonal_clusters',
    comment:
      'Atonal / dissonant clusters для raw house, experimental club и нервного abstract groove.',
    group: 'harmony_texture',
    label: 'Atonal Clusters',
    positive: [
      { text: 'atonal synth fragments' },
      { text: 'dissonant tones' },
      { text: 'unstable harmonic clusters' },
      { text: 'dissonant intervals' },
      { text: 'abstract nervous energy' },
    ],
    type: 'sound',
  },
  {
    id: 'clean_guitar_comping',
    comment:
      'Clean guitar для City Pop / Bossa / Balearic / Deep House. Часто появляется при Bossa/JPop связках.',
    group: 'guitar',
    label: 'Clean Guitar Comping',
    positive: [
      { text: 'clean electric guitar' },
      { text: 'light bossa comping' },
      { text: 'clean guitar comping' },
      { text: 'soft guitar licks' },
      { text: 'distant clean guitar fragments' },
    ],
    type: 'sound',
  },
  {
    id: 'bossa_guitar',
    comment:
      'Более явная bossa guitar окраска: rim/shaker/guitar phrases для city-pop-house/UKG hybrids.',
    group: 'guitar',
    label: 'Bossa Guitar',
    positive: [
      { text: 'clean electric guitar with light bossa comping' },
      { text: 'bossa phrasing' },
      { text: 'soft guitar comping' },
      { text: 'gentle rhythmic guitar accents' },
      { text: 'subtle tropical оттенок' },
    ],
    type: 'sound',
  },
  {
    id: 'subtle_guitar_licks',
    comment: 'Редкие guitar licks для acid jazz, city pop, Balearic и liquid.',
    group: 'guitar',
    label: 'Subtle Guitar Licks',
    positive: [
      { text: 'occasional clean guitar licks' },
      { text: 'subtle guitar licks' },
      { text: 'light guitar fragments' },
      { text: 'floating instrumental phrases' },
      { text: 'soft melodic guitar color' },
    ],
    type: 'sound',
  },
  {
    id: 'brass_stabs',
    comment:
      'Тёплые brass stabs / horn phrases для acid-jazz liquid и nu-jazz. Осторожно, чтобы не ушло в ресторанный джаз.',
    group: 'horns',
    label: 'Brass Stabs',
    positive: [
      { text: 'warm brass stabs' },
      { text: 'soft horn phrases' },
      { text: 'subtle horn fragments' },
      { text: 'jazzy instrumental color' },
      { text: 'short brass accents' },
    ],
    type: 'sound',
  },
  {
    id: 'no_sax_focus',
    comment:
      'Мягкая попытка избежать sax lead через акцент на synth/keys. Отрицание напрямую работает плохо.',
    group: 'horns',
    label: 'No Sax Focus',
    positive: [
      { text: 'synth lead carrying melodic phrases' },
      { text: 'expressive analog synth lead' },
      { text: 'keyboard-led jazz harmony' },
      { text: 'no heavy horn focus' },
      { text: 'modern synth jazz color' },
    ],
    type: 'sound',
  },
] as PromptTag[];
