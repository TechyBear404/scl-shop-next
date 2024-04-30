// "use client";
import { auth, signIn } from "auth";
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  console.log(session);
  if (!session) {
    await signIn();
  }

  return <div className="container mx-auto">{children}</div>;
}
