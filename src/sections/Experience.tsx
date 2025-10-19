"use client";
import React from "react";
import { Hanken_Grotesk, Inter } from "next/font/google";
import { experiences } from "@/data/experienceData";

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "greek", "greek-ext"],
});

const hanken = Hanken_Grotesk({
  weight: ["400"],
  subsets: ["latin"],
});

const Experience = () => {
  return (
    <section className="w-full h-[280svh] bg-radial-[at_50%_0%] from-[#240051] from-0% to-[#000000] to-75% flex flex-col items-center justify-evenly ">
      <h1
        className={`${inter.className} leading-none font-bold drop-shadow-[0_40px_45px_rgba(0,0,0,0.4)] text-transparent bg-radial-[at_50%_20%] from-[#7300FF] from-25% via-[#2F0069] via-55% to-[#110130] to-115% bg-clip-text text-[30svh] tracking-tighter text-center mx-10`}
      >
        My Journey So Far...
      </h1>

      <div className={`w-full ${hanken.className} px-40 tracking-tight`}>
        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            <div className="h-[3px] w-full bg-[#2d0064]" />
            <div className="flex justify-around py-4">
              <h1 className="w-[15%] font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-40% to-[#2F0069] to-100% bg-clip-text">
                {exp.company}
              </h1>
              <div className="w-[20%] px-5">
                <h1 className="font-normal text-lg text-[#7300FF]">{exp.role}</h1>
                <h1 className="font-light text-sm text-[#a4a4a4] italic">{exp.duration}</h1>
              </div>
              <div className="tracking-normal w-[65%]">
                <ul className="font-light list-disc list-outside">
                  {exp.points.map((point, i) => (
                    <li className="py-2 leading-5.5" key={i}>{point}</li>
                  ))}
                  <li className="text-[#a4a4a4] pt-2">
                    <b>TechStack:</b> {exp.techStack}
                  </li>
                </ul>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Experience;
