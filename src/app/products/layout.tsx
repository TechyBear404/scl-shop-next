// "use client";
import ProductDetails from "~/app/products/_components/productDetails";
import { getCategories, getCategoriesCount } from "~/server/db/requests";
import ProductNav from "~/app/products/_components/productNav";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategoriesCount();
  // console.log(categories);

  return (
    <div className="mt-12 min-h-screen ">
      <ProductNav categories={categories} />
      {children}
      {/* <ProductDetails /> */}
    </div>
  );
}
