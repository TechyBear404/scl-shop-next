import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { products } from "~/server/db/schema/products";

export const getProduct = async (id: number) => {
  try {
    const response = await db.query.products.findFirst({
      where: eq(products.id, id),
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
    } else {
      console.log("No product found");
    }
  } catch (error) {
    console.log(error);
  }
};
