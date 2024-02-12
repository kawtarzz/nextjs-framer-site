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
          duration: 0.5,
          delay: 1.5,
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <JobTitle />
      </motion.div>
    </>
  );
}
