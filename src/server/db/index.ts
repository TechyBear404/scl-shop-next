import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

import { products } from "./schema/products";
import { categories } from "./schema/categories";

const schema = {
  products,
  categories,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const db = drizzle(sql, { schema });
