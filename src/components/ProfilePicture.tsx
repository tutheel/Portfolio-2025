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
    <div className="w-90 h-120 bg-white mt-20 ml-10 p-2 rounded-2xl shadow-xl/30 text-center items-center rotate-6">
      <div className="w-full h-14/16 relative overflow-hidden bg-radial-[at_50%_0%] from-[#2F0069] from-20% to-[#110130] to-95% rounded-2xl">
        <Image
          src="/Sushil.png"
          alt="Sushil"
          width={600}
          height={800}
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
