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
    <section className="w-full max-h-max bg-radial-[at_50%_0%] from-[#240051] from-0% to-[#000000] to-75% flex flex-col items-center justify-evenly pb-10">
      <h1
        className={`${inter.className} font-bold drop-shadow-[0_40px_45px_rgba(0,0,0,0.4)] text-transparent bg-radial-[at_50%_20%] from-[#7300FF] from-25% via-[#2F0069] via-55% to-[#110130] to-115% bg-clip-text text-[6.5rem] lg:text-[30svh] leading-[0.85] lg:leading-none tracking-tighter text-center mx-10 mt-10 lg:mt-0`}
      >
        My Journey So Far...
      </h1>

      <div className={`w-full ${hanken.className} px-5 lg:px-40 tracking-tight`}>
        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            <div className="h-[3px] w-full bg-[#2d0064] mt-8 lg:mt-0" />
            <div className="flex flex-col lg:flex-row justify-around py-5 lg:py-4 px-5 lg:px-0">
              <h1 className="lg:w-[15%] font-medium text-2xl lg:text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-75% to-[#2F0069] to-100% bg-clip-text">
                {exp.company}
              </h1>
              <div className="lg:w-[20%] lg:px-5">
                <h1 className="font-normal text-lg text-[#7300FF] tracking-[0.02rem] lg:tracking-normal">{exp.role}</h1>
                <h1 className="font-light text-sm text-[#a4a4a4] italic tracking-[0.02rem] lg:tracking-normal">{exp.duration}</h1>
              </div>
              <div className="tracking-normal w-full lg:w-[65%] py-4 lg:py-0">
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
