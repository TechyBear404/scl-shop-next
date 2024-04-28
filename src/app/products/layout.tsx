// "use client";
import ProductDetails from "~/_components/productDetails";
import { categories } from "~/server/db/requests";
import { db } from "~/server/db";
// import { useState, useEffect } from "react";

async function ProductNav({ test }: { test: (name: string) => void }) {
  let categories;
  try {
    categories = await db.query.categories.findMany({
      columns: {
        createdAt: false,
        updatedAt: false,
      },
    });
  } catch (error) {
    // console.log(error.message);
  }
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

console.log(categories);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [category, setCategory] = useState(1);

  // const updateSelectedCategory = (category: number): void => {
  //   setCategory(category);
  // };
  // console.log(category);
  const test = (text: string) => {
    console.log(text);
  };

  return (
    <div className="flex">
      <ProductNav test={test} />
      {children}
      <ProductDetails />
    </div>
  );
}
