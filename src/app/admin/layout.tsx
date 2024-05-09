import { auth } from "auth";
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session || session.user!.role !== "admin") {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center text-4xl">
        <div>Y à rien a voir, circulez!!!</div>
      </div>
    );
  } else return <div className="mx-auto max-w-[1280px]">{children}</div>;
}
