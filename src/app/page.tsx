import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import ProductCard from "~/_components/productCard";

export const dynamic = "force-dynamic";
export default async function HomePage() {
  // const products = await db.query.products.findMany();

  return (
    <main className="m-auto mt-24 max-w-5xl">
      <section className="productsSection flex flex-wrap gap-10">
        {/* {products.map((product, index) => (
          <ProductCard product={product} key={product.id + "-" + index} />
        ))} */}
        Acceuil
      </section>
    </main>
  );
}
