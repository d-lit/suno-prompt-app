import {
  ActivePromptTag,
  PromptPreset,
  PromptTag,
  PromptTemplate,
} from '~/types';
import { getTemplateTokenKeys, isTagFullyIncludedInTemplate } from '~/utils';

type CreatePresetParams = {
  id: string;
  label: string;
  template: PromptTemplate;
  categories?: string[];
  activeTags: ActivePromptTag[];
  tags: PromptTag[];
};

export const createPreset = ({
  id,
  activeTags,
  categories,
  label,
  tags,
  template,
}: CreatePresetParams): PromptPreset => {
  /**
   * Все template token keys.
   */
  const templateTokenKeys = getTemplateTokenKeys(template);

  /**
   * Удаляем теги,
   * полностью входящие в template.
   */
  const filteredActiveTags = activeTags.filter((activeTag) => {
    /**
     * Template runtime tag
     * никогда не сохраняем.
     */
    if (activeTag.tagId?.startsWith('template:')) {
      return false;
    }

    const originalTag = tags.find((tag) => tag.id === activeTag.tagId);

    /**
     * Unknown/custom tag —
     * оставляем.
     */
    if (!originalTag) {
      return true;
    }

    /**
     * Если тег уже полностью
     * входит в template —
     * не сохраняем.
     */
    return !isTagFullyIncludedInTemplate(originalTag, templateTokenKeys);
  });

  return {
    id,
    activeTags: filteredActiveTags,
    categories,
    label,
    templateId: template.id,
  };
};
