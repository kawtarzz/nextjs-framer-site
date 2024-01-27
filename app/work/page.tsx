"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import Card from "../components/Card";

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Work(
  props: Props = {
    title: "title",
    description: "description",
    image: "image",
    link: "/work",
  }
) {
  const [toggleCard, setToggleCard] = useState(false);

  const handleToggleCard = () => {
    setToggleCard(!toggleCard);
  };

  return (
    <>
      {
        <>
          <Card
            title={props.title}
            description={props.description}
            image={props.image}
            link={props.link}
          />
          <button onClick={handleToggleCard}>View</button>
        </>
      }
    </>
  );
}
