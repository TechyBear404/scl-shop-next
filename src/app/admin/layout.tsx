// "use client";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container m-auto">{children}</div>;
}
