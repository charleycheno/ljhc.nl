import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LJHC.nl",
  description: "LJHC.nl is my personal portfolio website that showcases my skills and projects as a web developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="transition-colors duration-300">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
