"use client";
import { useEffect, useState } from "react";
import type { CategoriesType } from "~/utils/types";

export default function SelectCategory({
  selectedCategory,
}: {
  selectedCategory?: number;
}) {
  const [category, setCategory] = useState<number>(2);
  const [categories, setCategories] = useState<CategoriesType[]>([]);

  useEffect(() => {
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetch("/api/data/categories")
      .then((res) => res.json())
      .then((data: CategoriesType[]) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="flex flex-col">
      <label className="font-semibold" htmlFor="category">
        Catégorie
      </label>
      <select
        name="category"
        id="category"
        className="h-6 bg-white"
        value={category}
        onChange={(e) => {
          setCategory(Number(e.target.value));
        }}
      >
        {categories.map((category) => (
          <option key={category?.id} value={category?.id}>
            {category?.name}
          </option>
        ))}
      </select>
    </div>
  );
}
