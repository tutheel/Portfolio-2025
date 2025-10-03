"use client";
import { Inter } from "next/font/google";
import React from "react";
import { FiLink } from "react-icons/fi";

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

function ProjectCard() {
  return (
    <span className="w-75 h-100 rounded-3xl p-8 flex flex-col border-2 border-[#9A48FF] purple-drop bg-purple">
      <h1 className={`${inter.className} text-left font-semibold text-2xl`}>
        Veda Janani
      </h1>
      <p
        className={`${inter.className} text-left font-medium text-sm`}
      >
        Fullstack Educational Website
      </p>
      
      <p className={`${inter.className} text-sm text-gray-400 pt-10`}>This project is a blend of thoughtful design and functional development, crafted to be both intuitive and reliable.</p>
      <p className={`${inter.className} text-xs text-gray-400 pt-10 `}>Next Js, Redux, Tailwind, Framer motion, AWS</p>
      <div className="pt-10 flex space-x-2">
        <button
          className={`w-16 h-6 ${inter.className} font-medium text-xs bg-[#7300ff] rounded-[6px] text-white flex items-center gap-2 px-2 hover:text-[#9A48FF] hover:bg-white transition ease-in-out`}
        >
          <h1>Link</h1>
          <FiLink className="inline-block" />
        </button>
        <button
          className={`w-16 h-6 ${inter.className} font-medium text-xs bg-[#230063] rounded-[6px] text-white flex items-center gap-2 px-2 hover:text-[#9A48FF] hover:bg-white transition ease-in-out`}
        >
          <h1>Code</h1>
          <FiLink className="inline-block" />
        </button>
      </div>
    </span>
  );
}

export default ProjectCard;
