"use client";
import React, { useState } from "react";
import VantaBackground from "@/components/VantaBackground";
import Audiences from "@/components/Audiences";
import SecondaryTitle from "@/components/SecondaryTitle";
import ProfilePicture from "@/components/ProfilePicture";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["200","300","400","500","600","700","800","900"],
  subsets: ["latin","latin-ext","cyrillic","cyrillic-ext","greek","greek-ext"],
});

type AudienceKey = "everyone" | "recruiters" | "collaborators";

const textOne =
  "Hi ! I’m Sushil. A designer-developer hybrid crafting smooth, modern web experiences. From UI animations to AWS-powered serverless workflows, this portfolio is a blend of my creative and technical sides.";
const textTwo =
  "I believe in simple, thoughtful design backed by solid code—and I’m always up for creating something that stands out.";
const textThree =
  "I love collaborating on ambitious ideas—rapid prototyping, clean handoffs, and a bias for shipping with quality.";

const TEXT_BY_AUDIENCE: Record<AudienceKey, string> = {
  everyone: textOne,
  recruiters: textTwo,
  collaborators: textThree,
};

export default function About() {
  // default = "for everyone"
  const [audience, setAudience] = useState<AudienceKey>("everyone");

  return (
    <section className={`relative w-full h-screen overflow-hidden ${inter.className}`}>
      {/* Vanta full-bleed background */}
      <VantaBackground />

      {/* Foreground content */}
      <div className="w-full h-6/10 flex relative z-10">
        <span className="w-6/10 px-25 pt-30 flex flex-col justify-center">
          {/* Toggle buttons */}
          <div className="w-7/12 flex flex-row justify-between pb-10 gap-3">
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
          <h1 className="h-1/2 text-lg text-left">
            {TEXT_BY_AUDIENCE[audience]}
          </h1>
        </span>

        <span className="w-4/10 relative z-50">
          <ProfilePicture />
        </span>
      </div>

      <div className="w-full h-4/10">
        <h1
          className={`leading-none font-bold text-transparent bg-radial-[at_50%_0%] from-[#7300FF] from-0% via-[#2F0069] via-80% to-[#110130] to-155% bg-clip-text text-[16rem] tracking-tighter text-center`}
        >
          About Sushil
        </h1>

        <div className={`w-full flex flex-row items-center justify-between px-10`}>
          <SecondaryTitle text="Collaborators" />
          <SecondaryTitle text="Recruiters" />
          <SecondaryTitle text="Recruiters" />
          <SecondaryTitle text="Recruiters" />
          <SecondaryTitle text="for Everyone" />
        </div>
      </div>
    </section>
  );
}
