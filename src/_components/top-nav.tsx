"use client";

import { SignIn } from "~/_components/auth/sign-in";
import { SignOut } from "~/_components/auth/sign-out";
import Image from "next/image";
import Link from "next/link";
import Avatar from "~/_components/avatar";

import { useSession } from "next-auth/react";

export default function TopNav() {
  const { data: session } = useSession();

  return (
    <nav className=" fixed z-20 flex w-full items-center gap-10 border-b border-rose-800 bg-rose-200 bg-opacity-50 p-4 font-bold text-rose-800 backdrop-blur-sm">
      <div className="text-2xl font-bold">Candle</div>
      <div className="flex-grow"></div>
      <div>
        <Link href="/">Acceuil</Link>
      </div>
      <div>
        <Link href="/products">Produits</Link>
      </div>
      {session ? (
        <div className="flex items-center gap-2">
          <SignOut />
          <Avatar session={session} />
        </div>
      ) : (
        <div className="flex items-center">
          <SignIn />
          <Avatar session={null} />
        </div>
      )}
    </nav>
  );
}
