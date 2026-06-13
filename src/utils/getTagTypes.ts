import { PromptTag } from '~/types';

export const getTagTypes = (tags: PromptTag[]) => {
  return Array.from(new Set(tags.map((tag) => tag.type)));
};
