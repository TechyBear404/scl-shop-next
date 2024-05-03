"use client";
// "use server";
import { auth } from "auth";
import { useSession } from "next-auth/react";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();

  if (!session || session.user!.role !== "admin") {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center text-4xl">
        <div>Y à rien a voir, circulez!!!</div>
      </div>
    );
  } else return <div className="container mx-auto">{children}</div>;
}
