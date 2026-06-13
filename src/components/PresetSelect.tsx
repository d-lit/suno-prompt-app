import { PromptPreset } from '~/types';

type PresetSelectProps = {
  presets: PromptPreset[];
  value?: string;
  onChange: (presetId: string) => void;
};

export const PresetSelect = ({
  presets,
  value,
  onChange,
}: PresetSelectProps) => {
  return (
    <section>
      <h2>Preset</h2>

      <select
        style={{
          width: '100%',
        }}
        value={value ?? ''}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      >
        <option value="">No Preset</option>

        {presets.map((preset) => {
          return (
            <option key={preset.id} value={preset.id}>
              {preset.label}
            </option>
          );
        })}
      </select>
    </section>
  );
};
