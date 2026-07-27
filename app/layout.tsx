import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verlilian Investment CC — AI for African Agriculture & Logistics",
  description: HERO.description,
};

import { HERO } from "@/lib/constants";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
