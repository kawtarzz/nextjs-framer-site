"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";
import { JobTitle } from "@/app/components/JobTitle";

export function HelloHero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
          delay: 1,
          ease: [0, 0.21, 0.2, 1.01],
        }}
      >
        <JobTitle />
      </motion.div>
    </>
  );
}
