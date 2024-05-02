"use client";

import { SignIn } from "~/_components/auth/sign-in";
import { SignOut } from "~/_components/auth/sign-out";
import Image from "next/image";
import Link from "next/link";
import Avatar from "~/_components/avatar";

import { useSession } from "next-auth/react";

export default function TopNav() {
  const { data: session } = useSession();
  // console.log("session", session);

  return (
    <nav className=" fixed z-20 flex w-full items-center gap-10 border-b border-rose-800 bg-rose-200 bg-opacity-50 px-10 py-4 font-bold text-rose-800 backdrop-blur-sm">
      <div className="text-2xl font-bold">Candle</div>
      <div className="flex-grow"></div>
      <div>
        <Link href="/">Acceuil</Link>
      </div>
      <div>
        <Link href="/products">Produits</Link>
      </div>
      {session?.user?.role === "admin" && (
        <div>
          <Link href="/admin">Admin</Link>
        </div>
      )}
      <div className="flex items-center gap-2">
        {session ? (
          <>
            <SignOut />
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
