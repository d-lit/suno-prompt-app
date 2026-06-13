import { useEffect, useMemo, useState } from 'react';

import { createPreset } from '~/engine';
import {
  ActivePromptTag,
  PromptPreset,
  PromptTag,
  PromptTemplate,
} from '~/types';

const API_URL = 'http://localhost:7777';

type UsePresetsParams = {
  activeTags: ActivePromptTag[];
  selectedCategories: string[];
  tags: PromptTag[];
  template: PromptTemplate;
};

type SaveAsParams = {
  defaultLabel?: string;
};

export const usePresets = ({
  activeTags,
  selectedCategories,
  tags,
  template,
}: UsePresetsParams) => {
  /**
   * Загруженные пресеты.
   */
  const [presets, setPresets] = useState<PromptPreset[]>([]);

  /**
   * Текущий выбранный preset id.
   */
  const [presetId, setPresetId] = useState<string>();

  /**
   * Загрузка пресетов.
   */
  const loadPresets = async () => {
    const response = await fetch(`${API_URL}/presets`);

    const data = await response.json();

    setPresets(data);
  };

  /**
   * Initial load.
   */
  useEffect(() => {
    loadPresets();
  }, []);

  /**
   * Текущий выбранный пресет.
   */
  const currentPreset = useMemo(() => {
    return presets.find((item) => item.id === presetId);
  }, [presets, presetId]);

  /**
   * Сохранение пресета.
   *
   * overwrite current preset.
   */
  const savePreset = async () => {
    /**
     * Если preset ещё не выбран —
     * работаем как Save As.
     */
    if (!currentPreset) {
      await savePresetAs();

      return;
    }

    const nextPreset = createPreset({
      id: currentPreset.id,
      activeTags,
      categories: selectedCategories,
      label: currentPreset.label,
      tags,
      template,
    });

    const response = await fetch(`${API_URL}/presets`, {
      body: JSON.stringify(nextPreset),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const savedPreset = await response.json();

    setPresets((prev) => {
      return prev.map((item) => {
        if (item.id !== savedPreset.id) {
          return item;
        }

        return savedPreset;
      });
    });
  };

  /**
   * Сохранение как новый preset.
   */
  const savePresetAs = async ({ defaultLabel }: SaveAsParams = {}) => {
    const label = window.prompt(
      'Preset name',
      defaultLabel ?? currentPreset?.label ?? ''
    );

    if (!label) {
      return;
    }

    const nextPreset = createPreset({
      id: crypto.randomUUID(),
      activeTags,
      categories: selectedCategories,
      label,
      tags,
      template,
    });

    const response = await fetch(`${API_URL}/presets`, {
      body: JSON.stringify(nextPreset),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const savedPreset = await response.json();

    setPresets((prev) => {
      return [...prev, savedPreset];
    });

    setPresetId(savedPreset.id);
  };

  /**
   * Удаление пресета.
   */
  const removePreset = async (preset: PromptPreset) => {
    await fetch(`${API_URL}/presets/${preset.fileName}`, {
      method: 'DELETE',
    });

    setPresets((prev) => {
      return prev.filter((item) => item.fileName !== preset.fileName);
    });

    /**
     * Если удалили текущий —
     * сбрасываем selection.
     */
    if (presetId === preset.id) {
      setPresetId(undefined);
    }
  };

  return {
    currentPreset,
    presetId,
    presets,
    reloadPresets: loadPresets,
    removePreset,
    savePreset,
    savePresetAs,
    setPresetId,
  };
};
