import { PromptTag } from '~/types';

import { default as bass } from './bass';
import { default as foley } from './foley';
import { default as keys } from './keys';
import { default as percussion } from './percussion';
import { default as synths } from './synths';

export default [
  ...bass,
  ...foley,
  ...keys,
  ...percussion,
  ...synths,
] as PromptTag[];
