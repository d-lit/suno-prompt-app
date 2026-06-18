import { PromptTag } from '~/types';

export default [
  /**
   * ELECTRO
   */
  {
    id: 'electro',
    comment: 'Классический electro. Не electro house.',
    group: 'electro',
    label: 'Electro',
    positive: [
      { text: 'electro' },
      { text: 'electro groove' },
      { text: '808 rhythm patterns' },
      { text: 'robotic funk' },
      { text: 'machine-driven groove' },
    ],
    type: 'genre',
  },
  {
    id: 'old_school_electro',
    comment: 'Ранний electro и electro-funk.',
    group: 'electro',
    label: 'Old School Electro',
    positive: [
      { text: 'old school electro' },
      { text: 'classic electro groove' },
      { text: 'vintage drum machine rhythms' },
      { text: 'early electronic funk' },
      { text: 'electro-funk heritage' },
    ],
    type: 'genre',
  },
  {
    id: 'electro_funk',
    comment: 'Самый важный кандидат файла.',
    group: 'electro',
    label: 'Electro Funk',
    positive: [
      { text: 'electro funk' },
      { text: 'funky machine rhythms' },
      { text: 'robotic groove' },
      { text: 'electronic funk basslines' },
      { text: '808-driven movement' },
    ],
    type: 'genre',
  },

  /**
   * DETROIT
   */
  {
    id: 'detroit_electro',
    comment: 'Drexciya / Cybotron territory.',
    group: 'detroit',
    label: 'Detroit Electro',
    positive: [
      { text: 'Detroit electro' },
      { text: 'futuristic machine funk' },
      { text: 'cold synthetic groove' },
      { text: 'deep electronic movement' },
      { text: 'underground electro tradition' },
    ],
    type: 'genre',
  },
  {
    id: 'deep_electro',
    comment: 'Более атмосферная ветка.',
    group: 'detroit',
    label: 'Deep Electro',
    positive: [
      { text: 'deep electro' },
      { text: 'submerged machine rhythms' },
      { text: 'atmospheric electronic groove' },
      { text: 'cold futuristic mood' },
      { text: 'deep synthetic bass movement' },
    ],
    type: 'genre',
  },
  {
    id: 'aquatic_electro',
    comment: 'Проверка Drexciya-подобного архетипа.',
    group: 'detroit',
    label: 'Aquatic Electro',
    positive: [
      { text: 'aquatic electro' },
      { text: 'submerged electronic world' },
      { text: 'deep underwater machine funk' },
      { text: 'fluid synthetic movement' },
      { text: 'oceanic electro atmosphere' },
    ],
    type: 'genre',
  },

  /**
   * ROBOTIC
   */
  {
    id: 'robot_funk',
    comment: 'Машина учится фанку.',
    group: 'robotic',
    label: 'Robot Funk',
    positive: [
      { text: 'robot funk' },
      { text: 'machine groove' },
      { text: 'synthetic rhythm section' },
      { text: 'robotic movement' },
      { text: 'electronic body music influence' },
    ],
    type: 'genre',
  },
  {
    id: 'machine_funk',
    comment: 'Очень интересный модификатор для UK Bass.',
    group: 'robotic',
    label: 'Machine Funk',
    positive: [
      { text: 'machine funk' },
      { text: 'mechanical syncopation' },
      { text: 'cold groove mechanics' },
      { text: 'industrial funk movement' },
      { text: 'precise rhythmic machinery' },
    ],
    type: 'genre',
  },
  {
    id: 'cyber_funk',
    comment: 'Пересечение electro и cyberpunk.',
    group: 'robotic',
    label: 'Cyber Funk',
    positive: [
      { text: 'cyber funk' },
      { text: 'futuristic funk rhythms' },
      { text: 'digital groove systems' },
      { text: 'neon funk atmosphere' },
      { text: 'electronic body movement' },
    ],
    type: 'genre',
  },

  /**
   * BREAKS
   */
  {
    id: 'electro_breaks',
    comment: 'Особенно интересно проверить с amen и UK Bass.',
    group: 'breaks',
    label: 'Electro Breaks',
    positive: [
      { text: 'electro breaks' },
      { text: 'broken electro rhythms' },
      { text: 'syncopated machine drums' },
      { text: 'electronic breakbeat groove' },
      { text: 'robotic percussion patterns' },
    ],
    type: 'genre',
  },
  {
    id: 'breakbeat_electro',
    comment: 'Breakbeat сторона electro.',
    group: 'breaks',
    label: 'Breakbeat Electro',
    positive: [
      { text: 'breakbeat electro' },
      { text: 'electro breakbeat patterns' },
      { text: 'funky broken drums' },
      { text: 'dynamic machine rhythm' },
      { text: 'electronic groove science' },
    ],
    type: 'genre',
  },
  {
    id: 'electro_percussion',
    comment: 'Акцент на ритм и драм-машины.',
    group: 'breaks',
    label: 'Electro Percussion',
    positive: [
      { text: 'electro percussion' },
      { text: '808 drum programming' },
      { text: 'machine percussion' },
      { text: 'synthetic rhythm architecture' },
      { text: 'electronic drum science' },
    ],
    type: 'genre',
  },

  /**
   * 808
   */
  {
    id: 'tr808_electro',
    comment: 'Возможно Suno хорошо знает прямое упоминание 808.',
    group: '808',
    label: 'TR-808 Electro',
    positive: [
      { text: 'TR-808 electro' },
      { text: '808 kick and clap patterns' },
      { text: 'classic drum machine groove' },
      { text: 'electro rhythm programming' },
      { text: 'vintage electronic drums' },
    ],
    type: 'genre',
  },
  {
    id: 'drum_machine_funk',
    comment: 'Фанк через драм-машину.',
    group: '808',
    label: 'Drum Machine Funk',
    positive: [
      { text: 'drum machine funk' },
      { text: 'electronic rhythm section' },
      { text: 'synthetic funk pulse' },
      { text: 'sequenced groove patterns' },
      { text: 'machine-led funk' },
    ],
    type: 'genre',
  },
  {
    id: 'sequenced_groove',
    comment: 'Грув собранный секвенсором.',
    group: '808',
    label: 'Sequenced Groove',
    positive: [
      { text: 'sequenced groove' },
      { text: 'step-programmed rhythm' },
      { text: 'machine precision' },
      { text: 'electronic groove construction' },
      { text: 'pattern-based movement' },
    ],
    type: 'genre',
  },
] as PromptTag[];
