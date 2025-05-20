import React from "react";
import { Oswald, Poppins } from "next/font/google";

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

function NavBar() {
  return (
    <div className="w-full h-[5svh] pl-2 pr-2 invert flex flex-row items-center justify-between upppercase scrollbar-none">
      <div
        className={`w-1/2 text-2xl font-bold  ${oswald.className} upppercase tracking-tight`}
      >
        SUSHIL
      </div>
      <div
        className={`w-1/2 text-2xl font-bold  ${oswald.className} tracking-tighter flex flex-row items-center justify-between `}
      >
        <a href="#home" className="text-xl font-medium tracking-normal uppercase">
          Home
        </a>
        <a href="#about" className="text-xl font-medium tracking-normal uppercase">
          About
        </a>
        <a href="#skills" className="text-xl font-medium tracking-normal uppercase">
          Skills
        </a>
        <a href="#projects" className="text-xl font-medium tracking-normal uppercase">
          Projects
        </a>
        <a href="#contact" className="text-xl font-medium tracking-normal uppercase">
          Contact
        </a>
      </div>
      {/* <div className="w-[10vw] h-[5svh] flex items-center justify-center">
      </div> */}
      {/* <div className="text-2xl font-bold invert">SUSHIL</div>
      <div className="flex space-x-4">
        <a href="#home" className="text-lg text-[#000000] hover:text-[#007bff]">
          Home
        </a>
        <a href="#about" className="text-lg text-[#000000] hover:text-[#007bff]">
          About
        </a>
        <a href="#services" className="text-lg text-[#000000] hover:text-[#007bff]">
          Services
        </a>
        <a href="#contact" className="text-lg text-[#000000] hover:text-[#007bff]">
          Contact
        </a>
      </div> */}
    </div>
  );
}

export default NavBar;
