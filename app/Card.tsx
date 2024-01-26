import { motion, Variants } from "framer-motion";
import React from "react";
import "./styles.css";

interface Props {
  title: string;
  description: string;
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

export default function Card({ title, description }: Props) {
  const background = `linear-gradient(45deg, #000000 0%, #000000 100%)`;
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <h2>{title}</h2>

        {description}
      </motion.div>
    </motion.div>
  );
}

const mockData = ["Hello", "World", "How", "Are", "You"];

export function CardList() {
  return (
    <div className="card-list">
      {mockData.map((title, index) => (
        <Card
          key={title + "-" + index}
          title={title}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          eget augue nec massa volutpat aliquet. Sed nec dolor eget
          purus aliquam placerat. Donec auctor, nisl vitae scelerisque
          lacinia, nisl nunc consequat velit, non ultrices quam
          sapien."
        />
      ))}
    </div>
  );
}
