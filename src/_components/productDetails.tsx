"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function ProductDetails() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const name = searchParams.get("name");
  const desc = searchParams.get("desc");
  const imgUrl = searchParams.get("imgUrl");

  const pathname = usePathname();

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur">
          <div className="relative m-auto bg-white p-8">
            <Link href={pathname} className="absolute right-0 top-0">
              <div className=" aspect-square px-2 hover:bg-red-500 hover:text-white">
                X
              </div>
            </Link>
            <div className="w-full duration-500 ease-in-out hover:duration-300 md:w-60 lg:w-72 xl:w-96">
              <figure className="relative flex w-40 flex-col md:w-full">
                <Image
                  src={imgUrl ?? ""} // Access the 'data' property of 'product.imgUrl' and assert its type as string
                  width={500}
                  height={500}
                  alt=""
                  className="aspect-[4/3] h-full object-cover "
                />
              </figure>
              <div className="flex-grow bg-white px-2 text-center">
                <h2 className="p-4 text-2xl opacity-90">{name}</h2>
                <p className="pb-2 opacity-60">{desc}</p>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default ProductDetails;
