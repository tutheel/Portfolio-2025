import React from "react";
import { Geist, Oswald, Poppins } from "next/font/google";

const geist = Geist({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

function Skills() {
  return (
    <div className="w-full h-screen bg-[#19171b] flex flex-col items-center justify-center scrollbar-none">
      {/* Hover text */}
      <div className="w-full h-[50%] flex flex-col justify-end">
        <div
          className={`w-full ${oswald.className} tracking-tight font-semibold uppercase flex flex-col items-center  text-[20vw] leading-none`}
        >
          skills
        </div>
      </div>

      {/* Skill Block */}
      <div className="w-full h-[45%] flex flex-row items-center justify-evenly">
        <div className="w-1/3 h-full bg-white flex flex-row items-center justify-center">
          <div className="w-[20%] h-full text-black flex flex-row items-center justify-center">
            <div className="rotate-270 flex flex-row items-center justify-center gap-2 -mb-18 mr-5">
              <div className="text-6xl">Designer</div>
              <div className="w-10 h-10 mt-3 bg-[#ff7300] rounded-full" />
            </div>
          </div>
          <div className="w-[80%] h-full text-right text-black pr-5 pt-2">
            hello
          </div>
        </div>
        <div className="w-1/3 h-full bg-gray-500 flex flex-row items-center justify-center">
          <div className="w-[20%] h-full text-white  flex flex-row items-center justify-center">
            <div className="rotate-270 flex flex-row items-center justify-center gap-2 mb-5">
              <div className="w-10 h-10  bg-[#ff7300] rounded-full" />
              <div className="text-6xl">Developer</div>
            </div>
          </div>
          <div className="w-[80%] h-full text-right text-white pr-5 pt-2">
            hello
          </div>
        </div>
        <div className="w-1/3 h-full bg-black flex flex-row items-center justify-center">
          <div className="w-[20%] h-full text-white  flex flex-row items-center justify-center">
            <div className="rotate-270 flex flex-row items-center justify-center gap-2 -mb-52 mr-5">
              <div className="text-6xl">Art</div>
              <div className="w-10 h-10 mt-3 bg-[#ff7300] rounded-full" />
            </div>
          </div>
          <div className="w-[80%] h-full text-right text-white pr-5 pt-2">
            hello
          </div>
        </div>
      </div>
      <div className="w-full h-[5%] flex flex-row items-center justify-center">
        <p className={`${poppins.className}`}>
          Skills page is still under development
        </p>
      </div>
    </div>
  );
}
export default Skills;
