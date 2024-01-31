"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";
import { JobTitle } from "@/app/components/JobTitle";
import { CardList } from "./components/Card";

export default function Home() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="container">
        <Hello />
      </div>
    </section>
  );
}

function Hello() {
  const greeting = "Hello";
  const [toggleCard, setToggleCard] = useState(false);

  const handleToggleCard = () => {
    setToggleCard(!toggleCard);
  };

  return (
    <>
      <div className="flex flex-row items-center">
        <motion.div
          className="box justify-center"
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
            className="text-4xl lg:text-6xl font-bold"
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
            <br></br>
            {char}{" "}
          </motion.span>
        ))}{" "}
      </div>
      <JobTitle />
      <motion.div
        className="dot"
        onClick={handleToggleCard}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 0.5, x: [650, 600, 650], y: [0, 10, 0] }}
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 1.2 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.21, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 50,
            restDelta: 0.001,
          },
        }}
      />

      {toggleCard && <CardList />}
    </>
  );
}
