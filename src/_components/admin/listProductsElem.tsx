// "use client";
import Link from "next/link";
import type { Doc } from "~/server/db/schema/dbTypes";

type ProductType = Doc<"products">;
export default function ProductsListElem({
  product,
}: {
  product: ProductType;
}) {
  return (
    <Link
      // href={`?selected=${product.id}`}
      href={`?${new URLSearchParams({ selected: product.id.toString() }).toString()}`}
      key={product.id}
      className="products-table grid grid-cols-5 last:rounded-b-md odd:bg-white even:bg-rose-100 hover:cursor-pointer hover:border-white hover:bg-rose-800 hover:text-white"
    >
      <div className="" title={product.name}>
        {product.name}
      </div>
      <div title={product.catchPhrase}>{product.catchPhrase}</div>
      <div title={product.desc}>{product.desc}</div>
      <div title={product.tips}>{product.tips}</div>
      <div title={product.imgUrl}>{product.imgUrl}</div>
    </Link>
  );
}
