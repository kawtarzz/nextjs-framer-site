import "../globals.css";
import ProjectPage from "./page";
import Link from "next/link";

export default function WorkLayout() {
  return (
    <div className="work-layout text-bold 6xl">
      <Link href="/">
        <h5 className="text-3xl font-bold">Home</h5>
      </Link>

      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Projects
          </h1>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
            Card 01
            <ProjectPage />
            <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl"></h1>
          </div>
        </div>
      </section>
    </div>
  );
}
