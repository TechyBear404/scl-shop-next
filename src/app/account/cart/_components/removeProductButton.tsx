"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { removeProductFromCart } from "~/actions/removeProductFromCart";

export default function RemoveProductFromCart({
  productId,
}: {
  productId: number;
}) {
  const handleRemoveProductFromCart = async (formData: FormData) => {
    try {
      await removeProductFromCart(formData);
      toast.success("Produit été suprimer du panier");
    } catch (error) {
      toast.error("Erreur lors de la supression du produit");
    }
  };
  if (productId) {
    return (
      <form action={handleRemoveProductFromCart}>
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
