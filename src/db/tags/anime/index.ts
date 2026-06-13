import { PromptTag } from '~/types';

import { default as cityPop } from './city-pop';
import { default as cyberpunk } from './cyberpunk';
import { default as hipHop } from './hip-hop';
import { default as jazz } from './jazz';
import { default as romance } from './romance';
import { default as scifi } from './scifi';
import { default as sliceOfLife } from './slice-of-life';
import { default as urbanSupernatural } from './urban-supernatural';

export default [
  ...cityPop,
  ...cyberpunk,
  ...hipHop,
  ...jazz,
  ...romance,
  ...scifi,
  ...sliceOfLife,
  ...urbanSupernatural,
] as PromptTag[];
