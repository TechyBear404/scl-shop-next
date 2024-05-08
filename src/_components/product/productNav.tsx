import Link from "next/link";
import { getCategories, type CategoryType } from "~/server/db/requests";
import { IoMdArrowDropright } from "react-icons/io";
export async function ProductNav({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const categories = await getCategories();
  if (searchParams) {
    console.log(searchParams);
  }

  return (
    <nav className="hidden flex-col items-start justify-start bg-white p-4 md:flex ">
      <Link
        href="/products"
        className={`${searchParams?.category === undefined ? "font-bold" : ""} flex items-center text-nowrap`}
      >
        {searchParams?.category === undefined ? <IoMdArrowDropright /> : ""}
        <p>Tous les produits</p>
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`?${new URLSearchParams({ category: category.id.toString() }).toString()}`}
          className={`${searchParams?.category === category.id.toString() ? "font-bold" : ""} flex items-center text-nowrap`}
        >
          {searchParams?.category === category.id.toString() ? (
            <IoMdArrowDropright />
          ) : (
            ""
          )}
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
