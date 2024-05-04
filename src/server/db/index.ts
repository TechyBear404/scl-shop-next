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
import {
  users,
  accounts,
  sessions,
  verificationTokens,
} from "./schema/authSchema";

export const schema = {
  products,
  productsRelations,
  benefits,
  benefitsRelations,
  ingredients,
  ingredientsRelations,
  categories,
  categoriesRelation,
  users,
  accounts,
  sessions,
  verificationTokens,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const db = drizzle(sql, { schema });
