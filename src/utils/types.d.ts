import { type products } from "~/server/db/schema/products";
import { type categories } from "~/server/db/schema/categories";
import { type getProduct } from "~/actions/getProduct";
import { type getCategoriesCount } from "~/actions/getCountProductsByCategories";
// import { type messages } from "~/server/db/schema/messages";
import type {
  newMessageSchema,
  selectProductSchema,
  insertProductSchema,
  updateProductSchema,
} from "./validations";
import { z } from "zod";

export type SelectProductType = z.infer<typeof selectProductSchema>;
export type InsertProductType = z.infer<typeof insertProductSchema>;
export type UpdateProductType = z.infer<typeof updateProductSchema>;

export type GetProductType = Awaited<ReturnType<typeof getProduct>>;

export type CategoriesType = typeof categories.$inferInsert;
export type CategoriesCountType = Awaited<
  ReturnType<typeof getCategoriesCount>
>;

// export type MessagesType = typeof messages.$inferInsert;

export type NewMessageType = z.infer<typeof newMessageSchema>;
