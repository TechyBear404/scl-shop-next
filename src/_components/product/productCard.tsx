"use client";
import Image from "next/image";
import Link from "next/link";

import type { ProductType } from "~/server/db/requests";

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <div className="focus::drop-shadow-2xl group flex w-full saturate-50 duration-500 ease-in-out hover:scale-105 hover:cursor-pointer hover:drop-shadow-2xl hover:saturate-100 hover:duration-200 md:w-60 md:flex-col lg:w-72 xl:w-80">
      <figure className="relative flex w-40 grow-[1] basis-1/3 flex-col md:w-full">
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
              catchPhrase: product.catchPhrase,
              desc: product.desc,
              imgUrl: product.imgUrl,
            },
          }}
          className="invisible absolute top-1/2 place-self-center border bg-white bg-opacity-50 px-4 py-1 group-hover:visible"
        >
          <div className="">En détail</div>
        </Link>
      </figure>
      <div className="grow-[2] basis-2/3 bg-white px-2 text-center">
        <h2 className="p-4 text-2xl opacity-90">{product.name}</h2>
        <p className="pb-2 opacity-60">{product.catchPhrase}</p>
      </div>
    </div>
  );
}
