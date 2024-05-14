"use server";
import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { products } from "~/server/db/schema/products";
import { updateProductSchema } from "~/utils/validations";

export const updateProduct = async (formData: unknown) => {
  const validatedData = updateProductSchema.safeParse(formData);

  if (!validatedData.success) {
    console.log(validatedData.error.format());

    throw new Error("Validation Error");
  }

  try {
    const response = await db
      .update(products)
      .set(validatedData.data)
      .where(eq(products.id, validatedData.data.id))
      .returning();

    if (response) {
      console.log(response);

      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
