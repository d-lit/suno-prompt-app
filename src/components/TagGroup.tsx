import { useMemo, useState } from 'react';

import { ActivePromptTag, PromptTag } from '~/types';

import { TagCard } from './TagCard';

interface TagGroupProps {
  activeTags: ActivePromptTag[];
  tags: PromptTag[];
  type: string;
  onToggleTag: (tag: PromptTag) => void;
  onWeightChange: (tagId: string, tokenText: string, weight: number) => void;
}

interface GroupedTags {
  id: string;
  label: string;
  tags: PromptTag[];
}

const UNGROUPED_ID = 'ungrouped';

const formatGroupLabel = (value: string) => {
  return value
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => {
      return char.toUpperCase();
    });
};

const groupTags = (tags: PromptTag[]) => {
  const ungroupedTags: PromptTag[] = [];
  const groupedTagsMap = new Map<string, PromptTag[]>();

  tags.forEach((tag) => {
    if (!tag.group) {
      ungroupedTags.push(tag);

      return;
    }

    const groupTags = groupedTagsMap.get(tag.group) ?? [];

    groupTags.push(tag);
    groupedTagsMap.set(tag.group, groupTags);
  });

  const groupedTags: GroupedTags[] = [];

  if (ungroupedTags.length > 0) {
    groupedTags.push({
      id: UNGROUPED_ID,
      label: 'Ungrouped',
      tags: ungroupedTags,
    });
  }

  groupedTagsMap.forEach((items, group) => {
    groupedTags.push({
      id: group,
      label: formatGroupLabel(group),
      tags: items,
    });
  });

  return groupedTags;
};

export const TagGroup = ({
  activeTags,
  tags,
  type,
  onToggleTag,
  onWeightChange,
}: TagGroupProps) => {
  /**
   * Hooks / state
   */
  const [activeGroupId, setActiveGroupId] = useState<string>();

  /**
   * Derived data
   */
  const groupedTags = useMemo(() => {
    return groupTags(tags);
  }, [tags]);

  const activeGroup = useMemo(() => {
    return (
      groupedTags.find((group) => {
        return group.id === activeGroupId;
      }) ?? groupedTags[0]
    );
  }, [activeGroupId, groupedTags]);

  /**
   * JSX blocks
   */
  const tabsElement = groupedTags.length > 1 && (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 16,
      }}
    >
      {groupedTags
        .sort((a, b) => a.id.localeCompare(b.id))
        .map((group) => {
          const isActive = group.id === activeGroup?.id;

          const hasActiveTags = group.tags.some((tag) => {
            return activeTags.some((activeTag) => {
              return activeTag.tagId === tag.id;
            });
          });

          return (
            <button
              key={group.id}
              style={{
                color: hasActiveTags ? 'tomato' : undefined,
                cursor: 'pointer',
                fontWeight: isActive || hasActiveTags ? 700 : 400,
                opacity: isActive || hasActiveTags ? 1 : 0.65,
              }}
              type="button"
              onClick={() => {
                setActiveGroupId(group.id);
              }}
            >
              {group.label}
            </button>
          );
        })}
    </div>
  );

  /**
   * Return JSX
   */
  return (
    <section
      style={{
        marginBottom: 24,
      }}
    >
      <h3
        style={{
          marginBottom: 12,
          textTransform: 'capitalize',
        }}
      >
        {type}
      </h3>

      {tabsElement}

      {activeGroup?.tags.map((tag) => {
        const activeTag = activeTags.find((item) => {
          return item.tagId === tag.id;
        });

        return (
          <TagCard
            key={tag.id}
            activeTag={activeTag}
            tag={tag}
            onToggle={() => {
              onToggleTag(tag);
            }}
            onWeightChange={(tokenText, weight) => {
              onWeightChange(tag.id, tokenText, weight);
            }}
          />
        );
      })}
    </section>
  );
};
