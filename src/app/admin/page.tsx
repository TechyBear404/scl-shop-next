import type { Doc, DocInsert } from "~/server/db/schema/dbTypes";

type ProductType = Doc<"products">;

// export const dynamic = "force-dynamic";
import { Suspense } from "react";
import ProductsList from "~/_components/admin/listProducts";
import { getProducts, getCategories } from "~/server/db/requests";
import TabOperations from "~/_components/admin/tabOperations";
// import SelectedProductProvider from "~/utils/contexts/SelectedProductContext";
const products = await getProducts();
const categories = await getCategories();
export default function AdminPage() {
  return (
    <main
      id="productsTable"
      className="mt-16 grid grid-cols-[3fr,1fr] content-center items-start justify-center gap-10"
    >
      {/* <SelectedProductProvider> */}
      <Suspense fallback="Loading...">
        <ProductsList products={products} />
      </Suspense>
      <TabOperations products={products} categories={categories} />
      {/* </SelectedProductProvider> */}
    </main>
  );
}
