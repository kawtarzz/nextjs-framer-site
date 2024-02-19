"use client";
import "@/app/globals.css";
import React, { useState, useEffect } from "react";
import { HelloHero } from "./components/HelloHero";
import { motion } from "framer-motion";
import { CardList } from "./components/Card";
import { projects } from "./components/data";

export default function Home() {
  return <LandingPage />;
}

function LandingPage() {
  const greeting = "Hello";

  const [toggleCard, setToggleCard] = useState(false);

  const handleToggleCard = () => {
    setToggleCard(!toggleCard);
  };

  return (
    <>
      <div className="hello app">
        <motion.div
          className="box"
          onClick={handleToggleCard}
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
              ease: [0, 0.71, 0.2, 1.01],
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
      {toggleCard && <CardList projects={projects} />}
    </>
  );
}
