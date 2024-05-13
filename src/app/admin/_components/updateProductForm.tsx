"use client";
// "use server";

import { updateProduct } from "~/actions/updateProduct";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import type { ProductType } from "~/types/types";

import WaitingButton from "./waitingButton";
import SelectCategory from "./selectCategory";
import InputForm from "../../_components/inputForm";

type DataType = {
  data: ProductType;
  status: string;
};

// import { useDataContext } from "~/utils/contexts/dataContext";

export default function ProductUpdateForm() {
  const [product, setProduct] = useState<ProductType>();
  // const { state, dispatch } = useDataContext();
  const params = useSearchParams();
  const selected = params.get("selected");
  const ref = useRef<HTMLFormElement>(null);

  const formInputs = [
    {
      display: "Nom",
      type: "text",
      idName: "name",
      value: product?.name,
    },
    {
      display: "Phrase d'accroche",
      type: "text",
      idName: "catchPhrase",
      value: product?.catchPhrase,
    },
    {
      display: "Description",
      type: "textarea",
      idName: "desc",
      value: product?.desc,
    },
    {
      display: "Conseils d'utilisation",
      type: "textarea",
      idName: "tips",
      value: product?.tips,
    },
    {
      display: "Image",
      type: "text",
      idName: "imgUrl",
      value: product?.imgUrl,
    },
    {
      display: "Prix",
      type: "number",
      idName: "price",
      value: product?.price?.toString(),
    },
  ];

  useEffect(() => {
    if (!selected) return;
    fetch(`/api/data/products/${selected}`)
      .then((res) => res.json())
      .then((data: ProductType) => {
        setProduct(data);
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
        if (response) {
          ref.current?.reset();
        } else {
          console.log("Error");
        }
      }}
      className="flex flex-col gap-2 bg-rose-100 p-4"
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
