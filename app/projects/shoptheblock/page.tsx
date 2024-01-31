import React from "react";
import { projects } from "@/app/components/data";
import "@/app/globals.css";

export default function ShopTheBlock() {
  const project = projects[1];

  return (
    <>
      <a
        className="text-sky-500 hover:text-sky-600 underline pt-8 text-base font-semibold leading-7"
        href="/"
      >
        Back to Portfolio
      </a>
      <div className="container flex justify-center items-center w-full h-auto">
        <div className="projects" key={project.id}>
          <img
            src={project.image}
            alt=""
            className="mx-auto mb-4 rounded-lg"
            style={{ maxWidth: "80%", maxHeight: "400px" }}
          />
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <h2 className="text-xl text-gray-600 mb-4">{project.subtitle}</h2>
          <p className="mb-4">{project.description}</p>
          <hr />
          <h2>Problem:</h2>
          <p>{project.problem}</p>
          <h2>Solution:</h2>
          <p className="solution">{project.solution}</p>
          <h2 className="tech-stack flex items-center space-x-2 ml-4">
            Tech Stack:
          </h2>
          <h3>{project.subtitle}</h3>
          <hr></hr>
          <div className="inline-flex items-center w-full h-auto space-evenly link pt-8 text-base font-semibold leading-7">
            <a className="text-sky-500 hover:text-sky-600" href="/">
              Back to Portfolio
            </a>
            <a
              href={project.repolink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 ml-4"
            >
              View Code on Github
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              View Live Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
