"use client";
import Image from "next/image";
import Link from "next/link";

import type { ProductType } from "~/server/db/requests";

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <div className="group grid grid-rows-[auto,1fr] saturate-50 duration-500 ease-in-out hover:scale-105 hover:cursor-pointer hover:drop-shadow-2xl hover:saturate-100 hover:duration-200 focus:drop-shadow-2xl ">
      <figure className="relative flex flex-col md:w-full">
        <Image
          src={product.imgUrl} // Access the 'data' property of 'product.imgUrl' and assert its type as string
          width={500}
          height={500}
          alt=""
          className="object-cover "
        />
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
          className="group-hover:duration-400 invisible absolute top-1/2 place-self-center border bg-white bg-opacity-50 px-4 py-1 opacity-0 duration-500 ease-in-out group-hover:visible group-hover:opacity-100"
        >
          <div className="">En détail</div>
        </Link>
      </figure>
      <div className="bg-white px-2 text-center">
        <h2 className="p-4 text-2xl opacity-90">{product.name}</h2>
        <p className="pb-2 opacity-60">{product.catchPhrase}</p>
      </div>
    </div>
  );
}
