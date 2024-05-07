// "use client";
import ProductDetails from "~/_components/product/productDetails";
import { getCategories } from "~/server/db/requests";

import { ProductNav } from "~/_components/product/productNav";

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
    <div className="m-auto flex max-w-[1280px] justify-center">
      <ProductNav categories={categories} test={test} />
      {children}
      <ProductDetails />
    </div>
  );
}
