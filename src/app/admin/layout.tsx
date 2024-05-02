// "use client";
// "use server";
import { auth } from "auth";
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  // console.log("session", session);
  if (session!.user?.role !== "admin")
    return (
      <div className="container mx-auto mt-16 flex items-center justify-center">
        Tu n as pas le droit de venir ici!!!
      </div>
    );
  else return <div className="container mx-auto">{children}</div>;
}
