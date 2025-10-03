"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import developerSkills from "@/data/developerSkills";
import designerSkills from "@/data/designerSkills";

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
      <section className="w-full h-screen bg-radial-[at_50%_0%] from-[#240051] from-0%  to-[#000000] to-75% flex flex-col items-center">
        {/* top */}
        <div
          className={`w-full ${inter.className} h-2/12 flex flex-row items-center justify-evenly px-80 pb-15 pt-25`}
        >
          <button
            onClick={() => setActiveTab("developer")}
            className={`cursor-pointer font-medium text-3xl pb-5 transition-all duration-1000 ${
              activeTab === "developer"
                ? "text-white"
                : "text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text"
            }`}
          >
            Developer
          </button>
          <button
            onClick={() => setActiveTab("designer")}
            className={`cursor-pointer font-medium text-3xl pb-5 transition-all duration-1000 ${
              activeTab === "designer"
                ? "text-white"
                : "text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text"
            }`}
          >
            Designer
          </button>
        </div>

        {/* content */}
        <div
          className={`${inter.className} w-full h-4/12 px-10 text-left flex justify-center `}
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <div className="px-15" key={category}>
              <h3 className={` text-md font-semibold capitalize`}>
                {category}
              </h3>
              <div className={` text-[#A6A6A6] text-sm capitalize my-3`}>
                {skillList.map((item) => (
                  <p
                    key={item}
                    className="py-0.5 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* bottom */}
        <div className="w-full h-4/12 pt-25">
          <div
            className={`w-full ${inter.className} flex flex-row items-center justify-between px-25`}
          >
            <h1 className="font-light text-sm text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">
              for Everyone
            </h1>
            <h1 className="font-light text-sm text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">
              Recruiters
            </h1>
            <h1 className="font-light text-sm text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">
              Collaborators
            </h1>
            <h1 className="font-light text-sm text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">
              Collaborators
            </h1>
            <h1 className="font-light text-sm text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">
              Collaborators
            </h1>
          </div>
          <h1
            className={`${inter.className} leading-none font-bold text-transparent bg-radial-[at_50%_-20%] from-[#7300FF] from-0% via-[#2F0069] via-50% to-[#110130] to-70% bg-clip-text text-[15rem] tracking-tighter text-center`}
          >
            Skills & Tools
          </h1>
        </div>
      </section>
    </>
  );
}
export default Skills;
