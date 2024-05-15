import Image from "next/image";

export const dynamic = "force-dynamic";
export default function HomePage() {
  return (
    <>
      <section className="mt-12  h-screen ">
        <figure className="relative flex h-full items-center justify-center">
          <Image
            src="/images/femme_homme_bougie.jpg"
            width={2394}
            height={995}
            alt="hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute mb-20 flex flex-col justify-center gap-10 rounded-md bg-rose-950/20 p-4 backdrop-blur-sm">
            <h3 className="font-merienda text-5xl font-bold text-rose-50">
              Besoin de changé d air?
            </h3>
            <div className="mx-auto max-w-60 rounded-md border border-rose-50 bg-rose-800 p-2 text-center text-xl font-bold text-rose-50 drop-shadow-md transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer hover:drop-shadow-lg hover:saturate-150">
              Nos produits
            </div>
          </div>
        </figure>
        {/* <main className="m-auto max-w-5xl"></main> */}
      </section>
    </>
  );
}
