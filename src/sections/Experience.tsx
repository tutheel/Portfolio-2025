"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import { Hanken_Grotesk, Inter } from "next/font/google";
import { experiences } from "@/data/experienceData";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

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
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  const toggle = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      if (subheadingRef.current) {
        gsap.fromTo(
          subheadingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

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
          },
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
          },
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
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black overflow-hidden py-20 lg:py-40 lg:mb-10 lg:mt-30"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7300FF]/10 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#4C00D8]/10 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#240051]/20 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Large background text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`${inter.className} absolute left-1/2 -translate-x-1/2 -top-8 sm:-top-12 md:-top-16 lg:-top-20 xl:-top-54 text-[3rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[18rem] font-bold tracking-tighter gradient-tittle-text-scroll select-none pointer-events-none whitespace-nowrap z-0`}
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 100%)",
          }}
        >
          Experience
        </motion.h1>

        {/* Header */}
        <div className="relative text-center mb-16 lg:mb-24 z-10">
          <div className="pt-12 lg:pt-20">
            <h1
              ref={headingRef}
              className={`${inter.className} text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight mb-4 lg:mb-6`}
            >
              My Journey So Far...
            </h1>

            <p
              ref={subheadingRef}
              className={`${inter.className} text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto font-light`}
            >
              Building impactful products and growing through diverse
              experiences
            </p>
          </div>
        </div>

        {/* Timeline container */}
        <div
          ref={timelineRef}
          className={`relative w-full ${hanken.className} tracking-normal mt-10`}
        >
          {/* Vertical background line */}
          <div
            className="absolute left-0 lg:left-0 top-0 bottom-0 w-[2px] bg-[#2d0064]"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, white 10%, white 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, white 10%, white 90%, transparent 100%)",
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
              <div key={index} className="relative pl-8 lg:pl-10">
                {/* Timeline dot */}
                <div
                  ref={(el) => {
                    dotRefs.current[index] = el;
                  }}
                  className="absolute left-[-5px] top-6 w-3 h-3 rounded-full bg-[#2d0064] border-2 border-[#7300FF] z-10"
                />

                {/* Card */}
                <div
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={`group rounded-2xl p-5 lg:p-6 transition-all duration-500 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent backdrop-blur-sm border ${
                    expanded === index
                      ? "border-[#7300FF]/40 shadow-[0_0_40px_-10px_rgba(115,0,255,0.3)] bg-gradient-to-br from-[#7300FF]/[0.08] via-[#7300FF]/[0.02] to-transparent"
                      : "border-white/[0.08] hover:border-[#7300FF]/40 hover:shadow-[0_0_40px_-10px_rgba(115,0,255,0.3)] hover:bg-gradient-to-br hover:from-[#7300FF]/[0.08] hover:via-[#7300FF]/[0.02] hover:to-transparent"
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1 lg:gap-4">
                    <h2 className="font-bold text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-75% to-[#2F0069] to-100% bg-clip-text">
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

                  {/* Decorative accent line */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#7300FF]/0 to-transparent group-hover:via-[#7300FF]/30 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
