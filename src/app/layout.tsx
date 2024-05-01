import "~/styles/globals.css";

import { Inter, Merriweather } from "next/font/google";
import { auth, signIn, signOut } from "auth";
import { SignIn } from "~/_components/auth/sign-in";
import { SignOut } from "~/_components/auth/sign-out";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Le Palais des Senteurs",
  description: "Magasin en ligne de bougies parfumées",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

async function TopNav() {
  const session = await auth();
  console.log(session);
  const name = session!.user!.name!;
  const avatarUrl = session!.user!.image!;

  return (
    <nav className=" fixed z-20 flex w-full items-center gap-10 border-b border-rose-800 bg-rose-200 bg-opacity-50 p-4 text-rose-800 backdrop-blur-sm">
      <div className="text-2xl font-bold">Candle</div>
      <div className="flex-grow"></div>
      <div>
        <a href="/">Acceuil</a>
      </div>
      <div>
        <a href="/products">Produits</a>
      </div>
      {session ? (
        <div className="flex items-center">
          <SignOut />
          <figure>
            <Image
              src={avatarUrl}
              alt={name}
              title={name}
              width={40}
              height={40}
              className="rounded-full"
            />
          </figure>
        </div>
      ) : (
        <SignIn />
      )}
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
      <body
        className={` flex min-h-screen flex-col overflow-hidden overflow-y-auto `}
      >
        <TopNav />
        {children}
      </body>
    </html>
  );
}
