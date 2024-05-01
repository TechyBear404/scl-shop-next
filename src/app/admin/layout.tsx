// "use client";
// "use server";
import { auth, signIn, signOut } from "auth";
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await auth();
  // console.log(session);
  // await signOut();
  // if (!session) {
  // }

  return <div className="container mx-auto">{children}</div>;
}
