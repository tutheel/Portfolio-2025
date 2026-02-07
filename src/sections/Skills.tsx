"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import { Inter } from "next/font/google";
import developerSkills from "@/data/developerSkills";
import designerSkills from "@/data/designerSkills";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

type SkillData = Record<string, string[]>;

const categoryIcons: Record<string, string> = {
  languages: "01",
  frameworks: "02",
  "developer Tools": "03",
  libraries: "04",
  databases: "05",
  "cloud & Infra": "06",
  UIUX: "01",
  designTools: "02",
  visualConceptArt: "03",
  digitalArt: "04",
  visualDesign: "05",
};

const formatCategoryName = (name: string): string => {
  const nameMap: Record<string, string> = {
    languages: "Languages",
    frameworks: "Frameworks",
    "developer Tools": "Dev Tools",
    libraries: "Libraries",
    databases: "Databases",
    "cloud & Infra": "Cloud & Infra",
    UIUX: "UI/UX Design",
    designTools: "Design Tools",
    visualConceptArt: "Concept Art",
    digitalArt: "Digital Art",
    visualDesign: "Visual Design",
  };
  return nameMap[name] || name;
};

function Skills() {
  const [activeTab, setActiveTab] = useState<"developer" | "designer">("developer");
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const developerBtnRef = useRef<HTMLButtonElement>(null);
  const designerBtnRef = useRef<HTMLButtonElement>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  const skills: SkillData = activeTab === "developer" ? developerSkills : designerSkills;

  // Update pill position based on active tab
  useLayoutEffect(() => {
    const updatePillPosition = () => {
      const activeBtn = activeTab === "developer" ? developerBtnRef.current : designerBtnRef.current;
      const container = tabContainerRef.current;

      if (activeBtn && container) {
        const containerRect = container.getBoundingClientRect();
        const btnRect = activeBtn.getBoundingClientRect();

        setPillStyle({
          left: btnRect.left - containerRect.left,
          width: btnRect.width,
        });
      }
    };

    updatePillPosition();
    window.addEventListener("resize", updatePillPosition);
    return () => window.removeEventListener("resize", updatePillPosition);
  }, [activeTab]);

  useLayoutEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;

    const ctx = gsap.context(() => {
      // Heading animation
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  };

  const skillPillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black overflow-hidden py-20 lg:py-40 lg:mb-10 lg:mt-20"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7300FF]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#4C00D8]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
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

      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
        {/* Large background text - behind header only */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`${inter.className} absolute left-1/2 -translate-x-1/2 -top-8 sm:-top-12 md:-top-16 lg:-top-20 xl:-top-54 text-[4rem] sm:text-[12rem] md:text-[18rem] lg:text-[21rem] xl:text-[26rem] font-bold tracking-tighter gradient-tittle-text-scroll select-none pointer-events-none whitespace-nowrap z-0`}
          style={{
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.001) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.008) 100%)",
          }}
        >
          Skills
        </motion.h1>

        {/* Header */}
        <div className="relative text-center mb-16 lg:mb-24 z-10">
          {/* Foreground content */}
          <div className="pt-12 lg:pt-20">
            <h1
              ref={headingRef}
              className={`${inter.className} text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight mb-4 lg:mb-6`}
            >
              Skills & Tools
            </h1>

            <p
              ref={subheadingRef}
              className={`${inter.className} text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto font-light`}
            >
              Crafting digital experiences with modern technologies and creative tools
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16 lg:mb-20 z-10">
          <div
            ref={tabContainerRef}
            className="relative inline-flex items-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
          >
            {/* Animated background pill */}
            <motion.div
              className="absolute top-0 bottom-0 rounded-full bg-gradient-to-r from-[#7300FF] to-[#5900ff]"
              initial={false}
              animate={{
                left: pillStyle.left,
                width: pillStyle.width,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
            />

            <button
              ref={developerBtnRef}
              onClick={() => setActiveTab("developer")}
              className={`${inter.className} relative z-10 px-6 py-3 text-sm lg:text-base font-medium transition-colors duration-300 rounded-full ${
                activeTab === "developer" ? "text-white" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              Developer
            </button>
            <button
              ref={designerBtnRef}
              onClick={() => setActiveTab("designer")}
              className={`${inter.className} relative z-10 px-6 py-3 text-sm lg:text-base font-medium transition-colors duration-300 rounded-full ${
                activeTab === "designer" ? "text-white" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              Designer
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[800px] lg:min-h-[600px]"
          >
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                variants={cardVariants}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent backdrop-blur-sm border border-white/[0.08] transition-all duration-500 hover:border-[#7300FF]/40 hover:shadow-[0_0_40px_-10px_rgba(115,0,255,0.3)] hover:bg-gradient-to-br hover:from-[#7300FF]/[0.08] hover:via-[#7300FF]/[0.02] hover:to-transparent">
                  {/* Category header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className={`${inter.className} text-[#7300FF]/60 text-xs font-medium tracking-widest`}>
                        {categoryIcons[category] || "00"}
                      </span>
                      <h3 className={`${inter.className} text-xl lg:text-2xl font-semibold text-white mt-1 group-hover:text-[#7300FF] transition-colors duration-300`}>
                        {formatCategoryName(category)}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#7300FF]/10 flex items-center justify-center group-hover:bg-[#7300FF]/20 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-[#7300FF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Skill pills */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={{
                      hidden: { opacity: 1 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: index * 0.1,
                        },
                      },
                      exit: { opacity: 1 },
                    }}
                  >
                    {skillList.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={skillPillVariants}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(115, 0, 255, 0.2)",
                        }}
                        className={`${inter.className} inline-flex items-center px-3 py-1.5 rounded-lg text-sm text-gray-300 bg-white/5 border border-white/10 cursor-default transition-all duration-200 hover:text-white hover:border-[#7300FF]/40`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Decorative accent line */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#7300FF]/0 to-transparent group-hover:via-[#7300FF]/30 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Skills;
