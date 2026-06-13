import { PromptTag } from '~/types';

import { default as chants } from './chants';
import { default as chops } from './chops';
import { default as female } from './female';
import { default as male } from './male';
import { default as spoken } from './spoken';

export default [
  ...male,
  ...female,
  ...spoken,
  ...chops,
  ...chants,
] as PromptTag[];
