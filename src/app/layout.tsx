import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import bg from "../../public/home-images/home-bg1.png"
import Image from "next/image";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'inter.className w-screen overflow-x-hidden flex flex-col items-center justify-center bg-black text-white'}>
        <Image 
          src={bg}
          alt="Background Image"
          className="w-full h-full opacity-60 absolute top-0 left-0"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
