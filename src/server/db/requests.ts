"use server";
import { cache } from "react";
import { eq } from "drizzle-orm";

import { db } from "~/server/db";
import { products } from "./schema/products";
import type { Doc, DocInsert } from "./schema/dbTypes";
import { revalidatePath } from "next/cache";

type CreateProductType = DocInsert<"products">;

// export interface UpdateProductType {
//   id?: number;
//   name?: string;
//   catchPhrase?: string;
//   desc?: string;
//   tips?: string;
//   imgUrl?: string;
//   category?: number;
// }

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

export const createProduct = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const newProduct: CreateProductType = {
    name: formData.get("name") as string,
    catchPhrase: formData.get("catchPhrase") as string,
    desc: formData.get("desc") as string,
    tips: formData.get("tips") as string,
    imgUrl: formData.get("imgUrl") as string,
    category: parseInt(formData.get("category") as string),
  };

  revalidatePath("/admin");
  revalidatePath("/products");
  console.log(newProduct);

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
export type ProductsType = Awaited<ReturnType<typeof getProducts>>;
export type ProductType = ProductsType extends (infer ElementType)[]
  ? ElementType
  : never;

export const updateProduct = async (formData: FormData) => {
  const product = {
    id: parseInt(formData.get("id") as string),
    name: formData.get("name") as string,
    catchPhrase: formData.get("catchPhrase") as string,
    desc: formData.get("desc") as string,
    tips: formData.get("tips") as string,
    imgUrl: formData.get("imgUrl") as string,
    category: formData.get("category")
      ? parseInt(formData.get("category") as string)
      : null,
  };

  try {
    const updatedProduct = await db
      .update(products)
      .set(product)
      .where(eq(products.id, product.id))
      .returning();
    return updatedProduct;
  } catch (error) {
    console.error(error);
  }
  revalidatePath("/admin", "page");
  revalidatePath("/products");
};

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

export type CategoriesType = Awaited<ReturnType<typeof getCategories>>;
export type CategoryType = CategoriesType extends (infer ElementType)[]
  ? ElementType
  : never;
