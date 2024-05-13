// "use client";

import { FaShoppingBasket } from "react-icons/fa";
import { getCart } from "~/actions/getCart";

export default async function CartWidget() {
  const cart = await getCart();

  const getAmount = () => {
    if (!cart) return 0;
    return cart?.cartToProducts.reduce((qty, val) => {
      return qty + val.qty;
    }, 0);
  };

  return (
    <div className="flex gap-2">
      <FaShoppingBasket className="text-2xl transition duration-200 ease-in-out hover:-translate-y-1 " />
      <div className="inline-flex items-center rounded-full border-2 border-rose-50 bg-green-500 px-1.5  text-xs font-bold leading-3 text-rose-50">
        {getAmount()}
      </div>
    </div>
  );
}
