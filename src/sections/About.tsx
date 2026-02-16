"use client";
import { useLayoutEffect, useRef } from "react";
import { Inter } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollRevealLines from "@/components/ScrollRevealLines";
import ScrollRevealParagraphs from "@/components/ScrollRevealParagraphs";

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

export default function About() {
  const wordsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-reveal-word]");

      gsap.timeline({
        scrollTrigger: {
          trigger: wordsRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }).from(items, {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
      });
    }, wordsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`relative w-full max-h-max ${inter.className} flex flex-col items-start justify-evenly text-white bg-[#000000]`}
    >
      <ScrollRevealLines className="w-full font-semibold text-4xl lg:text-9xl mt-20 lg:mt-60 lg:mb-50 px-8 lg:px-20 tracking-tighter" />
      <section className="w-full mt-20 mb-20 lg:mb-40 px-4 md:px-6 lg:pr-30">
        <ScrollRevealParagraphs
          className="px-4 md:px-16 "
          paragraphs={[
            "Every product has potential. My work helps it shine.",
            "By blending design sensitivity with technical depth, I create interfaces and systems that feel smooth, modern and genuinely helpful for the people who use them.",
            "I approach every project with a blend of design clarity and engineering precision ensuring the experience looks exceptional and performs flawlessly.",
          ]}
          paragraphClassName="text-lg lg:text-xl font-light tracking-tight leading-7 lg:leading-8"
          gapClasses="gap-8 md:gap-8 lg:gap-8"
        />
      </section>
      <section ref={wordsRef} className="py-8 mb-2 lg:mb-10 px-8 lg:px-22 flex flex-col items-start justify-center">
        {[
          { word: "Design", delay: "-1s" },
          { word: "Build", delay: "-0.5s" },
          { word: "Evolve.", delay: "0s" },
        ].map(({ word, delay }) => (
          <h1
            key={word}
            data-reveal-word
            className="text-2xl md:text-xl lg:text-3xl font-bold tracking-tighter gradient-text-scroll"
            style={{ animationDelay: delay }}
          >
            {word}
          </h1>
        ))}
      </section>
    </section>
  );
}
