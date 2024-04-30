"use client";
import { useRef } from "react";
import { updateProduct, UpdateProductType } from "~/server/db/requests";

export default function ProductUpdateForm() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        await updateProduct(formData);
      }}
      className="flex flex-col gap-2 p-4"
    >
      <div>
        <input type="hidden" id="id" name="id" />
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" className="w-full" />
      </div>
      <div>
        <label htmlFor="catchPhrase">Phrase d&apos;accroche</label>
        <input
          type="text"
          id="catchPhrase"
          name="catchPhrase"
          className="w-full"
        />
      </div>
      <div>
        <label htmlFor="desc">Description</label>
        <textarea id="desc" name="desc" className="w-full" />
      </div>
      <div>
        <label htmlFor="tips">Conseils d&apos;utilisation</label>
        <textarea id="tips" name="tips" className="w-full" />
      </div>
      <div>
        <label htmlFor="imgUrl">Image</label>
        <input type="text" id="imgUrl" name="imgUrl" className="w-full" />
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
