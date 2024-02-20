"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "./data";
import { CardList } from "./Card";
import { HelloHero } from "./HelloHero";
import ProjectsPage from "../projects/page";

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
  return (
    <>
      {!toggleCard && (
        <>
          <div className="hello hello-container">
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
          <HelloHero />
        </>
      )}
      {toggleCard && (
        <div className="projects-page">
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
          <h1>Projects</h1>
          <p>Here are some of my projects</p>
          <ProjectsPage />
        </div>
      )}
    </>
  );
}