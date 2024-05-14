import { sql } from "drizzle-orm";
import {
  integer,
  pgEnum,
  pgTableCreator,
  primaryKey,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

import { users } from "./authSchema";
import { products } from "./products";

export const createTable = pgTableCreator((name) => `scl-shop-next_${name}`);

export const cartsStatus = pgEnum("status", ["active", "completed"]);

export const carts = createTable("cart", {
  id: serial("id").primaryKey(),
  userId: varchar("userId", { length: 255 })
    .notNull()
    .references(() => users.id),
  status: cartsStatus("status").notNull().default("active"),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
});

export const cartsRelations = relations(carts, ({ one, many }) => ({
  user: one(users, {
    fields: [carts.userId],
    references: [users.id],
  }),
  cartToProducts: many(cartsToProducts),
}));

export const cartsToProducts = createTable(
  "cart_to_product",
  {
    cartId: integer("cart_id")
      .notNull()
      .references(() => carts.id),
    productId: integer("product_id")
      .notNull()
      .references(() => products.id),
    qty: integer("qty").notNull().default(1),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.cartId, t.productId] }),
  }),
);

export const cartsToProductsRelations = relations(
  cartsToProducts,
  ({ one }) => ({
    cart: one(carts, {
      fields: [cartsToProducts.cartId],
      references: [carts.id],
    }),
    product: one(products, {
      fields: [cartsToProducts.productId],
      references: [products.id],
    }),
  }),
);
