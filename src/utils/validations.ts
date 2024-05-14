import { z } from "zod";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { products } from "~/server/db/schema/products";

export const newMessageSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "Minimum 2 charactéres" })
    .max(50, { message: "Maximum 50 charactéres" }),
  last_name: z
    .string()
    .min(2, { message: "Minimum 2 charactéres" })
    .max(50, { message: "Maximum 50 charactéres" }),
  email: z.string().email({ message: "Email invalide" }),
  subject: z
    .string()
    .min(2, { message: "Minimum 2 charactéres" })
    .max(50, { message: "Maximum 50 charactéres" }),
  message: z
    .string()
    .min(2, { message: "Minimum 2 charactéres" })
    .max(500, { message: "Maximum 500 charactéres" }),
});

export const insertProductSchema = createInsertSchema(products).extend({
  price: z.coerce.number().optional(),
  category: z.coerce.number().optional(),
});
export const selectProductSchema = createSelectSchema(products);
export const updateProductSchema = createInsertSchema(products)
  .partial()
  .extend({
    id: z.coerce.number(),
    price: z.coerce.number().optional(),
    category: z.coerce.number().optional(),
  });
