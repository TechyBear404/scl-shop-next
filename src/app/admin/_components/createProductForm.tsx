"use client";
// "use server";

import { createProduct } from "~/actions/createProduct";
import { useRef, useState } from "react";
import WaitingButton from "./waitingButton";
import SelectCategory from "./selectCategory";
import InputForm from "../../_components/inputForm";
import { type ZodFormattedError } from "zod";
import { insertProductSchema } from "~/utils/validations";
import type { InsertProductType } from "~/utils/types";
import { toast } from "react-toastify";

const initFormData: InsertProductType = {
  name: "",
  catchPhrase: "",
  desc: "",
  tips: "",
  imgUrl: "",
  price: 0,
  category: 0,
};

export default function CreateProductForm() {
  const [product, setProduct] = useState<InsertProductType>(initFormData);
  const [errors, setErrors] = useState<ZodFormattedError<InsertProductType>>();

  const ref = useRef<HTMLFormElement>(null);

  const handleCreateForm = async (formData: FormData) => {
    const newProduct = Object.fromEntries(formData.entries());

    const validatedData = insertProductSchema.safeParse(newProduct);
    console.log(validatedData);

    if (!validatedData.success) {
      const newErrors = validatedData.error.format();
      setErrors({ ...errors, ...newErrors });
      return;
    }
    try {
      await createProduct(validatedData.data);
      toast.success("Le produit a été crée avec succès");
      setErrors(undefined);
      setProduct(initFormData);
    } catch (error) {
      toast.error("Erreur lors de la création du produit");
    }
  };

  return (
    <form
      ref={ref}
      action={handleCreateForm}
      className="flex flex-col gap-2 bg-rose-100 p-4"
    >
      <InputForm
        data={{
          display: "Nom",
          type: "text",
          value: product?.name,
          idName: "name",
        }}
      />
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
