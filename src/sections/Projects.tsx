"use client";
import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { FiLink } from "react-icons/fi";

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

function Projects() {
  return (
    <section className="w-full h-[260svh] bg-radial-[at_50%_0%] from-[#FFFFFF] from-70%  via-[#3D0089] via-100% to-[#1B003B] to-115% text-black">
      <h1
        className={`${inter.className} leading-none font-bold text-transparent bg-linear-to-b from-[#7300FF] from-15% via-[#B579FF] via-30% to-[#FFFFFF] to-98% bg-clip-text text-[29svh] tracking-tighter text-center pt-30`}
      >
        Selected Works
      </h1>
      {/* project - 1 */}
      <div className="w-full px-50 flex flex-row justify-items-start pt-10">
        <span>
          <Image
            src="/Project.png"
            alt="Your Image"
            width={600}
            height={600}
            className="w-96 md:w-72 lg:w-200 h-auto object-contain relative z-0"
          />
        </span>
        <span className="flex flex-col justify-items-start p-10">
          <h1 className={`${inter.className} font-medium text-2xl`}>Projet</h1>
          <h1
            className={`w-150 ${inter.className} font-normal text-2xl text-[#7300ff]`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            omnis nam nesciunt eius eum nemo! Repudiandae exercitationem laborum
            nisi.
          </h1>
          <div className="pt-10 flex space-x-4">
            <button
              className={`w-30 h-12 ${inter.className} font-medium text-2xl bg-[#7300ff] rounded-[15px] text-white flex items-center gap-2 px-5`}
            >
              <h1>Link</h1>
              <FiLink className="inline-block" />
            </button>
            <button
              className={`w-33 h-12 ${inter.className} font-medium text-2xl bg-[#230063] rounded-[15px] text-white flex items-center gap-2 px-5`}
            >
              <h1>Code</h1>
              <FiLink className="inline-block" />
            </button>
          </div>
        </span>
      </div>
      {/* project - 2 */}
      <div className="w-full px-50 flex flex-row justify-items-start pt-10">
        <span>
          <Image
            src="/Project.png"
            alt="Your Image"
            width={600}
            height={600}
            className="w-96 md:w-72 lg:w-200 h-auto object-contain relative z-0"
          />
        </span>
        <span className="flex flex-col justify-items-start p-10">
          <h1 className={`${inter.className} font-medium text-2xl`}>Projet</h1>
          <h1
            className={`w-150 ${inter.className} font-normal text-2xl text-[#7300ff]`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            omnis nam nesciunt eius eum nemo! Repudiandae exercitationem laborum
            nisi.
          </h1>
          <div className="pt-10 flex space-x-4">
            <button
              className={`w-30 h-12 ${inter.className} font-medium text-2xl bg-[#7300ff] rounded-[15px] text-white flex items-center gap-2 px-5`}
            >
              <h1>Link</h1>
              <FiLink className="inline-block" />
            </button>
            <button
              className={`w-33 h-12 ${inter.className} font-medium text-2xl bg-[#230063] rounded-[15px] text-white flex items-center gap-2 px-5`}
            >
              <h1>Code</h1>
              <FiLink className="inline-block" />
            </button>
          </div>
        </span>
      </div>
      {/* project - 3 */}
      <div className="w-full px-50 flex flex-row justify-items-start pt-10">
        <span>
          <Image
            src="/Project.png"
            alt="Your Image"
            width={600}
            height={600}
            className="w-96 md:w-72 lg:w-200 h-auto object-contain relative z-0"
          />
        </span>
        <span className="flex flex-col justify-items-start p-10">
          <h1 className={`${inter.className} font-medium text-2xl`}>Projet</h1>
          <h1
            className={`w-150 ${inter.className} font-normal text-2xl text-[#7300ff]`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            omnis nam nesciunt eius eum nemo! Repudiandae exercitationem laborum
            nisi.
          </h1>
          <div className="pt-10 flex space-x-4">
            <button
              className={`w-30 h-12 ${inter.className} font-medium text-2xl bg-[#7300ff] rounded-[15px] text-white flex items-center gap-2 px-5`}
            >
              <h1>Link</h1>
              <FiLink className="inline-block" />
            </button>
            <button
              className={`w-33 h-12 ${inter.className} font-medium text-2xl bg-[#230063] rounded-[15px] text-white flex items-center gap-2 px-5`}
            >
              <h1>Code</h1>
              <FiLink className="inline-block" />
            </button>
          </div>
        </span>
      </div>
    </section>
  );
}

export default Projects;
