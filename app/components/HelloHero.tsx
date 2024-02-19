"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";
import { JobTitle } from "@/app/components/JobTitle";

export function HelloHero() {
  return (
    <>
      <motion.div
        transition={{
          delay: 2,
          duration: 1.5,
          ease: [0, 0.61, 0.7, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 50,
            restDelta: 0.001,
          },
        }}
      >
        <JobTitle />
      </motion.div>
    </>
  );
}
