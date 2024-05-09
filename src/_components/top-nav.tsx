// "use client";

import { SignIn } from "~/_components/auth/sign-in";
import SignOut from "~/_components/auth/sign-out";
import Link from "next/link";
import Avatar from "~/_components/avatar";

import NavLink from "./navLink";
import { auth, signOut } from "auth";

export default async function TopNav() {
  const session = await auth();

  return (
    <nav className="fixed z-20 flex w-full items-center gap-10 border-b border-rose-800 bg-rose-200 bg-opacity-50 px-10 py-2 font-bold text-rose-800 backdrop-blur-sm ">
      <Link href={"/"} className="text-2xl font-bold">
        Candle
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
