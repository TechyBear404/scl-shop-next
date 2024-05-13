"use server";
import { db } from "~/server/db";
import { categories } from "~/server/db/schema/categories";
import { products } from "~/server/db/schema/products";
import { sql, eq } from "drizzle-orm";

export const getCategoriesCount = async () => {
  try {
    const response = await db
      .select({
        id: categories.id,
        name: categories.name,
        parentCatID: categories.parentCatID,

        productsQty: sql<number>`count(${products.id})`,
      })
      .from(categories)
      .leftJoin(products, eq(categories.id, products.category))
      .groupBy(sql`${categories.id}`)
      .orderBy(categories.id);

    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
