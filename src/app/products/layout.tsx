// "use client";
import ProductDetails from "~/_components/product/productDetails";
import { getCategories } from "~/server/db/requests";
import ProductNav from "~/_components/product/productNav";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto mt-16 flex min-h-screen max-w-7xl gap-6">
      <ProductNav />
      {children}
      <ProductDetails />
    </div>
  );
}
