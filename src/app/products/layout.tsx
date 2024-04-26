function ProductNav() {
  return (
    <nav className="fixed mt-16 h-screen w-60 bg-white">
      <div className="text-2xl font-bold">Candle</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid ">
      <ProductNav />
      {children}
    </div>
  );
}
