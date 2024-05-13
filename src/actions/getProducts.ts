"use server";
import { db } from "~/server/db";

export const getProducts = async (category?: number) => {
  try {
    const response = await db.query.products.findMany({
      where: (products, { eq }) =>
        category ? eq(products.category, category) : undefined,
      columns: {
        createdAt: false,
        updatedAt: false,
      },
      with: {
        category: {
          columns: {
            createdAt: false,
            updatedAt: false,
          },
        },
      },
    });

    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
