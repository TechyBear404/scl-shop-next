"use client";
// "use server";

import { createProduct } from "~/actions/createProduct";
import { useRef, useState } from "react";
import WaitingButton from "./waitingButton";
import SelectCategory from "./selectCategory";
import InputForm from "../../_components/inputForm";
import { type ProductType } from "~/types/types";

export default function CreateProductForm() {
  const [product, setProduct] = useState<Partial<ProductType>>();
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        // input validation
        await createProduct(formData);
      }}
      className="flex flex-col gap-2 bg-rose-100 p-4"
    >
      <div>
        <input type="hidden" id="id" name="id" value={product?.id} />
        <InputForm
          data={{
            display: "Nom",
            type: "text",
            value: product?.name,
            idName: "name",
          }}
        />
      </div>
      <InputForm
        data={{
          display: "Phrase d'accroche",
          type: "text",
          idName: "catchPhrase",
          value: product?.catchPhrase,
        }}
      />
      <InputForm
        data={{
          display: "Description",
          type: "textarea",
          idName: "desc",
          value: product?.desc,
        }}
      />
      <InputForm
        data={{
          display: "Conseils d'utilisation",
          type: "textarea",
          idName: "tips",
          value: product?.tips,
        }}
      />

      <InputForm
        data={{
          display: "Image",
          type: "text",
          idName: "imgUrl",
          value: product?.imgUrl,
        }}
      />
      <InputForm
        data={{
          display: "Prix",
          type: "number",
          idName: "price",
          value: product?.price?.toString(),
        }}
      />
      <SelectCategory />
      <div>
        <WaitingButton okText="Modifier" waitingText="En cours..." />
      </div>
    </form>
  );
}
