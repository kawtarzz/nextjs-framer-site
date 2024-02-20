"use client";
import { motion, Variants } from "framer-motion";
import React from "react";
import "@/app/globals.css";
import Link from "next/link";
import { projects } from "./data";
import Image from "next/image";
import Cooki1 from "@/public/images/cookijar_01.svg";
import ShopBlockIcon from "@/public/images/shoptheblock_icon.svg";
import "@/app/globals.css";

interface Props {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  repolink: string;
  demo: string;
  img: string;
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
  id,
  title,
  description,
  subtitle,
  problem,
  solution,
  repolink,
  demo,
  img,
}: Props) {
  const [toggleCardContent, setToggleCardContent] = React.useState(false);

  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1 }}
      >
        <motion.div
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
          variants={cardVariants}
        >
          <div className="card-title">
            <div className="card-image-container">
              <Image
                src={img}
                alt="project image"
                priority={true}
                width={500}
                height={500}
                className="card-image"
              />
            </div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <div className="btn-container">
              <Link href={repolink} target="_blank">
                <button>Repo</button>
              </Link>
              <Link href={demo} target="_blank">
                <button>Demo</button>
              </Link>
              <button
                className="btn-pink"
                onClick={() => setToggleCardContent(!toggleCardContent)}
              >
                {toggleCardContent ? "Hide Details" : "Show Details"}
              </button>
            </div>
          </div>
          <div className="card-content">
            {toggleCardContent && (
              <>
                <h3>{description}</h3>
                <br />
                <p>{problem}</p>
                <p>{solution}</p>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export function CardList({ projects }: { projects: Props[] }) {
  return projects.map((project: Props) => (
    <div key={project.id} className="card-list">
      <Card {...project} />
    </div>
  ));
}
