import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Le Palais des Senteurs",
  description: "Magasin en ligne de bougies parfumées",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="fixed flex w-full gap-10 border-b bg-rose-200 bg-opacity-50 p-4 text-white">
      <div className="text-2xl font-bold">Candle</div>
      <div className="flex-grow"></div>
      <div>
        <a href="/">Acceuil</a>
      </div>
      <div>
        <a href="/products">Produits</a>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
