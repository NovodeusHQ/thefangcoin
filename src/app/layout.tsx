import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/layout/Footer";

import localFont from "@next/font/local";

const sharpGrotesk = localFont({ src: "../assets/fonts/Sharp_Grotesk/SharpGrotesk-Book25.otf" });

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FANG COIN",
  description: "THE WORLD IS YOURS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sharpGrotesk.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
