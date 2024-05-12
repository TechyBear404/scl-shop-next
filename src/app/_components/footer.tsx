import Link from "next/link";
import {
  FaHouseFlag,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaXTwitter,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="z-20 bg-rose-800 p-6 text-rose-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6">
        <section className="flex items-center justify-center gap-6 text-4xl">
          <Link href="">
            <FaLinkedin />
          </Link>
          <Link href="">
            <FaXTwitter />
          </Link>
          <Link href="">
            <FaFacebook />
          </Link>
          <Link href="">
            <FaInstagram />
          </Link>
        </section>

        <section className="flex w-full flex-wrap justify-around">
          <div className="flex flex-col">
            <h2 className="underline">À propos de nous</h2>
            <Link className="hover:underline" href={""}>
              Notre histoire
            </Link>
            <Link className="hover:underline" href={""}>
              Nos valeurs
            </Link>
            <Link className="hover:underline" href={"/team"}>
              Notre équipes
            </Link>
          </div>
          <div className="flex flex-col">
            <h2 className="underline">Service client</h2>
            <Link className="hover:underline" href={"/contact"}>
              Contact
            </Link>
            <Link className="hover:underline" href={""}>
              Livraison
            </Link>
            <Link className="hover:underline" href={""}>
              Retour
            </Link>
          </div>
          <div className="flex flex-col">
            <h2 className="underline">Informations légales</h2>
            <Link className="hover:underline" href={""}>
              Conditions générales de vente
            </Link>
            <Link className="hover:underline" href={""}>
              Politique de confidentialité
            </Link>
            <Link className="hover:underline" href={""}>
              Cookies
            </Link>
          </div>
          <div className="flex flex-col">
            <h2 className="underline">Contacts</h2>
            <p className="flex items-center gap-2">
              <FaHouseFlag /> 1 rue de la Paix, 1410 Waterloo
            </p>
            <p className="flex items-center gap-2">
              <FaPhone /> +32 354 45 67
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope />
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <h1>Candle</h1>
          <p>Copyright © 2024 Candle.</p>
        </section>
      </div>
    </footer>
  );
}
