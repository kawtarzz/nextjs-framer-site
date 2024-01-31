import { motion, Variants } from "framer-motion";
import React from "react";
import "@/app/globals.css";
import Link from "next/link";
import { projects } from "./data";

interface Props {
  id: number;
  title: string;
  description: string;
  image?: string;
  repolink?: string;
  demo: string;
  path: string;
}

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Card({
  title,
  description,
  image,
  repolink,
  demo,
  path,
}: Props) {
  return (
    <>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div
          id="#projects"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.1, 0.4, 0.85, 1.01],
            scale: {
              type: "just",
              damping: 5,
              stiffness: 80,
              restDelta: 0.01,
            },
          }}
          className="card"
          variants={cardVariants}
        >
          <Link href={path}>
            <img src={image} alt={title} />
          </Link>
          <h2>{title}</h2>
          {description}
        </motion.div>

        <div className="inline-flex justify-center items-center w-full h-auto space-evenly">
          {demo && (
            <Link href={demo}>
              <b className="link">Demo</b>
            </Link>
          )}{" "}
          &nbsp; &nbsp;
          {path && (
            <Link href={path}>
              <b className="link">Details</b>
            </Link>
          )}
        </div>
      </motion.div>
    </>
  );
}

export function CardList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <>
          <Card
            id={project.id}
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            repolink={project.repolink}
            demo={project.demo}
            path={project.path}
          />
        </>
      ))}
    </div>
  );
}
