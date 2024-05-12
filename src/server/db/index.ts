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
import { messages } from "./schema/messages";
import { employees } from "./schema/employees";
import {
  users,
  accounts,
  sessions,
  verificationTokens,
} from "./schema/authSchema";
import {
  carts,
  cartsToProducts,
  cartsRelations,
  cartsToProductsRelations,
} from "./schema/carts";

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
  messages,
  employees,
  carts,
  cartsToProducts,
  cartsRelations,
  cartsToProductsRelations,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const db = drizzle(sql, { schema });
