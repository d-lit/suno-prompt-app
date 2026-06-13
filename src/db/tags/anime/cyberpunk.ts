import { PromptTag } from '~/types';

export default [
  /**
   * CYBERPUNK CORE
   */
  {
    id: 'cyberpunk_anime',
    comment:
      'Главный тег cyberpunk anime. Не эпик, а неон, город, сеть, тело, грязь и техно-паранойя.',
    group: 'cyberpunk_core',
    label: 'Cyberpunk Anime',
    positive: [
      { text: 'cyberpunk anime atmosphere' },
      { text: 'neon city dystopia' },
      { text: 'high-tech low-life mood' },
      { text: 'urban technological decay' },
      { text: 'Japanese cyberpunk feeling' },
    ],
    type: 'anime',
  },
  {
    id: 'nineties_cyberpunk_anime',
    comment:
      'Киберпанк конца 80-х / 90-х: грязнее, аналоговее, взрослее, без современного глянца.',
    group: 'cyberpunk_core',
    label: '90s Cyberpunk Anime',
    positive: [
      { text: '90s cyberpunk anime atmosphere' },
      { text: 'late 80s cyberpunk animation mood' },
      { text: 'grainy Japanese cyberpunk' },
      { text: 'analog dystopian future' },
      { text: 'cult cyberpunk OVA feeling' },
    ],
    type: 'anime',
  },
  {
    id: 'high_tech_low_life',
    comment:
      'Главная формула cyberpunk: технологии сверху, грязная жизнь снизу.',
    group: 'cyberpunk_core',
    label: 'High-Tech Low-Life',
    positive: [
      { text: 'high-tech low-life atmosphere' },
      { text: 'advanced technology and street decay' },
      { text: 'corporate towers above dirty streets' },
      { text: 'urban survival under neon' },
      { text: 'dystopian street-level future' },
    ],
    type: 'anime',
  },
  {
    id: 'tech_noir_anime',
    comment: 'Киберпанк как noir: дождь, ночь, расследование, тени, тревога.',
    group: 'cyberpunk_core',
    label: 'Tech Noir Anime',
    positive: [
      { text: 'tech noir anime atmosphere' },
      { text: 'dark futuristic city' },
      { text: 'rain and neon' },
      { text: 'night investigation mood' },
      { text: 'urban paranoia' },
    ],
    type: 'anime',
  },

  /**
   * NEON CITY
   */
  {
    id: 'neon_city',
    comment: 'Основной городской cyberpunk-образ.',
    group: 'neon_city',
    label: 'Neon City',
    positive: [
      { text: 'neon city atmosphere' },
      { text: 'dense neon streets' },
      { text: 'glowing signs and wet asphalt' },
      { text: 'night-time cyberpunk city' },
      { text: 'electric urban darkness' },
    ],
    type: 'anime',
  },
  {
    id: 'rainy_neon_streets',
    comment: 'Один из самых сильных cyberpunk-архетипов.',
    group: 'neon_city',
    label: 'Rainy Neon Streets',
    positive: [
      { text: 'rainy neon streets' },
      { text: 'wet asphalt reflecting neon' },
      { text: 'rain-soaked cyberpunk city' },
      { text: 'glowing signs in the rain' },
      { text: 'dark urban reflections' },
    ],
    type: 'anime',
  },
  {
    id: 'neon_backstreets',
    comment: 'Задворки города, переулки, скрытая жизнь.',
    group: 'neon_city',
    label: 'Neon Backstreets',
    positive: [
      { text: 'neon backstreets' },
      { text: 'narrow futuristic alleys' },
      { text: 'hidden city corridors' },
      { text: 'low-level urban life' },
      { text: 'street-level cyberpunk atmosphere' },
    ],
    type: 'anime',
  },
  {
    id: 'vertical_city',
    comment:
      'Многоуровневый город: улицы, мосты, переходы, башни, нижние уровни.',
    group: 'neon_city',
    label: 'Vertical City',
    positive: [
      { text: 'vertical city' },
      { text: 'multi-level urban environment' },
      { text: 'towers above crowded streets' },
      { text: 'elevated roads and lower districts' },
      { text: 'dense futuristic metropolis' },
    ],
    type: 'anime',
  },

  /**
   * CORPORATE DYSTOPIA
   */
  {
    id: 'corporate_dystopia',
    comment: 'Корпорации, власть, холодная архитектура, отчуждение.',
    group: 'corporate',
    label: 'Corporate Dystopia',
    positive: [
      { text: 'corporate dystopia' },
      { text: 'corporate-controlled city' },
      { text: 'cold glass towers' },
      { text: 'systems of power and surveillance' },
      { text: 'dehumanized urban future' },
    ],
    type: 'anime',
  },
  {
    id: 'megacorporation',
    comment: 'Большая корпорация как невидимая сила города.',
    group: 'corporate',
    label: 'Megacorporation',
    positive: [
      { text: 'megacorporation atmosphere' },
      { text: 'corporate power above the city' },
      { text: 'invisible corporate control' },
      { text: 'towering business districts' },
      { text: 'cold executive future' },
    ],
    type: 'anime',
  },
  {
    id: 'surveillance_city',
    comment: 'Город наблюдения: камеры, данные, контроль.',
    group: 'corporate',
    label: 'Surveillance City',
    positive: [
      { text: 'surveillance city' },
      { text: 'cameras watching every street' },
      { text: 'data-driven control' },
      { text: 'monitored urban life' },
      { text: 'invisible systems watching' },
    ],
    type: 'anime',
  },
  {
    id: 'cold_corporate_architecture',
    comment: 'Архитектурный слой: стекло, бетон, металл, холодный свет.',
    group: 'corporate',
    label: 'Cold Corporate Architecture',
    positive: [
      { text: 'cold corporate architecture' },
      { text: 'glass towers and concrete plazas' },
      { text: 'sterile futuristic interiors' },
      { text: 'impersonal urban design' },
      { text: 'cold fluorescent corporate spaces' },
    ],
    type: 'anime',
  },

  /**
   * DATA NETWORKS
   */
  {
    id: 'data_networks',
    comment: 'Информационные сети как атмосфера. Очень близко к LAZNCY.',
    group: 'networks',
    label: 'Data Networks',
    positive: [
      { text: 'data networks' },
      { text: 'information moving through the city' },
      { text: 'digital signals everywhere' },
      { text: 'invisible communication systems' },
      { text: 'urban information flow' },
    ],
    type: 'anime',
  },
  {
    id: 'cyberspace',
    comment:
      'Классический cyberpunk слой: пространство данных, не обязательно VR-экшен.',
    group: 'networks',
    label: 'Cyberspace',
    positive: [
      { text: 'cyberspace atmosphere' },
      { text: 'digital inner world' },
      { text: 'virtual data environment' },
      { text: 'mind inside the network' },
      { text: 'abstract digital space' },
    ],
    type: 'anime',
  },
  {
    id: 'ghost_in_the_network',
    comment: 'Сетевое присутствие, цифровая память, голос внутри системы.',
    group: 'networks',
    label: 'Ghost In The Network',
    positive: [
      { text: 'ghost in the network' },
      { text: 'digital presence' },
      { text: 'human traces inside data' },
      { text: 'memory stored in machines' },
      { text: 'haunted information systems' },
    ],
    type: 'anime',
  },
  {
    id: 'signal_overload',
    comment: 'Информационная перегрузка, шум, поток данных.',
    group: 'networks',
    label: 'Signal Overload',
    positive: [
      { text: 'signal overload' },
      { text: 'too much information' },
      { text: 'digital noise everywhere' },
      { text: 'overloaded communication channels' },
      { text: 'chaotic data flow' },
    ],
    type: 'anime',
  },
  {
    id: 'hacker_underground',
    comment: 'Подпольная сетевуха без прямой романтизации хакеров.',
    group: 'networks',
    label: 'Hacker Underground',
    positive: [
      { text: 'hacker underground atmosphere' },
      { text: 'hidden digital communities' },
      { text: 'backdoor networks' },
      { text: 'underground information exchange' },
      { text: 'secret access to the system' },
    ],
    type: 'anime',
  },

  /**
   * CYBERNETIC BODY
   */
  {
    id: 'cybernetic_body',
    comment:
      'Тело как технология: протезы, импланты, сенсоры, механическая плоть.',
    group: 'body',
    label: 'Cybernetic Body',
    positive: [
      { text: 'cybernetic body atmosphere' },
      { text: 'human body merged with technology' },
      { text: 'synthetic nerves and metal limbs' },
      { text: 'biomechanical presence' },
      { text: 'identity inside machines' },
    ],
    type: 'anime',
  },
  {
    id: 'synthetic_body',
    comment: 'Более холодная и философская версия cybernetic body.',
    group: 'body',
    label: 'Synthetic Body',
    positive: [
      { text: 'synthetic body' },
      { text: 'artificial human form' },
      { text: 'manufactured identity' },
      { text: 'humanity inside synthetic skin' },
      { text: 'body as engineered system' },
    ],
    type: 'anime',
  },
  {
    id: 'body_machine_boundary',
    comment: 'Граница между человеком и машиной.',
    group: 'body',
    label: 'Body-Machine Boundary',
    positive: [
      { text: 'body-machine boundary' },
      { text: 'where human ends and machine begins' },
      { text: 'blurred identity' },
      { text: 'flesh and circuitry' },
      { text: 'mechanical humanity' },
    ],
    type: 'anime',
  },
  {
    id: 'identity_fragmentation',
    comment: 'Киберпанк не про гаджеты, а про распад идентичности.',
    group: 'body',
    label: 'Identity Fragmentation',
    positive: [
      { text: 'identity fragmentation' },
      { text: 'self split between body and data' },
      { text: 'uncertain human identity' },
      { text: 'fractured consciousness' },
      { text: 'lost sense of self' },
    ],
    type: 'anime',
  },

  /**
   * STREET LEVEL FUTURE
   */
  {
    id: 'street_level_future',
    comment: 'Будущее с уровня улицы, а не из корпоративной башни.',
    group: 'street_future',
    label: 'Street-Level Future',
    positive: [
      { text: 'street-level future' },
      { text: 'future seen from the pavement' },
      { text: 'ordinary people under neon' },
      { text: 'urban survival' },
      { text: 'low-level futuristic life' },
    ],
    type: 'anime',
  },
  {
    id: 'black_market_district',
    comment: 'Городская нижняя экономика, рынки, подполье.',
    group: 'street_future',
    label: 'Black Market District',
    positive: [
      { text: 'black market district' },
      { text: 'illegal street economy' },
      { text: 'crowded underground markets' },
      { text: 'neon stalls and hidden deals' },
      { text: 'low-life cyberpunk streets' },
    ],
    type: 'anime',
  },
  {
    id: 'crowded_neon_market',
    comment: 'Плотная городская сцена: люди, вывески, еда, техника, шум.',
    group: 'street_future',
    label: 'Crowded Neon Market',
    positive: [
      { text: 'crowded neon market' },
      { text: 'busy futuristic street market' },
      { text: 'dense human movement' },
      { text: 'glowing signs and street food' },
      { text: 'chaotic urban texture' },
    ],
    type: 'anime',
  },
  {
    id: 'underground_clinic',
    comment:
      'Мрачная медтехника, импланты, подпольная хирургия. Использовать аккуратно.',
    group: 'street_future',
    label: 'Underground Clinic',
    positive: [
      { text: 'underground clinic atmosphere' },
      { text: 'illegal cybernetic surgery' },
      { text: 'cold medical neon' },
      { text: 'body modification underground' },
      { text: 'dirty futuristic medicine' },
    ],
    type: 'anime',
  },

  /**
   * PARANOIA / TENSION
   */
  {
    id: 'urban_paranoia',
    comment: 'Ключевой cyberpunk mood.',
    group: 'paranoia',
    label: 'Urban Paranoia',
    positive: [
      { text: 'urban paranoia' },
      { text: 'feeling watched in the city' },
      { text: 'hidden danger in public spaces' },
      { text: 'neon-lit anxiety' },
      { text: 'distrust beneath the surface' },
    ],
    type: 'anime',
  },
  {
    id: 'system_pressure',
    comment: 'Давление системы, но без прямой политической декларации.',
    group: 'paranoia',
    label: 'System Pressure',
    positive: [
      { text: 'system pressure' },
      { text: 'life under invisible control' },
      { text: 'social machinery pressing down' },
      { text: 'urban systems closing in' },
      { text: 'controlled environment tension' },
    ],
    type: 'anime',
  },
  {
    id: 'hidden_threat',
    comment: 'Угроза есть, но она не называется напрямую.',
    group: 'paranoia',
    label: 'Hidden Threat',
    positive: [
      { text: 'hidden threat' },
      { text: 'danger beneath normal life' },
      { text: 'quiet tension' },
      { text: 'something moving in the background' },
      { text: 'unseen danger' },
    ],
    type: 'anime',
  },
  {
    id: 'run_from_the_system',
    comment: 'Движение и бегство без супергеройского экшена.',
    group: 'paranoia',
    label: 'Run From The System',
    positive: [
      { text: 'running from the system' },
      { text: 'escape through neon streets' },
      { text: 'pursuit through the city' },
      { text: 'urgent underground movement' },
      { text: 'high-speed urban tension' },
    ],
    type: 'anime',
  },

  /**
   * ANALOG CYBERPUNK
   */
  {
    id: 'analog_cyberpunk',
    comment:
      'Очень важно для 80-90s aesthetic: провода, CRT, платы, кассеты, шум.',
    group: 'analog_cyberpunk',
    label: 'Analog Cyberpunk',
    positive: [
      { text: 'analog cyberpunk atmosphere' },
      { text: 'wired machines and CRT screens' },
      { text: 'old cybernetic technology' },
      { text: 'pre-digital future' },
      { text: 'tape-noise dystopia' },
    ],
    type: 'anime',
  },
  {
    id: 'wires_and_cables',
    comment: 'Физическая сеть: провода, кабели, железо.',
    group: 'analog_cyberpunk',
    label: 'Wires And Cables',
    positive: [
      { text: 'wires and cables everywhere' },
      { text: 'exposed circuitry' },
      { text: 'physical data infrastructure' },
      { text: 'messy technological interiors' },
      { text: 'hardware-heavy environment' },
    ],
    type: 'anime',
  },
  {
    id: 'crt_cyberpunk',
    comment: 'CRT cyberpunk вместо чистого digital sci-fi.',
    group: 'analog_cyberpunk',
    label: 'CRT Cyberpunk',
    positive: [
      { text: 'CRT cyberpunk atmosphere' },
      { text: 'flickering monitors' },
      { text: 'green terminal glow' },
      { text: 'old computer screens' },
      { text: 'retro data interface' },
    ],
    type: 'anime',
  },
  {
    id: 'hardware_noise',
    comment: 'Железо шумит, гудит, щёлкает, живёт.',
    group: 'analog_cyberpunk',
    label: 'Hardware Noise',
    positive: [
      { text: 'hardware noise' },
      { text: 'machines humming in the background' },
      { text: 'electronic buzz and fan noise' },
      { text: 'data hardware ambience' },
      { text: 'physical technology texture' },
    ],
    type: 'anime',
  },

  /**
   * CYBERPUNK EMOTION
   */
  {
    id: 'digital_loneliness',
    comment: 'Одиночество внутри сети и города.',
    group: 'emotion',
    label: 'Digital Loneliness',
    positive: [
      { text: 'digital loneliness' },
      { text: 'alone inside the network' },
      { text: 'isolated among data streams' },
      { text: 'human distance in a connected world' },
      { text: 'quiet cybernetic solitude' },
    ],
    type: 'anime',
  },
  {
    id: 'synthetic_melancholy',
    comment: 'Меланхолия искусственной среды.',
    group: 'emotion',
    label: 'Synthetic Melancholy',
    positive: [
      { text: 'synthetic melancholy' },
      { text: 'sadness inside artificial life' },
      { text: 'emotional distance in a technological world' },
      { text: 'cold human longing' },
      { text: 'melancholy beneath neon' },
    ],
    type: 'anime',
  },
  {
    id: 'memory_in_machines',
    comment: 'Память хранится не в человеке, а в системах.',
    group: 'emotion',
    label: 'Memory In Machines',
    positive: [
      { text: 'memory in machines' },
      { text: 'personal history stored as data' },
      { text: 'human traces inside hardware' },
      { text: 'lost memories inside systems' },
      { text: 'nostalgia encoded in technology' },
    ],
    type: 'anime',
  },
  {
    id: 'post_human_reflection',
    comment: 'Философский cyberpunk слой без экшена.',
    group: 'emotion',
    label: 'Post-Human Reflection',
    positive: [
      { text: 'post-human reflection' },
      { text: 'questioning what remains human' },
      { text: 'identity after technology' },
      { text: 'quiet philosophical cyberpunk' },
      { text: 'humanity under transformation' },
    ],
    type: 'anime',
  },
] as PromptTag[];
