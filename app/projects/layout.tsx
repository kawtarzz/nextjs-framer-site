import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProjectsPage from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kawtar Azzouzi",
  description: "Web Developer",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="hello-text-container projects-page">
        <ProjectsPage />
      </div>
    </>
  );
}
