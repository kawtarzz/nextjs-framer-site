import "@/app/globals.css";
import { useAnimate, motion, stagger } from "framer-motion";
import { useState, useEffect } from "react";

export const JobTitle = () => {
  const [currentJobTitleIndex, setCurrentJobTitleIndex] = useState(0);

  const nameIs = "My name is Kawtar.";
  const jobTitles = [
    "a Front-End Developer",
    "a UI/UX Designer",
    "a Motion Designer",
    "a Graphic Designer",
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
        duration: stagger(0.5),
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
    <>
      <div className="flex hello-text">
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
          <div className="inline-flex flex-wrap">
            <motion.div
              initial={{ opacity: 0, scale: 2.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2.5,
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
              {nameIs.split("").map((char, index) => (
                <motion.span
                  key={char + "-" + index}
                  className="text-6xl font-bold hello-text"
                  initial={{ opacity: 0, scale: 2.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 3.5 + index / 10,
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
                  {char}
                </motion.span>
              ))}{" "}
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
              <h2 className="text-6xl font-bold hello-text">
                {"I'm"}&nbsp;{jobTitles[currentJobTitleIndex]}
                {"  "}
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
