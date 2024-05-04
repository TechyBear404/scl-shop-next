// export const dynamic = "force-dynamic";
// import { getProducts } from "~/server/db/requests";
import ProductsListElem from "./listProductsElem";
import type { Doc, DocInsert } from "~/server/db/schema/dbTypes";

type ProductType = Doc<"products">;
// import { Suspense } from "react";

export default async function ProductsList({
  products,
}: {
  products: ProductType[];
}) {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  // const products = async () => {
  //   return await getProducts();
  //   // return setData("test");
  // };

  return (
    <div id="productsTable" className="mt-16 w-full ">
      <div className=" rounded-md  border border-rose-800">
        <div className="grid grid-cols-5 rounded-t-md bg-rose-950 p-2 font-semibold text-rose-50">
          <div>Nom</div>
          <div>Phrase d&apos;accroche</div>
          <div>Description</div>
          <div>Conseils</div>
          <div>Image</div>
        </div>

        <div className="">
          {products.map((product) => (
            <ProductsListElem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
