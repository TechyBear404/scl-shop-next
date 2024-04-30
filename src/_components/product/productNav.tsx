import type { CategoryType } from "~/server/db/requests";
export function ProductNav({
  categories,
  test,
}: {
  categories: CategoryType[];
  test: (name: string) => void;
}) {
  return (
    <div className="invisible fixed mt-16 h-screen w-60 bg-white p-4 md:visible">
      <nav className="flex flex-col items-start justify-start">
        {categories.map((category) => (
          <button type="button" key={category.id}>
            {category.name}
          </button>
        ))}
      </nav>
    </div>
  );
}
