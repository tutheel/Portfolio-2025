import React from "react";
import { Oswald, Poppins } from "next/font/google";

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const Experience = () => {
  return (
    <section className="bg-[#060606]">
      <div className="w-full h-30 lg:h-52 flex items-center-safe justify-center translate-y-10">
        <h1
          className={`${poppins.className} capitalize text-transparent bg-gradient-to-b from-[#75020F] from-0%  to-[#19171B] to-70% bg-clip-text font-bold text-4xl md:text-4xl lg:text-8xl`}
        >
          my journey so far...
        </h1>
      </div>
      <div className="py-10 px-5 md:px-20">
        <div className="flex flex-row justify-start-safe items-center-safe gap-2 lg:gap-5">
          <h1
            className={`${poppins.className} text-2xl lg:text-5xl text-transparent bg-gradient-to-b from-[#ffffff] from-25%  to-[#19171B] to-120% bg-clip-text pb-2 capitalize`}
          >
            Work Experience
          </h1>
          <div className="w-5 h-5 lg:w-10 lg:h-10 -mt-1 rounded-full bg-linear-to-b from-[#75020F] from-12%  to-[#2B0307] to-100%" />
        </div>
        <div className="my-4 h-[2px] w-full bg-radial from-[#ffffff] from-0%  to-[#19171B] to-100%" />
        <div className=" w-full flex flex-col md:flex-row justify-start items-start">
          <span className="w-full md:w-2/6 capitalize">
            <h1 className={`${poppins.className} text-2xl`}>Accenture</h1>
            <h1 className={`${poppins.className} text-xl italic font-semibold`}>
              Software Developer
            </h1>
            <h1 className={`${poppins.className} text-xl italic opacity-60`}>
              Dec 2024 - Present
            </h1>
          </span>
          <span
            className={`${poppins.className} w-full md:w-4/6 pt-5 md:pt-0 px-5 md:px-0`}
          >
            <ul className="list-disc list-outside">
              <li className="pb-5 text-just">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                voluptas sint animi deleniti nostrum facilis minus
                necessitatibus libero nobis inventore molestias odit, officia
                quam. Nam reprehenderit quisquam debitis quos repellendus?
              </li>
              <li className="pb-5 text-just">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                voluptas sint animi deleniti nostrum facilis minus
                necessitatibus libero nobis inventore molestias odit, officia
                quam. Nam reprehenderit quisquam debitis quos repellendus?
              </li>
            </ul>
          </span>
        </div>
        <div className="my-4 h-[2px] w-full bg-white opacity-10" />
        <div className=" w-full flex flex-col md:flex-row justify-start items-start">
          <span className="w-full md:w-2/6 capitalize">
            <h1 className={`${poppins.className} text-2xl bg-linear-to-b from-[#D8001B] via-[#75020F] to-[#45050e26] from-0% via-55% to-95% text-transparent bg-clip-text`}>Accenture</h1>
            <h1 className={`${poppins.className} text-xl italic  font-semibold`}>
              Accociate Software Developer
            </h1>
            <h1 className={`${poppins.className} text-xl italic opacity-60`}>
              Dec 2022 - Nov 2024
            </h1>
          </span>
          <span
            className={`${poppins.className} w-full md:w-4/6 pt-5 md:pt-0 px-5 md:px-0`}
          >
            <ul className="list-disc list-outside">
              <li className="pb-5 text-just">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                voluptas sint animi deleniti nostrum facilis minus
                necessitatibus libero nobis inventore molestias odit, officia
                quam. Nam reprehenderit quisquam debitis quos repellendus?
              </li>
              <li className="pb-5 text-just">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                voluptas sint animi deleniti nostrum facilis minus
                necessitatibus libero nobis inventore molestias odit, officia
                quam. Nam reprehenderit quisquam debitis quos repellendus?
              </li>
            </ul>
          </span>
        </div>
      </div>
      <div className="py-10 md:mt-20 px-5 md:px-20">
        <div className="flex flex-row justify-start-safe items-center-safe gap-2 lg:gap-5">
          <h1
            className={`${poppins.className} text-2xl lg:text-5xl text-transparent bg-gradient-to-b from-[#ffffff] from-25%  to-[#19171B] to-120% bg-clip-text pb-2 capitalize`}
          >
            Education
          </h1>
          <div className="w-5 h-5 lg:w-10 lg:h-10 -mt-1 rounded-full bg-linear-to-b from-[#75020F] from-12%  to-[#2B0307] to-100%" />
        </div>
        <div className="my-4 h-[2px] w-full bg-radial from-[#ffffff] from-0%  to-[#19171B] to-100%" />
        <div className=" w-full flex flex-col md:flex-row justify-between items-start ">
          <span className="w-full md:w-3/6 capitalize">
            <h1 className={`${poppins.className} text-2xl`}>Gogte instite of technology, Karnataka</h1>
            <h1 className={`${poppins.className} text-xl`}>
              B.tech - Electronics & Electronics Engineering
            </h1>
          </span>
          <span>
            <h1 className={`${poppins.className} w-full text-xl italic opacity-60`}>
              Aug 2018 - July 2022
            </h1>
          </span>
        </div>
        <div className="my-4 h-[2px] w-full bg-white opacity-10 mb-30" />
      </div>
    </section>
  );
};

export default Experience;
