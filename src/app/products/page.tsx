import { getProducts } from "~/server/db/requests";
import ProductCard from "~/_components/product/productCard";
import ProductDetails from "~/_components/product/productDetails";

export const dynamic = "force-dynamic";
export default async function HomePage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  let products;
  if (searchParams?.category) {
    products = await getProducts(Number(searchParams.category));
    console.log(searchParams.category);
  } else {
    products = await getProducts();
  }
  // const date = new Date(Date.now());
  // console.log("new products " + date.toISOString());
  // console.log(products);
  return (
    <main className="">
      <ProductDetails />
      <section className="mt-6 grid grid-cols-1 justify-center justify-items-center gap-6 scroll-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </main>
  );
}
