import { PromptTag } from '~/types';

export default [
  /**
   * 80S / 90S SCI-FI ANIME
   */
  {
    id: 'eighties_scifi_anime',
    comment:
      'Главный тег для позднего 80s / раннего 90s sci-fi anime / OVA атмосферы.',
    group: 'scifi_core',
    label: '80s Sci-Fi Anime',
    positive: [
      { text: 'late 80s sci-fi anime atmosphere' },
      { text: 'early 90s anime sci-fi mood' },
      { text: 'retro futuristic Japanese animation feeling' },
      { text: 'classic OVA science fiction atmosphere' },
      { text: 'analog future imagination' },
    ],
    type: 'anime',
  },
  {
    id: 'ova_scifi',
    comment:
      'OVA как отдельный культурный архетип: темнее, страннее, взрослее, менее ТВ-шный.',
    group: 'scifi_core',
    label: 'OVA Sci-Fi',
    positive: [
      { text: 'OVA sci-fi atmosphere' },
      { text: 'direct-to-video anime science fiction' },
      { text: 'adult 90s anime mood' },
      { text: 'grainy retro anime future' },
      { text: 'cult Japanese sci-fi animation feeling' },
    ],
    type: 'anime',
  },
  {
    id: 'retro_future_anime',
    comment: 'Ретрофутуризм через японскую анимацию 80-90-х.',
    group: 'scifi_core',
    label: 'Retro Future Anime',
    positive: [
      { text: 'retro future anime atmosphere' },
      { text: 'future imagined in the 1980s' },
      { text: 'analog sci-fi nostalgia' },
      { text: 'old Japanese future vision' },
      { text: 'retro technological dream' },
    ],
    type: 'anime',
  },
  {
    id: 'analog_future',
    comment: 'Будущее из аналоговой эпохи: кнопки, экраны, шумы, железо.',
    group: 'scifi_core',
    label: 'Analog Future',
    positive: [
      { text: 'analog future atmosphere' },
      { text: 'buttons, screens and machines' },
      { text: 'pre-digital sci-fi technology' },
      { text: 'old control panels' },
      { text: 'mechanical futuristic systems' },
    ],
    type: 'anime',
  },

  /**
   * SPACE COLONIES
   */
  {
    id: 'space_colony',
    comment:
      'Классический sci-fi anime архетип: искусственная среда, орбита, человеческая изоляция.',
    group: 'space_colonies',
    label: 'Space Colony',
    positive: [
      { text: 'space colony atmosphere' },
      { text: 'human life in orbit' },
      { text: 'artificial habitat' },
      { text: 'colony interior ambience' },
      { text: 'life far from Earth' },
    ],
    type: 'anime',
  },
  {
    id: 'orbital_station',
    comment:
      'Орбитальная станция: техничность, изоляция, закрытое пространство.',
    group: 'space_colonies',
    label: 'Orbital Station',
    positive: [
      { text: 'orbital station atmosphere' },
      { text: 'space station interior' },
      { text: 'mechanical life-support systems' },
      { text: 'quiet orbital isolation' },
      { text: 'humans inside machinery' },
    ],
    type: 'anime',
  },
  {
    id: 'artificial_habitat',
    comment: 'Искусственная среда обитания вместо природы.',
    group: 'space_colonies',
    label: 'Artificial Habitat',
    positive: [
      { text: 'artificial habitat atmosphere' },
      { text: 'engineered living environment' },
      { text: 'synthetic sky and controlled air' },
      { text: 'human life inside technology' },
      { text: 'closed ecological system' },
    ],
    type: 'anime',
  },
  {
    id: 'life_far_from_earth',
    comment: 'Эмоциональная изоляция жизни вне Земли.',
    group: 'space_colonies',
    label: 'Life Far From Earth',
    positive: [
      { text: 'life far from Earth' },
      { text: 'distant from home planet' },
      { text: 'space colony loneliness' },
      { text: 'human memories of Earth' },
      { text: 'nostalgia in orbit' },
    ],
    type: 'anime',
  },

  /**
   * MECHA / MACHINES
   */
  {
    id: 'mecha_hangar',
    comment:
      'Меха-ангар без hero epic. Больше железа, ожидания и технической атмосферы.',
    group: 'mecha',
    label: 'Mecha Hangar',
    positive: [
      { text: 'mecha hangar atmosphere' },
      { text: 'giant machines in maintenance' },
      { text: 'industrial anime sci-fi mood' },
      { text: 'cold mechanical space' },
      { text: 'pilots waiting near machines' },
    ],
    type: 'anime',
  },
  {
    id: 'mechanical_giants',
    comment: 'Гигантская техника как присутствие, не обязательно битва.',
    group: 'mecha',
    label: 'Mechanical Giants',
    positive: [
      { text: 'mechanical giants' },
      { text: 'large machines standing still' },
      { text: 'massive engineered bodies' },
      { text: 'silent mecha presence' },
      { text: 'scale of human-made machines' },
    ],
    type: 'anime',
  },
  {
    id: 'pilot_isolation',
    comment: 'Психологическая сторона mecha / sci-fi anime.',
    group: 'mecha',
    label: 'Pilot Isolation',
    positive: [
      { text: 'pilot isolation' },
      { text: 'alone inside the machine' },
      { text: 'human mind inside technology' },
      { text: 'quiet cockpit solitude' },
      { text: 'psychological sci-fi atmosphere' },
    ],
    type: 'anime',
  },
  {
    id: 'machine_readiness',
    comment: 'Ощущение техники перед запуском.',
    group: 'mecha',
    label: 'Machine Readiness',
    positive: [
      { text: 'machine readiness' },
      { text: 'systems preparing to activate' },
      { text: 'mechanical tension before movement' },
      { text: 'technical anticipation' },
      { text: 'cold operational atmosphere' },
    ],
    type: 'anime',
  },

  /**
   * COMPUTERS / CONTROL ROOMS
   */
  {
    id: 'analog_computers',
    comment: 'Старые sci-fi компьютеры, панели, CRT, кнопки, данные.',
    group: 'computers',
    label: 'Analog Computers',
    positive: [
      { text: 'analog computers' },
      { text: 'old computer terminals' },
      { text: 'CRT screens and green text' },
      { text: 'retro data systems' },
      { text: 'machine room information flow' },
    ],
    type: 'anime',
  },
  {
    id: 'control_room',
    comment: 'Центр управления: экраны, тревога, холодный свет.',
    group: 'computers',
    label: 'Control Room',
    positive: [
      { text: 'control room atmosphere' },
      { text: 'screens and monitoring systems' },
      { text: 'technical operators' },
      { text: 'cold fluorescent light' },
      { text: 'systems under observation' },
    ],
    type: 'anime',
  },
  {
    id: 'crt_monitor_glow',
    comment: 'Очень конкретный late-80s / early-90s визуальный якорь.',
    group: 'computers',
    label: 'CRT Monitor Glow',
    positive: [
      { text: 'CRT monitor glow' },
      { text: 'green screen light' },
      { text: 'old display technology' },
      { text: 'flickering computer terminals' },
      { text: 'retro electronic ambience' },
    ],
    type: 'anime',
  },
  {
    id: 'data_room',
    comment: 'Комната данных / серверов в старом sci-fi понимании.',
    group: 'computers',
    label: 'Data Room',
    positive: [
      { text: 'data room atmosphere' },
      { text: 'machines processing information' },
      { text: 'quiet computer systems' },
      { text: 'information stored in hardware' },
      { text: 'cold technical ambience' },
    ],
    type: 'anime',
  },

  /**
   * COSMIC LONELINESS
   */
  {
    id: 'cosmic_loneliness',
    comment: 'Не эпик, а человеческое одиночество на фоне космоса.',
    group: 'cosmic_loneliness',
    label: 'Cosmic Loneliness',
    positive: [
      { text: 'cosmic loneliness' },
      { text: 'human solitude in space' },
      { text: 'quiet distance from Earth' },
      { text: 'vast empty surroundings' },
      { text: 'emotional isolation in orbit' },
    ],
    type: 'anime',
  },
  {
    id: 'orbital_melancholy',
    comment: 'Меланхолия орбиты, расстояния и искусственной жизни.',
    group: 'cosmic_loneliness',
    label: 'Orbital Melancholy',
    positive: [
      { text: 'orbital melancholy' },
      { text: 'sadness in space' },
      { text: 'Earth seen from far away' },
      { text: 'quiet emotional distance' },
      { text: 'nostalgia beyond the atmosphere' },
    ],
    type: 'anime',
  },
  {
    id: 'earth_memory',
    comment: 'Память о Земле из космоса.',
    group: 'cosmic_loneliness',
    label: 'Earth Memory',
    positive: [
      { text: 'memory of Earth' },
      { text: 'remembering home from space' },
      { text: 'distant blue planet' },
      { text: 'human nostalgia in orbit' },
      { text: 'home as a faraway image' },
    ],
    type: 'anime',
  },
  {
    id: 'silent_orbit',
    comment: 'Тишина орбиты и холодный масштаб.',
    group: 'cosmic_loneliness',
    label: 'Silent Orbit',
    positive: [
      { text: 'silent orbit' },
      { text: 'quiet movement around Earth' },
      { text: 'weightless silence' },
      { text: 'slow orbital drift' },
      { text: 'vast technical calm' },
    ],
    type: 'anime',
  },

  /**
   * COLD TECHNOLOGY
   */
  {
    id: 'cold_machines',
    comment: 'Холодная техника без cyberpunk city-noir.',
    group: 'cold_technology',
    label: 'Cold Machines',
    positive: [
      { text: 'cold machines' },
      { text: 'impersonal technology' },
      { text: 'mechanical systems' },
      { text: 'metallic industrial atmosphere' },
      { text: 'human life surrounded by machines' },
    ],
    type: 'anime',
  },
  {
    id: 'life_support_systems',
    comment:
      'Поддержка жизни как атмосфера: воздух, насосы, гул, замкнутая система.',
    group: 'cold_technology',
    label: 'Life Support Systems',
    positive: [
      { text: 'life support systems' },
      { text: 'air circulation machinery' },
      { text: 'closed technical environment' },
      { text: 'machines keeping people alive' },
      { text: 'quiet mechanical breathing' },
    ],
    type: 'anime',
  },
  {
    id: 'mechanical_breathing',
    comment:
      'Техника как организм. Хорошо стыкуется с LAZNCY / sub breath field.',
    group: 'cold_technology',
    label: 'Mechanical Breathing',
    positive: [
      { text: 'mechanical breathing' },
      { text: 'machines breathing slowly' },
      { text: 'industrial life rhythm' },
      { text: 'slow machine pulse' },
      { text: 'technology behaving like an organism' },
    ],
    type: 'anime',
  },
  {
    id: 'synthetic_environment',
    comment: 'Искусственная среда вместо природного пространства.',
    group: 'cold_technology',
    label: 'Synthetic Environment',
    positive: [
      { text: 'synthetic environment' },
      { text: 'controlled artificial space' },
      { text: 'life inside engineered systems' },
      { text: 'manufactured atmosphere' },
      { text: 'closed technological world' },
    ],
    type: 'anime',
  },

  /**
   * LATE 80S OVA MOOD
   */
  {
    id: 'grainy_ova_mood',
    comment: 'Пыльная, зернистая, взрослая OVA-атмосфера.',
    group: 'ova_mood',
    label: 'Grainy OVA Mood',
    positive: [
      { text: 'grainy OVA mood' },
      { text: 'old anime film grain' },
      { text: 'dark 90s animation texture' },
      { text: 'cult sci-fi anime feeling' },
      { text: 'analog animation atmosphere' },
    ],
    type: 'anime',
  },
  {
    id: 'adult_ova_atmosphere',
    comment: 'Взрослый late-night anime sci-fi без подростковой романтики.',
    group: 'ova_mood',
    label: 'Adult OVA Atmosphere',
    positive: [
      { text: 'adult OVA atmosphere' },
      { text: 'mature anime science fiction' },
      { text: 'serious late-night animation mood' },
      { text: 'dark reflective sci-fi tone' },
      { text: 'non-childlike anime atmosphere' },
    ],
    type: 'anime',
  },
  {
    id: 'cult_scifi_anime',
    comment: 'Культовая sci-fi anime эстетика без конкретного тайтла.',
    group: 'ova_mood',
    label: 'Cult Sci-Fi Anime',
    positive: [
      { text: 'cult sci-fi anime atmosphere' },
      { text: 'underground Japanese animation mood' },
      { text: 'strange retro future' },
      { text: 'serious animated science fiction' },
      { text: 'late-night anime broadcast feeling' },
    ],
    type: 'anime',
  },
] as PromptTag[];
