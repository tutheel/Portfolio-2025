"use client";
import React from "react";
import { Inter } from "next/font/google";
import ProjectCard from "@/components/ProjectCard";
import projectData from "@/data/projectsData"; // adjust to your path
// import Image from "next/image";
// import { FiLink } from "react-icons/fi";

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: [
    "latin",
    "latin-ext",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
  ],
});

function Projects() {
  return (
    <section className="w-full h-screen bg-radial-[at_50%_0%] from-[#240051] from-0%  to-[#000000] to-75% flex flex-col items-center">
      {/* heading */}
      <h1
        className={`w-full h-[40%] ${inter.className} font-bold text-transparent bg-radial-[at_50%_0%] from-[#7300FF] from-10% via-[#2F0069] via-70% to-[#110130] to-95% bg-clip-text text-[14rem] tracking-tighter text-center px-5`}
      >
        Selected Work
      </h1>
      {/* content */}
      <div className="w-full h-[60%] flex items-center justify-center gap-10 leading-none">
        {projectData.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
