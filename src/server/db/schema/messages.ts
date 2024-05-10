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

export const createTable = pgTableCreator((name) => `scl-shop-next_${name}`);

export const messages = createTable("message", {
  id: serial("id").primaryKey(),
  first_name: varchar("first_name", { length: 256 }).notNull(),
  last_name: varchar("last_name", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull(),
  subject: varchar("subject", { length: 256 }).notNull(),
  message: varchar("message", { length: 2048 }).notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
});
