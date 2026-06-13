import { PromptTag } from '~/types';

export default [
  /**
   * FEMALE CORE
   */
  {
    id: 'adult_female_vocal',
    comment:
      'Базовый взрослый женский вокал без teenage pop и чрезмерной сладости.',
    group: 'female_core',
    label: 'Adult Female Vocal',
    positive: [
      { text: 'adult female vocal' },
      { text: 'mature female voice' },
      { text: 'controlled female delivery' },
      { text: 'soft female tone' },
      { text: 'no teenage pop tone' },
    ],
    type: 'vocals',
  },
  {
    id: 'soft_female_vocal',
    comment: 'Мягкий женский вокал для Balearic, City Pop, Bossa и Liquid DnB.',
    group: 'female_core',
    label: 'Soft Female Vocal',
    positive: [
      { text: 'soft female vocal' },
      { text: 'gentle female voice' },
      { text: 'relaxed female delivery' },
      { text: 'soft melodic phrasing' },
      { text: 'warm intimate tone' },
    ],
    type: 'vocals',
  },
  {
    id: 'warm_female_vocal',
    comment: 'Тёплый женский вокал без попсовой глянцевости.',
    group: 'female_core',
    label: 'Warm Female Vocal',
    positive: [
      { text: 'warm female vocal' },
      { text: 'warm female tone' },
      { text: 'soft emotional color' },
      { text: 'gentle soulful delivery' },
      { text: 'natural vocal warmth' },
    ],
    type: 'vocals',
  },
  {
    id: 'clear_female_vocal',
    comment:
      'Чистый женский вокал для City Pop / J-Pop / Balearic, но без big pop chorus.',
    group: 'female_core',
    label: 'Clear Female Vocal',
    positive: [
      { text: 'clear female vocal' },
      { text: 'clean female tone' },
      { text: 'controlled melodic delivery' },
      { text: 'light vocal presence' },
      { text: 'no big pop chorus' },
    ],
    type: 'vocals',
  },

  /**
   * AIRY FEMALE
   */
  {
    id: 'airy_female_vocal',
    comment: 'Воздушный женский вокал как атмосферный слой.',
    group: 'airy',
    label: 'Airy Female Vocal',
    positive: [
      { text: 'airy female vocal' },
      { text: 'light breathy tone' },
      { text: 'floating female voice' },
      { text: 'soft high vocal texture' },
      { text: 'open atmospheric presence' },
    ],
    type: 'vocals',
  },
  {
    id: 'breathy_female_vocal',
    comment:
      'Breathy female vocal для интимной, Balearic, ASMR-adjacent и dreamlike атмосферы.',
    group: 'airy',
    label: 'Breathy Female Vocal',
    positive: [
      { text: 'breathy female vocal' },
      { text: 'soft breathy delivery' },
      { text: 'intimate breath detail' },
      { text: 'gentle air in the voice' },
      { text: 'close soft vocal presence' },
    ],
    type: 'vocals',
  },
  {
    id: 'floating_female_vocal',
    comment:
      'Плавающий женский вокал для atmospheric DnB, liquid, Balearic и ambient house.',
    group: 'airy',
    label: 'Floating Female Vocal',
    positive: [
      { text: 'floating female vocal' },
      { text: 'female voice floating in space' },
      { text: 'soft atmospheric female layer' },
      { text: 'ethereal vocal placement' },
      { text: 'wide reverb vocal tail' },
    ],
    type: 'vocals',
  },
  {
    id: 'dreamy_female_vocal',
    comment: 'Dreamy female vocal для City Pop, Balearic, Tropical и Liquid.',
    group: 'airy',
    label: 'Dreamy Female Vocal',
    positive: [
      { text: 'dreamy female vocal' },
      { text: 'soft dreamlike voice' },
      { text: 'gentle nostalgic delivery' },
      { text: 'floating melodic phrasing' },
      { text: 'warm airy tone' },
    ],
    type: 'vocals',
  },

  /**
   * CITY POP / JAPANESE
   */
  {
    id: 'japanese_female_vocal',
    comment: 'Женский вокал с японской pop/city-pop окраской.',
    group: 'city_pop',
    label: 'Japanese Female Vocal',
    positive: [
      { text: 'Japanese female vocal' },
      { text: 'soft Japanese pop voice' },
      { text: 'gentle Japanese vocal tone' },
      { text: 'clean emotional delivery' },
      { text: 'nostalgic Japanese atmosphere' },
    ],
    type: 'vocals',
  },
  {
    id: 'city_pop_female_vocal',
    comment: 'City Pop female vocal: clean, nostalgic, smooth, controlled.',
    group: 'city_pop',
    label: 'City Pop Female Vocal',
    positive: [
      { text: 'city pop female vocal' },
      { text: 'Japanese city pop voice' },
      { text: 'nostalgic female vocal tone' },
      { text: 'smooth melodic phrasing' },
      { text: 'clean 80s-inspired delivery' },
    ],
    type: 'vocals',
  },
  {
    id: 'nostalgic_japanese_female_vocal',
    comment:
      'Более атмосферная версия Japanese female vocal для late-night / night drive / city pop.',
    group: 'city_pop',
    label: 'Nostalgic Japanese Female Vocal',
    positive: [
      { text: 'nostalgic Japanese female vocal' },
      { text: 'soft retro Japanese voice' },
      { text: 'late-night city pop tone' },
      { text: 'gentle emotional restraint' },
      { text: 'dreamy Japanese vocal color' },
    ],
    type: 'vocals',
  },
  {
    id: 'jpop_female_vocal',
    comment:
      'J-Pop female vocal. Использовать аккуратно, может увести в более попсовую сторону.',
    group: 'city_pop',
    label: 'J-Pop Female Vocal',
    positive: [
      { text: 'J-pop female vocal' },
      { text: 'Japanese pop vocal tone' },
      { text: 'soft melodic female delivery' },
      { text: 'clean pop-jazz color' },
      { text: 'gentle female lead presence' },
    ],
    type: 'vocals',
  },

  /**
   * SOULFUL / HOUSE
   */
  {
    id: 'soulful_female_vocal',
    comment: 'Soulful female vocal без превращения в коммерческий pop-house.',
    group: 'soulful',
    label: 'Soulful Female Vocal',
    positive: [
      { text: 'soulful female vocal' },
      { text: 'soft soulful female tone' },
      { text: 'warm emotional delivery' },
      { text: 'restrained soul phrasing' },
      { text: 'no big pop hook' },
    ],
    type: 'vocals',
  },
  {
    id: 'deep_house_female_vocal',
    comment:
      'Женский вокал для deep house: мягкий, интимный, не главный центр трека.',
    group: 'soulful',
    label: 'Deep House Female Vocal',
    positive: [
      { text: 'deep house female vocal' },
      { text: 'soft house vocal texture' },
      { text: 'laid-back female delivery' },
      { text: 'groove-supporting vocal' },
      { text: 'intimate club vocal presence' },
    ],
    type: 'vocals',
  },
  {
    id: 'balearic_female_vocal',
    comment: 'Женский вокал для Balearic / sunset / lounge / seaside mood.',
    group: 'soulful',
    label: 'Balearic Female Vocal',
    positive: [
      { text: 'Balearic female vocal' },
      { text: 'soft sunset vocal tone' },
      { text: 'airy seaside vocal atmosphere' },
      { text: 'laid-back female phrasing' },
      { text: 'gentle open-air vocal presence' },
    ],
    type: 'vocals',
  },
  {
    id: 'bossa_female_vocal',
    comment: 'Мягкая bossa/city-pop женская окраска.',
    group: 'soulful',
    label: 'Bossa Female Vocal',
    positive: [
      { text: 'soft bossa female vocal' },
      { text: 'gentle Latin vocal phrasing' },
      { text: 'relaxed female delivery' },
      { text: 'warm intimate vocal tone' },
      { text: 'smooth tropical vocal color' },
    ],
    type: 'vocals',
  },

  /**
   * ETHEREAL FEMALE
   */
  {
    id: 'ethereal_female_vocal',
    comment: 'Женский вокал как атмосферная дымка, а не lead vocal.',
    group: 'ethereal',
    label: 'Ethereal Female Vocal',
    positive: [
      { text: 'ethereal female vocal' },
      { text: 'distant female voice' },
      { text: 'soft vocal atmosphere' },
      { text: 'reverb-washed female layer' },
      { text: 'voice as texture' },
    ],
    type: 'vocals',
  },
  {
    id: 'distant_female_vocal',
    comment:
      'Дальний женский вокал для DnB, ambient, Balearic и LAZNCY-adjacent.',
    group: 'ethereal',
    label: 'Distant Female Vocal',
    positive: [
      { text: 'distant female vocal' },
      { text: 'far-away female voice' },
      { text: 'background female vocal layer' },
      { text: 'soft distant phrases' },
      { text: 'textural vocal presence' },
    ],
    type: 'vocals',
  },
  {
    id: 'wordless_female_vocal',
    comment: 'Wordless female layers без текста и песенной структуры.',
    group: 'ethereal',
    label: 'Wordless Female Vocal',
    positive: [
      { text: 'wordless female vocal' },
      { text: 'female vocal oohs' },
      { text: 'soft vowel tones' },
      { text: 'textural female voice' },
      { text: 'no lyrical focus' },
    ],
    type: 'vocals',
  },
  {
    id: 'female_vocal_pad',
    comment: 'Женский голос как pad / texture layer.',
    group: 'ethereal',
    label: 'Female Vocal Pad',
    positive: [
      { text: 'female vocal pad' },
      { text: 'voice-like atmospheric pad' },
      { text: 'soft female harmonic layer' },
      { text: 'blurred vocal texture' },
      { text: 'wide vocal ambience' },
    ],
    type: 'vocals',
  },

  /**
   * FEMALE FRAGMENTS
   */
  {
    id: 'female_vocal_fragments',
    comment: 'Фрагменты женского вокала вместо полноценной вокальной партии.',
    group: 'fragments',
    label: 'Female Vocal Fragments',
    positive: [
      { text: 'female vocal fragments' },
      { text: 'short female vocal phrases' },
      { text: 'soft vocal snippets' },
      { text: 'fragmented female voice' },
      { text: 'atmospheric vocal pieces' },
    ],
    type: 'vocals',
  },
  {
    id: 'soulful_female_fragments',
    comment: 'Soulful fragments для Liquid DnB, Deep House и UKG.',
    group: 'fragments',
    label: 'Soulful Female Fragments',
    positive: [
      { text: 'soulful female vocal fragments' },
      { text: 'soft soulful snippets' },
      { text: 'short emotional phrases' },
      { text: 'female vocal texture' },
      { text: 'no full chorus' },
    ],
    type: 'vocals',
  },
  {
    id: 'atmospheric_female_snippets',
    comment: 'Атмосферные женские snippets для DnB / Balearic / ambient.',
    group: 'fragments',
    label: 'Atmospheric Female Snippets',
    positive: [
      { text: 'atmospheric female snippets' },
      { text: 'distant vocal fragments' },
      { text: 'soft background phrases' },
      { text: 'vocal texture fragments' },
      { text: 'reverb-washed snippets' },
    ],
    type: 'vocals',
  },

  /**
   * FEMALE CONTROL
   */
  {
    id: 'no_pop_female_vocal',
    comment: 'Контроль против pop-diva / big chorus / commercial topline.',
    group: 'control',
    label: 'No Pop Female Vocal',
    positive: [
      { text: 'no pop diva vocal' },
      { text: 'no big chorus' },
      { text: 'restrained female presence' },
      { text: 'soft background vocal role' },
      { text: 'no commercial topline' },
    ],
    type: 'vocals',
  },
  {
    id: 'no_belting',
    comment: 'Контроль против belting и громкой вокальной драматургии.',
    group: 'control',
    label: 'No Belting',
    positive: [
      { text: 'no belting' },
      { text: 'soft controlled delivery' },
      { text: 'gentle vocal dynamics' },
      { text: 'understated female voice' },
      { text: 'no dramatic vocal climax' },
    ],
    type: 'vocals',
  },
  {
    id: 'no_lead_vocal_focus',
    comment: 'Если женский вокал нужен как текстура, а не центр трека.',
    group: 'control',
    label: 'No Lead Vocal Focus',
    positive: [
      { text: 'vocal as texture' },
      { text: 'background vocal layer' },
      { text: 'no lead vocal focus' },
      { text: 'instrumental focus preserved' },
      { text: 'subtle vocal atmosphere' },
    ],
    type: 'vocals',
  },
] as PromptTag[];
