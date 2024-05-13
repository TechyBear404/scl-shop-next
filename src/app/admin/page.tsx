export const dynamic = "force-dynamic";
import { Suspense } from "react";
import ProductsList from "~/app/admin/_components/listProducts";
import TabOperations from "~/app/admin/_components/tabOperations";
import { getProducts } from "~/actions/getProducts";

export default async function AdminPage() {
  const products = await getProducts();

  return (
    <main
      id="productsTable"
      className="relative mt-14 flex min-h-screen flex-col content-center items-start justify-start gap-6 p-6"
    >
      <Suspense fallback="Loading...">
        <ProductsList products={products} />
      </Suspense>
      <TabOperations />
    </main>
  );
}
