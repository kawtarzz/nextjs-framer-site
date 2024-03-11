"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectsPage from "../projects/page";
import { JobTitle } from "./JobTitle";

export default function LandingPage({
  toggleCard,
  handleToggleCard,
  boxClass,
}: {
  toggleCard: boolean;
  handleToggleCard: () => void;
  boxClass: string;
}) {
  const greeting = "Hello!";
  const projectsHeading = "Projects";
  return (
    <>
      {!toggleCard && (
        <>
          <div className="landing-page">
            <div className="hello-text-container">
              <motion.div
                onClick={handleToggleCard}
                className={"box" + " " + boxClass}
                initial={{ opacity: 0, scale: 1.8 }}
                animate={{ opacity: 1, scale: 1, x: [0, 80, 0] }}
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.2 }}
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
              />
              <div className="hello-text">
                {greeting.split("").map((char, index) => (
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
              <JobTitle />
            </div>
          </div>
        </>
      )}

      {toggleCard && (
        <>
          <div className="hello-text-container">
            <div className="hello-text projects-page">
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
              <ProjectsPage />
            </div>
          </div>
        </>
      )}
    </>
  );
}
