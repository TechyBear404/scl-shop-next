"use client";
export const dynamic = "force-dynamic";
import type {
  ProductsType,
  ProductType,
  CategoriesType,
} from "~/server/db/requests";
import ProductsListElem from "./listProductsElem";
import { useEffect } from "react";
import { getProducts, getCategories } from "~/server/db/requests";
import { revalidatePath } from "next/cache";

import { useDataContext } from "~/utils/contexts/dataContext";
export default function ProductsList() {
  const { state, dispatch } = useDataContext();

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
          {state.products
            ? state.products.map((product: ProductType) => (
                <ProductsListElem key={product.id} product={product} />
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
}
