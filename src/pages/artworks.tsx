"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { X } from "lucide-react";
import SeoHead from "@/components/SeoHead";
import Navbar from "@/components/Navbar";

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

const artworks = [
  { src: "/Fair_lady.png", alt: "Fair Lady" },
  { src: "/Red_tiger.png", alt: "Red Tiger" },
  { src: "/Cloudy_Landscape_.png", alt: "Cloudy Landscape" },
];

export default function Artworks() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (selected === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [selected, close]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <SeoHead
        title="Artworks | Sushil Patil"
        description="Browse upcoming digital artworks and experimental visuals by Sushil Patil. Follow along for new interactive and motion-driven drops."
        keywords={[
          "Sushil Patil artworks",
          "digital art",
          "motion design",
          "visual experiments",
          "creative developer",
        ]}
        url={
          process.env.NEXT_PUBLIC_SITE_URL
            ? `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")}/artworks`
            : undefined
        }
      />

      <Navbar />
      <main className="min-h-screen w-full bg-linear-to-b from-[#1f0045] from-0% to-[#0a001e] to-15%">

        {/* Hero heading */}
        <div className="flex flex-col items-center justify-center pt-20 pb-10 lg:pt-30 lg:pb-16 px-10">
          <h1
            className={`${inter.className} font-bold drop-shadow-[0_40px_45px_rgba(0,0,0,0.4)] text-transparent bg-radial-[at_50%_20%] from-[#7300FF] from-25% via-[#2F0069] via-55% to-[#110130] to-115% bg-clip-text text-[6.5rem] lg:text-[30svh] leading-[0.85] lg:leading-none tracking-tight text-center gradient-text-scroll`}
          >
            Artworks
          </h1>
        </div>

        {/* Masonry grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {artworks.map((art, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className="relative block w-full break-inside-avoid rounded-lg overflow-hidden cursor-pointer group"
              >
                <Image
                  src={art.src}
                  alt={art.alt}
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 z-10" />
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selected !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors z-10 cursor-pointer"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            <div
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={artworks[selected].src}
                alt={artworks[selected].alt}
                width={1920}
                height={1920}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
                sizes="90vw"
                priority
              />
              <div className="absolute inset-0 z-10" />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
