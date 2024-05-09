import { getProducts } from "~/server/db/requests";
import ProductCard from "~/_components/product/productCard";
import ProductDetails from "~/_components/product/productDetails";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export default async function HomePage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  let products;
  if (searchParams?.category) {
    products = await getProducts(Number(searchParams.category));
  } else {
    products = await getProducts();
  }

  return (
    <main className="p-6 md:ml-60">
      <Suspense fallback="Loading...">
        <section className="flex flex-wrap  justify-center gap-6">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </section>
      </Suspense>
    </main>
  );
}
