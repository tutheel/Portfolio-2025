"use client";
import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

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

export default function Artworks() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="text-center px-6">
        <h1
          className={`${inter.className} font-bold text-transparent bg-radial-[at_50%_0%] from-[#7300FF] from-10% via-[#2F0069] via-70% to-[#110130] to-95% bg-clip-text text-6xl md:text-7xl tracking-tighter`}
        >
          Artworks
        </h1>
        <p className="mt-6 text-zinc-300">
          This page is under development. Please check back soon!
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="text-sm text-zinc-300 hover:text-white underline underline-offset-4 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}


