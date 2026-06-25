import { PromptTag } from '~/types';

import { default as acid } from './acid';
import { default as afro } from './afro';
import { default as brazilian } from './brazilian';
import { default as breaks } from './breaks';
import { default as disco } from './disco';
import { default as dnb } from './dnb';
import { default as dub } from './dub';
import { default as dubScenes } from './dub-scenes';
import { default as electro } from './electro';
import { default as experimental } from './experimental';
import { default as funk } from './funk';
import { default as gFunk } from './g-funk';
import { default as hipHop } from './hip-hop';
import { default as house } from './house';
import { default as japanese } from './japanese';
import { default as jazz } from './jazz';
import { default as phonk } from './phonk';
import { default as reggae } from './reggae';
import { default as soul } from './soul';
import { default as synthPop } from './synth-pop';
import { default as uk } from './uk';

export default [
  ...acid,
  ...afro,
  ...brazilian,
  ...breaks,
  ...disco,
  ...dnb,
  ...dub,
  ...dubScenes,
  ...electro,
  ...experimental,
  ...funk,
  ...gFunk,
  ...hipHop,
  ...house,
  ...japanese,
  ...jazz,
  ...phonk,
  ...reggae,
  ...soul,
  ...synthPop,
  ...uk,
] as PromptTag[];
