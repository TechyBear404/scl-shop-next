import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

import type { InferSelectModel } from "drizzle-orm";
import type { AnyPgColumn } from "drizzle-orm/pg-core";

import { categories } from "./categories";

export const createTable = pgTableCreator((name) => `scl-shop-next_${name}`);

export const products = createTable("product", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  desc: varchar("desc", { length: 256 }).notNull(),
  imgUrl: varchar("imgUrl", { length: 1024 }).notNull(),
  category: integer("catID").references(() => categories.id),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
});

export const productsRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.category],
    references: [categories.id],
  }),
}));

export type ProductType = InferSelectModel<typeof products>;
