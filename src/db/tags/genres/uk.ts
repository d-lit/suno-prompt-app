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
] as PromptTag[];
