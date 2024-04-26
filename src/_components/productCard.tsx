"use client";
import Image from "next/image";
import Link from "next/link";

import type { ProductType } from "~/server/db/schema";

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <div className="focus::drop-shadow-2xl flex w-full saturate-50 duration-500 ease-in-out hover:scale-105 hover:cursor-pointer hover:drop-shadow-2xl hover:saturate-100 hover:duration-300 md:w-60 md:flex-col lg:w-72 xl:w-96">
      <figure className="relative flex w-40 flex-col md:w-full">
        <Image
          src={product.imgUrl} // Access the 'data' property of 'product.imgUrl' and assert its type as string
          width={500}
          height={500}
          alt=""
          className="aspect-[4/3] h-full object-cover "
        />
        <Link
          href={{
            pathname: "",
            query: {
              modal: true,
              id: product.id,
              name: product.name,
              desc: product.desc,
              imgUrl: product.imgUrl,
            },
          }}
        >
          <button
            type="button"
            className="absolute top-1/2 place-self-center border bg-white bg-opacity-50 px-4 py-1"
          >
            En détail
          </button>
        </Link>
      </figure>
      <div className="flex-grow bg-white px-2 text-center">
        <h2 className="p-4 text-2xl opacity-90">{product.name}</h2>
        <p className="pb-2 opacity-60">{product.desc}</p>
      </div>
    </div>
  );
}
