import Image from "next/image";

export const dynamic = "force-dynamic";
export default async function HomePage() {
  return (
    <>
      <section className="mt-16 flex flex-col">
        <figure>
          <Image
            src="/images/femme_homme_bougie.jpg"
            width={2394}
            height={995}
            alt="hero"
            className="w-full object-cover"
          />
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
