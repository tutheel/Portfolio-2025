import React from "react";
// import Image from "next/image";
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

const textOne: string =
  "Hi ! I’m Sushil. A designer-developer hybrid crafting smooth, modern web experiences. From UI animations to AWS-powered serverless workflows, this portfolio is a blend of my creative and technical sides.";

// const textThree: string =
//   "When I’m not building digital experiences, you’ll probably find me swimming or sketching out my next idea.";

// const textTwo: string =
//   "I believe in simple, thoughtful design backed by solid code & I’m always up for creating something that stands out.";

function About() {
  return (
    <>
      <section className="w-full h-[110svh] bg-radial-[at_50%_0%] from-[#240051] from-0%  to-[#000000] to-75% flex flex-col items-center">
        <div className={`w-full ${inter.className} flex flex-row items-center justify-evenly px-80 pb-10 pt-60`}>
          <h1 className="font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">for Everyone</h1>
          <h1 className="font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">Recruiters</h1>
          <h1 className="font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">Collaborators</h1>
        </div>
        <h1 className={`${inter.className} text-4xl text-center px-80`}>
          {textOne}
        </h1>
        <div className={`w-full ${inter.className} flex flex-row items-center justify-between px-25 pt-60`}>
          <h1 className="font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">for Everyone</h1>
          <h1 className="font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">Recruiters</h1>
          <h1 className="font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">Collaborators</h1>
          <h1 className="font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">Collaborators</h1>
          <h1 className="font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">Collaborators</h1>
        </div>
        <h1 className={`${inter.className} leading-none font-bold text-transparent bg-radial-[at_50%_0%] from-[#7300FF] from-0% via-[#2F0069] via-60% to-[#110130] to-80% bg-clip-text text-[35svh] tracking-tighter text-center`}>
          About Sushil
        </h1>
      </section>
    </>
  );
}

export default About;
