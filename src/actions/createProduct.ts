"use server";
import { db } from "~/server/db";
import { products } from "~/server/db/schema/products";
type NewProduct = typeof products.$inferInsert;

export const createProduct = async (formData: FormData) => {
  const newProduct: NewProduct = {
    name: formData.get("name") as string,
    catchPhrase: formData.get("catchPhrase") as string,
    desc: formData.get("desc") as string,
    tips: formData.get("tips") as string,
    imgUrl: formData.get("imgUrl") as string,
    price: parseInt(formData.get("price") as string),
    category: parseInt(formData.get("category") as string),
  };

  try {
    const response = await db.insert(products).values(newProduct).returning();
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
