import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL("https://ericlopez.vercel.app/"),
  title: "Eric Lopez",
  description: "Developer Portfolio By Eric Lopez",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "Eric Lopez"],
  openGraph: {
    title: "Eric Lopez",
    description: "Software Engineer",
    images: "/upwork.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
