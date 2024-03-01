"use client";
import "@/app/globals.css";
import React, { useEffect } from "react";
import { CardList } from "../components/Card";
import { projects } from "../components/data";
import { motion } from "framer-motion";

const ProjectsPage = ({
  handleToggleCard,
}: {
  handleToggleCard: () => void;
}) => {
  const projectsHeading = "Projects";

  return (
    <div className="projects-page">
      <div className="hello-text-container">
        <motion.div
          onClick={handleToggleCard}
          className={"box small-box"}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 0.5, x: [0, 80, 0] }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: [0.2, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        />
        <div className="hello-text">
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
        </div>
        <CardList projects={projects} />
      </div>
    </div>
  );
};
export default ProjectsPage;
