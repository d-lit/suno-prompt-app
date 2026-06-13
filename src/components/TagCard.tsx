import { ActivePromptTag, ActivePromptToken, PromptTag } from '~/types';

type TagCardProps = {
  tag: PromptTag;
  activeTag?: ActivePromptTag;
  onToggle: () => void;
  onWeightChange: (tokenText: string, weight: number) => void;
};

const renderTokenInput = (
  token: ActivePromptToken,
  onWeightChange: (tokenText: string, weight: number) => void
) => {
  return (
    <div
      key={token.text}
      style={{
        alignItems: 'center',
        display: 'flex',
        gap: 8,
        marginBottom: 8,
      }}
    >
      <div
        style={{
          flex: 1,
        }}
      >
        {token.text}
      </div>

      <input
        step={0.1}
        style={{
          width: 80,
        }}
        type="number"
        value={token.weight}
        onChange={(event) => {
          onWeightChange(token.text, Number(event.target.value));
        }}
      />
    </div>
  );
};

export const TagCard = ({
  activeTag,
  tag,
  onToggle,
  onWeightChange,
}: TagCardProps) => {
  const isActive = Boolean(activeTag);

  return (
    <div
      style={{
        border: '1px solid #444',
        marginBottom: 12,
        padding: 12,
      }}
    >
      <label
        style={{
          alignItems: 'center',
          display: 'flex',
          gap: 8,
        }}
      >
        <input checked={isActive} type="checkbox" onChange={onToggle} />

        {tag.label}
      </label>

      <p style={{ color: 'grey' }}>{tag.comment}</p>

      {activeTag && (
        <div
          style={{
            marginTop: 12,
            paddingLeft: 16,
          }}
        >
          {activeTag.positive.length > 0 && (
            <div>
              <div
                style={{
                  fontSize: 12,
                  marginBottom: 8,
                  opacity: 0.7,
                }}
              >
                Positive
              </div>

              {activeTag.positive.map((token) =>
                renderTokenInput(token, onWeightChange)
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
