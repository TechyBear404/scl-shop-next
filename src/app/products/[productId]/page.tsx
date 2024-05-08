import Image from "next/image";
import Link from "next/link";
import { getProduct } from "~/server/db/requests";
import type { ProductType } from "~/server/db/requests";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const product: ProductType | undefined = await getProduct(
    Number(params.productId),
  );
  return (
    <main className=" mx-auto max-w-3xl  grow pt-10">
      <article className="grid grid-cols-2">
        <figure>
          <Image
            className="aspect-[3/4]"
            src={product?.imgUrl ? product.imgUrl : ""}
            alt={`Image du produit ${product!.name}`}
            width={500}
            height={500}
          />
        </figure>
        <section className="p-6">
          <Link
            href={`/products?category=${product!.category!.id}`}
            className="text-nowrap"
          >
            <p className="text-xs font-semibold uppercase text-rose-900/60">
              {product!.category!.name}
            </p>
          </Link>

          <h1 className="text-4xl font-bold text-rose-900/90">
            {product!.name}
          </h1>
          <p className="text-lg">{product!.catchPhrase}</p>
          <p className="py-4 text-3xl text-rose-900/90">{product!.price} €</p>
          <h2 className="pb-1 text-xl font-semibold text-rose-900/90">
            Description:
          </h2>
          <p className="pb-4">{product!.desc}</p>
          <h2 className="pb-1 text-xl font-semibold text-rose-900/90">
            Conseils d&apos;utilisation:
          </h2>
          <p>{product!.tips}</p>
        </section>
      </article>
    </main>
  );
}