"use client";
// "use server";

import { updateProduct } from "~/server/db/requests";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import type { ProductType } from "~/server/db/requests";

import WaitingButton from "./waitingButton";
import SelectCategory from "./selectCategory";
import InputForm from "./inputForm";

type DataType = {
  data: ProductType;
  status: string;
};

// import { useDataContext } from "~/utils/contexts/dataContext";

export default function ProductUpdateForm() {
  const [product, setProduct] = useState<Partial<ProductType>>();
  // const { state, dispatch } = useDataContext();
  const params = useSearchParams();
  const selected = params.get("selected");
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!selected) return;
    fetch(`/api/data/products/${selected}`)
      .then((res) => res.json())
      .then((data: DataType) => {
        if (data && data.status === "success") {
          setProduct(data.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [selected]);

  return (
    <form
      ref={ref}
      action={async (updatedProduct) => {
        const response = await updateProduct(updatedProduct);
        if (response?.status === "success") {
          ref.current?.reset();
        } else {
          console.log("Error");
        }
        // revalidatePath("/admin", "page");
      }}
      className="flex flex-col gap-2 p-4"
    >
      <div>
        <InputForm
          data={{
            display: "",
            type: "hidden",
            idName: "id",
            value: product?.id,
          }}
        />
        <InputForm
          data={{
            display: "Nom",
            type: "text",
            idName: "name",
            value: product?.name,
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
      <SelectCategory selectedCategory={Number(selected)} />
      <div>
        <WaitingButton okText="Modifier" waitingText="En cours..." />
      </div>
    </form>
  );
}
