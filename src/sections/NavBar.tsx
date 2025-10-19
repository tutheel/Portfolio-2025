"use client";
import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";


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

function NavBar() {
  return (
    <div className="w-full h-[5svh] flex items-center justify-between">
      <div
        className={` w-full bg-black mx-100 mt-4 py-2 px-8 rounded-lg text-2xl font-bold ${inter.className} flex flex-row items-center justify-between text-center border-2 border-[#32006e] shadow-[0_20px_35px_rgba(0,0,0,0.25)]`}
      >
        <Link href="#home" className="text-indigo-300 hover:text-white transition ease-out duration-500 hover:shadow-[0_2px_5px_rgba(118, 109, 255, 0.5)] text-sm font-extralight">
          Home
        </Link>
        <Link href="#about" className="text-indigo-300 hover:text-white transition ease-out duration-500 hover:shadow-[0_5px_0px_rgba(115, 0, 255, 0.5)] text-sm font-extralight">
          About
        </Link>
        <Link href="#experience" className="text-indigo-300 hover:text-white transition ease-out duration-500 hover:shadow-[0_5px_0px_rgba(115, 0, 255, 0.5)] text-sm font-extralight">
          Experience
        </Link>
        <Link href="#projects" className="text-indigo-300 hover:text-white transition ease-out duration-500 hover:shadow-[0_5px_0px_rgba(115, 0, 255, 0.5)] text-sm font-extralight">
          Projects
        </Link>
        <Link href="#skills" className="text-indigo-300 hover:text-white transition ease-out duration-500 hover:shadow-[0_5px_0px_rgba(115, 0, 255, 0.5)] text-sm font-extralight">
          Skills
        </Link>
        <Link href="#services" className="text-indigo-300 hover:text-white transition ease-out duration-500 hover:shadow-[0_5px_0px_rgba(115, 0, 255, 0.5)] text-sm font-extralight">
          Services
        </Link>
        <Link href="/artworks" className="text-indigo-300 hover:text-white transition ease-out duration-500 hover:shadow-[0_5px_0px_rgba(115, 0, 255, 0.5)] text-sm font-extralight">
          Artworks
        </Link>
        <Link href="#contact" className="text-indigo-300 hover:text-white transition ease-out duration-500 hover:shadow-[0_5px_0px_rgba(115, 0, 255, 0.5)] text-sm font-extralight">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
