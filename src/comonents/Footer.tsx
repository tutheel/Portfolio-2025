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
    <section className="w-full h-[100svh] bg-radial-[at_50%_-10%] from-[#240051] from-0%  to-[#000000] to-75% flex flex-col items-center">
      <div className="w-full h-[80svh] flex justify-around items-start">
        {/* left half */}
        <div className="w-1/2 h-full">
          <h1
            className={`${inter.className} leading-none font-bold text-transparent bg-radial-[at_70%_10%] from-[#7300FF] from--10% via-[#2F0069] via-75% to-[#110130] to-90% bg-clip-text text-[15svh] tracking-tighter pt-30 pl-30 pr-30 text-left`}
          >
            Big Ideas Start With Simple
          </h1>
          <h1
            className={`${inter.className} leading-none font-bold text-transparent bg-radial-[at_50%_0%] from-[#FFFFFF] from-0% via-[#7300FF] via-50% to-[#2F0069] to-80% bg-clip-text text-[15svh] tracking-tighter pl-30 pr-30 text-left`}
          >
            Hello
          </h1>
        </div>

        {/* right half */}
        <div className="w-1/2 h-full px-30 pt-30 text-xl">
          {/* Email */}
          <div className="pb-20">
            <h1
              className={`${inter.className} text-lg opacity-60 capitalize pb-2`}
            >
              Email
            </h1>
            <a
              className={`${inter.className} text-md`}
              href="mailto:sushilpatil953825@gmail.com"
            >
              sushilpatil953825@gmail.com
            </a>
          </div>
          {/* Phone */}
          <div className="pb-20">
            <h1
              className={`${inter.className} text-lg opacity-60 capitalize pb-2`}
            >
              Phone
            </h1>
            <a
              className={`${inter.className} text-md`}
              href="tel:+918618912612"
            >
              +91 861 891 2612
            </a>
          </div>
          {/* Social */}
          <div className="pb-20">
            <h1
              className={`${inter.className} text-lg opacity-60 capitalize pb-2`}
            >
              social
            </h1>
            <div
              className={`${inter.className} flex flex-row justify-between pr-20`}
            >
              <a href="http://">Linked In</a>
              <a href="https://github.com/tutheel">GitHub</a>
              <a href="http://">Leet Code</a>
              <a href="http://">Behance</a>
              <a href="http://">Twitter</a>
              <a href="http://">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[20svh] font-light">
        <div className={`${inter.className} text-center py-5 capitalize pt-10`}>
          <h1 className="text-lg">
            Designed & Developed by Sushil
          </h1>
          {/* <h1 className="text-lg font-semibold tracking-wide capitalize"> Sushil</h1> */}
        </div>
        <div
          className={`${inter.className} flex flex-row justify-between px-8 capitalize`}
        >
          <h1> &#169; 2025 Sushil. all rights reserved</h1>
          <h1 className="text-gray-400"> Last Updated - July 28, 2025 at 6:24PM IST+5</h1>
          <h1>website still under development</h1>
        </div>
      </div>
    </section>
  );
}

export default Footer;
