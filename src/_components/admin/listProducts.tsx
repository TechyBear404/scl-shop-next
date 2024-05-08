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
// import { Suspense } from "react";
import { useDataContext } from "~/utils/contexts/dataContext";
// import type { DataContextType } from "~/utils/contexts/dataContext";
export default function ProductsList() {
  // const { state, dispatch } = useContext<DataContextType>(DataContext);
  const { state, dispatch } = useDataContext();

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const cachedProducts = localStorage.getItem("products");
  //     if (cachedProducts) {
  //       dispatch({
  //         type: "SET_PRODUCTS",
  //         payload: JSON.parse(cachedProducts) as ProductsType,
  //       });
  //     }
  //     const cachedCategories = localStorage.getItem("categories");
  //     if (cachedCategories) {
  //       dispatch({
  //         type: "SET_CATEGORIES",
  //         payload: JSON.parse(cachedCategories) as CategoriesType,
  //       });
  //     }

  //     const products = await getProducts();
  //     dispatch({
  //       type: "SET_PRODUCTS",
  //       payload: products,
  //     });
  //     localStorage.setItem("products", JSON.stringify(products));

  //     const categories = await getCategories();
  //     dispatch({
  //       type: "SET_CATEGORIES",
  //       payload: categories,
  //     });
  //     localStorage.setItem("categories", JSON.stringify(categories));
  //     // revalidatePath("/admin");
  //   };
  //   void fetchProducts();
  // }, [dispatch]);

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
