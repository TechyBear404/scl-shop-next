// export const dynamic = "force-dynamic";
import ProductsList from "~/_components/admin/productsList";
import ProductUpdate from "~/_components/admin/productUpdate";
export default async function AdminPage() {
  return (
    <main
      id="productsTable"
      className="mt-16 grid grid-cols-[3fr,1fr] content-center items-start justify-center gap-10"
    >
      <ProductsList />
      <ProductUpdate />
    </main>
  );
}
