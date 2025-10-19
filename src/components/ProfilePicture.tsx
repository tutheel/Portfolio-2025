"use client";
import React from "react";
import Image from "next/image";
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

function ProfilePicture() {
  return (
    <div className="w-90 h-120 bg-white p-2 rounded-2xl shadow-[0_35px_65px_rgba(0,0,0,0.95)] text-center items-center rotate-12 hover:rotate-0 transition ease-out duration-700">
      <div className="w-full h-14/16 relative overflow-hidden bg-radial-[at_50%_0%] from-[#38007c] from-28% to-[#110130] to-65% rounded-2xl">
        <Image
          src="/Sushil.png"
          alt="Sushil"
          width={1200}
          height={1600}
          className="max-w-full h-auto object-cover"
          sizes="(max-width: 768px) 90vw, 20vw"
          priority
        />
      </div>
      <div className={`${inter.className} w-full h-2/12 p-3 inset-shadow-black text-black text-4xl font-medium tracking-tight leading-none`}>Sushil Patil</div>
    </div>
  );
}

export default ProfilePicture;
