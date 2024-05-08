import "~/styles/globals.css";
import TopNav from "~/_components/top-nav";
import SessionWrapper from "~/utils/contexts/SessionWrapper";
import { DataProvider } from "~/utils/contexts/dataContext";
import Footer from "~/_components/footer";

// import { Inter, Merriweather } from "next/font/google";

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
    <html lang="fr">
      <body className={`flex flex-col `}>
        <SessionWrapper>
          <DataProvider>
            <TopNav />
            {children}
            <Footer />
          </DataProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
