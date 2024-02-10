import { motion, Variants } from "framer-motion";
import React from "react";
import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import Cooki1 from "@/images/cookijar_01.svg";
import ShopBlockIcon from "@/images/shoptheblock_icon.svg";

interface Props {
  id: number;
  title: string;
  description: string;
  repolink?: string;
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
  repolink,
  demo,
  img,
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
          {title === "cookijar" ? (
            <Link href={`/projects/${title}`}>
              <Image src={Cooki1} alt="cookijar" width={200} height={200} />
            </Link>
          ) : (
            <Link href={`/projects/${title}`}>
              <Image
                src={ShopBlockIcon}
                alt="shoptheblock"
                width={150}
                height={200}
              />
            </Link>
          )}

          <h2>{title}</h2>
          <p>{description}</p>

          {repolink && (
            <Link href={repolink}>
              <b className="link">Repo</b>
            </Link>
          )}
          {description}
        </motion.div>
        <div className="inline-flex justify-center items-center w-full h-auto space-evenly">
          {demo && (
            <Link href={demo}>
              <b className="link">Demo</b>
            </Link>
          )}{" "}
        </div>
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
