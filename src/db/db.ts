import { PromptTag, PromptTemplate } from '~/types';

import animeTags from './tags/anime';
import atmosphereTags from './tags/atmosphere';
import genresTags from './tags/genres';
import rhythmsTags from './tags/rhythms';
import soundTags from './tags/sound';
import stylesTags from './tags/styles';
import vocalsTags from './tags/vocals';
//
import { template as defaultTemplate } from './templates/default';

export const templates: PromptTemplate[] = [defaultTemplate];

export const tags: PromptTag[] = [
  ...animeTags,
  ...atmosphereTags,
  ...genresTags,
  ...soundTags,
  ...rhythmsTags,
  ...stylesTags,
  ...vocalsTags,
];
