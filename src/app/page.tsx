import Image from "next/image";

export const dynamic = "force-dynamic";
export default async function HomePage() {
  return (
    <>
      <section className="flex flex-col">
        <figure>
          <Image
            src="/images/femme_homme_bougie.jpg"
            width={2394}
            height={995}
            alt="hero"
            className="w-full object-cover"
          />
          <div>
            <h3>Besoin de détentes?</h3>
            <h1></h1>
          </div>
        </figure>
        <main className="m-auto max-w-5xl">
          <section className="productsSection flex flex-wrap gap-10">
            Acceuil
          </section>
        </main>
      </section>
    </>
  );
}
