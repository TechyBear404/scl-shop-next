"use client";

import { removeProductFromCart } from "~/server/db/requests";

export default function RemoveProductFromCart({
  productId,
}: {
  productId: number;
}) {
  if (productId) {
    return (
      <form action={removeProductFromCart}>
        <input
          type="hidden"
          name="productId"
          id="productId"
          value={productId}
        />
        <button type="submit">Supprimer le produit</button>
      </form>
    );
  }
}
