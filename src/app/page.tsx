import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const imgUrls = [
    "https://utfs.io/f/9d9c3310-6c5e-4736-9032-cab5e577912c-m5gqji.jpg",
    "https://utfs.io/f/aeecca4e-3721-48cf-bea1-f6e84910f340-8c4cm2.jpg",
    "https://utfs.io/f/e416d1bd-9374-4f4b-bb28-88ab46daf792-fxt81l.jpg",
  ];

  const images = imgUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image) => (
          <figure key={image.id} className=" w-48">
            <img
              src={image.url}
              alt=""
              className="aspect-[4/3] h-auto w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </main>
  );
}
