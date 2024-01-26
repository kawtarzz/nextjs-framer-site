import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import "./styles.css";

export const JobTitle = () => {
  const [currentJobTitleIndex, setCurrentJobTitleIndex] = useState(0);
  const jobTitles = ["Product", "Graphic", "Website", "UI/ UX"];

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      delay: 1.5,
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1.5,
        ease: [0.4, 0.65, 0.3, 0.9],
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJobTitleIndex((prevIndex) =>
        prevIndex === jobTitles.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 3,
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
        <h2 className="text-6xl font-bold">
          Im a{" "}
          <div className="job-border inline-block">
            {jobTitles[currentJobTitleIndex]}
          </div>{" "}
          Designer
        </h2>
      </motion.div>
    </div>
  );
};
