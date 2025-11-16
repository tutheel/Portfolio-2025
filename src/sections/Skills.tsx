"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import developerSkills from "@/data/developerSkills";
import designerSkills from "@/data/designerSkills";
import { motion } from "framer-motion";

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

function Skills() {
  const [activeTab, setActiveTab] = useState<"developer" | "designer">(
    "developer"
  );

  type SkillData = Record<string, string[]>;

  const skills: SkillData =
    activeTab === "developer" ? developerSkills : designerSkills;
  return (
    <>
      <section className="w-full max-h-max bg-radial-[at_50%_0%] from-[#240051] from-0%  to-[#000000] to-75% flex flex-col items-center justify-center">
        {/* top */}
        <div className="w-full h-4/12">
          <h1
            className={`${inter.className} leading-none font-bold text-transparent bg-radial-[at_50%_25%] from-[#7300FF] from-35% via-[#2F0069] via-70% to-[#110130] to-90% bg-clip-text text-[6.5rem] lg:text-[16.5rem] tracking-tighter text-center py-20 lg:py-15`}
          >
            Skills & Tools
          </h1>
          {/* <h1 className="font-light text-xs text-center text-gray-400">
            Select a skill to view
          </h1> */}
        </div>

        {/* content */}
        <div
          className={`w-full ${inter.className} h-2/12 flex flex-row items-center justify-evenly pb-10 lg:px-100`}
        >
          <button
            onClick={() => setActiveTab("developer")}
            className={`cursor-pointer font-medium  text-2xl lg:text-3xl pb-5 transition-all duration-1000 ${
              activeTab === "developer"
                ? "text-white"
                : "text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text opacity-50"
            }`}
          >
            Developer Skills
          </button>
          <button
            onClick={() => setActiveTab("designer")}
            className={`cursor-pointer font-medium  text-2xl lg:text-3xl pb-5 transition-all duration-1000 ${
              activeTab === "designer"
                ? "text-white"
                : "text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text opacity-50"
            }`}
          >
            Designer Skills
          </button>
        </div>

        {/* bottom */}
        <div
          className={`${inter.className} w-full h-4/12 text-left grid grid-cols-2 lg:flex lg:justify-center`}
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              // initial={{ opacity: 0, y: 10 }}
              // animate={{ opacity: 1, y: 0 }}
              // exit={{ opacity: 0, y: -10 }}
              // transition={{ duration: 0.7 }}
              className="px-15"
              key={category}
            >
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className={` text-md font-semibold capitalize`}
              >
                {category}
              </motion.h3>
              <div className={` text-[#b7b7b7] text-sm capitalize my-3`}>
                {skillList.map((item) => (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    key={item}
                    className="py-0.5 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Skills;
