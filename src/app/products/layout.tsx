import { getCategoriesCount } from "~/actions/getCountProductsByCategories";
import ProductNav from "~/app/products/_components/productNav";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategoriesCount();

  return (
    <div className="mt-12 min-h-screen ">
      <ProductNav categories={categories} />
      {children}
    </div>
  );
}
