import { PromptTag } from '~/types';

export default [
  /**
   * SPOKEN CORE
   */
  {
    id: 'spoken_word',
    comment: 'Базовый spoken word без привязки к полу и жанру.',
    group: 'spoken_core',
    label: 'Spoken Word',
    positive: [
      { text: 'spoken word' },
      { text: 'spoken delivery' },
      { text: 'spoken vocal phrases' },
      { text: 'voice over groove' },
      { text: 'rhythmic speech' },
    ],
    type: 'vocals',
  },
  {
    id: 'spoken_poetry',
    comment: 'Ближе к поэзии и наблюдению, чем к рэпу.',
    group: 'spoken_core',
    label: 'Spoken Poetry',
    positive: [
      { text: 'spoken poetry' },
      { text: 'poetic spoken delivery' },
      { text: 'reflective narration' },
      { text: 'measured spoken cadence' },
      { text: 'observational tone' },
    ],
    type: 'vocals',
  },
  {
    id: 'narration',
    comment: 'Голос-рассказчик поверх музыки.',
    group: 'spoken_core',
    label: 'Narration',
    positive: [
      { text: 'narration' },
      { text: 'narrator voice' },
      { text: 'storytelling presence' },
      { text: 'spoken narrative' },
      { text: 'voice guiding the track' },
    ],
    type: 'vocals',
  },

  /**
   * DEEP SPOKEN
   */
  {
    id: 'deep_spoken_word',
    comment: 'Один из ключевых архетипов для Deep House, UKG и Tribal.',
    group: 'deep_spoken',
    label: 'Deep Spoken Word',
    positive: [
      { text: 'deep spoken word' },
      { text: 'low-register spoken voice' },
      { text: 'deep narrator tone' },
      { text: 'calm spoken delivery' },
      { text: 'grounded vocal presence' },
    ],
    type: 'vocals',
  },
  {
    id: 'late_night_radio_voice',
    comment: 'Очень близко к тому самому ночному UKG-архетипу.',
    group: 'deep_spoken',
    label: 'Late Night Radio Voice',
    positive: [
      { text: 'late-night radio voice' },
      { text: 'night radio narrator' },
      { text: 'warm broadcast tone' },
      { text: 'low intimate voice' },
      { text: 'after-hours atmosphere' },
    ],
    type: 'vocals',
  },
  {
    id: 'velvet_narration',
    comment: 'Мягкий бархатный голос поверх грува.',
    group: 'deep_spoken',
    label: 'Velvet Narration',
    positive: [
      { text: 'velvet narration' },
      { text: 'warm narrator voice' },
      { text: 'smooth spoken delivery' },
      { text: 'soft intimate narration' },
      { text: 'close-mic vocal presence' },
    ],
    type: 'vocals',
  },

  /**
   * DETACHED
   */
  {
    id: 'detached_spoken_word',
    comment: 'Отстранённый голос наблюдателя. Очень близко к философии LAZNCY.',
    group: 'detached',
    label: 'Detached Spoken Word',
    positive: [
      { text: 'detached spoken word' },
      { text: 'emotionally restrained narration' },
      { text: 'observational voice' },
      { text: 'neutral spoken delivery' },
      { text: 'distance and reflection' },
    ],
    type: 'vocals',
  },
  {
    id: 'observational_narration',
    comment: 'Не герой событий, а наблюдатель.',
    group: 'detached',
    label: 'Observational Narration',
    positive: [
      { text: 'observational narration' },
      { text: 'voice of an observer' },
      { text: 'documentary-like tone' },
      { text: 'reflective commentary' },
      { text: 'quiet narration' },
    ],
    type: 'vocals',
  },
  {
    id: 'documentary_voice',
    comment: 'Документальный стиль подачи.',
    group: 'detached',
    label: 'Documentary Voice',
    positive: [
      { text: 'documentary voice' },
      { text: 'measured narration' },
      { text: 'informative spoken tone' },
      { text: 'calm voice-over' },
      { text: 'neutral storytelling' },
    ],
    type: 'vocals',
  },

  /**
   * STREET / GHETTO
   */
  {
    id: 'street_narration',
    comment: 'Очень полезно для Ghetto UKG и underground house.',
    group: 'street',
    label: 'Street Narration',
    positive: [
      { text: 'street narration' },
      { text: 'urban storyteller voice' },
      { text: 'street-level perspective' },
      { text: 'spoken street observations' },
      { text: 'underground atmosphere' },
    ],
    type: 'vocals',
  },
  {
    id: 'ghetto_spoken_word',
    comment:
      'Один из потенциально сильных модификаторов вместе с тегом Ghetto.',
    group: 'street',
    label: 'Ghetto Spoken Word',
    positive: [
      { text: 'ghetto spoken word' },
      { text: 'streetwise spoken delivery' },
      { text: 'raw urban narration' },
      { text: 'underground spoken flow' },
      { text: 'gritty vocal presence' },
    ],
    type: 'vocals',
  },
  {
    id: 'urban_storytelling',
    comment: 'Истории города вместо клубного MC.',
    group: 'street',
    label: 'Urban Storytelling',
    positive: [
      { text: 'urban storytelling' },
      { text: 'city observations' },
      { text: 'street narratives' },
      { text: 'voice describing the city' },
      { text: 'human stories in motion' },
    ],
    type: 'vocals',
  },

  /**
   * GARAGE MC
   */
  {
    id: 'garage_mc',
    comment: 'Классический UKG MC. Использовать осторожно.',
    group: 'garage_mc',
    label: 'Garage MC',
    positive: [
      { text: 'garage MC' },
      { text: 'UK garage MC' },
      { text: 'rhythmic vocal interjections' },
      { text: 'short MC phrases' },
      { text: 'garage vocal energy' },
    ],
    type: 'vocals',
  },
  {
    id: 'relaxed_garage_mc',
    comment: 'Гораздо ближе к твоим задачам, чем классический hype MC.',
    group: 'garage_mc',
    label: 'Relaxed Garage MC',
    positive: [
      { text: 'relaxed garage MC' },
      { text: 'cool spoken garage delivery' },
      { text: 'laid-back MC presence' },
      { text: 'restrained garage vocal' },
      { text: 'deep UKG atmosphere' },
    ],
    type: 'vocals',
  },
  {
    id: 'understated_mc',
    comment: 'MC как часть грува.',
    group: 'garage_mc',
    label: 'Understated MC',
    positive: [
      { text: 'understated MC' },
      { text: 'minimal MC presence' },
      { text: 'short spoken interjections' },
      { text: 'groove-supporting vocal role' },
      { text: 'never dominating the mix' },
    ],
    type: 'vocals',
  },

  /**
   * CONTROL
   */
  {
    id: 'not_rap_focused',
    comment: 'Помогает удерживать spoken territory.',
    group: 'control',
    label: 'Not Rap Focused',
    positive: [
      { text: 'spoken not rapped' },
      { text: 'voice-over style delivery' },
      { text: 'minimal rap influence' },
      { text: 'narration over performance' },
      { text: 'speech before flow' },
    ],
    type: 'vocals',
  },
  {
    id: 'no_hype_mc_spoken',
    comment: 'Контроль против фестивального MC.',
    group: 'control',
    label: 'No Hype MC Spoken',
    positive: [
      { text: 'calm spoken presence' },
      { text: 'no shouting' },
      { text: 'restrained vocal energy' },
      { text: 'measured delivery' },
      { text: 'controlled atmosphere' },
    ],
    type: 'vocals',
  },
] as PromptTag[];
