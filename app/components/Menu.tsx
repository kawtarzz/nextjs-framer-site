"use client";
import "@/app/globals.css";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Logo from "@/app/logo.svg";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-bar inline-flex">
      <NavBar />
      <div className="menu container">
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="menu"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg width="15" height="10" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </motion.div>
          </motion.button>
          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            <motion.li variants={itemVariants}>
              <a href="/">Home</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="/projects">Projects</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="/about">About</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="/resume">Resume</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="/contact">Contact</a>
            </motion.li>
          </motion.ul>
        </motion.nav>
      </div>
    </div>
  );
}

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <img src={Logo} alt="logo" width={100} height={100} />
        <a className="nav-link" href="/about">
          About
        </a>
        <a className="nav-link" href="/projects">
          Projects
        </a>

        <a className="nav-link" href="/resume">
          Resume
        </a>
        <a className="nav-link" href="/contact">
          Contact
        </a>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/kawtar-azzouzi/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.github.com/kawtarzz"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GH
          </a>
        </div>
      </div>
    </>
  );
};
