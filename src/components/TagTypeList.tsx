type TagTypeListProps = {
  activeType?: string;
  activeTypes: string[];
  types: string[];
  onChange: (type: string) => void;
};

export const TagTypeList = ({
  activeType,
  activeTypes,
  types,
  onChange,
}: TagTypeListProps) => {
  return (
    <section>
      <h2>Tag Types</h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        {types.map((type) => {
          const isActive = activeType === type;
          const hasSelectedTags = activeTypes.includes(type);

          return (
            <label
              key={type}
              style={{
                alignItems: 'center',
                color: hasSelectedTags ? 'tomato' : undefined,
                display: 'flex',
                fontWeight: hasSelectedTags ? 'bold' : undefined,
                gap: 8,
              }}
            >
              <input
                checked={isActive}
                name="tag-type"
                type="radio"
                onChange={() => {
                  onChange(type);
                }}
              />
              {type}
            </label>
          );
        })}
      </div>
    </section>
  );
};
