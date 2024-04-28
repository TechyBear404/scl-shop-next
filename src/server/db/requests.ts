import { db } from "~/server/db";

import { cache } from "react";

export const getProducts = cache(async () => {
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
});

export type ProductType = Awaited<ReturnType<typeof getProducts>>[0];

export const getCategories = cache(async () => {
  const categories = await db.query.categories.findMany({
    columns: {
      createdAt: false,
      updatedAt: false,
    },
  });
  return categories;
});

export type CategoryType = Awaited<ReturnType<typeof getCategories>>[0];
