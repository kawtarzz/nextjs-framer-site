import { motion, Variants } from "framer-motion";
import React from "react";
import "../styles.css";
import Link from "next/link";
import { projects } from "./data";

interface Props {
  id: number;
  title: string;
  description: string;
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

export default function Card({ title, description, demo, path }: Props) {
  const background = `linear-gradient(45deg, #000000 0%, #000000 100%)`;

  return (
    <>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="splash" style={{ background }} />
        <motion.div id="#projects" className="card" variants={cardVariants}>
          <h2>{title}</h2>
          {description}
        </motion.div>

        <div className="card-overlay" />
        <div className="inline-flex justify-center items-center w-full h-full space-evenly">
          {demo && (
            <Link href={demo}>
              <b>Demo</b>
            </Link>
          )}{" "}
          &nbsp; &nbsp;
          {path && (
            <Link href={path}>
              <b>Details</b>
            </Link>
          )}
        </div>
      </motion.div>
    </>
  );
}

export function CardList() {
  return (
    <div className="card-list">
      {projects.map((project) => (
        <>
          <Card
            id={project.id}
            title={project.title}
            description={project.description}
            demo={project.demo}
            path={project.path}
          />
        </>
      ))}
    </div>
  );
}
