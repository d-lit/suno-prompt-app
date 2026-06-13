import { PromptTag } from '~/types';

export default [
  /**
   * JAZZ ANIME
   */
  {
    id: 'jazz_anime',
    comment: 'Общий джазовый аниме-архетип.',
    group: 'jazz_core',
    label: 'Jazz Anime',
    positive: [
      { text: 'jazz anime atmosphere' },
      { text: 'stylish urban jazz' },
      { text: 'late-night jazz energy' },
      { text: 'cool cinematic jazz' },
      { text: 'modern anime soundtrack mood' },
    ],
    type: 'anime',
  },
  {
    id: 'cool_jazz_anime',
    comment: 'Главный кандидат для Cowboy Bebop territory.',
    group: 'jazz_core',
    label: 'Cool Jazz Anime',
    positive: [
      { text: 'cool jazz anime' },
      { text: 'stylish jazz soundtrack' },
      { text: 'urban jazz atmosphere' },
      { text: 'late-night coolness' },
      { text: 'smoke and neon mood' },
    ],
    type: 'anime',
  },
  {
    id: 'stylish_pursuit',
    comment: 'Очень бибоповский архетип.',
    group: 'jazz_core',
    label: 'Stylish Pursuit',
    positive: [
      { text: 'stylish pursuit' },
      { text: 'motion through the city' },
      { text: 'cool confidence' },
      { text: 'urban chase atmosphere' },
      { text: 'jazz-driven momentum' },
    ],
    type: 'anime',
  },

  /**
   * URBAN JAZZ
   */
  {
    id: 'smoke_and_neon',
    comment: 'Ночной джазовый город.',
    group: 'urban_jazz',
    label: 'Smoke And Neon',
    positive: [
      { text: 'smoke and neon' },
      { text: 'late-night city jazz' },
      { text: 'neon reflections' },
      { text: 'urban nightlife' },
      { text: 'stylish night atmosphere' },
    ],
    type: 'anime',
  },
  {
    id: 'late_night_jazz_club',
    comment: 'Один из самых перспективных тегов файла.',
    group: 'urban_jazz',
    label: 'Late-Night Jazz Club',
    positive: [
      { text: 'late-night jazz club' },
      { text: 'small underground venue' },
      { text: 'intimate jazz performance' },
      { text: 'dim lights and conversation' },
      { text: 'after-hours atmosphere' },
    ],
    type: 'anime',
  },
  {
    id: 'urban_cool',
    comment: 'Спокойная городская уверенность.',
    group: 'urban_jazz',
    label: 'Urban Cool',
    positive: [
      { text: 'urban cool' },
      { text: 'effortless confidence' },
      { text: 'city sophistication' },
      { text: 'relaxed style' },
      { text: 'modern metropolitan mood' },
    ],
    type: 'anime',
  },

  /**
   * MODERN JAZZ
   */
  {
    id: 'modern_jazz_anime',
    comment: 'Ближе к Sakamichi no Apollon и современным OST.',
    group: 'modern_jazz',
    label: 'Modern Jazz Anime',
    positive: [
      { text: 'modern jazz anime' },
      { text: 'contemporary jazz soundtrack' },
      { text: 'modern harmonic language' },
      { text: 'expressive ensemble playing' },
      { text: 'urban musical storytelling' },
    ],
    type: 'anime',
  },
  {
    id: 'jazz_session_anime',
    comment: 'Живая джазовая сессия как сюжет.',
    group: 'modern_jazz',
    label: 'Jazz Session Anime',
    positive: [
      { text: 'jazz session atmosphere' },
      { text: 'musicians playing together' },
      { text: 'live improvisation energy' },
      { text: 'creative musical dialogue' },
      { text: 'small ensemble chemistry' },
    ],
    type: 'anime',
  },
  {
    id: 'young_jazz_musicians',
    comment:
      'Интересно проверить насколько Suno понимает этот сюжетный архетип.',
    group: 'modern_jazz',
    label: 'Young Jazz Musicians',
    positive: [
      { text: 'young jazz musicians' },
      { text: 'musical discovery' },
      { text: 'learning through performance' },
      { text: 'creative friendship' },
      { text: 'jazz as personal growth' },
    ],
    type: 'anime',
  },

  /**
   * RETRO FUTURE
   */
  {
    id: 'retro_futuristic_jazz',
    comment: 'Сильное пересечение между Bebop, city-pop и sci-fi.',
    group: 'retro_future',
    label: 'Retro Futuristic Jazz',
    positive: [
      { text: 'retro futuristic jazz' },
      { text: 'future seen through jazz' },
      { text: 'space-age cool' },
      { text: 'stylish sci-fi atmosphere' },
      { text: 'urban future nostalgia' },
    ],
    type: 'anime',
  },
  {
    id: 'space_jazz',
    comment: 'Кандидат на отдельную ветку экспериментов.',
    group: 'retro_future',
    label: 'Space Jazz',
    positive: [
      { text: 'space jazz atmosphere' },
      { text: 'cosmic jazz mood' },
      { text: 'floating urban future' },
      { text: 'jazz beyond Earth' },
      { text: 'interstellar coolness' },
    ],
    type: 'anime',
  },
  {
    id: 'future_noir_jazz',
    comment: 'Ближе к noir и sci-fi OST.',
    group: 'retro_future',
    label: 'Future Noir Jazz',
    positive: [
      { text: 'future noir jazz' },
      { text: 'dark futuristic city' },
      { text: 'rain and neon' },
      { text: 'night-time mystery' },
      { text: 'urban noir soundtrack' },
    ],
    type: 'anime',
  },

  /**
   * ACTION JAZZ
   */
  {
    id: 'kinetic_jazz',
    comment: 'Движение и драйв без супергероики.',
    group: 'action_jazz',
    label: 'Kinetic Jazz',
    positive: [
      { text: 'kinetic jazz' },
      { text: 'driving jazz energy' },
      { text: 'fast urban movement' },
      { text: 'restless momentum' },
      { text: 'stylish action atmosphere' },
    ],
    type: 'anime',
  },
  {
    id: 'jazz_noir_action',
    comment: 'Джазовый экшен через атмосферу, а не через эпик.',
    group: 'action_jazz',
    label: 'Jazz Noir Action',
    positive: [
      { text: 'jazz noir action' },
      { text: 'urban mystery' },
      { text: 'cool tension' },
      { text: 'stylish conflict' },
      { text: 'night-time pursuit' },
    ],
    type: 'anime',
  },
  {
    id: 'street_level_jazz',
    comment: 'Очень хорошо сочетается с urban/ghetto слоями.',
    group: 'action_jazz',
    label: 'Street-Level Jazz',
    positive: [
      { text: 'street-level jazz' },
      { text: 'city life through jazz' },
      { text: 'urban realism' },
      { text: 'human-scale stories' },
      { text: 'everyday city tension' },
    ],
    type: 'anime',
  },
] as PromptTag[];
