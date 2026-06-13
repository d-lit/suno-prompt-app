import { PromptTag } from '~/types';

import { default as cinema } from './cinema';
import { default as cosmic } from './cosmic';
import { default as emotional } from './emotional';
import { default as nature } from './nature';
import { default as night } from './night';
import { default as urban } from './urban';

export default [
  ...cinema,
  ...cosmic,
  ...emotional,
  ...nature,
  ...night,
  ...urban,
] as PromptTag[];
