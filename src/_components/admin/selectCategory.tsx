// "use client";
import { useContext } from "react";
import type { CategoriesType, CategoryType } from "~/server/db/requests";
import { useDataContext } from "~/utils/contexts/dataContext";

export default function SelectCategory({
  currentCategory,
}: {
  currentCategory?: CategoryType;
}) {
  const { state, dispatch } = useDataContext();
  return (
    <div className="flex flex-col">
      <label htmlFor="category">Catégorie</label>
      <select
        name="category"
        id="category"
        className="h-6 bg-white"
        value={currentCategory?.id ? currentCategory.id : 1}
        onChange={(e) => {
          // setEditedProduct({ ...editedProduct, name: e.target.value });
        }}
      >
        {state?.categories?.map((category) => (
          <option key={category?.id} value={category?.id}>
            {category?.name}
          </option>
        ))}
      </select>
    </div>
  );
}
