"use client";

import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import { useDataContext } from "~/utils/contexts/dataContext";

export default function ProductNav() {
  const { state, dispatch } = useDataContext();
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
      {state.categories.map((category) => (
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
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
