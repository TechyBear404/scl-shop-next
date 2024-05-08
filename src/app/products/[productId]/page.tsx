import Image from "next/image";
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
    <main className="grow pt-6">
      <section className="flex">
        <figure>
          <Image src={product!.imgUrl} alt="alt" width={500} height={500} />
        </figure>
        <section className="p-6">
          <p className="text-xs font-semibold uppercase text-rose-900/60">
            {product!.category!.name}
          </p>
          <h1 className="text-3xl font-bold text-rose-900/90">
            {product!.name}
          </h1>
          <p className="text-rose-900/90">{product!.price}</p>
        </section>
      </section>
      <section>
        <p>{product!.catchPhrase}</p>
        <p>{product!.desc}</p>
        <p>{product!.tips}</p>
      </section>
    </main>
  );
}
