import {
  ActivePromptTag,
  PromptPreset,
  PromptTag,
  PromptTemplate,
} from '~/types';

import { createPreset } from '../engine/createPreset';

type CopyPresetButtonProps = {
  template: PromptTemplate;
  categories?: string[];
  activeTags: ActivePromptTag[];
  tags: PromptTag[];
};

export const CopyPresetButton = ({
  activeTags,
  categories,
  tags,
  template,
}: CopyPresetButtonProps) => {
  const handleCopy = async () => {
    /**
     * TODO:
     * Потом сделать UI:
     * - preset id
     * - preset label
     */
    const preset: PromptPreset = createPreset({
      id: 'new-preset',
      activeTags,
      categories,
      label: 'New Preset',
      tags,
      template,
    });

    await navigator.clipboard.writeText(JSON.stringify(preset, null, 2));

    alert('Preset copied!');
  };

  return (
    <button
      style={{
        width: '100%',
      }}
      onClick={handleCopy}
    >
      Copy Preset JSON
    </button>
  );
};
