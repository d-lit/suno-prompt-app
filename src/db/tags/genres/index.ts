import { PromptTag } from '~/types';

import { default as afro } from './afro';
import { default as brazilian } from './brazilian';
import { default as disco } from './disco';
import { default as dnb } from './dnb';
import { default as dub } from './dub';
import { default as electro } from './electro';
import { default as experimental } from './experimental';
import { default as funk } from './funk';
import { default as hipHop } from './hip-hop';
import { default as house } from './house';
import { default as japanese } from './japanese';
import { default as jazz } from './jazz';
import { default as soul } from './soul';
import { default as uk } from './uk';

export default [
  ...afro,
  ...brazilian,
  ...disco,
  ...dnb,
  ...dub,
  ...electro,
  ...experimental,
  ...funk,
  ...hipHop,
  ...house,
  ...japanese,
  ...jazz,
  ...soul,
  ...uk,
] as PromptTag[];
