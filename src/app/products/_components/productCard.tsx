"use client";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingBasket } from "react-icons/fa";

import type { ProductType } from "~/server/db/requests";

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <Link href={`/products/${product.id}`} className="">
      <div className="group flex h-80 w-64 flex-col overflow-hidden rounded-md shadow-md transition duration-500 ease-in-out hover:scale-105 hover:cursor-pointer hover:shadow-2xl hover:duration-300 focus:shadow-2xl">
        <figure className="relative flex w-full items-center justify-center ">
          <Image
            src={product.imgUrl} // Access the 'data' property of 'product.imgUrl' and assert its type as string
            width={500}
            height={500}
            alt=""
            className="aspect-[4/3] h-full object-cover saturate-50 transition duration-300 ease-in-out group-hover:saturate-100 group-hover:duration-500"
          />
          <div className="group-hover:duration-400 invisible absolute border bg-white bg-opacity-50 px-4 py-1 opacity-0 duration-500 ease-in-out group-hover:visible group-hover:opacity-100">
            <div className="">En détail</div>
          </div>
        </figure>
        <div className="flex grow flex-col bg-white p-4  text-xl">
          <div className="grow">
            <p className="text-xs font-semibold uppercase text-rose-900/60">
              {product.category?.name}
            </p>
            <h2 className=" truncate font-bold text-rose-900/90">
              {product.name}
            </h2>
          </div>
          <div className="flex  items-center justify-between ">
            <p className="text-rose-900/90">{product.price} €</p>
            <div className="flex items-center">
              <span>+</span>
              <FaShoppingBasket className="" />
            </div>
            {/* <button
              type="button"
              className="flex items-center justify-center rounded-full bg-rose-800  text-rose-50"
            >
              Ajouter au panier
            </button> */}
          </div>
        </div>
      </div>
    </Link>
  );
}