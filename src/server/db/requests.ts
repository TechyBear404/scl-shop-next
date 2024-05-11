"use server";
import { cache } from "react";
import { eq, and, sql, count } from "drizzle-orm";

import { db } from "~/server/db";
import { products } from "./schema/products";
import type { Doc, DocInsert } from "./schema/dbTypes";
import { revalidatePath } from "next/cache";
import { categories } from "./schema/categories";
import { messages } from "./schema/messages";
import { PgSelect } from "drizzle-orm/pg-core";
import { log } from "console";

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
    // console.log(response);

    if (response) {
      return { status: "success", data: response };
    } else {
      return { status: "error", data: undefined };
    }
  } catch (error) {
    console.log(error);

    // return { status: "error", data: undefined };
  }
};

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
      return { status: "success", data: response };
    }
  } catch (error) {
    // console.error(error);
    return { status: "error", data: [] };
  }
};

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

  // revalidatePath("/products");
  // console.log(newProduct);

  try {
    const response = await db.insert(products).values(newProduct).returning();
    if (response) {
      return { status: "success" };
    }
  } catch (error) {
    console.error(error);
    return { status: "error" };
  }
  // revalidatePath("/");
};
export type ProductsType = Awaited<ReturnType<typeof getProducts>>;
// export type ProductType = ProductsType extends (infer ElementType)[]
//   ? ElementType
//   : never;
export type ProductType = {
  id: number;
  name: string;
  catchPhrase: string;
  desc: string;
  tips: string;
  imgUrl: string;
  price: number;
  category:
    | (number & {
        id: number;
        name: string;
        parentCatID: number | null;
      })
    | null;
};

export type UpdateProductType = {
  id: number;
  name?: string;
  catchPhrase?: string;
  desc?: string;
  tips?: string;
  imgUrl?: string;
  price?: number;
  category?: number;
};

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
      return { status: "success" };
    }
  } catch (error) {
    // console.error(error);
    return { status: "error" };
  }
  revalidatePath("/admin", "page");
  revalidatePath("/products");
};

export const getCategories = async () => {
  try {
    const response = await db.query.categories.findMany({
      columns: {
        createdAt: false,
        updatedAt: false,
      },
    });

    if (response) {
      return { status: "success", data: response };
    }
  } catch (error) {
    // console.error(error);
    return { status: "error", data: [] };
  }
};

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
      return { status: "success", data: response };
    }
  } catch (error) {
    // console.error(error);
    return { status: "error", data: [] };
  }
};

export type CategoriesCountType = Awaited<
  ReturnType<typeof getCategoriesCount>
>;
// export type CategoriesType = Awaited<ReturnType<typeof getCategories>>;
export type CategoriesType = {
  id: number;
  name: string;
  parentCatID: number | null;
}[];
export type CategoryType = CategoriesType extends (infer ElementType)[]
  ? ElementType
  : never;

export type NewMessageType = typeof messages.$inferInsert;

export const createMessage = async (formData: FormData) => {
  const newMessage: NewMessageType = {
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  try {
    const response = await db.insert(messages).values(newMessage).returning();
    // console.log(response);

    if (response) {
      return { status: "success" };
    }
  } catch (error) {
    // console.error(error);
    return { status: "error" };
  }
};

export const getMessages = async () => {
  try {
    const response = await db.query.messages.findMany({
      columns: {
        createdAt: false,
        updatedAt: false,
      },
    });

    return response;
  } catch (error) {
    // console.error(error);
    return [];
  }
};

export const getEmployees = async () => {
  try {
    const response = await db.query.employees.findMany({
      columns: {
        createdAt: false,
        updatedAt: false,
      },
    });

    if (response) {
      return { status: "success", data: response };
    }
  } catch (error) {
    // console.error(error);
    return { status: "error", data: [] };
  }
};
