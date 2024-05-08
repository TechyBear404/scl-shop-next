// "use client";
export const dynamic = "force-dynamic";
import { Suspense } from "react";
import ProductsList from "~/_components/admin/listProducts";
import TabOperations from "~/_components/admin/tabOperations";
import { DataProvider } from "~/utils/contexts/dataContext";
// import { useDataContext } from "~/utils/contexts/dataContext";

export default function AdminPage() {
  return (
    <main
      id="productsTable"
      className="mt-14 flex flex-col content-center items-start justify-center gap-6 p-6"
    >
      <DataProvider>
        <Suspense fallback="Loading...">
          <ProductsList />
        </Suspense>
        <TabOperations />
      </DataProvider>
    </main>
  );
}
