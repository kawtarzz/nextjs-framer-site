"use client";
import "@/app/globals.css";
import React, { useState, useEffect } from "react";
import LandingPage from "@/app/components/LandingPage";

export default function Home() {
  const [boxClass, setBoxClass] = useState("");
  const [toggleCard, setToggleCard] = useState(false);

  const handleToggleCard = () => {
    setToggleCard(!toggleCard);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setBoxClass("animate-bounce");
    }, 7000);
    return () => clearTimeout(timer);
  });

  return (
    <LandingPage
      toggleCard={toggleCard}
      handleToggleCard={handleToggleCard}
      boxClass={boxClass}
    />
  );
}
