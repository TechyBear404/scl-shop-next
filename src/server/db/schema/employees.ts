import { desc, sql } from "drizzle-orm";
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

export const employees = createTable("employee", {
  id: serial("id").primaryKey(),
  first_name: varchar("first_name", { length: 256 }).notNull(),
  last_name: varchar("last_name", { length: 256 }).notNull(),
  birth_date: timestamp("birth_date").notNull(),
  job: varchar("job", { length: 256 }).notNull(),
  description: varchar("description", { length: 2048 }).notNull(),
  imgUrl: varchar("imgUrl", { length: 256 }).notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
});
