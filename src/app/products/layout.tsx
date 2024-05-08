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
    <div className="mt-12 min-h-screen ">
      <ProductNav />
      {children}
      {/* <ProductDetails /> */}
    </div>
  );
}
