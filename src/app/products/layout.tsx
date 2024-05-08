// "use client";
import ProductDetails from "~/_components/product/productDetails";
import { getCategories } from "~/server/db/requests";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto mt-16 flex h-screen w-full max-w-[1280px] gap-6">
      {children}
      <ProductDetails />
    </div>
  );
}
