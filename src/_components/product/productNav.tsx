import Link from "next/link";
import { getCategories, type CategoryType } from "~/server/db/requests";
export async function ProductNav() {
  const categories = await getCategories();
  return (
    <div className="hidden bg-white p-4 md:block">
      <nav className="flex flex-col items-start justify-start">
        <Link href="/products">Tous les produits</Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`?${new URLSearchParams({ category: category.id.toString() }).toString()}`}
            className="text-nowrap"
          >
            {category.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
