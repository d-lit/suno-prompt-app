import {
  ActivePromptTag,
  PromptTag,
  PromptTemplate,
} from '~/types/prompt.types';

type Params = {
  activeTags: ActivePromptTag[];
  tags: PromptTag[];
  template?: PromptTemplate;
};

export const getInitialVisibleTypes = ({
  activeTags,
  tags,
  template,
}: Params) => {
  const visibleTypes = new Set<string>();

  const templateTokens = [
    ...(template?.positive ?? []),
    ...(template?.negative ?? []),
  ];

  tags.forEach((tag) => {
    const allTagTokens = tag.positive ?? [];

    const hasTemplateToken = allTagTokens.some((tagToken) => {
      return templateTokens.some(
        (templateToken) => templateToken.text === tagToken.text
      );
    });

    if (hasTemplateToken) {
      visibleTypes.add(tag.type);
    }
  });

  activeTags.forEach((activeTag) => {
    const tag = tags.find((item) => item.id === activeTag.tagId);

    if (tag) {
      visibleTypes.add(tag.type);
    }
  });

  return Array.from(visibleTypes);
};
