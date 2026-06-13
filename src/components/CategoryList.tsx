type CategoryListProps = {
  categories: string[];
  selectedCategories: string[];
  onToggle: (category: string) => void;
};

export const CategoryList = ({
  categories,
  selectedCategories,
  onToggle,
}: CategoryListProps) => {
  return (
    <section>
      <h2>Categories</h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category);

          return (
            <label
              key={category}
              style={{
                alignItems: 'center',
                display: 'flex',
                gap: 8,
              }}
            >
              <input
                checked={isSelected}
                type="checkbox"
                onChange={() => {
                  onToggle(category);
                }}
              />

              {category}
            </label>
          );
        })}
      </div>
    </section>
  );
};
