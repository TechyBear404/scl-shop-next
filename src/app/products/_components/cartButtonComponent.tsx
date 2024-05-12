"use client";

import { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { addToCart } from "~/server/db/requests";

export default function CartButton({ productId }: { productId: number }) {
  const [qty, setQty] = useState(1);
  // const handleCartClick = () => {
  //   fetch("/api/cart", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ productId: productId, productQty: qty }),
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         console.log(res);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };
  return (
    <div className="flex justify-between">
      <form action={addToCart} className="flex items-center justify-center">
        <input
          type="hidden"
          id="productId"
          name="productId"
          value={productId}
        />
        <IoIosArrowBack onClick={() => setQty(qty - 1)} />
        <input
          name="productQty"
          type="number"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className="w-10 "
          title="Quantité"
        />
        <div>
          <IoIosArrowForward onClick={() => setQty(qty + 1)} />
        </div>
        <button type="submit" title="Ajouter au panier">
          <FaShoppingBasket className="hover:cursor-pointer hover:text-rose-800" />
        </button>
      </form>
    </div>
  );
}
