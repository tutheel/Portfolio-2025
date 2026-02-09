"use client";
import React, { useRef, useLayoutEffect } from "react";
import { Inter, Hanken_Grotesk } from "next/font/google";
import projectData from "@/data/projectsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";

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

function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const accentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pillContainerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const metaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const linkRefs = useRef<(HTMLDivElement | null)[]>([]);

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

      // Per-block orchestrated reveal
      blockRefs.current.forEach((block, i) => {
        if (!block) return;

        const accent = accentRefs.current[i];
        const title = titleRefs.current[i];
        const meta = metaRefs.current[i];
        const desc = descRefs.current[i];
        const pillContainer = pillContainerRefs.current[i];
        const pills = pillContainer?.querySelectorAll("[data-tech-pill]");
        const linkRow = linkRefs.current[i];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Block fades in and slides up
        tl.fromTo(
          block,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          0
        );

        // Accent bar grows from top
        if (accent) {
          tl.fromTo(
            accent,
            { scaleY: 0 },
            { scaleY: 1, duration: 0.6, ease: "power3.out" },
            0.1
          );
        }

        // Meta line (number + subtitle) fades in
        if (meta) {
          tl.fromTo(
            meta,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" },
            0.2
          );
        }

        // Title slides in
        if (title) {
          tl.fromTo(
            title,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            0.25
          );
        }

        // Description fades in
        if (desc) {
          tl.fromTo(
            desc,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
            0.35
          );
        }

        // Tech pills pop in with stagger
        if (pills && pills.length > 0) {
          tl.fromTo(
            pills,
            { scale: 0.7, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.35,
              stagger: 0.04,
              ease: "back.out(1.7)",
            },
            0.4
          );
        }

        // Link row fades in
        if (linkRow) {
          tl.fromTo(
            linkRow,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
            0.5
          );
        }
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
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[#7300FF]/10 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[#4C00D8]/10 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-2/3 right-1/4 w-[350px] h-[350px] bg-[#240051]/20 rounded-full blur-[130px]" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#240051]/15 rounded-full blur-[150px]"
        />
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
        {/* Large background watermark text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`${inter.className} absolute left-1/2 -translate-x-1/2 -top-8 sm:-top-12 md:-top-16 lg:-top-20 xl:-top-54 text-[3rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] xl:text-[15rem] font-bold tracking-tighter gradient-tittle-text-scroll select-none pointer-events-none whitespace-nowrap z-0`}
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 100%)",
          }}
        >
          Selected Work
        </motion.h1>

        {/* Header */}
        <div className="relative text-center mb-16 lg:mb-24 z-10">
          <div className="pt-12 lg:pt-20">
            <h1
              ref={headingRef}
              className={`${inter.className} text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight mb-4 lg:mb-6`}
            >
              Featured Projects
            </h1>

            <p
              ref={subheadingRef}
              className={`${inter.className} text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto font-light`}
            >
              From concept to production — products I&apos;ve designed and
              engineered
            </p>
          </div>
        </div>

        {/* Project blocks */}
        <div className="flex flex-col gap-10 lg:gap-14 mt-10">
          {projectData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                blockRefs.current[index] = el;
              }}
              className="group relative"
            >
              {/* Ghost number watermark */}
              <span
                className={`${inter.className} absolute -top-8 lg:-top-12 right-4 lg:right-8 text-[7rem] lg:text-[12rem] font-bold text-white/[0.03] tracking-tighter select-none pointer-events-none leading-none z-0 group-hover:text-white/[0.06] transition-colors duration-700`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Main block */}
              <div className="relative flex rounded-2xl overflow-hidden transition-all duration-500 border border-white/[0.06] hover:border-[#7300FF]/30 hover:shadow-[0_0_60px_-15px_rgba(115,0,255,0.25)] bg-gradient-to-br from-white/[0.04] via-white/[0.015] to-transparent group-hover:from-[#7300FF]/[0.06] group-hover:via-[#7300FF]/[0.015] group-hover:to-transparent backdrop-blur-sm">
                {/* Left accent bar */}
                <div
                  ref={(el) => {
                    accentRefs.current[index] = el;
                  }}
                  className="hidden lg:block w-[3px] shrink-0 origin-top bg-gradient-to-b from-[#7300FF] via-[#7300FF]/60 to-[#7300FF]/10 group-hover:from-[#9A48FF] group-hover:via-[#7300FF] group-hover:to-[#7300FF]/30 group-hover:shadow-[0_0_12px_rgba(115,0,255,0.4)] transition-all duration-500"
                />

                {/* Content */}
                <div className="flex-1 p-6 lg:p-10 xl:p-12">
                  {/* Meta line: number + subtitle */}
                  <div
                    ref={(el) => {
                      metaRefs.current[index] = el;
                    }}
                    className="flex items-center gap-3 mb-5"
                  >
                    <span
                      className={`${inter.className} text-[#7300FF] text-sm font-semibold`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-6 h-px bg-[#7300FF]/40 group-hover:w-10 group-hover:bg-[#7300FF]/70 transition-all duration-500" />
                    <span
                      className={`${inter.className} text-[#7300FF]/70 text-xs lg:text-sm font-medium tracking-widest uppercase group-hover:text-[#7300FF] transition-colors duration-500`}
                    >
                      {project.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    ref={(el) => {
                      titleRefs.current[index] = el;
                    }}
                    className={`${inter.className} text-3xl lg:text-5xl xl:text-6xl font-bold text-white/90 tracking-tight mb-5 lg:mb-6 group-hover:text-white transition-colors duration-500`}
                  >
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p
                    ref={(el) => {
                      descRefs.current[index] = el;
                    }}
                    className={`${hanken.className} text-gray-400 font-light text-base lg:text-lg leading-relaxed max-w-3xl mb-8 group-hover:text-gray-300 transition-colors duration-500`}
                  >
                    {project.description}
                  </p>

                  {/* Bottom section: tech pills + link */}
                  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                    {/* Tech stack pills */}
                    <div
                      ref={(el) => {
                        pillContainerRefs.current[index] = el;
                      }}
                      className="flex flex-wrap gap-2"
                    >
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          data-tech-pill
                          className={`${inter.className} px-3.5 py-1.5 text-xs font-medium text-[#7300FF]/80 bg-[#7300FF]/[0.07] border border-[#7300FF]/15 rounded-full hover:bg-[#7300FF]/[0.18] hover:border-[#7300FF]/40 hover:text-[#7300FF] transition-all duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div
                      ref={(el) => {
                        linkRefs.current[index] = el;
                      }}
                      className="flex items-center gap-5 shrink-0"
                    >
                      {project.projectLink && (
                        <Link
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit project: ${project.title}`}
                        >
                          <span className="group/link flex items-center gap-2 text-sm font-medium text-white/40 hover:text-[#7300FF] transition-all duration-300">
                            Live Preview
                            <svg
                              className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
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
                          </span>
                        </Link>
                      )}
                      <Link
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View code: ${project.title}`}
                      >
                        <span className="group/code flex items-center gap-2 text-sm font-medium text-white/40 hover:text-[#7300FF] transition-all duration-300">
                          Source Code
                          <svg
                            className="w-3.5 h-3.5 transition-transform duration-300 group-hover/code:translate-x-0.5 group-hover/code:-translate-y-0.5"
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
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom decorative accent line */}
              <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#7300FF]/0 to-transparent group-hover:via-[#7300FF]/20 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
