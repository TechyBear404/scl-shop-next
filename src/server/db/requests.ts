"use server";
import { cache } from "react";
import { eq } from "drizzle-orm";
import type { InferInsertModel } from "drizzle-orm";

import { db } from "~/server/db";
import { products } from "./schema/products";
import { log } from "console";

export interface UpdateProductType {
  id?: number;
  name?: string;
  catchPhrase?: string;
  desc?: string;
  tips?: string;
  imgUrl?: string;
  category?: number;
}

export const getProduct = cache(async (id: number) => {
  try {
    const product = await db.query.products.findMany({
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
    console.log(product);

    return product;
  } catch (error) {
    console.error(error);
    return {};
  }
});

export const getProducts = cache(async () => {
  try {
    const products = await db.query.products.findMany({
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

    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
});

export const updateProduct = async (formData: FormData) => {
  const product: UpdateProductType = {
    id: parseInt(formData.get("id") as string),
    name: formData.get("name") as string,
    catchPhrase: formData.get("catchPhrase") as string,
    desc: formData.get("desc") as string,
    tips: formData.get("tips") as string,
    imgUrl: formData.get("imgUrl") as string,
    category: parseInt(formData.get("category") as string),
  };
  console.log(product);

  // try {
  //   const updatedProduct = await db
  //     .update(products)
  //     .set()
  //     .where(eq(products.id, product.id))
  //     .returning();
  //   return updatedProduct;
  // } catch (error) {
  //   console.error(error);
  // }
};
export type ProductType = Awaited<ReturnType<typeof getProducts>>[0];

export const getCategories = cache(async () => {
  try {
    const categories = await db.query.categories.findMany({
      columns: {
        createdAt: false,
        updatedAt: false,
      },
    });
    return categories;
  } catch (error) {
    console.error(error);
    return [];
  }
});

export type CategoryType = Awaited<ReturnType<typeof getCategories>>[0];
