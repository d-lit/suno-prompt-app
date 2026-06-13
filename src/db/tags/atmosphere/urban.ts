import { PromptTag } from '~/types';

export default [
  /**
   * URBAN
   */
  {
    id: 'urban',
    comment:
      'Базовая городская атмосфера. Один из самых универсальных атмосферных тегов.',
    group: 'urban',
    label: 'Urban',
    positive: [
      { text: 'urban atmosphere' },
      { text: 'city environment' },
      { text: 'modern metropolitan mood' },
      { text: 'life inside the city' },
      { text: 'urban energy' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'city_life',
    comment: 'Повседневная жизнь большого города.',
    group: 'urban',
    label: 'City Life',
    positive: [
      { text: 'city life' },
      { text: 'everyday urban movement' },
      { text: 'human activity' },
      { text: 'modern city rhythm' },
      { text: 'urban social atmosphere' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'metropolitan',
    comment: 'Большой мегаполис вместо маленького города.',
    group: 'urban',
    label: 'Metropolitan',
    positive: [
      { text: 'metropolitan atmosphere' },
      { text: 'large modern city' },
      { text: 'dense urban environment' },
      { text: 'city infrastructure' },
      { text: 'big-city mood' },
    ],
    type: 'atmosphere',
  },

  /**
   * UNDERGROUND
   */
  {
    id: 'underground',
    comment: 'Один из главных сквозных тегов проекта.',
    group: 'underground',
    label: 'Underground',
    positive: [
      { text: 'underground atmosphere' },
      { text: 'independent scene energy' },
      { text: 'non-commercial spirit' },
      { text: 'subcultural mood' },
      { text: 'hidden city spaces' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'underground_culture',
    comment: 'Акцент на локальную сцену и независимую культуру.',
    group: 'underground',
    label: 'Underground Culture',
    positive: [
      { text: 'underground culture' },
      { text: 'local scene energy' },
      { text: 'community-driven atmosphere' },
      { text: 'independent creative spaces' },
      { text: 'subcultural identity' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'hidden_city',
    comment: 'Не открытки города, а его скрытая сторона.',
    group: 'underground',
    label: 'Hidden City',
    positive: [
      { text: 'hidden city' },
      { text: 'backstreets and side roads' },
      { text: 'forgotten urban corners' },
      { text: 'quiet city spaces' },
      { text: 'unseen parts of the city' },
    ],
    type: 'atmosphere',
  },

  /**
   * GHETTO
   */
  {
    id: 'ghetto',
    comment:
      'Один из реально работающих модификаторов. Не жанр, а настроение и перспектива.',
    group: 'ghetto',
    label: 'Ghetto',
    positive: [
      { text: 'ghetto atmosphere' },
      { text: 'raw urban energy' },
      { text: 'street-level perspective' },
      { text: 'unpolished city mood' },
      { text: 'gritty urban character' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'street_level',
    comment: 'Город глазами человека, а не сверху.',
    group: 'ghetto',
    label: 'Street Level',
    positive: [
      { text: 'street-level perspective' },
      { text: 'life on the street' },
      { text: 'human-scale city experience' },
      { text: 'street observations' },
      { text: 'everyday urban reality' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'raw_urban',
    comment: 'Грязнее и честнее обычного urban.',
    group: 'ghetto',
    label: 'Raw Urban',
    positive: [
      { text: 'raw urban atmosphere' },
      { text: 'unfiltered city mood' },
      { text: 'rough urban texture' },
      { text: 'gritty realism' },
      { text: 'city without polish' },
    ],
    type: 'atmosphere',
  },

  /**
   * INDUSTRIAL
   */
  {
    id: 'industrial',
    comment: 'Промышленная городская среда без ухода в industrial music.',
    group: 'industrial',
    label: 'Industrial',
    positive: [
      { text: 'industrial atmosphere' },
      { text: 'concrete and steel' },
      { text: 'urban infrastructure' },
      { text: 'mechanical environment' },
      { text: 'industrial landscape' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'concrete_city',
    comment: 'Бетонный городской пейзаж.',
    group: 'industrial',
    label: 'Concrete City',
    positive: [
      { text: 'concrete city' },
      { text: 'grey urban landscape' },
      { text: 'tower blocks and roads' },
      { text: 'dense architecture' },
      { text: 'hard urban environment' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'urban_infrastructure',
    comment: 'Дороги, мосты, станции, развязки.',
    group: 'industrial',
    label: 'Urban Infrastructure',
    positive: [
      { text: 'urban infrastructure' },
      { text: 'roads and railways' },
      { text: 'bridges and stations' },
      { text: 'transport networks' },
      { text: 'city systems in motion' },
    ],
    type: 'atmosphere',
  },

  /**
   * CITY MOTION
   */
  {
    id: 'city_motion',
    comment: 'Город как поток людей, машин и информации.',
    group: 'motion',
    label: 'City Motion',
    positive: [
      { text: 'city motion' },
      { text: 'constant movement' },
      { text: 'urban flow' },
      { text: 'people and vehicles' },
      { text: 'living city organism' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'commuter_energy',
    comment: 'Поезда, автобусы, пересадки, движение.',
    group: 'motion',
    label: 'Commuter Energy',
    positive: [
      { text: 'commuter energy' },
      { text: 'daily movement through the city' },
      { text: 'transport rhythm' },
      { text: 'urban transit atmosphere' },
      { text: 'city in motion' },
    ],
    type: 'atmosphere',
  },
  {
    id: 'information_flow',
    comment: 'Очень близко к философии LAZNCY.',
    group: 'motion',
    label: 'Information Flow',
    positive: [
      { text: 'information flow' },
      { text: 'digital signals moving through the city' },
      { text: 'urban communication networks' },
      { text: 'constant data movement' },
      { text: 'invisible city systems' },
    ],
    type: 'atmosphere',
  },
] as PromptTag[];
