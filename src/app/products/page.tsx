import { getProducts } from "~/server/db/requests";
import ProductCard from "~/_components/product/productCard";
import ProductDetails from "~/_components/product/productDetails";

export const dynamic = "force-dynamic";
export default async function HomePage() {
  const products = await getProducts();
  // const date = new Date(Date.now());
  // console.log("new products " + date.toISOString());
  // console.log(products);
  return (
    <main className=" m-auto mt-16 md:ml-60">
      <ProductDetails />
      <section className="m-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </main>
  );
}
