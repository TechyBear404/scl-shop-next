// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { InferSelectModel, sql } from "drizzle-orm";
import {
  AnyPgColumn,
  index,
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `scl-shop-next_${name}`);

export type ProductType = InferSelectModel<typeof products>;

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

export const productsRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.category],
    references: [categories.id],
  }),
}));

export type Category = typeof categories.$inferSelect;

export const categoriesRelation = relations(categories, ({ one, many }) => ({
  subcategories: one(categories, {
    fields: [categories.parentCatID],
    references: [categories.id],
    relationName: "subcategories",
  }),
}));
