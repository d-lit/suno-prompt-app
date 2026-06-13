import { ActivePromptTag, PromptTag } from '~/types';

type GetVisibleTagsParams = {
  activeTags: ActivePromptTag[];
  selectedCategories: string[];
  tags: PromptTag[];
};

export const getVisibleTags = ({
  activeTags,
  selectedCategories,
  tags,
}: GetVisibleTagsParams) => {
  return tags.filter((tag) => {
    const isActive = activeTags.some((item) => {
      return item.tagId === tag.id;
    });

    if (isActive) {
      return true;
    }

    /**
     * Global tags.
     */
    if (!tag.category) {
      return true;
    }

    /**
     * Category tags.
     */
    return selectedCategories.includes(tag.category);
  });
};
