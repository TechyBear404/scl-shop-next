"use client";
import Image from "next/image";
import Link from "next/link";

import type { ProductType } from "~/server/db/requests";

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <Link
      href={{
        pathname: "",
        query: {
          modal: true,
          id: product.id,
          name: product.name,
          catchPhrase: product.catchPhrase,
          desc: product.desc,
          imgUrl: product.imgUrl,
        },
      }}
      className=""
    >
      <div className="group grid h-full grid-cols-[1fr,2fr] transition duration-500 ease-in-out hover:scale-105  hover:cursor-pointer hover:drop-shadow-2xl hover:duration-300 focus:drop-shadow-2xl md:grid-rows-[auto,1fr] lg:w-80 lg:grid-cols-none">
        <figure className=" relative w-full">
          <Image
            src={product.imgUrl} // Access the 'data' property of 'product.imgUrl' and assert its type as string
            width={500}
            height={500}
            alt=""
            className="aspect-[3/4] h-full object-cover saturate-50 transition duration-300 ease-in-out group-hover:saturate-100 group-hover:duration-500 lg:aspect-[4/3]"
          />
          <div className="group-hover:duration-400 invisible absolute top-1/2 place-self-center border bg-white bg-opacity-50 px-4 py-1 opacity-0 duration-500 ease-in-out group-hover:visible group-hover:opacity-100">
            <div className="">En détail</div>
          </div>
        </figure>
        <div className="grid grid-rows-2 bg-white px-4 py-8 text-center">
          <div>
            <h2 className="text-3xl font-bold text-rose-900 text-opacity-90">
              {product.name}
            </h2>
            <div className="mb-8 font-bold  uppercase text-rose-500 text-opacity-90">
              {product.catchPhrase}
            </div>
          </div>
          <div className="grow">{product.desc}</div>
        </div>
      </div>
    </Link>
  );
}
