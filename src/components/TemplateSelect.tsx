import { PromptTemplate } from '~/types';

type TemplateSelectProps = {
  templates: PromptTemplate[];
  value: string;
  onChange: (value: string) => void;
};

export const TemplateSelect = ({
  templates,
  value,
  onChange,
}: TemplateSelectProps) => {
  return (
    <section>
      <h2>Template</h2>

      <select
        style={{
          width: '100%',
        }}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      >
        {templates.map((template) => {
          return (
            <option key={template.id} value={template.id}>
              {template.label}
            </option>
          );
        })}
      </select>
    </section>
  );
};
