"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./styles.css";
import { useInView } from "react-intersection-observer";
import { JobTitle } from "@/app/JobTitle";
import Menu from "./Menu";
import { CardList } from "./Card";

export default function Home() {
  return (
    <div className="home_container">
      <Menu />
      <Hello />
    </div>
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
          className="box justify-center items-center"
          onClick={handleToggleCard}
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1, x: [0, 100, 0] }}
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.2 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
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
            className="text-6xl font-bold"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, x: [null, 40, 10] }}
            transition={{
              duration: 0.7,
              delay: 0.6 + index / 10,
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

      {toggleCard && <CardList />}
    </>
  );
}
