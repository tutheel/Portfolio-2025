"use client";
import React, { useState, useRef, useLayoutEffect, useCallback } from "react";
import { Inter, Hanken_Grotesk } from "next/font/google";
import servicesData from "@/data/servicesData";
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
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const descRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hoverTimelines = useRef<(gsap.core.Timeline | null)[]>([]);

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
          }
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
          }
        );
      }

      // Divider line reveal animations
      lineRefs.current.forEach((line, i) => {
        if (!line) return;
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Row stagger animations
      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        gsap.fromTo(
          row,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Build per-row hover timelines
      servicesData.forEach((_, index) => {
        const title = titleRefs.current[index];
        const descContainer = descRefs.current[index];
        const number = numberRefs.current[index];
        const arrow = arrowRefs.current[index];
        const arrowSvg = arrow?.querySelector("svg");

        if (!title || !descContainer) return;

        const words =
          descContainer.querySelectorAll<HTMLElement>("[data-service-word]");

        // Initial state: description collapsed, words hidden
        gsap.set(descContainer, { height: 0, overflow: "hidden", marginTop: 0 });
        gsap.set(words, { y: 14, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        // Title shifts up + turns white
        tl.to(
          title,
          { y: -10, color: "#ffffff", duration: 0.35, ease: "power3.out" },
          0
        );

        // Number glows purple
        if (number) {
          tl.to(
            number,
            {
              color: "#7300FF",
              textShadow: "0 0 15px rgba(115,0,255,0.5)",
              duration: 0.35,
              ease: "power3.out",
            },
            0
          );
        }

        // Arrow lights up
        if (arrow) {
          tl.to(
            arrow,
            {
              borderColor: "rgba(115,0,255,0.6)",
              backgroundColor: "rgba(115,0,255,0.1)",
              boxShadow: "0 0 20px rgba(115,0,255,0.25)",
              duration: 0.35,
            },
            0
          );
        }
        if (arrowSvg) {
          tl.to(arrowSvg, { color: "#7300FF", x: 2, y: -2, duration: 0.35 }, 0);
        }

        // Description container expands
        tl.to(
          descContainer,
          { height: "auto", marginTop: 14, duration: 0.4, ease: "power2.inOut" },
          0.05
        );

        // Words stagger in from the bottom (like ScrollRevealParagraphs)
        tl.to(
          words,
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power3.out",
            stagger: 0.025,
          },
          0.15
        );

        hoverTimelines.current[index] = tl;
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
    hoverTimelines.current[index]?.play();
  }, []);

  const handleMouseLeave = useCallback((index: number) => {
    setHoveredIndex(null);
    hoverTimelines.current[index]?.reverse();
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
          Services
        </motion.h1>

        {/* Header */}
        <div className="relative text-center mb-16 lg:mb-24 z-10">
          <div className="pt-12 lg:pt-20">
            <h1
              ref={headingRef}
              className={`${inter.className} text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight mb-4 lg:mb-6`}
            >
              What I Bring to the Table
            </h1>

            <p
              ref={subheadingRef}
              className={`${inter.className} text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto font-light`}
            >
              End-to-end capabilities from pixel-perfect design to scalable
              cloud architecture
            </p>
          </div>
        </div>

        {/* Services list */}
        <div
          className={`relative w-full ${hanken.className} tracking-normal mt-10`}
        >
          {/* Top divider line */}
          <div
            ref={(el) => {
              lineRefs.current[0] = el;
            }}
            className="h-px bg-gradient-to-r from-transparent via-[#7300FF]/40 to-transparent origin-center"
          />

          {servicesData.map((service, index) => (
            <div key={service.id}>
              {/* Service row */}
              <div
                ref={(el) => {
                  rowRefs.current[index] = el;
                }}
                className="group relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* Hover glow background */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 rounded-lg ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(115,0,255,0.06) 0%, transparent 70%)",
                  }}
                />

                <div className="relative flex items-start gap-6 lg:gap-10 py-8 lg:py-10 px-2 lg:px-6">
                  {/* Number */}
                  <span
                    ref={(el) => {
                      numberRefs.current[index] = el;
                    }}
                    className={`${inter.className} text-3xl lg:text-5xl font-extralight tracking-tighter min-w-[3rem] lg:min-w-[4.5rem] text-white/15`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Title */}
                    <h2
                      ref={(el) => {
                        titleRefs.current[index] = el;
                      }}
                      className={`${inter.className} text-2xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-white/60`}
                    >
                      {service.title}
                    </h2>

                    {/* Desktop description — GSAP word-by-word reveal */}
                    <div
                      ref={(el) => {
                        descRefs.current[index] = el;
                      }}
                      className="hidden lg:block"
                    >
                      <p
                        className={`${inter.className} text-base lg:text-lg text-gray-300 font-medium leading-relaxed`}
                      >
                        {service.description.split(" ").map((word, i) => (
                          <span
                            key={i}
                            data-service-word
                            className="inline-block"
                            style={{ marginRight: "0.3em" }}
                          >
                            {word}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <div
                    ref={(el) => {
                      arrowRefs.current[index] = el;
                    }}
                    className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-transparent"
                  >
                    <svg
                      className="w-4 h-4 text-white/20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </div>
                </div>

                {/* Mobile: always show description */}
                <div className="lg:hidden px-2 pb-6 -mt-2">
                  <p className="text-sm text-gray-400 font-light leading-relaxed pl-[3.5rem]">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Divider line */}
              <div
                ref={(el) => {
                  lineRefs.current[index + 1] = el;
                }}
                className={`h-px origin-center transition-all duration-700 ${
                  hoveredIndex === index || hoveredIndex === index + 1
                    ? "bg-gradient-to-r from-transparent via-[#7300FF]/60 to-transparent shadow-[0_0_8px_rgba(115,0,255,0.3)]"
                    : "bg-gradient-to-r from-transparent via-[#7300FF]/20 to-transparent"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
