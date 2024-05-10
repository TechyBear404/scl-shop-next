"use client";
import { useEffect, useState } from "react";
import type { CategoriesType } from "~/server/db/requests";

type DataType = {
  data: CategoriesType;
  status: string;
};

export default function SelectCategory({
  selectedCategory,
}: {
  selectedCategory?: number;
}) {
  const [category, setCategory] = useState<number>(2);
  const [categories, setCategories] = useState<CategoriesType>([]);

  useEffect(() => {
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetch("/api/data/categories")
      .then((res) => res.json())
      .then((data: DataType) => {
        if (data && data.status === "success") {
          setCategories(data.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="flex flex-col">
      <label htmlFor="category">Catégorie</label>
      <select
        name="category"
        id="category"
        className="h-6 bg-white"
        value={category}
        onChange={(e) => {
          setCategory(Number(e.target.value));
        }}
      >
        {/* <option value="default">Choisir une catégorie</option> */}
        {categories?.map((category) => (
          <option key={category?.id} value={category?.id}>
            {category?.name}
          </option>
        ))}
      </select>
    </div>
  );
}
