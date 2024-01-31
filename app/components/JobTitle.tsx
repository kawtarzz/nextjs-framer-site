import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "@/app/globals.css";

export const JobTitle = () => {
  const [currentJobTitleIndex, setCurrentJobTitleIndex] = useState(0);
  const nameIs = "My name is";
  const name = "Kawtar.";
  const jobTitles = [
    "Software Developer",
    "Website Designer",
    "Graphic Designer",
    "Brand Developer",
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
        duration: 0.5,
        ease: [0.4, 0.65, 0.3, 0.9],
      },
    },
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
    <motion.div
      initial={{ opacity: 0, scale: 2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 2,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 80,
          restDelta: 0.01,
        },
      }}
    >
      <div className="name-container inline-flex flex-wrap">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2.5,
            delay: 2.7,
            ease: [0.1, 0.41, 0.4, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 80,
              restDelta: 0.01,
            },
          }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold"> {nameIs} </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 2.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2.6,
            delay: 3,
            ease: [0.1, 0.41, 0.2, 0.61, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 80,
              restDelta: 0.01,
            },
          }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold">&nbsp;{name}&nbsp;</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 4.5,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 80,
              restDelta: 0.01,
              variants: characterAnimation,
            },
          }}
        >
          {" "}
          <h2 className="text-4xl lg:text-6xl font-bold">
            {"I'm a"}&nbsp;{jobTitles[currentJobTitleIndex]}
            {"  "}
          </h2>
        </motion.div>
      </div>
    </motion.div>
  );
};
