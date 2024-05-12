import { sql } from "drizzle-orm";
import {
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

import type { InferSelectModel } from "drizzle-orm";

import { categories } from "./categories";
import { cartsToProducts } from "./carts";

export const createTable = pgTableCreator((name) => `scl-shop-next_${name}`);

export const products = createTable("product", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  catchPhrase: varchar("catchPhrase", { length: 256 }).notNull(),
  desc: varchar("desc", { length: 1024 }).notNull(),
  tips: varchar("tips", { length: 512 }).notNull(),
  imgUrl: varchar("imgUrl", { length: 1024 }).notNull(),
  price: integer("price").default(0).notNull(),
  category: integer("catID").references(() => categories.id),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
});

export const benefits = createTable("benefit", {
  id: serial("id").primaryKey(),
  desc: varchar("desc", { length: 256 }).notNull(),
  productID: integer("productID")
    .notNull()
    .references(() => products.id),
});

export const ingredients = createTable("ingredient", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  productID: integer("productID")
    .notNull()
    .references(() => products.id),
});

export const ingredientsRelations = relations(ingredients, ({ one }) => ({
  product: one(products, {
    fields: [ingredients.id],
    references: [products.id],
  }),
}));

export const benefitsRelations = relations(benefits, ({ one }) => ({
  product: one(products, {
    fields: [benefits.id],
    references: [products.id],
  }),
}));

export const productsRelations = relations(products, ({ one, many }) => ({
  category: one(categories, {
    fields: [products.category],
    references: [categories.id],
  }),
  ingredients: many(ingredients),
  benefits: many(benefits),
  cartsToProducts: many(cartsToProducts),
}));

export type ProductType = InferSelectModel<typeof products>;
