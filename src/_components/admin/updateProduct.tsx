// "use client";
// import { TextArea } from "./textArea";
import type { ProductType } from "~/server/db/requests";
import ProductUpdateForm from "./updateProductForm";
// import { useSelectedProductContext } from "~/utils/contexts/SelectedProductContext";
// import type { ProductType } from "src/server/db/requests";

export default function UpdateProduct({
  products,
}: {
  products: ProductType[];
}) {
  // const updateProduct = async (formData: FormData) => {
  //   "use server";
  //   console.log(formData);
  // };
  return (
    <div className="">
      <ProductUpdateForm products={products} />
    </div>
  );
}
