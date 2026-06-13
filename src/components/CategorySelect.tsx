type CategorySelectProps = {
  categories: (string | undefined)[];
  value?: string;
  onChange: (category?: string) => void;
};

export const CategorySelect = ({
  categories,
  value,
  onChange,
}: CategorySelectProps) => {
  return (
    <section>
      <h2>Category</h2>

      <select
        style={{
          width: '100%',
        }}
        value={value ?? ''}
        onChange={(event) => {
          const value = event.target.value;

          onChange(value || undefined);
        }}
      >
        <option value="">All Categories</option>

        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
    </section>
  );
};
