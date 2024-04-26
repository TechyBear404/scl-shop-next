import { db } from "~/server/db";
import ProductCard from "~/_components/productCard";
import ProductDetails from "~/_components/productDetails";

export const dynamic = "force-dynamic";
export default async function HomePage() {
  const products = await db.query.products.findMany();

  return (
    <main className=" m-auto mt-16 md:ml-60">
      <ProductDetails />
      <section className="m-10 flex flex-wrap gap-10">
        {products.map((product, index) => (
          <ProductCard product={product} key={product.id + "-" + index} />
        ))}
      </section>
    </main>
  );
}
