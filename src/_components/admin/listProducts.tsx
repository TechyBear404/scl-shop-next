"use client";
export const dynamic = "force-dynamic";
import type { ProductType } from "~/server/db/requests";
import ProductsListElem from "./listProductsElem";

export default function ProductsList({
  products,
}: {
  products: ProductType[] | undefined;
}) {
  // const { state } = useDataContext();

  return (
    <div id="productsTable" className="w-full ">
      <div className=" rounded-md  border border-rose-800">
        <div className="grid grid-cols-5 rounded-t-md bg-rose-950 p-2 font-semibold text-rose-50">
          <div>Nom</div>
          <div>Phrase d&apos;accroche</div>
          <div>Description</div>
          <div>Conseils</div>
          <div>Image</div>
        </div>

        <div className="">
          {products
            ? products.map((product: ProductType) => (
                <ProductsListElem key={product.id} product={product} />
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
}
