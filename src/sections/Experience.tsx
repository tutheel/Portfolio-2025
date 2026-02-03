"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import { Hanken_Grotesk, Inter } from "next/font/google";
import { experiences } from "@/data/experienceData";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "greek", "greek-ext"],
});

const hanken = Hanken_Grotesk({
  weight: ["400"],
  subsets: ["latin"],
});

const Experience = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Progress line animation
      if (progressRef.current && timelineRef.current) {
        gsap.fromTo(
          progressRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 0.3,
            },
          }
        );
      }

      // Dot glow animations
      dotRefs.current.forEach((dot) => {
        if (!dot) return;
        gsap.fromTo(
          dot,
          {
            backgroundColor: "#2d0064",
            boxShadow: "0 0 0px #7300FF",
          },
          {
            backgroundColor: "#7300FF",
            boxShadow: "0 0 12px 4px #7300FF",
            scrollTrigger: {
              trigger: dot,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Card reveal animations
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-h-max bg-[#000000] flex flex-col items-center justify-evenly pb-40 "
    >
      <h1
        className={`${inter.className} font-bold drop-shadow-[0_40px_45px_rgba(0,0,0,0.4)] text-transparent bg-radial-[at_50%_20%] from-[#7300FF] from-25% via-[#2F0069] via-55% to-[#110130] to-115% bg-clip-text text-[6.5rem] lg:text-[20svh] leading-[0.85] lg:leading-none tracking-tighter text-center mx-10 mt-10 lg:mt-30 pb-5 lg:pb-30 gradient-text-scroll`}
      >
        My Journey So Far...
      </h1>

      {/* Timeline container */}
      <div
        ref={timelineRef}
        className={`relative w-full ${hanken.className} px-8 lg:px-40 tracking-tight mt-10`}
      >
        {/* Vertical background line */}
        <div
          className="absolute left-8 lg:left-40 top-0 bottom-0 w-[2px] bg-[#2d0064]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, white 10%, white 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, white 10%, white 90%, transparent 100%)",
          }}
        >
          {/* Progress fill */}
          <div
            ref={progressRef}
            className="w-full bg-gradient-to-b from-[#7300FF] to-[#5900ff]"
          />
        </div>

        {/* Experience cards */}
        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10 lg:pl-12">
              {/* Timeline dot */}
              <div
                ref={(el) => { dotRefs.current[index] = el; }}
                className="absolute left-[-5px] lg:left-[-5px] top-6 w-3 h-3 rounded-full bg-[#2d0064] border-2 border-[#7300FF] z-10"
              />

              {/* Card */}
              <div
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`border rounded-xl p-5 lg:p-6 transition-colors duration-300 ${
                  expanded === index
                    ? "border-[#5900ff]"
                    : "border-[#2d0064] hover:border-[#5900ff]"
                }`}
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1 lg:gap-4">
                  <h2 className="font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-75% to-[#2F0069] to-100% bg-clip-text">
                    {exp.company}
                  </h2>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3">
                    <span className="font-normal text-base text-[#7300FF]">
                      {exp.role}
                    </span>
                    <span className="font-light text-sm text-[#a4a4a4] italic">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-[#a4a4a4] mt-3 leading-relaxed">
                  {exp.summary}
                </p>

                {/* First 2 bullet points (always visible) */}
                <ul className="font-light list-disc list-outside pl-5 mt-3">
                  {exp.points.slice(0, 2).map((point, i) => (
                    <li className="py-1.5 leading-5.5" key={i}>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Expandable content */}
                <div
                  className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                  style={{
                    maxHeight: expanded === index ? "1000px" : "0px",
                  }}
                >
                  <ul className="font-light list-disc list-outside pl-5">
                    {exp.points.slice(2).map((point, i) => (
                      <li className="py-1.5 leading-5.5" key={i}>
                        {point}
                      </li>
                    ))}
                    <li className="text-[#a4a4a4] pt-2">
                      <b>TechStack:</b> {exp.techStack}
                    </li>
                  </ul>
                </div>

                {/* More / Less button */}
                <button
                  onClick={() => toggle(index)}
                  className="flex items-center gap-1 mt-3 text-sm text-[#a4a4a4] hover:text-[#7300FF] transition-colors duration-300 cursor-pointer"
                >
                  {expanded === index ? "Less" : "More"}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      expanded === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
