"use client";
import React from "react";
import "@/app/globals.css";
import Image from "next/image";
import Kawtar from "@/images/Kawtar.svg";

export default function About() {
  return (
    <>
      <div className="about-page container">
        <Image
          src={Kawtar}
          alt="Kawtar image"
          priority={true}
          width={500}
          height={500}
        />

        <h1>
          Hello! I&apos;m Kawtar. I&apos;m a Nashville-based full-stack software
          developer and designer.
        </h1>
        <h3>
          With a background in design and animation coupled with an obsession
          for creating intuitive systems, I strive to deliver efficient
          solutions that are user-friendly and visually appealing. I&apos;m a
          recent graduate of Nashville Software School&apos;s Full-Stack
          Software Development bootcamp with a BFA from the School of the Art
          Institute of Chicago.
        </h3>
        <p>
          Having gained development skills with use of React, Javascript, HTML,
          CSS on the front end as well as C#, ADO.NET, SQL on the back end, my
          creativity and technical skills have allowed me to build applications
          with full CRUD functionally and visual branding. I&apos;m passionate
          about learning new technologies and am always looking for new
          challenges. Have a project you&apos;d like to discuss or a role
          you&apos;d like to fill? Or if you just want to say hello, I&apos;d
          love to hear from you!
        </p>
        <a href="mailto:kawtaryazzouzi@gmail.com" className="alt-btn">
          Let&apos;s talk!
        </a>
      </div>
    </>
  );
}
