import { useEffect } from "react";
import { getCategories } from "~/server/db/requests";
import type { Doc, DocInsert } from "~/server/db/schema/dbTypes";

// const categories = await getCategories();

type CategoryType = Doc<"categories">;

export default function SelectCategory() {
  // const categories = await getCategories();
  return (
    <div className="flex flex-col">
      <label htmlFor="category">Catégorie</label>
      {/* <select name="category" id="category" className="h-6 bg-white">
        {categories.map((category) => (
          <option key={category?.id} value={category?.id}>
            {category?.name}
          </option>
        ))}
      </select> */}
    </div>
  );
}
