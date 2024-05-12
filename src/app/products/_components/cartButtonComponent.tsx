import { addToCart } from "~/server/db/requests";
import QtySelector from "./qtySelector";
import { FaShoppingBasket } from "react-icons/fa";
import { toast } from "react-toastify";

export default function CartButton({ productId }: { productId: number }) {
  const handleAddToCart = async (formData: FormData) => {
    try {
      await addToCart(formData);
      toast.success("Produit ajouté au panier");
    } catch (error) {
      toast.error("Erreur lors de l'ajout au panier");
    }
  };
  return (
    <div className="">
      <form action={handleAddToCart} className=" flex gap-2">
        <input
          type="hidden"
          id="productId"
          name="productId"
          value={productId}
        />
        <div className="flex flex-col items-center">
          <p className="text-xs font-semibold">Qté</p>
          <QtySelector />
        </div>
        <div className=" row-span-4 flex items-end ">
          <button className="w-6" type="submit" title="Ajouter au panier">
            <FaShoppingBasket className="h-full w-full hover:cursor-pointer hover:text-rose-800" />
          </button>
        </div>
      </form>
    </div>
  );
}
