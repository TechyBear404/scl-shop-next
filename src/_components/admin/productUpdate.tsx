// "use client";
// import { TextArea } from "./textArea";
import type { ProductType } from "~/server/db/requests";
import ProductUpdateForm from "./productUpdateForm";
// import { useSelectedProductContext } from "~/utils/contexts/SelectedProductContext";
// import type { ProductType } from "src/server/db/requests";

export default function ProductUpdate({
  products,
}: {
  products: ProductType[];
}) {
  // const updateProduct = async (formData: FormData) => {
  //   "use server";
  //   console.log(formData);
  // };
  return (
    <div className="mt-16 rounded-md border border-rose-800">
      <h2 className="bg-rose-950 p-2 text-2xl font-bold text-rose-50">
        Mise à jour du produits
      </h2>
      <ProductUpdateForm products={products} />
    </div>
  );
}
