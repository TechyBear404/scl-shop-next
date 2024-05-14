"use server";
import { db } from "~/server/db";
import { carts } from "~/server/db/schema/carts";
import { auth } from "auth";
import { and, eq } from "drizzle-orm";

export const getCart = async () => {
  const session = await auth();
  if (!session?.user) {
    return;
  }
  try {
    const response = await db.query.carts.findFirst({
      where: and(
        eq(carts.userId, session?.user?.id),
        eq(carts.status, "active"),
      ),
      with: {
        cartToProducts: {
          with: {
            product: {
              columns: {
                createdAt: false,
                updatedAt: false,
              },
            },
          },
        },
      },
    });
    if (response) {
      // console.log(response);

      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
