// "use client";
export const dynamic = "force-dynamic";
import { Suspense } from "react";
import ProductsList from "~/app/admin/_components/listProducts";
import TabOperations from "~/app/admin/_components/tabOperations";
import {
  CategoriesType,
  getCategories,
  getProducts,
} from "~/server/db/requests";
import { DataProvider } from "~/utils/contexts/dataContext";
// import { useDataContext } from "~/utils/contexts/dataContext";

export default async function AdminPage() {
  const responseProducts = await getProducts();
  const responseCategories = await getCategories();
  let products;
  let categories: CategoriesType = [];
  if (responseProducts && responseProducts.status === "success") {
    products = responseProducts.data;
  }
  if (responseCategories && responseCategories.status === "success") {
    categories = responseCategories.data;
  }

  return (
    <main
      id="productsTable"
      className="relative mt-14 flex min-h-screen flex-col content-center items-start justify-start gap-6 p-6"
    >
      <DataProvider>
        <Suspense fallback="Loading...">
          <ProductsList products={products} />
        </Suspense>
        <TabOperations categories={categories} />
      </DataProvider>
    </main>
  );
}
