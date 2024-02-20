"use client";
import "@/app/globals.css";
import React, { useState, useEffect } from "react";
import { HelloHero } from "./components/HelloHero";
import { CardList } from "./components/Card";
import { projects } from "./components/data";
import { motion } from "framer-motion";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <LandingPage />
    </>
  );
}

function LandingPage() {
  const [boxClass, setBoxClass] = useState("");
  const [toggleCard, setToggleCard] = useState(false);
  const [greeting, setGreeting] = useState(`Hello!`);

  const handleToggleCard = () => {
    setToggleCard(!toggleCard);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setBoxClass("animate-bounce");
    }, 7000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      {!toggleCard && (
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
      )}
      <HelloHero toggleCard={toggleCard} />
      {toggleCard && (
        <>
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
          <CardList projects={projects} />
        </>
      )}
    </>
  );
}
