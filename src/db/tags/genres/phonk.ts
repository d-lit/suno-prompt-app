import { PromptTag } from '~/types';

const memphisPositive = [
  { text: 'Memphis Rap' },
  { text: 'cassette tape texture' },
  { text: 'lo-fi underground production' },
  { text: 'raw drum machine groove' },
  { text: 'dark southern atmosphere' },
];

export default [
  {
    id: 'memphis_rap',
    comment:
      'Главный тег файла. Основа будущего Phonk до эпохи TikTok и дрифта.',
    group: 'memphis',
    label: 'Memphis Rap',
    positive: [
      ...memphisPositive,
      { text: 'underground cassette culture' },
      { text: 'dark repetitive loops' },
      { text: 'minimal sample-driven production' },
    ],
    type: 'genre',
  },

  {
    id: 'memphis_underground',
    comment: 'Максимально сырой андеграундный Мемфис.',
    group: 'memphis',
    label: 'Memphis Underground',
    positive: [
      { text: 'Memphis Underground' },
      ...memphisPositive,
      { text: 'street tape recordings' },
      { text: 'dirty low fidelity sound' },
      { text: 'underground horror atmosphere' },
    ],
    type: 'genre',
  },

  {
    id: 'lo_fi_memphis',
    comment: 'Лоуфай сторона мемфисского звучания.',
    group: 'memphis',
    label: 'Lo-Fi Memphis',
    positive: [
      { text: 'Lo-Fi Memphis' },
      ...memphisPositive,
      { text: 'tape hiss' },
      { text: 'degraded cassette quality' },
      { text: 'dusty drum machine sound' },
    ],
    type: 'genre',
  },

  {
    id: 'cassette_memphis',
    comment: 'Акцент на кассетную эстетику и ограничения домашней записи.',
    group: 'memphis',
    label: 'Cassette Memphis',
    positive: [
      { text: 'Cassette Memphis' },
      { text: 'cassette saturation' },
      { text: 'tape wear' },
      { text: 'analog degradation' },
      { text: 'underground tape culture' },
    ],
    type: 'genre',
  },

  {
    id: 'memphis_horrorcore',
    comment: 'Тёмная и мрачная сторона Мемфиса.',
    group: 'memphis',
    label: 'Memphis Horrorcore',
    positive: [
      { text: 'Memphis Horrorcore' },
      ...memphisPositive,
      { text: 'ominous atmosphere' },
      { text: 'dark hypnotic loops' },
      { text: 'sinister underground mood' },
    ],
    type: 'genre',
  },

  {
    id: 'early_phonk',
    comment:
      'Ранний Phonk до drift-эпохи. Максимально близко к оригинальным мемфисским корням.',
    group: 'memphis',
    label: 'Early Phonk',
    positive: [
      { text: 'Early Phonk' },
      { text: 'classic phonk' },
      { text: 'underground phonk' },
      { text: 'Memphis Rap influence' },
      { text: 'cassette-era production' },
      { text: 'lo-fi southern groove' },
    ],
    type: 'genre',
  },

  {
    id: 'cowbell_rhythms',
    comment: 'Фирменная коровья колокольня Мемфиса и раннего фонка.',
    group: 'memphis',
    label: 'Cowbell Rhythms',
    positive: [
      { text: 'Cowbell Rhythms' },
      { text: 'cowbell patterns' },
      { text: 'metallic percussion accents' },
      { text: 'Memphis rhythm programming' },
    ],
    type: 'genre',
  },
] as PromptTag[];
