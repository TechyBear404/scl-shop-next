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
  usersRelations,
  accounts,
  accountsRelations,
  sessions,
  sessionsRelations,
  verificationTokens,
} from "./schema/authSchema";

const schema = {
  products,
  productsRelations,
  benefits,
  benefitsRelations,
  ingredients,
  ingredientsRelations,
  categories,
  categoriesRelation,
  users,
  usersRelations,
  accounts,
  accountsRelations,
  sessions,
  sessionsRelations,
  verificationTokens,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const db = drizzle(sql, { schema });
