// "use client";

import { SignIn } from "~/app/_components/auth/sign-in";
import SignOut from "~/app/_components/auth/sign-out";
import Link from "next/link";
import Avatar from "~/app/_components/avatar";

import NavLink from "./navLink";
import { auth, signOut } from "auth";
import CartWidget from "./cartWidget";
import Image from "next/image";

export const revalidate = 0;

export default async function TopNav() {
  const session = await auth();

  return (
    <nav className="fixed z-20 flex w-full items-center gap-10 border-b border-rose-800 bg-rose-800 px-10 font-bold text-rose-50 ">
      <Link href={"/"} className="font-merienda text-2xl font-bold">
        <figure>
          <Image
            src="/images/Olfactaire logo.svg"
            alt="alt"
            width={200}
            height={100}
          />
        </figure>
      </Link>
      <div className="flex-grow"></div>
      <NavLink link={{ href: "/", name: "Accueil" }} />
      <NavLink link={{ href: "/products", name: "Produits" }} />
      <NavLink link={{ href: "/contact", name: "Contact" }} />
      <NavLink link={{ href: "/team", name: "L'équipe" }} />
      {session?.user?.role === "admin" && (
        <NavLink link={{ href: "/admin", name: "Admin" }} />
      )}
      <div className="flex items-center gap-2">
        <Link href={"/account/cart"} className="relative px-2 text-2xl">
          <CartWidget />
        </Link>
        {session ? (
          <>
            <SignOut
              signOut={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            />
            <Avatar session={session} />
          </>
        ) : (
          <>
            <SignIn />
            <Avatar session={session!} />
          </>
        )}
      </div>
    </nav>
  );
}
