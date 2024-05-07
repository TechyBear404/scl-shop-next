"use client";
// "use server";

import { updateProduct } from "~/server/db/requests";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import type { ProductType } from "~/server/db/requests";

import WaitingButton from "./waitingButton";
import SelectCategory from "./selectCategory";

import { DataContext } from "~/utils/contexts/dataContext";
import type { DataContextType } from "~/utils/contexts/dataContext";

export default function ProductUpdateForm() {
  const [editedProduct, setEditedProduct] = useState<ProductType>();
  const { state, dispatch } = useContext<DataContextType>(DataContext);
  const params = useSearchParams();
  const selected = params.get("selected");

  // const product: ProductType | undefined = state.products.find(
  //   (product) => product.id === Number(selected),
  // );
  useEffect(() => {
    dispatch({ type: "GET_PRODUCT", payload: Number(selected) });
    setEditedProduct(state.selectedProduct);
  }, [dispatch, selected, state.selectedProduct]);

  return (
    <form
      action={
        updateProduct
        // revalidatePath("/admin", "page");
      }
      className="flex flex-col gap-2 p-4"
    >
      <div>
        <input
          type="hidden"
          id="id"
          name="id"
          value={editedProduct?.id ?? ""}
        />
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          value={editedProduct?.name ?? ""}
          onChange={(e) => {
            setEditedProduct({ ...editedProduct, name: e.target.value });
          }}
          name="name"
          className="w-full"
        />
      </div>
      <div>
        <label htmlFor="catchPhrase">Phrase d&apos;accroche</label>
        <input
          type="text"
          id="catchPhrase"
          value={editedProduct?.catchPhrase ?? ""}
          onChange={(e) => {
            setEditedProduct({ ...editedProduct, catchPhrase: e.target.value });
          }}
          name="catchPhrase"
          className="w-full"
        />
      </div>
      <div>
        <label htmlFor="desc">Description</label>
        <textarea
          id="desc"
          name="desc"
          className="w-full"
          value={editedProduct?.desc ?? ""}
          onChange={(e) => {
            setEditedProduct({ ...editedProduct, desc: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="tips">Conseils d&apos;utilisation</label>
        <textarea
          id="tips"
          name="tips"
          className="w-full"
          value={editedProduct?.tips ?? ""}
          onChange={(e) => {
            setEditedProduct({ ...editedProduct, tips: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="imgUrl">Image</label>
        <input
          type="text"
          id="imgUrl"
          value={editedProduct?.imgUrl ?? ""}
          onChange={(e) => {
            setEditedProduct({ ...editedProduct, imgUrl: e.target.value });
          }}
          name="imgUrl"
          className="w-full"
        />
      </div>
      <SelectCategory currentCategory={editedProduct?.category} />
      <div>
        <WaitingButton okText="Modifier" waitingText="En cours..." />
      </div>
    </form>
  );
}
