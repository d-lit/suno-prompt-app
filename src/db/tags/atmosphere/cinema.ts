import { PromptTag } from '~/types';

export default [
  /**
   * CINEMA CORE
   */
  {
    id: 'cinematic',
    comment:
      'Общий cinematic-тег без ухода в trailer music. Лучше работает вместе с art-house / slow cinema / soundtrack atmosphere.',
    group: 'cinema_core',
    label: 'Cinematic',
    positive: [
      { text: 'cinematic atmosphere' },
      { text: 'film soundtrack mood' },
      { text: 'visual storytelling' },
      { text: 'scene-like composition' },
      { text: 'music as moving image' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'soundtrack_atmosphere',
    comment: 'Музыка как OST, а не клубный трек.',
    group: 'cinema_core',
    label: 'Soundtrack Atmosphere',
    positive: [
      { text: 'soundtrack atmosphere' },
      { text: 'original film score feeling' },
      { text: 'music for a scene' },
      { text: 'cinematic emotional framing' },
      { text: 'narrative sound space' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'film_score',
    comment:
      'OST-ориентированный тег. Проверить, не будет ли уводить в оркестровость.',
    group: 'cinema_core',
    label: 'Film Score',
    positive: [
      { text: 'film score atmosphere' },
      { text: 'minimal soundtrack feeling' },
      { text: 'score for an independent film' },
      { text: 'subtle cinematic music' },
      { text: 'scene-supporting composition' },
    ],
    type: 'atmosphere',
  },

  /**
   * ART HOUSE
   */
  {
    id: 'art_house',
    comment:
      'Главный cinema-модификатор. Нужен не blockbuster, а фестивальный артхаус.',
    group: 'art_house',
    label: 'Art-House',
    positive: [
      { text: 'art-house cinema atmosphere' },
      { text: 'festival film mood' },
      { text: 'auteur cinema feeling' },
      { text: 'independent film soundtrack' },
      { text: 'subtle emotional ambiguity' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'european_cinema',
    comment: 'Европейское авторское кино как культурная ссылка.',
    group: 'art_house',
    label: 'European Cinema',
    positive: [
      { text: 'European cinema atmosphere' },
      { text: 'continental art film mood' },
      { text: 'restrained emotional tone' },
      { text: 'minimal dramatic gesture' },
      { text: 'quiet cinematic realism' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'french_cinema',
    comment: 'Французское кино: интимность, город, разговорность, меланхолия.',
    group: 'art_house',
    label: 'French Cinema',
    positive: [
      { text: 'French cinema atmosphere' },
      { text: 'Parisian art film mood' },
      { text: 'intimate urban melancholy' },
      { text: 'soft conversational realism' },
      { text: 'romantic but restrained tone' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'auteur_cinema',
    comment: 'Авторское кино, личный взгляд, не жанровое развлечение.',
    group: 'art_house',
    label: 'Auteur Cinema',
    positive: [
      { text: 'auteur cinema atmosphere' },
      { text: 'personal director vision' },
      { text: 'non-commercial film mood' },
      { text: 'introspective cinematic language' },
      { text: 'quiet artistic tension' },
    ],
    type: 'atmosphere',
  },

  /**
   * SLOW CINEMA
   */
  {
    id: 'slow_cinema',
    comment: 'Один из самых перспективных тегов для LAZNCY и аудио-этюдов.',
    group: 'slow_cinema',
    label: 'Slow Cinema',
    positive: [
      { text: 'slow cinema atmosphere' },
      { text: 'patient observation' },
      { text: 'long-take feeling' },
      { text: 'time passing slowly' },
      { text: 'minimal dramatic movement' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'long_takes',
    comment: 'Длинные планы как музыкальная метафора.',
    group: 'slow_cinema',
    label: 'Long Takes',
    positive: [
      { text: 'long-take atmosphere' },
      { text: 'unbroken observation' },
      { text: 'slow unfolding scene' },
      { text: 'patient cinematic pacing' },
      { text: 'extended moment in time' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'patient_observation',
    comment: 'Наблюдение без вмешательства. Очень близко к философии проекта.',
    group: 'slow_cinema',
    label: 'Patient Observation',
    positive: [
      { text: 'patient observation' },
      { text: 'watching without interfering' },
      { text: 'slow attention' },
      { text: 'quietly observing the moment' },
      { text: 'documenting time as it passes' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'time_passing',
    comment: 'Время как главный объект сцены.',
    group: 'slow_cinema',
    label: 'Time Passing',
    positive: [
      { text: 'time passing' },
      { text: 'slow passage of time' },
      { text: 'duration as atmosphere' },
      { text: 'quiet temporal movement' },
      { text: 'moments stretching out' },
    ],
    type: 'atmosphere',
  },

  /**
   * TARKOVSKY-LIKE
   */
  {
    id: 'tarkovsky_like',
    comment:
      'Тестовый тег для тарковской атмосферы. Не артист как запрет/имитация, а культурный OST-якорь.',
    group: 'tarkovsky',
    label: 'Tarkovsky-like',
    positive: [
      { text: 'Tarkovsky-like atmosphere' },
      { text: 'spiritual slow cinema mood' },
      { text: 'rain, memory and silence' },
      { text: 'metaphysical film atmosphere' },
      { text: 'long reflective cinematic space' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'metaphysical_cinema',
    comment: 'Более нейтральная версия тарковщины без прямой ссылки.',
    group: 'tarkovsky',
    label: 'Metaphysical Cinema',
    positive: [
      { text: 'metaphysical cinema atmosphere' },
      { text: 'spiritual uncertainty' },
      { text: 'silence and memory' },
      { text: 'slow symbolic imagery' },
      { text: 'mysterious inner landscape' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'rain_and_memory',
    comment: 'Концентрированный тег для Tarkovsky-like / slow cinema / LAZNCY.',
    group: 'tarkovsky',
    label: 'Rain And Memory',
    positive: [
      { text: 'rain and memory' },
      { text: 'wet reflective surfaces' },
      { text: 'distant childhood echoes' },
      { text: 'slow emotional recollection' },
      { text: 'water, silence and time' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'spiritual_stillness',
    comment: 'Тишина, ожидание, почти сакральное пространство.',
    group: 'tarkovsky',
    label: 'Spiritual Stillness',
    positive: [
      { text: 'spiritual stillness' },
      { text: 'sacred quiet' },
      { text: 'inner silence' },
      { text: 'slow contemplative space' },
      { text: 'soft metaphysical tension' },
    ],
    type: 'atmosphere',
  },

  /**
   * DOCUMENTARY / OBSERVATIONAL
   */
  {
    id: 'documentary_mood',
    comment: 'Документальность и наблюдение вместо драматургии.',
    group: 'documentary',
    label: 'Documentary Mood',
    positive: [
      { text: 'documentary mood' },
      { text: 'observational film atmosphere' },
      { text: 'real-life fragments' },
      { text: 'quiet human moments' },
      { text: 'non-fiction emotional tone' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'observational_cinema',
    comment: 'Кино наблюдения. Очень хорошо связано с LAZNCY.',
    group: 'documentary',
    label: 'Observational Cinema',
    positive: [
      { text: 'observational cinema atmosphere' },
      { text: 'watching ordinary life' },
      { text: 'human observation' },
      { text: 'no forced drama' },
      { text: 'patient documentary attention' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'everyday_moments',
    comment: 'Обычные бытовые моменты как материал.',
    group: 'documentary',
    label: 'Everyday Moments',
    positive: [
      { text: 'everyday moments' },
      { text: 'ordinary life scenes' },
      { text: 'small human gestures' },
      { text: 'unremarkable but meaningful details' },
      { text: 'quiet daily reality' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'human_observation',
    comment: 'Наблюдение за людьми без сентиментальности.',
    group: 'documentary',
    label: 'Human Observation',
    positive: [
      { text: 'human observation' },
      { text: 'watching people from a distance' },
      { text: 'quiet social detail' },
      { text: 'observing human behavior' },
      { text: 'restrained empathy' },
    ],
    type: 'atmosphere',
  },

  /**
   * MEMORY FILM
   */
  {
    id: 'memory_fragments',
    comment: 'Память как монтаж фрагментов.',
    group: 'memory_film',
    label: 'Memory Fragments',
    positive: [
      { text: 'memory fragments' },
      { text: 'fragmented recollection' },
      { text: 'scenes remembered out of order' },
      { text: 'broken personal archive' },
      { text: 'fading images' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'personal_archive',
    comment: 'Личная плёнка / дневник / семейный архив.',
    group: 'memory_film',
    label: 'Personal Archive',
    positive: [
      { text: 'personal archive atmosphere' },
      { text: 'old personal footage' },
      { text: 'private memories' },
      { text: 'intimate archive material' },
      { text: 'remembered fragments of life' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'found_footage',
    comment: 'Найденная плёнка и случайные фрагменты жизни.',
    group: 'memory_film',
    label: 'Found Footage',
    positive: [
      { text: 'found footage atmosphere' },
      { text: 'lost film fragments' },
      { text: 'archival imperfections' },
      { text: 'anonymous recorded memories' },
      { text: 'accidental documentary feeling' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'reconstructed_memory',
    comment: 'Память, собранная заново.',
    group: 'memory_film',
    label: 'Reconstructed Memory',
    positive: [
      { text: 'reconstructed memory' },
      { text: 'remembering through fragments' },
      { text: 'memory rebuilt from traces' },
      { text: 'soft emotional reconstruction' },
      { text: 'past reassembled imperfectly' },
    ],
    type: 'atmosphere',
  },

  /**
   * FILM MATERIAL
   */
  {
    id: 'film_grain',
    comment: 'Визуальный тег, который может дать более пыльную OST-атмосферу.',
    group: 'film_material',
    label: 'Film Grain',
    positive: [
      { text: 'film grain atmosphere' },
      { text: 'grainy film texture' },
      { text: 'analog visual noise' },
      { text: 'time-worn image quality' },
      { text: 'soft archival imperfection' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'sixteen_mm_film',
    comment: '16mm как культурный якорь для артхаусного/документального звука.',
    group: 'film_material',
    label: '16mm Film',
    positive: [
      { text: '16mm film atmosphere' },
      { text: 'grainy independent cinema texture' },
      { text: 'small-format film feeling' },
      { text: 'raw documentary image' },
      { text: 'analog film memory' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'archival_footage',
    comment: 'Архивные кадры, время, память, несовершенства записи.',
    group: 'film_material',
    label: 'Archival Footage',
    positive: [
      { text: 'archival footage atmosphere' },
      { text: 'old recorded material' },
      { text: 'time-damaged image memory' },
      { text: 'historical fragments' },
      { text: 'documentary archive mood' },
    ],
    type: 'atmosphere',
  },

  /**
   * POETIC CINEMA
   */
  {
    id: 'poetic_realism',
    comment: 'Французский/европейский артхаусный слой.',
    group: 'poetic',
    label: 'Poetic Realism',
    positive: [
      { text: 'poetic realism' },
      { text: 'ordinary life with quiet beauty' },
      { text: 'realistic but lyrical atmosphere' },
      { text: 'soft human melancholy' },
      { text: 'small poetic details' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'visual_poetry',
    comment: 'Кино как поэзия образов.',
    group: 'poetic',
    label: 'Visual Poetry',
    positive: [
      { text: 'visual poetry atmosphere' },
      { text: 'images behaving like poetry' },
      { text: 'lyrical cinematic feeling' },
      { text: 'quiet symbolic beauty' },
      { text: 'emotional image fragments' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'melancholic_imagery',
    comment: 'Меланхоличные визуальные образы.',
    group: 'poetic',
    label: 'Melancholic Imagery',
    positive: [
      { text: 'melancholic imagery' },
      { text: 'sad beautiful images' },
      { text: 'soft emotional visuals' },
      { text: 'quietly sorrowful scenes' },
      { text: 'beautiful emotional restraint' },
    ],
    type: 'atmosphere',
  },
] as PromptTag[];
