import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterComponent from "./components/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taleen Portfolio",
  description: "Taleen Portfolio Created by NextJS",
  icons: {
    icon: "./favicon.ico", // Ensure the path is correct
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/public/favicon.ico" sizes="any" />
        <Navbar />
        <div className="mt-[80px]">{children}</div>

        <FooterComponent />
      </body>
    </html>
  );
}
