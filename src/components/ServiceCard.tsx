"use client";
import { Inter } from "next/font/google";
import React from "react";

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

function ServiceCard() {
  return (
    <span className="w-75 h-90 top-0 rounded-3xl p-10 flex flex-col items-start justify-start border-2 border-[#9A48FF] purple-service-drop bg-service-purple text-gray-400 hover:text-white transition ease-in-out duration-70">
      <h1 className={`${inter.className} font-semibold text-2xl text-center`}>
        Development
      </h1>
      <p
        className={`${inter.className} text-left font-normal text-sm pt-5`}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique esse doloremque labore sit aspernatur minima repellendus. Pariatur ea cumque libero, quas mollitia, autem illum nobis, maiores ducimus expedita placeat a!
      </p>
      
    </span>
  );
}

export default ServiceCard;
