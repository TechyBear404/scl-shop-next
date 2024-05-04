import type { Doc, DocInsert } from "~/server/db/schema/dbTypes";

type ProductType = Doc<"products">;

// export const dynamic = "force-dynamic";
import { Suspense } from "react";
import ProductsList from "~/_components/admin/listProducts";
import ProductUpdate from "~/_components/admin/updateProduct";
import CreateProduct from "~/_components/admin/createProduct";
import { getProducts } from "~/server/db/requests";
// import SelectedProductProvider from "~/utils/contexts/SelectedProductContext";
const products = await getProducts();
export default async function AdminPage() {
  return (
    <main
      id="productsTable"
      className="mt-16 grid grid-cols-[3fr,1fr] content-center items-start justify-center gap-10"
    >
      {/* <SelectedProductProvider> */}
      <Suspense fallback="Loading...">
        <ProductsList products={products} />
      </Suspense>
      <section>
        <ProductUpdate products={products} />
        <CreateProduct />
      </section>
      {/* </SelectedProductProvider> */}
    </main>
  );
}
