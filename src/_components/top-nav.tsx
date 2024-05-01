"use client";
import { auth, signIn, signOut } from "auth";
import { SignIn } from "~/_components/auth/sign-in";
import { SignOut } from "~/_components/auth/sign-out";
import Image from "next/image";
import Link from "next/link";
// import { useEffect } from "react";
// import { SessionContext } from "~/utils/contexts";
import { useSession } from "next-auth/react";

export default function TopNav() {
  const { data: session } = useSession();
  // console.log(session);

  return (
    <nav className=" fixed z-20 flex w-full items-center gap-10 border-b border-rose-800 bg-rose-200 bg-opacity-50 p-4 text-rose-800 backdrop-blur-sm">
      <div className="text-2xl font-bold">Candle</div>
      <div className="flex-grow"></div>
      <div>
        <Link href="/">Acceuil</Link>
      </div>
      <div>
        <Link href="/products">Produits</Link>
      </div>
      {session ? (
        <div className="flex items-center">
          <SignOut />
          <figure>
            <Image
              src={session.user!.image!}
              alt={session.user!.name!}
              title={session.user!.name!}
              width={40}
              height={40}
              className="rounded-full"
            />
          </figure>
        </div>
      ) : (
        <SignIn />
      )}
    </nav>
  );
}
