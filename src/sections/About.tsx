"use client";
import React from "react";
import VantaBackground from "@/components/VantaBackground";
// import Image from "next/image";
import Audiences from "@/components/Audiences";
import SecondaryTitle from "@/components/SecondaryTitle";
import ProfilePicture from "@/components/ProfilePicture";
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

const textOne: string =
  "Hi ! I’m Sushil. A designer-developer hybrid crafting smooth, modern web experiences. From UI animations to AWS-powered serverless workflows, this portfolio is a blend of my creative and technical sides.";

// const textThree: string =
//   "When I’m not building digital experiences, you’ll probably find me swimming or sketching out my next idea.";

// const textTwo: string =
//   "I believe in simple, thoughtful design backed by solid code & I’m always up for creating something that stands out.";

function About() {
  return (
    <>
      <section
        className={`relative w-full h-screen overflow-hidden ${inter.className}`}
      >
        {/* Vanta full-bleed background */}
        <VantaBackground />
        {/* Your foreground content goes here; ensure it sits above */}
         <div className="w-full h-6/10 flex">
          <span className="w-6/10 px-25 py-25 flex flex-col justify-center">
            <div
              className={`w-7/12 ${inter.className} flex flex-row justify-between pb-10`}
            >
              <Audiences text="For Everyone" />
              <Audiences text="Recruiters" />
              <Audiences text="Collaborators" />
            </div>
            <h1 className={`${inter.className} text-lg text-left `}>
              {textOne}
            </h1>
          </span>
           <span className="w-4/10 relative z-50">
            <ProfilePicture />
          </span>
        </div>
        <div className="w-full h-4/10">
          <h1
            className={`${inter.className} leading-none font-bold text-transparent bg-radial-[at_50%_0%] from-[#7300FF] from-0% via-[#2F0069] via-80% to-[#110130] to-155% bg-clip-text text-[16rem] tracking-tighter text-center`}
          >
            About Sushil
          </h1>
          <div
            className={`w-full ${inter.className} flex flex-row items-center justify-between px-10`}
          >
            <SecondaryTitle text="Collaborators" />
            <SecondaryTitle text="Recruiters" />
            <SecondaryTitle text="Recruiters" />
            <SecondaryTitle text="Recruiters" />
            <SecondaryTitle text="for Everyone" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
