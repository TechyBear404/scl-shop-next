import ProductDetails from "~/_components/productDetails";

function ProductNav() {
  return (
    <nav className="fixed mt-16 hidden h-screen w-60 bg-white md:block">
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
    <div className="flex">
      <ProductNav />
      {children}
      <ProductDetails />
    </div>
  );
}
