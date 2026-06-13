import { PromptPreset } from '~/types';

const API_URL = 'http://localhost:7777';

/**
 * Загрузка всех пресетов.
 */
export const loadPresets = async (): Promise<PromptPreset[]> => {
  const response = await fetch(`${API_URL}/presets`);

  return response.json();
};

/**
 * Save / overwrite preset.
 */
export const savePresetRequest = async (
  preset: PromptPreset
): Promise<PromptPreset> => {
  const response = await fetch(`${API_URL}/presets`, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(preset),
  });

  return response.json();
};

/**
 * Удаление пресета.
 */
export const deletePresetRequest = async (presetId: string) => {
  await fetch(`${API_URL}/presets/${presetId}`, {
    method: 'DELETE',
  });
};
