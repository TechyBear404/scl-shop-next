// export const dynamic = "force-dynamic";
import { getProducts } from "~/server/db/requests";
export default async function ProductsList() {
  const products = await getProducts();
  return (
    <div id="productsTable" className="mt-16 w-full">
      <div className="border border-rose-800">
        <div className=" border-b-2 border-rose-950">
          <div className="grid grid-cols-5 bg-rose-950 p-2 font-semibold text-rose-50">
            <div>Nom</div>
            <div>Phrase d&apos;accroche</div>
            <div>Description</div>
            <div>Conseils</div>
            <div>Image</div>
          </div>
        </div>
        <div>
          {products.map((product) => (
            <div
              key={product.id}
              className="products-table grid grid-cols-5 odd:bg-white even:bg-rose-100 hover:cursor-pointer hover:border-white hover:bg-rose-400 hover:text-white"
            >
              <div className="" title={product.name}>
                {product.name}
              </div>
              <div title={product.catchPhrase}>{product.catchPhrase}</div>
              <div title={product.desc}>{product.desc}</div>
              <div title={product.tips}>{product.tips}</div>
              <div title={product.imgUrl}>{product.imgUrl}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
