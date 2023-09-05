import "@/styles/globals.css";
import Nav from "@/components/Nav";
import { Inter } from "next/font/google";
import SupabaseProvider from "@/providers/SupaBaseProviders";
import UserProvider from "@/providers/UserProviders";
import ModalProvider from "@/providers/ModalProvider";

// font setup
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Dall-Eth",
  description: "Ai pics generator",
};

const Rootlayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={inter.className}>
    <body>
      <SupabaseProvider>
        <UserProvider>
          <ModalProvider />
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </UserProvider>
      </SupabaseProvider>
    </body>
  </html>
);

export default Rootlayout;
