// import { useState } from "react";
import { getCart, type CartType } from "~/server/db/requests";
import Image from "next/image";

type DataType = {
  data: CartType;
  status: string;
};
export default async function CartPage() {
  const cart = await getCart();
  console.log(cart);

  //  const [ cart, setCart ] = useState<CartType>([]);
  const sum = cart?.cartToProducts.reduce((acc, val) => {
    return acc + val.product.price * val.qty;
  }, 0);

  return (
    <main className="min-h-screen pt-14">
      <section className="m-auto mt-10 max-w-5xl rounded-md bg-rose-200">
        <h1 className="p-2 text-3xl font-bold">Votre panier</h1>

        <section className="flex flex-col gap-2 p-2">
          {cart?.cartToProducts.map((product) => (
            <article
              key={product.productId}
              className="flex h-40 overflow-hidden rounded-md border border-gray-200 bg-rose-50 shadow-md"
            >
              {/* <h3>{product.productId}</h3> */}

              <Image
                src={product.product.imgUrl}
                alt="alt"
                width={200}
                height={200}
                className="object-cover"
              />
              <section className="flex flex-grow p-2">
                <div className="grow">
                  <p>{product.product.name}</p>
                  <p>Qté {product.qty}</p>
                </div>
                <div>{product.product.price} €</div>
              </section>
            </article>
          ))}
          <section className="my-6 flex flex-col items-end text-3xl">
            <div className="flex items-center gap-2">
              <div>Total: </div>
              <div>{sum} €</div>
            </div>
            <div className="text-xl">
              ({cart?.cartToProducts.length} articles )
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
