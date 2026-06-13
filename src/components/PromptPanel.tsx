type PromptPanelProps = {
  positive: string;
};

export const PromptPanel = ({ positive }: PromptPanelProps) => {
  return (
    <section style={{ position: 'fixed', right: 24, width: 400 }}>
      <h2>Generated Prompt</h2>

      <div>
        <h3>Positive</h3>

        <textarea
          readOnly
          rows={12}
          style={{
            resize: 'vertical',
            width: '100%',
          }}
          value={positive}
        />

        {positive.length}
      </div>
    </section>
  );
};
