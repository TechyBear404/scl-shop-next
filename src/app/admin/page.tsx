// "use client";

// export const dynamic = "force-dynamic";
import { Suspense } from "react";
import ProductsList from "~/_components/admin/productsList";
import ProductUpdate from "~/_components/admin/productUpdate";
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
      <ProductUpdate products={products} />
      {/* </SelectedProductProvider> */}
    </main>
  );
}
