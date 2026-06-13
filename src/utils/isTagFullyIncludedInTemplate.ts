import { PromptTag } from '~/types';

import { normalizeTokenText } from './normalizeTokenText';

export const isTagFullyIncludedInTemplate = (
  tag: PromptTag,
  templateTokenKeys: Set<string>
) => {
  const tagTokens = tag.positive ?? [];

  if (tagTokens.length === 0) {
    return false;
  }

  return tagTokens.every((token) => {
    return templateTokenKeys.has(normalizeTokenText(token.text));
  });
};
