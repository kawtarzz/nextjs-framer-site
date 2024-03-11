"use client";
import "@/app/globals.css";
import React from "react";
import { CardList } from "../components/Card";
import { projects } from "../components/data";
import { motion } from "framer-motion";

const ProjectsPage: React.FC = () => {
  const projectsHeading = "Projects";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.8 }}
        animate={{ opacity: 1, scale: 1, x: [0, 80, 0] }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.21, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      />{" "}
      {projectsHeading.split("").map((char, index) => (
        <motion.span
          key={char + "-" + index}
          className={"hello-text " + char + "-" + index}
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1, x: [null, 40, 10] }}
          transition={{
            duration: 0.5,
            delay: 0.7 + index / 10,
            ease: [0.2, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          {char}
        </motion.span>
      ))}{" "}
      <CardList projects={projects} />;
    </>
  );
};

export default ProjectsPage;
