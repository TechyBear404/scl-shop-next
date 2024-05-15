"use server";
import { db } from "~/server/db";
import { products } from "~/server/db/schema/products";
import { insertProductSchema } from "~/utils/validations";

export const createProduct = async (formData: unknown) => {
  const validatedData = insertProductSchema.safeParse(formData);
  console.log(validatedData);

  if (!validatedData.success) {
    throw new Error("Validation Error");
  }

  try {
    const response = await db
      .insert(products)
      .values(validatedData.data)
      .returning();
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
