import { sql } from "drizzle-orm";
import {
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

import type { AnyPgColumn } from "drizzle-orm/pg-core";

import { products } from "./products";

export const createTable = pgTableCreator((name) => `scl-shop-next_${name}`);

export type CategoryId = number & { __typeName: "Category" };

export const categories = createTable("category", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  parentCatID: integer("parentCatID").references(
    (): AnyPgColumn => categories.id,
  ),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
});

export const categoriesRelation = relations(categories, ({ one, many }) => ({
  subcategories: one(categories, {
    fields: [categories.parentCatID],
    references: [categories.id],
    relationName: "subcategories",
  }),
  products: many(products),
}));

export type Category = typeof categories.$inferSelect;
