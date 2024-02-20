"use client";
import "@/app/globals.css";
import React, { useState, useEffect } from "react";
import { CardList } from "../components/Card";
import { projects } from "../components/data";

const ProjectsPage = () => {
  return <CardList projects={projects} />;
};

export default ProjectsPage;
