"use client";
import "@/app/globals.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Logo from "@/app/logo.svg";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <Image src={Logo} alt="Kawtar Azzouzi" className="logo" width={140} />

        {isMobile ? (
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        ) : (
          <NavBar />
        )}
      </div>
    </>
  );
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
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
            <svg width="15" height="10" viewBox="0 1 20 20">
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
                duration: 0.5,
                delayChildren: 0.3,
                staggerChildren: 0.04,
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
    </>
  );
};

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <Link className="nav-link" href="/resume">
          Resume
        </Link>
        <Link className="nav-link" href="/contact">
          Contact
        </Link>
        <Link className="nav-link" href="/about">
          About
        </Link>
        <Link className="nav-link" href="/projects">
          Projects
        </Link>
        <div className="social-icons">
          <Link
            href="https://www.linkedin.com/in/kawtara"
            className="nav-link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <a
            href="https://www.github.com/kawtarzz"
            className="nav-link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </>
  );
};
