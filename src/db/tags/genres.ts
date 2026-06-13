import { PromptTag } from '~/types';

export default [
  {
    id: 'uk_garage',
    comment:
      'Базовый UK Garage / UKG якорь. Сильно влияет на 2-step грув, shuffled drums, garage swing и рисунок саб-баса.',
    group: 'uk',
    label: 'UK Garage',
    positive: [
      { text: 'UK garage' },
      { text: '2-step groove' },
      { text: 'shuffled drums' },
      { text: 'syncopated swing' },
      { text: 'deep sub bass' },
    ],
    type: 'genre',
  },
  {
    id: 'deep_garage',
    comment:
      'Более глубокая, ночная и минимальная версия UKG. Хорошо подходит для restrained, moody, underground звучания.',
    group: 'uk',
    label: 'Deep Garage',
    positive: [
      { text: 'deep garage' },
      { text: 'deep shuffled 2-step rhythm' },
      { text: 'minimal arrangement' },
      { text: 'deep steady sub bass' },
      { text: 'moody late-night atmosphere' },
    ],
    type: 'genre',
  },
  {
    id: 'uk_bass',
    comment:
      'Широкая UK Bass ветка без обязательной привязки к 2-step. Работает через broken rhythm, саб, текстуру и пространство.',
    group: 'uk',
    label: 'UK Bass',
    positive: [
      { text: 'UK bass' },
      { text: 'broken rhythm' },
      { text: 'forward-moving groove' },
      { text: 'deep sub bass' },
      { text: 'underground electronic atmosphere' },
    ],
    type: 'genre',
  },
  {
    id: 'deep_140_bass',
    comment:
      'Глубокий 140 bass music / UK bass режим. Хорош для dub space, broken groove, amen fragments и тёмной низовой атмосферы.',
    group: 'uk',
    label: 'Deep 140 Bass',
    positive: [
      { text: 'deep 140 bass music' },
      { text: 'broken groove' },
      { text: 'tempo around 140 BPM' },
      { text: 'deep sub bass pressure' },
      { text: 'dub-influenced space' },
    ],
    type: 'genre',
  },
  {
    id: 'leftfield_bass',
    comment:
      'Левопольная abstract bass ветка. Даёт меньше жанровой прямоты и больше texture-driven, glitch, micro-events и странной перкуссии.',
    group: 'experimental',
    label: 'Leftfield Bass',
    positive: [
      { text: 'leftfield bass music' },
      { text: 'experimental bass' },
      { text: 'abstract groove' },
      { text: 'fragmented percussion' },
      { text: 'dark underground sound' },
    ],
    type: 'genre',
  },
  {
    id: 'abstract_dubstep',
    comment:
      'Halfstep / dark dubstep / abstract UK bass территория. Не рассчитывать на точный halfstep timing, но полезно для тёмного dub pressure.',
    group: 'experimental',
    label: 'Abstract Dubstep',
    positive: [
      { text: 'abstract dubstep' },
      { text: 'halfstep' },
      { text: 'dark dub' },
      { text: 'deep sub 40-50hz' },
      { text: 'spacious pattern' },
    ],
    type: 'genre',
  },
  {
    id: 'drum_and_bass',
    comment:
      'Базовый Drum & Bass якорь. Сильно задаёт 170 BPM, rolling breakbeats, sub bass и классическую DnB структуру.',
    group: 'dnb',
    label: 'Drum & Bass',
    positive: [
      { text: 'Drum & Bass first' },
      { text: '170 BPM' },
      { text: 'rolling breakbeats' },
      { text: 'deep sub bass' },
      { text: 'instrumental focus' },
    ],
    type: 'genre',
  },
  {
    id: 'atmospheric_dnb',
    comment:
      'Атмосферный DnB / intelligent DnB. Даёт airy pads, restrained emotion, 90s spirit и более мягкий rolling groove.',
    group: 'dnb',
    label: 'Atmospheric DnB',
    positive: [
      { text: 'atmospheric drum and bass' },
      { text: 'intelligent 90s drum and bass spirit' },
      { text: 'smooth rolling breakbeats' },
      { text: 'airy atmospheric pads' },
      { text: 'emotional but restrained mood' },
    ],
    type: 'genre',
  },
  {
    id: 'liquid_dnb',
    comment:
      'Liquid / soulful DnB ветка. Работает через smooth rolling breaks, Rhodes, soulful fragments и тёплую гармонию без EDM-глянца.',
    group: 'dnb',
    label: 'Liquid DnB',
    positive: [
      { text: 'jazzy liquid drum and bass' },
      { text: 'smooth rolling breakbeats' },
      { text: 'warm Rhodes chords' },
      { text: 'deep smooth sub bass' },
      { text: 'soulful atmospheric layers' },
    ],
    type: 'genre',
  },
  {
    id: 'jungle',
    comment:
      'Jungle / 90s jungle якорь. Хорошо тянет classic breakbeat foundation, amen chopping, raw sampler character и underground energy.',
    group: 'dnb',
    label: 'Jungle',
    positive: [
      { text: 'classic mid-90s jungle' },
      { text: 'Amen break dominant foundation' },
      { text: 'heavy Amen chopping' },
      { text: 'hardware sampler character' },
      { text: 'authentic underground jungle' },
    ],
    type: 'genre',
  },
  {
    id: 'drumfunk',
    comment:
      'Drumfunk как ритмически сложная DnB/Jungle ветка. Сильно усиливает break manipulation, ghost notes, irregular accents и phrasing chaos.',
    group: 'dnb',
    label: 'Drumfunk',
    positive: [
      { text: 'drumfunk' },
      { text: 'advanced drumfunk programming' },
      { text: 'complex rolling breakbeats' },
      { text: 'chopped Amen edits' },
      { text: 'ghost notes and rapid fills' },
    ],
    type: 'genre',
  },
  {
    id: 'deep_house',
    comment:
      'Базовый Deep House якорь. Работает через 4x4 groove, deep rolling bass, hypnotic repetition и late-night club mood.',
    group: 'house',
    label: 'Deep House',
    positive: [
      { text: 'deep house first' },
      { text: 'steady four-on-the-floor groove' },
      { text: 'deep rolling bassline' },
      { text: 'hypnotic repetition' },
      { text: 'underground deep house character' },
    ],
    type: 'genre',
  },
  {
    id: 'chicago_house',
    comment:
      'Chicago House добавляет более тёплый, soulful, human groove характер. Хороший слой для city pop / bossa / deep house комбинаций.',
    group: 'house',
    label: 'Chicago House',
    positive: [
      { text: 'Chicago house' },
      { text: 'warm 4x4 groove' },
      { text: 'soft claps' },
      { text: 'shuffled hi-hats' },
      { text: 'soulful house feeling' },
    ],
    type: 'genre',
  },
  {
    id: 'detroit_house',
    comment:
      'Detroit House даёт более холодный, минимальный, detached и hypnotic характер с urban isolation и precise repetition.',
    group: 'house',
    label: 'Detroit House',
    positive: [
      { text: 'Detroit house' },
      { text: 'minimal house drums' },
      { text: 'clean low-end' },
      { text: 'cool hypnotic mood' },
      { text: 'space and repetition emphasized' },
    ],
    type: 'genre',
  },
  {
    id: 'minimal_house',
    comment:
      'Минимальная house / club ветка. Полезна для сухого грува, пространства, коротких басовых пульсов и sparse arrangement.',
    group: 'house',
    label: 'Minimal House',
    positive: [
      { text: 'minimal house' },
      { text: '120 BPM pulse' },
      { text: 'sparse arrangement' },
      { text: 'minimal bass pulses' },
      { text: 'hypnotic minimal club energy' },
    ],
    type: 'genre',
  },
  {
    id: 'raw_house',
    comment:
      'Сырой experimental house режим с lo-fi drum machine, crunchy percussion, distortion и found-object textures.',
    group: 'house',
    label: 'Raw House',
    positive: [
      { text: 'experimental raw house groove' },
      { text: 'lo-fi drum machine sound' },
      { text: 'dry saturated kick' },
      { text: 'crunchy snare' },
      { text: 'dusty underground house texture' },
    ],
    type: 'genre',
  },
  {
    id: 'acid_jazz',
    comment:
      'Acid Jazz / abstract hip-hop / Nu-Jazz мост. Средне управляемый, но полезный для Rhodes, dusty drums, upright bass и jazzy late-night mood.',
    group: 'jazz',
    label: 'Acid Jazz',
    positive: [
      { text: 'acid-jazz' },
      { text: 'abstract hip-hop influence' },
      { text: 'Rhodes and electric piano dominant' },
      { text: 'minor tonal center' },
      { text: 'dusty sample-based production' },
    ],
    type: 'genre',
  },
  {
    id: 'nu_jazz',
    comment:
      'Nu-Jazz слой для гибридов с house, DnB и broken beat. Лучше работает через инструменты и гармонию, чем через прямую джазовую отсылку.',
    group: 'jazz',
    label: 'Nu-Jazz',
    positive: [
      { text: 'nu-jazz influence' },
      { text: 'modern jazz harmony' },
      { text: 'electric piano chords' },
      { text: 'organic percussion' },
      { text: 'instrumental jazz color' },
    ],
    type: 'genre',
  },
  {
    id: 'uk_jazz',
    comment:
      'Modern UK Jazz / London Jazz слой. Полезен для live drums, electric bass, Rhodes, hip-hop swing и club-jazz textures.',
    group: 'jazz',
    label: 'UK Jazz',
    positive: [
      { text: 'modern UK jazz' },
      { text: 'London jazz groove' },
      { text: 'hip-hop influenced swing' },
      { text: 'live drums with ghost notes' },
      { text: 'Rhodes electric piano chords' },
    ],
    type: 'genre',
  },
  {
    id: 'electronic_jazz',
    comment:
      'Electronic Jazz ветка, где synth lead и polysynth chords заменяют традиционные джазовые инструменты.',
    group: 'jazz',
    label: 'Electronic Jazz',
    positive: [
      { text: 'electronic jazz' },
      { text: 'modern electronic jazz harmony' },
      { text: 'polysynth chord textures' },
      { text: 'expressive analog synth lead' },
      { text: 'wide cinematic pads' },
    ],
    type: 'genre',
  },
  {
    id: 'broken_beat',
    comment:
      'Broken Beat как мост между jazz, UKG, house и bass music. Работает через syncopation, ghost notes и broken rhythmic structure.',
    group: 'broken',
    label: 'Broken Beat',
    positive: [
      { text: 'broken beat' },
      { text: 'syncopated broken groove' },
      { text: 'hip-hop swing' },
      { text: 'ghost notes' },
      { text: 'club rhythm culture' },
    ],
    type: 'genre',
  },
  {
    id: 'city_pop',
    comment:
      'Japanese City Pop как гармонический и атмосферный слой: maj7, lush harmony, nostalgia, clean guitar и smooth voice leading.',
    group: 'pop',
    label: 'City Pop',
    positive: [
      { text: 'Japanese city pop influence' },
      { text: 'lush city pop harmony' },
      { text: 'maj7 chords' },
      { text: 'smooth voice leading' },
      { text: 'nostalgic Japanese tone' },
    ],
    type: 'genre',
  },
  {
    id: 'j_pop',
    comment:
      'J-Pop слой. Может давать мягкий женский вокал, более чистую мелодику и японскую pop-harmony окраску.',
    group: 'pop',
    label: 'J-Pop',
    positive: [
      { text: 'J-pop influence' },
      { text: 'Japanese pop harmony' },
      { text: 'soft melodic phrasing' },
      { text: 'clean emotional tone' },
      { text: 'gentle female vocal color' },
    ],
    type: 'genre',
  },
  {
    id: 'bossa_nova',
    comment:
      'Bossa Nova работает как мягкий ритмический и инструментальный модификатор: guitar comping, shaker, rim accents, soft swing.',
    group: 'latin',
    label: 'Bossa Nova',
    positive: [
      { text: 'subtle bossa nova influence' },
      { text: 'soft bossa swing' },
      { text: 'clean electric guitar with light bossa comping' },
      { text: 'shaker and rim accents' },
      { text: 'gentle organic feel' },
    ],
    type: 'genre',
  },
  {
    id: 'balearic_house',
    comment:
      'Balearic House / Balearic mood. Сильный модификатор: sunset, coast, open air, lounge, sea breeze, airy pads.',
    group: 'house',
    label: 'Balearic House',
    positive: [
      { text: 'Balearic house' },
      { text: 'Balearic sunset atmosphere' },
      { text: 'open-air club feeling' },
      { text: 'warm sea-breeze ambience' },
      { text: 'airy pads and spacious soundscape' },
    ],
    type: 'genre',
  },
  {
    id: 'tropical_house',
    comment:
      'Tropical House в твоём наборе ближе к chilled tropical / Balearic / 80s synth character, а не EDM-pop.',
    group: 'house',
    label: 'Tropical House',
    positive: [
      { text: 'tropical balearic house groove' },
      { text: 'warm sea breeze mood' },
      { text: 'tropical sunset atmosphere' },
      { text: 'relaxed flowing groove' },
      { text: 'clean vintage mix' },
    ],
    type: 'genre',
  },
  {
    id: 'space_disco',
    comment:
      'Space Disco / cosmic disco слой. Даёт arpeggios, 80s synths, retro futuristic atmosphere и cosmic melodic phrases.',
    group: 'disco',
    label: 'Space Disco',
    positive: [
      { text: 'space-disco atmosphere' },
      { text: 'cosmic pads' },
      { text: 'arpeggiated space-disco melodies' },
      { text: 'retro futuristic atmosphere' },
      { text: '80s analog and FM synthesizers' },
    ],
    type: 'genre',
  },
  {
    id: 'italo_disco',
    comment:
      'Italo Disco как ретро-синтовый модификатор для Balearic / tropical / house комбинаций.',
    group: 'disco',
    label: 'Italo Disco',
    positive: [
      { text: 'italo-disco influence' },
      { text: 'bright arpeggiated synth lines' },
      { text: 'dreamy chord stabs' },
      { text: 'retro electronic atmosphere' },
      { text: 'analog color' },
    ],
    type: 'genre',
  },
  {
    id: 'leftfield_electronic',
    comment:
      'Leftfield Electronic как общий experimental слой для sound design, ASMR texture, object sounds, abstract loops и sketch-форм.',
    group: 'experimental',
    label: 'Leftfield Electronic',
    positive: [
      { text: 'leftfield electronic' },
      { text: 'experimental sound design' },
      { text: 'texture-driven' },
      { text: 'abstract sketch' },
      { text: 'subtle granular layers' },
    ],
    type: 'genre',
  },
  {
    id: 'asmr_electronic',
    comment:
      'ASMR Electronic / micro texture направление. Suno всё равно может вернуть ритм, но тег полезен для close-mic detail, tactile sounds и intimacy.',
    group: 'experimental',
    label: 'ASMR Electronic',
    positive: [
      { text: 'ASMR-inspired electronic texture' },
      { text: 'close tactile sounds' },
      { text: 'micro-events' },
      { text: 'soft noise layers' },
      { text: 'intimate listening space' },
    ],
    type: 'genre',
  },
] as PromptTag[];
