import React from "react";
import { Oswald, Poppins, Six_Caps } from "next/font/google";

const sixCaps = Six_Caps({
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

const textOne: string =
  "A developer and designer with a love for all things tech and visual. I’m passionate about coding, 3D design, and digital art, always exploring the intersection of creativity & technology.";

const textTwo: string =
  "When I’m not building digital experiences, you’ll probably find me swimming or sketching out my next idea.";

const textThree: string =
  "I believe in simple, thoughtful design backed by solid code & I’m always up for creating something that stands out.";

function About() {
  return (
    <div className="w-full h-screen bg-[#19171b] overflow-hidden scrollbar-none">
      <div className="w-full h-full bg-radial-[at_50%_100%] from-[#fff200] via-[#ff7300] to-[#c402ce]  to-110% relative">
        <div className="flex flex-col items-center justify-end-safe relative z-10">
          <div
            className={`${sixCaps.className} text-white text-[30vw] tracking tracking-tight uppercase z-10 -m-30`}
          >
            ABOUT ME
          </div>
          <div className="w-[35vw] h-[35svh] absolute z-20 m-35">
            <img src="/Sushil.png" alt="" />
          </div>
        </div>
        <div className="w-full h-[5svh] absolute z-30 flex items-end-safe justify-between pr-15 pl-15 pb-4">
          <div
            className={`flex flex-col items-start justify-center gap-2 space-y-4`}
          >
            <div
              className={` w-[30vw] ${oswald.className} text-white font-medium tracking-tight text-5xl mt-14`}
            >
              I am Sushil Patil
            </div>
            <div
              className={`w-[23vw] ${poppins.className} text-[#19171b] text-left font-semibold text-md`}
            >
              {textOne}
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-5 space-y-4 mt-[4%] text-left">
            <div
              className={` w-[23vw]  ${poppins.className} text-[#19171b] font-semibold text-md `}
            >
              {textTwo}
            </div>
            <div
              className={` w-[23vw]  ${poppins.className} text-[#19171b] font-semibold text-md `}
            >
              {textThree}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
