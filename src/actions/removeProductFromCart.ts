"use server";
import { db } from "~/server/db";
import { carts, cartsToProducts } from "~/server/db/schema/carts";
import { auth } from "auth";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const removeProductFromCart = async (formData: FormData) => {
  const productId = parseInt(formData.get("productId") as string);
  const session = await auth();
  if (!session?.user) {
    return;
  }
  try {
    const cart = await db
      .select({ id: carts.id })
      .from(carts)
      .where(
        and(eq(carts.userId, session?.user?.id), eq(carts.status, "active")),
      );
    const response = await db
      .delete(cartsToProducts)
      .where(
        and(
          eq(cartsToProducts.productId, productId),
          eq(cartsToProducts.cartId, cart[0]!.id),
        ),
      );
    if (response) {
      // return response;
      revalidatePath("/");
    }
  } catch (error) {
    console.log(error);
  }
};
