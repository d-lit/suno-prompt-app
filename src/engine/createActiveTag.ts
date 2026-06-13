import {
  ActivePromptTag,
  ActivePromptToken,
  PromptTag,
  PromptToken,
} from '~/types';

/**
 * Создаёт runtime-токены.
 */
const createActiveTokens = (tokens?: PromptToken[]): ActivePromptToken[] => {
  if (!tokens) {
    return [];
  }

  return tokens.map((token) => {
    return {
      text: token.text,
      weight: token.weight ?? 1,
    };
  });
};

/**
 * Создаёт runtime-тег.
 */
export const createActiveTag = (tag: PromptTag): ActivePromptTag => {
  return {
    tagId: tag.id,
    type: tag.type,

    positive: createActiveTokens(tag.positive),
  };
};
