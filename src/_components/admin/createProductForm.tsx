"use client";
// "use server";

import { createProduct } from "~/server/db/requests";
import type { ProductType } from "~/server/db/requests";
import { useState } from "react";
import type { Doc, DocInsert } from "~/server/db/schema/dbTypes";

type ProductType = Doc<"products">;

export default function CreateProductForm() {
  const [newProduct, setNewProduct] = useState<ProductType>();

  return (
    <form
      action={async (formData) => {
        await createProduct(formData);
      }}
      className="flex flex-col gap-2 p-4"
    >
      <div>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          value={newProduct?.name ?? ""}
          onChange={(e) => {
            setNewProduct({ ...newProduct, name: e.target.value });
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
          value={newProduct?.catchPhrase ?? ""}
          onChange={(e) => {
            setNewProduct({ ...newProduct, catchPhrase: e.target.value });
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
          value={newProduct?.desc ?? ""}
          onChange={(e) => {
            setNewProduct({ ...newProduct, desc: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="tips">Conseils d&apos;utilisation</label>
        <textarea
          id="tips"
          name="tips"
          className="w-full"
          value={newProduct?.tips ?? ""}
          onChange={(e) => {
            setNewProduct({ ...newProduct, tips: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="imgUrl">Image</label>
        <input
          type="text"
          id="imgUrl"
          value={newProduct?.imgUrl ?? ""}
          onChange={(e) => {
            setNewProduct({ ...newProduct, imgUrl: e.target.value });
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
