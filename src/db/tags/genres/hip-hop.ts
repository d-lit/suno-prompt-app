import { PromptTag } from '~/types';

export default [
  /**
   * HIP-HOP
   */
  {
    id: 'hip_hop',
    comment: 'Общий hip-hop слой.',
    group: 'hip_hop',
    label: 'Hip-Hop',
    positive: [
      { text: 'hip-hop' },
      { text: 'groove-driven rhythm' },
      { text: 'head-nod feel' },
      { text: 'sample-based production' },
      { text: 'urban music culture' },
    ],
    type: 'genre',
  },

  /**
   * BOOM BAP
   */
  {
    id: 'boom_bap',
    comment: 'Главный 90s New York архетип.',
    group: 'boom_bap',
    label: 'Boom Bap',
    positive: [
      { text: 'boom bap' },
      { text: 'hard kicks and dusty snares' },
      { text: '90s New York groove' },
      { text: 'head-nod rhythm' },
      { text: 'sample-based drums' },
    ],
    type: 'genre',
  },
  {
    id: 'golden_age_hip_hop',
    comment: 'Золотая эпоха хип-хопа.',
    group: 'boom_bap',
    label: 'Golden Age Hip-Hop',
    positive: [
      { text: 'golden age hip-hop' },
      { text: 'classic East Coast sound' },
      { text: 'sample-driven production' },
      { text: 'authentic boom bap feel' },
      { text: '90s hip-hop atmosphere' },
    ],
    type: 'genre',
  },
  {
    id: 'east_coast_hip_hop',
    comment: 'Нью-Йоркский характер.',
    group: 'boom_bap',
    label: 'East Coast Hip-Hop',
    positive: [
      { text: 'East Coast hip-hop' },
      { text: 'New York hip-hop' },
      { text: 'gritty urban groove' },
      { text: 'classic rap production' },
      { text: 'hard drum swing' },
    ],
    type: 'genre',
  },

  /**
   * JAZZ RAP
   */
  {
    id: 'jazz_rap',
    comment: 'Очень перспективный жанр для твоих задач.',
    group: 'jazz_rap',
    label: 'Jazz Rap',
    positive: [
      { text: 'jazz rap' },
      { text: 'jazz-influenced hip-hop' },
      { text: 'warm jazz samples' },
      { text: 'soulful groove' },
      { text: 'musical boom bap' },
    ],
    type: 'genre',
  },
  {
    id: 'conscious_hip_hop',
    comment: 'Более взрослый и спокойный вариант.',
    group: 'jazz_rap',
    label: 'Conscious Hip-Hop',
    positive: [
      { text: 'conscious hip-hop' },
      { text: 'thoughtful groove' },
      { text: 'intelligent rap atmosphere' },
      { text: 'reflective production style' },
      { text: 'musical storytelling' },
    ],
    type: 'genre',
  },
  {
    id: 'underground_hip_hop',
    comment: 'Подпольный хип-хоп без коммерческого лоска.',
    group: 'jazz_rap',
    label: 'Underground Hip-Hop',
    positive: [
      { text: 'underground hip-hop' },
      { text: 'raw sample-based production' },
      { text: 'independent rap aesthetic' },
      { text: 'dusty beats' },
      { text: 'street-level authenticity' },
    ],
    type: 'genre',
  },

  /**
   * DUSTY
   */
  {
    id: 'dusty_hip_hop',
    comment: 'Пыльные семплы и винтажная фактура.',
    group: 'dusty',
    label: 'Dusty Hip-Hop',
    positive: [
      { text: 'dusty hip-hop' },
      { text: 'aged sample texture' },
      { text: 'vinyl-inspired atmosphere' },
      { text: 'warm imperfections' },
      { text: 'crate-digger aesthetic' },
    ],
    type: 'genre',
  },
  {
    id: 'sample_based_hip_hop',
    comment: 'Семплирование как основной производственный подход.',
    group: 'dusty',
    label: 'Sample-Based Hip-Hop',
    positive: [
      { text: 'sample-based hip-hop' },
      { text: 'chopped musical phrases' },
      { text: 'crate-digger production' },
      { text: 'loop-based composition' },
      { text: 'classic hip-hop structure' },
    ],
    type: 'genre',
  },
  {
    id: 'crate_digger',
    comment: 'Для проверки насколько Suno знает этот термин.',
    group: 'dusty',
    label: 'Crate Digger',
    positive: [
      { text: 'crate digger aesthetic' },
      { text: 'rare record discoveries' },
      { text: 'deep sample culture' },
      { text: 'obscure musical fragments' },
      { text: 'vinyl collector atmosphere' },
    ],
    type: 'genre',
  },

  /**
   * LO-FI HIP-HOP
   */
  {
    id: 'lofi_hip_hop',
    comment: 'Не anime-lofi, а именно hip-hop ветка.',
    group: 'lofi',
    label: 'Lo-Fi Hip-Hop',
    positive: [
      { text: 'lo-fi hip-hop' },
      { text: 'relaxed beat-making' },
      { text: 'soft dusty groove' },
      { text: 'introspective rhythm' },
      { text: 'warm tape character' },
    ],
    type: 'genre',
  },
  {
    id: 'late_night_beats',
    comment: 'Ночной битмейкерский вайб.',
    group: 'lofi',
    label: 'Late-Night Beats',
    positive: [
      { text: 'late-night beats' },
      { text: 'after-hours production' },
      { text: 'quiet urban mood' },
      { text: 'headphones at midnight' },
      { text: 'reflective beat atmosphere' },
    ],
    type: 'genre',
  },
  {
    id: 'instrumental_hip_hop',
    comment: 'Особенно полезно для инструментальных генераций.',
    group: 'lofi',
    label: 'Instrumental Hip-Hop',
    positive: [
      { text: 'instrumental hip-hop' },
      { text: 'beat-focused composition' },
      { text: 'groove over vocals' },
      { text: 'sample-driven instrumental' },
      { text: 'head-nod instrumental music' },
    ],
    type: 'genre',
  },
] as PromptTag[];
