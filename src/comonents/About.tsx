import React from "react";
import Image from "next/image";
import { Comforter, Oswald, Poppins } from "next/font/google";

const comforter = Comforter({
  weight: ["400"],
  subsets: ["latin"],
});

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const textOne: string =
  "A developer and designer with a love for all things tech and visual. I’m passionate about coding, 3D design, and digital art, always exploring the intersection of creativity & technology.";

const textThree: string =
  "When I’m not building digital experiences, you’ll probably find me swimming or sketching out my next idea.";

const textTwo: string =
  "I believe in simple, thoughtful design backed by solid code & I’m always up for creating something that stands out.";

function About() {
  return (
    <>
      <section className="bg-[#060606]">
        <div className="w-full h-40 lg:h-52 flex items-center-safe justify-center">
          <h1
            className={`${poppins.className} text-transparent bg-gradient-to-b from-[#75020F] from-0%  to-[#19171B] to-70% bg-clip-text font-bold text-4xl md:text-5xl lg:text-9xl`}
          >
            Who am I?
          </h1>
        </div>
        <div className="w-full h-20 lg:h-30 flex flex-col justify-start items-center-safe">
          <h1
            className={`${poppins.className} font-medium tracking-tighter text-2xl lg:text-4xl`}
          >
            Hello, I'm
          </h1>
          <h1
            className={`${poppins.className} font-medium tracking-tighter text-4xl lg:text-6xl`}
          >
            Sushil Patil
          </h1>
        </div>
        <section className="relative w-full h-[80vh] lg:mt-5 overflow-hidden">
          {/* Background Text */}
          <h1
            className={`${comforter.className} top-0 absolute inset-0 flex items-center justify-center text-[34vw] -rotate-6 lg:pr-35 tracking-tight font-bold z-0 pointer-events-none select-none text-transparent bg-gradient-to-b from-[#ffffff] from-40% to-[#636060] to-60% bg-clip-text lg:pt-15`}
          >
            Sushil
          </h1>

          {/* Image at the bottom with shadow */}
          <div className="absolute bottom-0 w-full z-10 flex justify-center">
            <div className="relative">
              {/* Your Image */}
              <Image
                src="/Sushil.png"
                alt="Your Image"
                width={300}
                height={400}
                className="w-96 md:w-72 lg:w-100 h-auto object-contain relative z-0"
              />

              {/* Black Overlay on bottom part of the image */}
              <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-[#060606]/100 to-transparent to-100% z-10 pointer-events-none" />
            </div>
          </div>
        </section>
        <div className="w-full h-[80vh] md:h-[100vh] lg:h-[90vh] py-20 lg:pt-5">
          <h1 className="text-2xl md:text-[5.5vh] lg:ml-25 capitalize text-gray-400 lg:leading-[7.5vh] py-5 lg:py-10 px-8 lg:px-20 lg:tracking-tight text-right">{textOne}</h1>
          <h1 className="text-2xl md:text-[5.5vh] lg:mr-25 capitalize text-gray-400 lg:leading-[7.5vh] py-5 lg:py-10 px-8 lg:px-20 lg:tracking-tight text-left">{textTwo}</h1>
          <h1 className="text-2xl md:text-[5.5vh] lg:ml-25 capitalize text-gray-400 lg:leading-[7.5vh] py-5 lg:py-10 px-8 lg:px-20 lg:tracking-tight text-right">{textThree}</h1>
        </div>
      </section>
    </>
    // <div className="w-full h-[130svh] bg-white overflow-hidden">
    //   <div className="h-[65svh] flex flex-col items-center justify-end-safe relative z-10">
    //     <div
    //       className={`${oswald.className} text-[25vw] bg-linear-180 from-[#fff200] from-10% via-[#ff7300] via-50% to-[#c402ce] to-80% bg-clip-text text-transparent tracking-tighter uppercase z-10 mt-5`}
    //     >
    //       ABOUT ME
    //     </div>
    //     <div className="w-[40vw] h-[40svh] absolute z-20 ">
    //       <img src="/Sushil.png" alt="" />
    //     </div>
    //   </div>
    //   <div className="w-full h-[65svh] absolute z-30 flex items-start justify-between px-15">
    //     <div
    //       className={`flex flex-col items-start justify-center gap-2 space-y-4`}
    //     >
    //       <div
    //         className={` w-[30vw] ${oswald.className} bg-linear-180 from-[#ff7300] from-10% via-[#ff7300] via-50% to-[#c402ce] to-80% bg-clip-text text-transparent font-medium tracking-tight text-5xl mt-14`}
    //       >
    //         I am Sushil Patil
    //       </div>
    //       <div
    //         className={`w-[23vw] ${poppins.className} text-[#19171b] text-justify font-semibold text-md`}
    //       >
    //         {textOne}
    //       </div>
    //     </div>
    //     <div className="flex flex-col items-start justify-center gap-5 space-y-4 mt-[4%] text-justify">
    //       <div
    //         className={` w-[23vw]  ${poppins.className} text-[#19171b] font-semibold text-md `}
    //       >
    //         {textTwo}
    //       </div>
    //       <div
    //         className={` w-[23vw]  ${poppins.className} text-[#19171b] font-semibold text-md `}
    //       >
    //         {textThree}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default About;
