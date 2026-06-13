import { PromptTemplate } from '~/types';

import { normalizeTokenText } from './normalizeTokenText';

export const getTemplateTokenKeys = (template: PromptTemplate) => {
  return new Set(
    [...(template.positive ?? []), ...(template.negative ?? [])].map((token) =>
      normalizeTokenText(token.text)
    )
  );
};
