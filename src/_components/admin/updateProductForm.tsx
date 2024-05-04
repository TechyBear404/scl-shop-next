"use client";
// "use server";

import { updateProduct } from "~/server/db/requests";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import type { Doc, DocInsert } from "~/server/db/schema/dbTypes";

type ProductType = Doc<"products">;

export default function ProductUpdateForm({
  products,
}: {
  products: ProductType[];
}) {
  const [editedProduct, setEditedProduct] = useState<ProductType>();
  const params = useSearchParams();
  const selected = params.get("selected");

  const product: ProductType | undefined = products.find(
    (product) => product.id === Number(selected),
  );

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);
  // console.log(products);
  // console.log(params.selected);
  if (params && product) {
    // return <div className="p-4">Sélectionnez un produit</div>;
  }
  return (
    <form
      action={async (formData) => {
        await updateProduct(formData);
      }}
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
      <div>
        <button
          type="submit"
          className="mt-8 rounded bg-rose-800 px-4 py-2 font-bold text-white"
        >
          Mettre à jour
        </button>
      </div>
    </form>
  );
}
