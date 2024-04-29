// export const dynamic = "force-dynamic";
import ProductsList from "~/_components/admin/productsList";
import ProductUpdate from "~/_components/admin/productUpdate";
export default async function AdminPage() {
  return (
    <main id="productsTable" className="m-auto mt-16 grid grid-cols-6">
      <ProductsList />
      <ProductUpdate />
    </main>
  );
}
