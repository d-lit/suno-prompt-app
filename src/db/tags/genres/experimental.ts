import { PromptTag } from '~/types';

export default [
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
