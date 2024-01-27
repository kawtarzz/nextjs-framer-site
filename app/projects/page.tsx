import React from "react";
import { motion } from "framer-motion";

const project = {
  id: 1,
  title: "Project 1",
  description: "This is project 1",
  demo: "https://www.google.com",
  path: "https://www.google.com",
};

export default function ProjectPage() {
  return (
    <div key={project.id}>
      <h1>Project Page</h1>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.demo}>Demo</a>
    </div>
  );
}
