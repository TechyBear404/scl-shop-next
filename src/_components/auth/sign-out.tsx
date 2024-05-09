"use client";
// import { signOut } from "next-auth/react";

export default function SignOut({ signOut }: { signOut: () => void }) {
  return <button onClick={() => signOut()}>Déconnexion</button>;
}
