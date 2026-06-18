import { PromptTag } from '~/types';

export default [
  /**
   * Bossa-Nova
   */
  {
    id: 'bossa_nova',
    comment:
      'Bossa Nova работает как мягкий ритмический и инструментальный модификатор: guitar comping, shaker, rim accents, soft swing.',
    group: 'brazilian',
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
  /**
   * BRAZILIAN JAZZ
   */
  {
    id: 'brazilian_jazz',
    group: 'brazilian_jazz',
    label: 'Brazilian Jazz',
    positive: [{ text: 'Brazilian Jazz' }],
    type: 'genre',
  },
  {
    id: 'modern_brazilian_jazz',
    group: 'brazilian_jazz',
    label: 'Modern Brazilian Jazz',
    positive: [{ text: 'Modern Brazilian Jazz' }],
    type: 'genre',
  },
  {
    id: 'contemporary_brazilian_jazz',
    group: 'brazilian_jazz',
    label: 'Contemporary Brazilian Jazz',
    positive: [{ text: 'Contemporary Brazilian Jazz' }],
    type: 'genre',
  },
  {
    id: 'samba_jazz',
    group: 'brazilian_jazz',
    label: 'Samba Jazz',
    positive: [{ text: 'Samba Jazz' }],
    type: 'genre',
  },
  {
    id: 'brazilian_fusion',
    group: 'brazilian_jazz',
    label: 'Brazilian Fusion',
    positive: [{ text: 'Brazilian Fusion' }],
    type: 'genre',
  },
  {
    id: 'jazz_brasileiro',
    group: 'brazilian_jazz',
    label: 'Jazz Brasileiro',
    positive: [{ text: 'Jazz Brasileiro' }],
    type: 'genre',
  },

  /**
   * MPB
   */
  {
    id: 'mpb',
    group: 'mpb',
    label: 'MPB',
    positive: [{ text: 'MPB' }],
    type: 'genre',
  },
  {
    id: 'musica_popular_brasileira',
    group: 'mpb',
    label: 'Musica Popular Brasileira',
    positive: [{ text: 'Musica Popular Brasileira' }],
    type: 'genre',
  },

  /**
   * GROOVE
   */
  {
    id: 'brazilian_groove',
    group: 'brazilian',
    label: 'Brazilian Groove',
    positive: [{ text: 'Brazilian Groove' }],
    type: 'genre',
  },
  {
    id: 'deep_brazilian_groove',
    group: 'brazilian',
    label: 'Deep Brazilian Groove',
    positive: [{ text: 'Deep Brazilian Groove' }],
    type: 'genre',
  },
  {
    id: 'acoustic_brazilian_groove',
    group: 'brazilian',
    label: 'Acoustic Brazilian Groove',
    positive: [{ text: 'Acoustic Brazilian Groove' }],
    type: 'genre',
  },
  {
    id: 'percussive_brazilian_jazz',
    group: 'brazilian',
    label: 'Percussive Brazilian Jazz',
    positive: [{ text: 'Percussive Brazilian Jazz' }],
    type: 'genre',
  },
  {
    id: 'rhodes_brazilian_groove',
    group: 'brazilian',
    label: 'Rhodes Brazilian Groove',
    positive: [{ text: 'Rhodes Brazilian Groove' }],
    type: 'genre',
  },

  /**
   * CITY
   */
  {
    id: 'rio_night',
    group: 'brazilian',
    label: 'Rio Night',
    positive: [{ text: 'Rio Night' }],
    type: 'genre',
  },
  {
    id: 'rio_after_dark',
    group: 'brazilian',
    label: 'Rio After Dark',
    positive: [{ text: 'Rio After Dark' }],
    type: 'genre',
  },
  {
    id: 'urban_brazilian_groove',
    group: 'brazilian',
    label: 'Urban Brazilian Groove',
    positive: [{ text: 'Urban Brazilian Groove' }],
    type: 'genre',
  },

  /**
   * COASTAL
   */
  {
    id: 'tropical_jazz',
    group: 'brazilian',
    label: 'Tropical Jazz',
    positive: [{ text: 'Tropical Jazz' }],
    type: 'genre',
  },
  {
    id: 'coastal_jazz',
    group: 'brazilian',
    label: 'Coastal Jazz',
    positive: [{ text: 'Coastal Jazz' }],
    type: 'genre',
  },
  {
    id: 'late_night_brazilian_jazz',
    group: 'brazilian',
    label: 'Late-Night Brazilian Jazz',
    positive: [{ text: 'Late-Night Brazilian Jazz' }],
    type: 'genre',
  },

  /**
   * ENSEMBLES
   */
  {
    id: 'brazilian_instrumental',
    group: 'brazilian',
    label: 'Brazilian Instrumental',
    positive: [{ text: 'Brazilian Instrumental' }],
    type: 'genre',
  },
  {
    id: 'brazilian_jazz_trio',
    group: 'brazilian',
    label: 'Brazilian Jazz Trio',
    positive: [{ text: 'Brazilian Jazz Trio' }],
    type: 'genre',
  },
  {
    id: 'brazilian_jazz_quartet',
    group: 'brazilian',
    label: 'Brazilian Jazz Quartet',
    positive: [{ text: 'Brazilian Jazz Quartet' }],
    type: 'genre',
  },
] as PromptTag[];
