"use client";
import { Inter } from "next/font/google";
import React from "react";
import type { Services } from "@/data/servicesData";

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
  service: Services;
};

function ServiceCard({ service }: Props) {
  return (
    <span className="w-60 h-90 top-0 p-8 rounded-3xl flex flex-col items-start justify-start border-2 border-[#9A48FF] purple-service-drop bg-service-purple text-gray-400 hover:text-white transition ease-in-out duration-700 overflow-hidden">
          <h1
            className={`${inter.className} h-2/6 font-semibold text-2xl text-center`}
          >
            {service.title}
          </h1>
          <p
            className={`${inter.className} h-4/6 text-left font-normal text-sm pt-5 `}
          >
            {service.description}
          </p>
    </span>
  );
}

export default ServiceCard;
