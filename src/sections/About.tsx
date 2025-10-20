"use client";
import React, { useState } from "react";
import VantaBackground from "@/components/VantaBackground";
import Audiences from "@/components/Audiences";
// import SecondaryTitle from "@/components/SecondaryTitle";
// import ProfilePicture from "@/components/ProfilePicture";
// import { motion, AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";
import AnimatedText from "@/components/AnimatedText";

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

type AudienceKey = "everyone" | "recruiters" | "collaborators";

const textOne =
  "Hi, I’m Sushil. A developer & designer hybrid crafting smooth, modern web experiences. From UI animations to AWS powered serverless workflows, this portfolio is a blend of my creative and technical sides.";
const textTwo =
  "I believe in simple, thoughtful design backed by solid code and I’m always up for creating something that stands out.";
const textThree =
  "I love collaborating on ambitious ideas rapid prototyping, clean handoffs, and a bias for shipping with quality.";

const TEXT_BY_AUDIENCE: Record<AudienceKey, string> = {
  everyone: textOne,
  recruiters: textTwo,
  collaborators: textThree,
};

export default function About() {
  // default = "for everyone"
  const [audience, setAudience] = useState<AudienceKey>("everyone");

  return (
    <section
      className={`relative w-full h-[200%] ${inter.className} flex flex-col items-center justify-evenly text-white`}
    >
      {/* Vanta full-bleed background */}
      <VantaBackground />

      {/* Foreground content */}
      <div
        className={`w-full h-full flex flex-col items-center justify-center text-white`}
      >
        {/* text "flex flex-col leading-none" */}
        <div className="w-full h-1/2 relative z-10">
          <h1
            // relative m-0 pb-10 top-0
            className={`font-bold text-transparent bg-radial-[at_50%_0%] from-[#7300FF] from-40% via-[#2F0069] via-95% to-[#110130] to-155% bg-clip-text text-[17rem] tracking-tighter text-center py-5 lg:py-`}
          >
            About Sushil
          </h1>

          {/* PUT GRADIENT HERE */}
          {/* <h1
            className={`relative -mt-[5.5rem] font-extrabold text-transparent bg-radial-[at_50%_0%] from-[#7300FF] from-40% via-[#2F0069] via-115% to-[#110130] to-155% bg-clip-text text-[10rem] tracking-tight text-left px-5 lg:px-20`}
          >
            Sushil
          </h1> */}

          {/* <div
            className={`h-1/6 w-full flex flex-row items-center justify-between pb-15 px-10`}
          >
            <SecondaryTitle text="Artist" />
            <SecondaryTitle text="Developer" />
            <SecondaryTitle text="Designer" />
            <SecondaryTitle text="Engineer" />
            <SecondaryTitle text="Creator" />
          </div> */}
        </div>
        {/* image */}
        {/* <div className="w-full relative z-50 bottom-8 right-35 flex justify-end-safe px-25">
          <ProfilePicture />
        </div> */}
        {/* text content and toggles */}
        <div className="w-full h-1/2 z-10">
          <div className="w-full h-1/6 px-15 flex flex-col justify-center">
            {/* Toggle buttons */}
            <div className="w-2/6 flex flex-row justify-between pb-20">
              <Audiences
                text="For Everyone"
                active={audience === "everyone"}
                onClick={() => setAudience("everyone")}
              />
              <Audiences
                text="Recruiters"
                active={audience === "recruiters"}
                onClick={() => setAudience("recruiters")}
              />
              <Audiences
                text="Collaborators"
                active={audience === "collaborators"}
                onClick={() => setAudience("collaborators")}
              />
            </div>

            {/* Dynamic copy */}
            <div className="h-[18rem] sm:h-[22rem] md:h-[25rem] lg:h-[30rem] text-[3.5rem] leading-13 text-left text-white pb-50 tracking-tight">
              {/* <AnimatePresence mode="wait">
                <motion.div
                  key={audience}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {TEXT_BY_AUDIENCE[audience]}
                </motion.div>
              </AnimatePresence> */}
              <AnimatedText text={TEXT_BY_AUDIENCE[audience]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
