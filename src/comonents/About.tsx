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
    <div className="w-full h-[130svh] bg-white overflow-hidden">
      <div className="h-[65svh] flex flex-col items-center justify-end-safe relative z-10">
        <div
          className={`${oswald.className} text-[25vw] bg-linear-180 from-[#fff200] from-10% via-[#ff7300] via-50% to-[#c402ce] to-80% bg-clip-text text-transparent tracking-tighter uppercase z-10 mt-5`}
        >
          ABOUT ME
        </div>
        <div className="w-[40vw] h-[40svh] absolute z-20 ">
          <img src="/Sushil.png" alt="" />
        </div>
      </div>
      <div className="w-full h-[65svh] absolute z-30 flex items-start justify-between px-15">
        <div
          className={`flex flex-col items-start justify-center gap-2 space-y-4`}
        >
          <div
            className={` w-[30vw] ${oswald.className} bg-linear-180 from-[#ff7300] from-10% via-[#ff7300] via-50% to-[#c402ce] to-80% bg-clip-text text-transparent font-medium tracking-tight text-5xl mt-14`}
          >
            I am Sushil Patil
          </div>
          <div
            className={`w-[23vw] ${poppins.className} text-[#19171b] text-justify font-semibold text-md`}
          >
            {textOne}
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-5 space-y-4 mt-[4%] text-justify">
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
  );
}

export default About;
