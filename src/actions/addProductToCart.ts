"use server";
import { db } from "~/server/db";
import { auth } from "auth";
import { and, eq, sql } from "drizzle-orm";
import { carts, cartsToProducts } from "~/server/db/schema/carts";

export const addProductToCart = async (formData: FormData) => {
  console.log("hello");

  const productId = parseInt(formData.get("productId") as string);
  const qty = formData.get("productQty") as string;
  console.log(productId, qty);
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
    let activeCart = cart;
    if (Array.isArray(activeCart) && activeCart.length === 0) {
      const insertCart = await db
        .insert(carts)
        .values({
          userId: session?.user?.id,
        })
        .returning({ id: carts.id });
      console.log("New Cart Created");
      activeCart = insertCart;
    }
    let prepare;
    if (!activeCart[0]) {
      console.log("No active cart");
      return;
    }
    if (qty) {
      prepare = {
        cartId: activeCart[0].id,
        productId: productId,
        qty: parseInt(qty),
      };
    } else {
      prepare = { cartId: activeCart[0].id, productId: productId };
    }

    const response = await db
      .insert(cartsToProducts)
      .values(prepare)
      .onConflictDoUpdate({
        target: [cartsToProducts.cartId, cartsToProducts.productId],
        set: { qty: sql`${cartsToProducts.qty} + ${prepare.qty}` },
      });
    if (response) {
      // revalidatePath("/api/cart");
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
