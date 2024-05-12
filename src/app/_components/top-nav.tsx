// "use client";

import { SignIn } from "~/app/_components/auth/sign-in";
import SignOut from "~/app/_components/auth/sign-out";
import Link from "next/link";
import Avatar from "~/app/_components/avatar";

import NavLink from "./navLink";
import { auth, signOut } from "auth";
import { FaShoppingBasket } from "react-icons/fa";

export default async function TopNav() {
  const session = await auth();

  return (
    <nav className="fixed z-20 flex w-full items-center gap-10 border-b border-rose-800 bg-rose-800 px-10 py-2 font-bold text-rose-50 ">
      <Link href={"/"} className="font-merienda text-2xl font-bold">
        Olfactaire
      </Link>
      <div className="flex-grow"></div>
      <NavLink link={{ href: "/", name: "Acceuil" }} />
      <NavLink link={{ href: "/products", name: "Produits" }} />
      <NavLink link={{ href: "/contact", name: "Contact" }} />
      <NavLink link={{ href: "/team", name: "L'équipe" }} />
      {session?.user?.role === "admin" && (
        <NavLink link={{ href: "/admin", name: "Admin" }} />
      )}
      <div className="flex items-center gap-2">
        <Link href={"/account/cart"} className="relative px-2 text-2xl">
          <div className="flex gap-2">
            <div className="inline-flex items-center rounded-full border-2 border-rose-50 bg-green-500 px-1.5 py-0.5 text-xs font-bold leading-4 text-rose-50">
              6
            </div>
            <FaShoppingBasket className="text-2xl" />
          </div>
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
