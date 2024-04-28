import Image from "next/image";

export const dynamic = "force-dynamic";
export default async function HomePage() {
  return (
    <>
      <section className=" mt-16 ">
        <section
          className="h-[400px] w-full bg-cover bg-left-top bg-no-repeat"
          id="homeHeader"
        >
          <p>test</p>
        </section>
        <main className="m-auto max-w-5xl">
          <section className="productsSection flex flex-wrap gap-10">
            Acceuil
          </section>
        </main>
      </section>
    </>
  );
}
