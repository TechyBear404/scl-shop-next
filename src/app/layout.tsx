import "~/styles/globals.css";
import TopNav from "~/_components/top-nav";
import SessionWrapper from "~/utils/contexts/SessionWrapper";

import { Inter, Merriweather } from "next/font/google";

export const metadata = {
  title: "Le Palais des Senteurs",
  description: "Magasin en ligne de bougies parfumées",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col `}>
        <SessionWrapper>
          <TopNav />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
