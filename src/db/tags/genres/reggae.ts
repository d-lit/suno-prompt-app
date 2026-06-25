import { PromptTag } from '~/types';

export default [
  /**
   * ROOTS
   */
  {
    id: 'roots_reggae',
    comment:
      'Классический roots reggae. Медленный грув, акцент на басе и оффбитах.',
    group: 'roots',
    label: 'Roots Reggae',
    positive: [
      { text: 'Roots Reggae' },
      { text: 'deep reggae groove' },
      { text: 'offbeat guitar skank' },
      { text: 'heavy bass foundation' },
      { text: 'organic reggae rhythm section' },
    ],
    type: 'genre',
  },
  {
    id: 'classic_reggae',
    comment:
      'Базовый классический reggae без ухода в dancehall или pop-reggae.',
    group: 'roots',
    label: 'Classic Reggae',
    positive: [
      { text: 'Classic Reggae' },
      { text: 'traditional reggae rhythm' },
      { text: 'laid-back offbeat groove' },
      { text: 'warm bassline' },
      { text: 'guitar skank rhythm' },
    ],
    type: 'genre',
  },

  /**
   * RHYTHM VARIATIONS
   */
  {
    id: 'one_drop_reggae',
    comment:
      'Самый узнаваемый ритм регги. Расслабленный грув с характерным one drop ощущением.',
    group: 'rhythm',
    label: 'One Drop Reggae',
    positive: [
      { text: 'One Drop Reggae' },
      { text: 'one drop rhythm' },
      { text: 'deep reggae pocket' },
      { text: 'laid-back groove' },
      { text: 'syncopated reggae drums' },
    ],
    type: 'genre',
  },
  {
    id: 'rockers_reggae',
    comment: 'Более драйвовая и плотная барабанная школа reggae.',
    group: 'rhythm',
    label: 'Rockers Reggae',
    positive: [
      { text: 'Rockers Reggae' },
      { text: 'driving reggae groove' },
      { text: 'steady kick drum pulse' },
      { text: 'heavy rhythmic foundation' },
      { text: 'powerful reggae rhythm section' },
    ],
    type: 'genre',
  },
  {
    id: 'steppers_reggae',
    comment:
      'Регги с 4x4 бочкой. Самый полезный ритмический мост к dub, techno и bass music.',
    group: 'rhythm',
    label: 'Steppers Reggae',
    positive: [
      { text: 'Steppers Reggae' },
      { text: 'Steppers' },
      { text: 'four on the floor reggae rhythm' },
      { text: 'driving steppers groove' },
      { text: 'militant bass pulse' },
    ],
    type: 'genre',
  },
  {
    id: 'reggae_skank',
    comment: 'Акцент на offbeat-гитару и клавишный skank.',
    group: 'rhythm',
    label: 'Reggae Skank',
    positive: [
      { text: 'Reggae Skank' },
      { text: 'offbeat guitar skank' },
      { text: 'organ bubble rhythm' },
      { text: 'syncopated reggae accents' },
      { text: 'choppy offbeat groove' },
    ],
    type: 'genre',
  },

  /**
   * DIGITAL
   */
  {
    id: 'digital_reggae',
    comment:
      'Цифровая эпоха reggae и раннего dancehall: драм-машины, синтетические басы, сухой грув.',
    group: 'digital',
    label: 'Digital Reggae',
    positive: [
      { text: 'Digital Reggae' },
      { text: 'digital reggae groove' },
      { text: 'electronic reggae production' },
      { text: 'drum machine reggae rhythms' },
      { text: 'synthetic reggae textures' },
    ],
    type: 'genre',
  },
  {
    id: 'rub_a_dub',
    comment: 'Rub-a-dub как более живая и грувовая reggae/dancehall-связка.',
    group: 'digital',
    label: 'Rub-a-Dub',
    positive: [
      { text: 'Rub-a-Dub' },
      { text: 'rub-a-dub reggae groove' },
      { text: 'DJ reggae rhythm' },
      { text: 'bass-heavy reggae pocket' },
      { text: 'dancehall roots energy' },
    ],
    type: 'genre',
  },
] as PromptTag[];
