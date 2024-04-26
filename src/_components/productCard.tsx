import Image from "next/image";

import type { products } from "../server/db/schema";

type Product = typeof products.$inferSelect;
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="cardContainer flex min-w-60 max-w-72 flex-shrink  flex-grow basis-1/5 flex-col saturate-50 duration-500 ease-in-out hover:z-20 hover:scale-105 hover:cursor-pointer hover:drop-shadow-2xl hover:saturate-100 hover:duration-300">
      <figure className="relative flex flex-col ">
        <Image
          src={product.imgUrl} // Access the 'data' property of 'product.imgUrl' and assert its type as string
          width={500}
          height={500}
          alt=""
          className="aspect-[4/3] h-auto w-full object-cover"
        />
        <div className="absolute top-1/2 place-self-center border bg-white bg-opacity-50 px-4 py-1">
          En détail
        </div>
      </figure>
      <div className="bg-white px-2 text-center">
        <h2 className="p-4 text-2xl opacity-90">{product.name}</h2>
        <p className="pb-2 opacity-60">{product.desc}</p>
      </div>
    </div>
  );
}
