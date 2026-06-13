import { PromptTag, PromptTagGroup } from '~/types';

export const groupTagsByType = (tags: PromptTag[]): PromptTagGroup[] => {
  const groupsMap = new Map<string, PromptTag[]>();

  for (const tag of tags) {
    const existing = groupsMap.get(tag.type);

    if (existing) {
      existing.push(tag);

      continue;
    }

    groupsMap.set(tag.type, [tag]);
  }

  return Array.from(groupsMap.entries()).map(([type, tags]) => {
    return {
      tags,
      type,
    };
  });
};
