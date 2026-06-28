import { PromptTag } from '~/types';

export const getCategories = (tags: PromptTag[]): string[] => {
  return Array.from(
    new Set(
      tags
        .map((tag) => tag.category)
        .filter((category): category is string => {
          return Boolean(category);
        })
    )
  );
};
