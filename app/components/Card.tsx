"use client";
import { motion, Variants } from "framer-motion";
import React from "react";
import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
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
  title,
  description,
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
          <div className="card-content">
            <Image
              src={img}
              alt="project image"
              priority={true}
              width={500}
              height={500}
              className="card-image"
              onClick={() => setToggleCardContent(!toggleCardContent)}
            />
            {toggleCardContent && (
              <>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <br />
                <p>{problem}</p>
                <p>{solution}</p>
                <div className="btn-container">
                  <button>
                    <Link href={repolink} target="_blank">
                      Repo
                    </Link>
                  </button>
                  <button>
                    <Link href={demo} target="_blank">
                      Demo
                    </Link>
                  </button>
                  <button
                    onClick={() => setToggleCardContent(!toggleCardContent)}
                  >
                    Hide Details
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export function CardList({ projects }: { projects: Props[] }) {
  return (
    <>
      <div className="row">
        {projects.map((project: Props) => (
          <div key={project.id}>
            <div className="column">
              <Card {...project} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
