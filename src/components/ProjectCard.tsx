"use client";
import { Inter } from "next/font/google";
import React from "react";
import { FiLink } from "react-icons/fi";
import type { Project } from "@/data/projectsData";
import Link from "next/link";

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

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <span  className="w-75 h-90 rounded-2xl p-8 flex flex-col border-2 border-[#9A48FF] purple-drop bg-purple">
      <h1
        className={`${inter.className} h-[10%] text-left font-semibold text-2xl`}
      >
        {project.title}
      </h1>
      <p className={`${inter.className} h-[30%] text-left font-mono text-sm`}>
        {project.subtitle}
      </p>

      <p
        className={`${inter.className} h-[35%] text-sm text-gray-400 hover:text-white`}
      >
        {project.description}
      </p>
      <p
        className={`${inter.className} h-[20%] text-xs text-gray-400 hover:text-white`}
      >
        {project.stack.join(", ")}
      </p>
      <div className="h-[5%] flex space-x-2">
        <Link
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit project: ${project.title}`}
        >
          <button
            className={`w-16 h-6 ${inter.className} font-medium text-xs bg-[#7300ff] rounded-[6px] text-white flex items-center gap-2 px-2 hover:text-[#9A48FF] hover:bg-white transition ease-in-out`}
          >
            <span>Link</span>
            <FiLink className="inline-block" />
          </button>
        </Link>
        <Link
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View code: ${project.title}`}
        >
          <button
            className={`w-16 h-6 ${inter.className} font-medium text-xs bg-[#230063] rounded-[6px] text-white flex items-center gap-2 px-2 hover:text-[#9A48FF] hover:bg-white transition ease-in-out`}
          >
            <span>Code</span>
            <FiLink className="inline-block" />
          </button>
        </Link>
      </div>
    </span>
  );
}

export default ProjectCard;
