import "~/styles/globals.css";
import TopNav from "~/app/_components/top-nav";
import SessionWrapper from "~/utils/contexts/SessionWrapper";
import { DataProvider } from "~/utils/contexts/dataContext";
import Footer from "~/app/_components/footer";
import Notifications from "./_components/notifications";

// import { Inter, Merriweather } from "next/font/google";

// export const metadata = {
//   title: "Olfactaire",
//   description: "Magasin en ligne de produits parfumées",
//   icons: [{ rel: "icon", url: "/favicon.ico" }],
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`flex flex-col `}>
        <Notifications />
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
