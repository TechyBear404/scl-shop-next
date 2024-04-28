import type { CategoryType } from "~/server/db/requests";
export function ProductNav({
  categories,
  test,
}: {
  categories: CategoryType[];
  test: (name: string) => void;
}) {
  return (
    <nav className="fixed mt-16 hidden h-screen w-60 bg-white md:block">
      {categories.map((category) => (
        <button type="button" key={category.id}>
          {category.name}
        </button>
      ))}
    </nav>
  );
}
