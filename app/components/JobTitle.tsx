import "@/app/globals.css";
import { useAnimate, motion, stagger } from "framer-motion";
import { useState, useEffect } from "react";
import { CardList } from "./Card";
import { projects } from "./data";

export const JobTitle = () => {
  const [currentJobTitleIndex, setCurrentJobTitleIndex] = useState(0);

  const nameIs = "My name is";
  const name = "Kawtar.";
  const iAm = "";
  const jobTitles = [
    "App Developer",
    "UI/UX Designer",
    "Web Developer",
    "Graphic Designer",
  ];

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `1.25em`,
    },
    visible: {
      delay: 1,
      opacity: 1,
      y: `0`,
      transition: {
        duration: stagger(0.1),
        ease: [0.4, 0.65, 0.3, 0.9],
      },
    },
  };

  const [toggleCard, setToggleCard] = useState(false);

  const handleToggleCard = () => {
    setToggleCard(!toggleCard);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJobTitleIndex((prevIndex) =>
        prevIndex === jobTitles.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hello app">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 5,
            ease: [0.1, 0.41, 0.4, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 60,
              restDelta: 0.01,
            },
          }}
        >
          <h1>{nameIs}</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 2.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 2.5,
            ease: [0.1, 0.41, 0.2, 0.41, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 60,
              restDelta: 0.01,
              variants: characterAnimation,
            },
          }}
        >
          <h1>&nbsp;{name}&nbsp;</h1>
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 60,
              restDelta: 0.01,
              variants: characterAnimation,
            },
          }}
        >
          <h1>&nbsp;{iAm}&nbsp;</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 60,
              restDelta: 0.01,
              variants: characterAnimation,
            },
          }}
        >
          <h1>{jobTitles[currentJobTitleIndex]}.</h1>
          {"  "}
        </motion.div>
      </div>
      <motion.div
        className="dot"
        onClick={handleToggleCard}
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          opacity: 1,
          scale: 0.5,
          x: [650, 600, 650],
          y: [0, 10, 0],
        }}
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 1.2 }}
        transition={{
          duration: 0.5,
          delay: 1,
          ease: [0, 0.21, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 50,
            restDelta: 0.001,
          },
        }}
      />
      {toggleCard && <CardList projects={projects} />}
    </>
  );
};
