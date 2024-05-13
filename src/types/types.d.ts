import { type products } from "~/server/db/schema/products";
import { type categories } from "~/server/db/schema/categories";
import { type getProduct } from "~/actions/getProduct";
import { type getCategoriesCount } from "~/actions/getCountProductsByCategories";
import { type messages } from "~/server/db/schema/messages";

export type ProductType = typeof products.$inferInsert;
export type GetProductType = Awaited<ReturnType<typeof getProduct>>;

export type CategoriesType = typeof categories.$inferInsert;
export type CategoriesCountType = Awaited<
  ReturnType<typeof getCategoriesCount>
>;

export type MessagesType = typeof messages.$inferInsert;
