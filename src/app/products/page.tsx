import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import ProductCard from "~/_components/productCard";

export const dynamic = "force-dynamic";
export default async function HomePage() {
  const products = await db.query.products.findMany();

  return (
    <main className=" m-auto ml-60 mt-16">
      <section className="productsSection flex flex-wrap  items-start justify-start gap-10 p-10">
        {products.map((product, index) => (
          <ProductCard product={product} key={product.id + "-" + index} />
        ))}
      </section>
    </main>
  );
}
