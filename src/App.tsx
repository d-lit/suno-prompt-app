import { useEffect, useMemo, useState } from 'react';

import {
  CategoryList,
  PresetSelect,
  PromptPanel,
  TagGroup,
  TagTypeList,
  TemplateSelect,
} from '~/components';
import {
  createActiveTag,
  createTemplateActiveTag,
  generateRandomTags,
  renderPrompt,
} from '~/engine';
import {
  ActivePromptTag,
  ActivePromptToken,
  PromptTag,
  PromptTemplate,
} from '~/types';
import {
  getActiveTagTypes,
  getCategories,
  getFirstActiveType,
  getTagTypes,
  getTemplatePreloadTags,
  getVisibleTags,
  groupTagsByType,
  hasTemplateRuntimeTag,
} from '~/utils';

import { tags, templates } from './db';
import { usePresets } from './hooks';

const DEFAULT_TEMPLATE_ID = 'default';

const createTemplateRuntimeState = (template: PromptTemplate) => {
  const preloadTags = getTemplatePreloadTags(template);

  return [
    createTemplateActiveTag(template),
    ...preloadTags.map(createActiveTag),
  ];
};

export const App = () => {
  /**
   * Hooks / state
   */
  const [templateId, setTemplateId] = useState(DEFAULT_TEMPLATE_ID);

  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    return getCategories(tags);
  });

  const [activeTags, setActiveTags] = useState<ActivePromptTag[]>([]);
  const [activeType, setActiveType] = useState<string>();

  /**
   * Base data
   */
  const categories = useMemo(() => {
    return getCategories(tags);
  }, []);

  const template = useMemo(() => {
    return templates.find((item) => {
      return item.id === templateId;
    });
  }, [templateId]);

  const tagTypes = useMemo(() => {
    return getTagTypes(tags);
  }, []);

  /**
   * Presets
   */
  const {
    currentPreset,
    presetId,
    presets,
    removePreset,
    savePreset,
    savePresetAs,
    setPresetId,
  } = usePresets({
    activeTags,
    selectedCategories,
    tags,
    template: template!,
  });

  /**
   * Derived data
   */
  const activeTagTypes = useMemo(() => {
    return getActiveTagTypes(activeTags);
  }, [activeTags]);

  const visibleTags = useMemo(() => {
    return getVisibleTags({
      activeTags,
      selectedCategories,
      tags,
    });
  }, [activeTags, selectedCategories]);

  const groupedTags = useMemo(() => {
    return groupTagsByType(visibleTags).filter((group) => {
      return group.type === activeType;
    });
  }, [visibleTags, activeType]);

  const positivePrompt = useMemo(() => {
    return renderPrompt({
      activeTags,
      side: 'positive',
    });
  }, [activeTags]);

  /**
   * Handlers
   */
  const handleTemplateChange = (nextTemplateId: string) => {
    const nextTemplate = templates.find((item) => {
      return item.id === nextTemplateId;
    });

    if (!nextTemplate) {
      return;
    }

    const nextActiveTags = createTemplateRuntimeState(nextTemplate);
    const nextActiveTypes = getActiveTagTypes(nextActiveTags);

    setPresetId(undefined);
    setTemplateId(nextTemplateId);
    setSelectedCategories(categories);
    setActiveTags(nextActiveTags);

    if (!activeType || !nextActiveTypes.includes(activeType)) {
      setActiveType(getFirstActiveType(nextActiveTags, tagTypes));
    }
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => {
          return item !== category;
        });
      }

      return [...prev, category];
    });
  };

  const handleTagTypeChange = (type: string) => {
    setActiveType(type);
  };

  const handleTagToggle = (tag: PromptTag) => {
    setActiveTags((prev) => {
      const existing = prev.find((item) => {
        return item.tagId === tag.id;
      });

      if (existing) {
        return prev.filter((item) => {
          return item.tagId !== tag.id;
        });
      }

      return [...prev, createActiveTag(tag)];
    });
  };

  const handleTokenWeightChange = (
    tagId: string,
    tokenText: string,
    weight: number
  ) => {
    setActiveTags((prev) => {
      return prev.map((tag) => {
        if (tag.tagId !== tagId) {
          return tag;
        }

        const updateTokens = (tokens: ActivePromptToken[]) => {
          return tokens.map((token) => {
            if (token.text !== tokenText) {
              return token;
            }

            return {
              ...token,
              weight,
            };
          });
        };

        return {
          ...tag,
          positive: updateTokens(tag.positive),
        };
      });
    });
  };

  const handleReset = () => {
    const nextTemplate = templates.find((item) => {
      return item.id === templateId;
    });

    if (!nextTemplate) {
      return;
    }

    const nextActiveTags = createTemplateRuntimeState(nextTemplate);
    const nextActiveTypes = getActiveTagTypes(nextActiveTags);

    setPresetId(undefined);
    setSelectedCategories(categories);
    setActiveTags(nextActiveTags);

    if (!activeType || !nextActiveTypes.includes(activeType)) {
      setActiveType(getFirstActiveType(nextActiveTags, tagTypes));
    }
  };

  const handleRandom = () => {
    if (!template) {
      return;
    }

    const nextActiveTags = generateRandomTags({
      activeTags,
      selectedCategories,
      tags,
    });

    const nextActiveTypes = getActiveTagTypes(nextActiveTags);

    setPresetId(undefined);
    setActiveTags(nextActiveTags);

    if (!activeType || !nextActiveTypes.includes(activeType)) {
      setActiveType(getFirstActiveType(nextActiveTags, tagTypes));
    }
  };

  const handleSavePreset = () => {
    savePreset();
  };

  const handleSavePresetAs = () => {
    savePresetAs();
  };

  const handleRemovePreset = () => {
    if (!currentPreset) {
      return;
    }

    removePreset(currentPreset);
  };

  /**
   * Effects
   */
  useEffect(() => {
    const nextTemplate = templates.find((item) => {
      return item.id === DEFAULT_TEMPLATE_ID;
    });

    if (!nextTemplate) {
      return;
    }

    const nextActiveTags = createTemplateRuntimeState(nextTemplate);

    setTemplateId(DEFAULT_TEMPLATE_ID);
    setSelectedCategories(categories);
    setActiveTags(nextActiveTags);
    setActiveType(getFirstActiveType(nextActiveTags, tagTypes));
  }, [categories, tagTypes]);

  useEffect(() => {
    if (!currentPreset) {
      return;
    }

    const nextTemplate = templates.find((item) => {
      return item.id === currentPreset.templateId;
    });

    if (!nextTemplate) {
      return;
    }

    const nextActiveTags = hasTemplateRuntimeTag(
      currentPreset.activeTags,
      currentPreset.templateId
    )
      ? currentPreset.activeTags
      : [
          ...createTemplateRuntimeState(nextTemplate),
          ...currentPreset.activeTags,
        ];

    const nextActiveTypes = getActiveTagTypes(nextActiveTags);

    setTemplateId(currentPreset.templateId);
    setSelectedCategories(
      currentPreset.categories?.length ? currentPreset.categories : categories
    );
    setActiveTags(nextActiveTags);

    if (!activeType || !nextActiveTypes.includes(activeType)) {
      setActiveType(getFirstActiveType(nextActiveTags, tagTypes));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, currentPreset, tagTypes]);

  /**
   * JSX blocks
   */
  const presetActionsElement = (
    <div
      style={{
        display: 'flex',
        gap: 8,
      }}
    >
      <button onClick={handleSavePreset}>Save</button>
      <button onClick={handleSavePresetAs}>Save As</button>
      {currentPreset && <button onClick={handleRemovePreset}>Delete</button>}
    </div>
  );

  const sidebarElement = (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          left: 24,
          position: 'fixed',
          rowGap: 16,
          width: 400,
        }}
      >
        <button
          style={{
            width: '100%',
          }}
          onClick={handleReset}
        >
          Reset Workspace
        </button>

        <TemplateSelect
          templates={templates}
          value={templateId}
          onChange={handleTemplateChange}
        />

        <CategoryList
          categories={categories}
          selectedCategories={selectedCategories}
          onToggle={handleCategoryToggle}
        />

        <div>
          <TagTypeList
            activeType={activeType}
            activeTypes={activeTagTypes}
            types={tagTypes}
            onChange={handleTagTypeChange}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: 8,
            }}
          >
            <PresetSelect
              presets={presets}
              value={presetId}
              onChange={setPresetId}
            />
            {presetActionsElement}
            <button
              style={{
                width: '100%',
              }}
              onClick={handleRandom}
            >
              Random
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const mainElement = (
    <div
      style={{
        overflow: 'auto',
      }}
    >
      {groupedTags.map((group) => {
        return (
          <TagGroup
            key={group.type}
            activeTags={activeTags}
            tags={group.tags}
            type={group.type}
            onToggleTag={handleTagToggle}
            onWeightChange={handleTokenWeightChange}
          />
        );
      })}
    </div>
  );

  /**
   * Return JSX
   */
  return (
    <div
      style={{
        display: 'grid',
        gap: 24,
        gridTemplateColumns: '400px 1fr 400px',
        padding: 24,
      }}
    >
      {sidebarElement}
      {mainElement}
      <PromptPanel positive={positivePrompt} />
    </div>
  );
};
