"use server";
import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { products } from "~/server/db/schema/products";

export const updateProduct = async (formData: FormData) => {
  const product = {
    id: parseInt(formData.get("id") as string),
    name: formData.get("name") as string,
    catchPhrase: formData.get("catchPhrase") as string,
    desc: formData.get("desc") as string,
    tips: formData.get("tips") as string,
    imgUrl: formData.get("imgUrl") as string,
    price: parseInt(formData.get("price") as string),
    category: formData.get("category")
      ? parseInt(formData.get("category") as string)
      : null,
  };

  try {
    const response = await db
      .update(products)
      .set(product)
      .where(eq(products.id, product.id))
      .returning();

    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
