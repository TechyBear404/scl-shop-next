import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

import {
  products,
  productsRelations,
  benefits,
  benefitsRelations,
  ingredients,
  ingredientsRelations,
} from "./schema/products";
import { categories, categoriesRelation } from "./schema/categories";

const schema = {
  products,
  productsRelations,
  benefits,
  benefitsRelations,
  ingredients,
  ingredientsRelations,
  categories,
  categoriesRelation,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const db = drizzle(sql, { schema });
