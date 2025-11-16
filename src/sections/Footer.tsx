"use client";
import React from "react";
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

function Footer() {
  return (
    <section className="w-full max-h-max bg-radial-[at_50%_-10%] from-[#240051] from-0%  to-[#000000] to-75% flex flex-col items-center">
      <div className="w-full h-full flex flex-col lg:flex-row justify-around items-start">
        {/* left half */}
        <div className="w-full lg:w-1/2 h-full">
          <h1
            className={`${inter.className} leading-none font-bold text-transparent bg-radial-[at_70%_10%] from-[#7300FF] from--10% via-[#2F0069] via-75% to-[#110130] to-90% bg-clip-text text-[4.5rem] lg:text-[15svh] tracking-tighter pt-30 px-5 lg:px-30 text-left`}
          >
            Big Ideas Start With Simple
          </h1>
          <h1
            className={`${inter.className} leading-none font-bold text-transparent bg-radial-[at_50%_0%] from-[#FFFFFF] from-0% via-[#7300FF] via-50% to-[#2F0069] to-80% bg-clip-text text-[4.5rem] lg:text-[15svh] tracking-tighter px-5 lg:px-30 text-left`}
          >
            Hello<i>!</i>
          </h1>
        </div>

        {/* right half */}
        <div className="w-full lg:w-1/2 h-full px-5 pt-10 lg:px-20 lg:pt-40 text-white">
          {/* Email */}
          <div className="px-5 lg:pb-10 py-4">
            <h1
              className={`${inter.className} text-md opacity-80 capitalize`}
            >
              Email
            </h1>
            <a
              className={`${inter.className} text-sm transition-colors duration-400 text-[#7a33ff] hover:text-white hover:drop-shadow-[0_0_10px_#7a33ff]`}
              href="mailto:sushilpatil953825@gmail.com"
            >
              sushilpatil953825@gmail.com
            </a>
          </div>
          {/* Phone */}
          <div className="px-5 lg:pb-10 py-4">
            <h1
              className={`${inter.className} text-md opacity-80 capitalize`}
            >
              Phone
            </h1>
            <a
              className={`${inter.className} text-sm transition-colors duration-400 text-[#7a33ff] hover:text-white hover:drop-shadow-[0_0_10px_#7a33ff]`}
              href="tel:+918618912612"
            >
              +91 861 891 2612
            </a>
          </div>
          {/* Social */}
          <div className="px-5 lg:pb-10 py-4">
            <h1
              className={`${inter.className} text-md opacity-80 capitalize`}
            >
              social
            </h1>
            <div
              className={`${inter.className} text-sm flex flex-col lg:flex-row justify-between py-5 lg:py-0 lg:pr-20`}
            >
              <a className="transition-colors duration-400 text-[#7a33ff] hover:text-white hover:drop-shadow-[0_0_10px_#7a33ff]" href="https://www.linkedin.com/in/iamsushilpatil/">Linked In</a>
              <a className="transition-colors duration-400 text-[#7a33ff] hover:text-white hover:drop-shadow-[0_0_10px_#7a33ff]" href="https://github.com/tutheel">GitHub</a>
              <a className="transition-colors duration-400 text-[#7a33ff] hover:text-white hover:drop-shadow-[0_0_10px_#7a33ff]" href="https://leetcode.com/u/orbinus/">Leet Code</a>
              <a className="transition-colors duration-400 text-[#7a33ff] hover:text-white hover:drop-shadow-[0_0_10px_#7a33ff]" href="https://www.behance.net/Tutheel">Behance</a>
              <a className="transition-colors duration-400 text-[#7a33ff] hover:text-white hover:drop-shadow-[0_0_10px_#7a33ff]" href="https://x.com/tutheeel">Twitter</a>
              {/* <a className="transition-colors duration-400 text-[#7a33ff] hover:text-white hover:drop-shadow-[0_0_10px_#7a33ff]" href="http://">Instagram</a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full font-light text-sm lg:py-10">
        <div className={`${inter.className} text-center py-2 mt-5 capitalize`}>
          <h1 className="text-md">
            Designed & Developed by Sushil
          </h1>
          {/* <h1 className="text-lg font-semibold tracking-wide capitalize"> Sushil</h1> */}
        </div>
        <div
          className={`${inter.className} flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between px-8 capitalize text-center lg:text-left`}
        >
          <h1> &#169; 2025 Sushil. all rights reserved</h1>
          <h1 className="hidden lg:block lg:text-gray-400">
            Last Updated - Nov 17, 2025 at 02:31AM IST+5
          </h1>
          <h1 className="hidden lg:block">website still under development</h1>
        </div>
      </div>
    </section>
  );
}

export default Footer;
