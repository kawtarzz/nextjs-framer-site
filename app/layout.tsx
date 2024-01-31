import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Menu from "./components/Menu";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kawtar Azzouzi",
  description: "Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Menu />
      </body>
    </html>
  );
}