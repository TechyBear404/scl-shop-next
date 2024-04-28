import { db } from "~/server/db";

export const products = await db.query.products.findMany({
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

export type ProductType = Awaited<typeof products>[0];

export const categories = await db.query.categories.findMany({
  columns: {
    createdAt: false,
    updatedAt: false,
  },
});

export type CategoryType = Awaited<typeof categories>[0];
