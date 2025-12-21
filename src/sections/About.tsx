"use client";
import { Inter } from "next/font/google";
import ScrollRevealLines from "@/components/ScrollRevealLines";
import ScrollRevealParagraphs from "@/components/ScrollRevealParagraphs";

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
  return (
    <section
      className={`relative w-full max-h-min ${inter.className} flex flex-col items-center justify-evenly text-white bg-linear-to-b lg:bg-radial-[at_50%_160%] from-[#240051] to-[#000000] to-60% `}
    >
      <ScrollRevealLines className="w-full font-semibold text-3xl lg:text-7xl mt-60 mb-10 px-4 tracking-tighter" />
      <section className="w-full mt-20 mb-40 px-4 md:px-6 lg:pr-40">
        <ScrollRevealParagraphs
          paragraphs={[
            "Every product has potential. My work helps it shine.",
            "By blending design sensitivity with technical depth, I create interfaces and systems that feel smooth, modern, and genuinely helpful for the people who use them.",
            "I approach every project with a blend of design clarity and engineering precision ensuring the experience looks exceptional and performs flawlessly.",
          ]}
          paragraphClassName="text-lg lg:text-2xl font-light tracking-tight leading-7 lg:leading-8"
          gapClasses="gap-8 md:gap-10 lg:gap-12"
        />
      </section>
    </section>
  );
}
