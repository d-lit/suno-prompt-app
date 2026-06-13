import { ActivePromptTag, PromptTemplate } from '~/types';

export const createTemplateActiveTag = (
  template: PromptTemplate
): ActivePromptTag => {
  return {
    tagId: `template:${template.id}`,
    type: '__template__',

    positive: (template.positive ?? []).map((token) => ({
      text: token.text,
      weight: token.weight ?? 1,
    })),
  };
};
