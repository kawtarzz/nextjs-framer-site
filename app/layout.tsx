import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Menu from "@/app/components/Menu";

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
        <section className="section">
          <div className="container">
            <Menu />
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
