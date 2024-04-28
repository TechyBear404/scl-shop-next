// "use client";
import ProductDetails from "~/_components/productDetails";
import { getCategories } from "~/server/db/requests";

import { ProductNav } from "./productNav";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const test = (text: string) => {
    console.log(text);
  };
  const categories = await getCategories();

  return (
    <div className="flex">
      <ProductNav categories={categories} test={test} />
      {children}
      <ProductDetails />
    </div>
  );
}
