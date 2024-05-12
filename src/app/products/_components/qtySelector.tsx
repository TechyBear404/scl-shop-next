"use client";
import { FaShoppingBasket } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function QtySelector() {
  const [qty, setQty] = useState(1);
  return (
    <section className="text-basis col-span-2 flex h-4 items-center justify-center">
      <IoIosArrowBack
        className=" h-full rounded-l-md bg-rose-800 text-sm text-white hover:cursor-pointer hover:saturate-150"
        title="Diminuer la quantité"
        onClick={() => setQty(qty - 1)}
      />
      <input
        name="productQty"
        type="number"
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
        className=" w-6 bg-rose-100 text-center text-xs [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        title="Quantité"
      />
      <IoIosArrowForward
        className="h-full rounded-r-md bg-rose-800 text-sm text-white hover:cursor-pointer hover:saturate-150"
        title="Augmenter la quantité"
        onClick={() => setQty(qty + 1)}
      />
    </section>
  );
}
