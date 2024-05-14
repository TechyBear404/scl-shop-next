"use client";
// "use server";

import { updateProduct } from "~/actions/updateProduct";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";

import WaitingButton from "./waitingButton";
import SelectCategory from "./selectCategory";
import InputForm from "../../_components/inputForm";
import { type ZodFormattedError } from "zod";
import type { UpdateProductType, SelectProductType } from "~/utils/types";
import { z } from "zod";
import { toast } from "react-toastify";
import { updateProductSchema } from "~/utils/validations";

// import { useDataContext } from "~/utils/contexts/dataContext";
const searchParamsSchema = z.object({
  selected: z.coerce.number(),
});

export default function ProductUpdateForm() {
  const [product, setProduct] = useState<SelectProductType>();
  const [errors, setErrors] = useState<ZodFormattedError<UpdateProductType>>();
  const searchParams = useSearchParams();
  const searchParamasObject = Object.fromEntries(searchParams);

  const validatedSearchParams =
    searchParamsSchema.safeParse(searchParamasObject);

  // const selected = params.get("selected");
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
    if (!validatedSearchParams.success) {
      return;
    }
    fetch(`/api/data/products/${validatedSearchParams.data.selected}`)
      .then((res) => res.json())
      .then((data: SelectProductType) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [validatedSearchParams.data?.selected, validatedSearchParams.success]);

  const handleUpdateForm = async (formData: FormData) => {
    const newProduct = Object.fromEntries(formData.entries());

    const validatedData = updateProductSchema.safeParse(newProduct);
    console.log(validatedData);

    if (!validatedData.success) {
      const newErrors = validatedData.error.format();
      setErrors({ ...errors, ...newErrors });
      return;
    }
    try {
      await updateProduct(validatedData.data);
      toast.success("Le message a été envoyé avec succès");
      setErrors(undefined);
      setProduct(undefined);
    } catch (error) {
      toast.error("Erreur lors de l'envoi du message");
    }
  };

  return (
    <form
      ref={ref}
      action={handleUpdateForm}
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
      <SelectCategory
        selectedCategory={Number(validatedSearchParams.data?.selected)}
      />
      <div>
        <WaitingButton okText="Modifier" waitingText="En cours..." />
      </div>
    </form>
  );
}
