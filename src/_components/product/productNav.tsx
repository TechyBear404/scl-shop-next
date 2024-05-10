"use client";

import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import { type CategoriesCountType } from "~/server/db/requests";

export default function ProductNav({
  categories,
}: {
  categories: CategoriesCountType;
}) {
  const params = useSearchParams();
  const selectedCategory = params.get("category");

  return (
    <nav className="fixed left-0 hidden h-full w-60 flex-col items-start justify-start bg-white p-4 md:flex">
      <Link
        href="/products"
        className={`${selectedCategory === null ? "font-bold" : ""} flex items-center text-nowrap`}
      >
        {selectedCategory === null ? <IoMdArrowDropright /> : ""}
        <p>Tous les produits</p>
      </Link>
      {categories!.data.map((category) => (
        <Link
          key={category.id}
          href={`/products/?${new URLSearchParams({ category: category.id.toString() }).toString()}`}
          className={`${selectedCategory === category.id.toString() ? "font-bold" : ""} flex items-center text-nowrap`}
        >
          {selectedCategory === category.id.toString() ? (
            <IoMdArrowDropright />
          ) : (
            ""
          )}
          {category.name} ({category.productsQty})
        </Link>
      ))}
    </nav>
  );
}
