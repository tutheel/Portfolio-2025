import React from "react";
import { Oswald, Poppins, Smooch } from "next/font/google";

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});
const smooch = Smooch({
  weight:  "400",
  subsets: ["latin"],
  style: ["normal"],
});
function Footer() {
  return (
    <section className="bg-[#060606] px-10">
      {/* add translate-y-20 */}
      <div className="w-full h-30 lg:h-52 flex items-center-safe justify-center">
        <h1
          className={`${poppins.className} capitalize text-transparent bg-gradient-to-b from-[#75020F] from-0%  to-[#19171B] to-70% bg-clip-text font-bold text-4xl md:text-4xl lg:text-8xl`}
        >
          dont be a stranger!!!
        </h1>
      </div>
      <div className="w-full flex flex-row pt-10">
        <div className="w-full">
          <h1
            className={`${poppins.className} text-2xl capitalize font-medium text-center`}
          >
            big ideas start with simple
          </h1>
          <h1
            className={`${smooch.className} text-9xl capitalize text-center mt-12 -rotate-10`}
            //  text-transparent bg-gradient-to-b from-[#D8001B] via-[#75020F] from-10% to-120% bg-clip-text
          >
            Hello!
          </h1>
        </div>
        <div className="w-full">
          <div className="pb-8">
            <h1
              className={`${poppins.className} text-lg opacity-60 capitalize pb-2`}
            >
              Email
            </h1>
            <a
              className={`${poppins.className} text-md`}
              href="mailto:sushilpatil953825@gmail.com"
            >
              sushilpatil953825@gmail.com
            </a>
          </div>
          <div className="pb-8">
            <h1
              className={`${poppins.className} text-lg opacity-60 capitalize pb-2`}
            >
              Phone
            </h1>
            <a
              className={`${poppins.className} text-md`}
              href="tel:+918618912612"
            >
              +91 861 891 2612
            </a>
          </div>
          <div className="pb-8">
            <h1
              className={`${poppins.className} text-lg opacity-60 capitalize pb-2`}
            >
              social
            </h1>
            <div
              className={`${poppins.className} flex flex-row justify-between pr-20`}
            >
              <a href="http://">linked In</a>
              <a href="https://github.com/tutheel">GitHub</a>
              <a href="http://">Behance</a>
              <a href="http://">Twitter</a>
              <a href="http://">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${poppins.className} text-center py-10 capitalize`}>
        <h1 className="text-lg font-medium">Designed & Developed by Sushil</h1>
        {/* <h1 className="text-lg font-semibold tracking-wide capitalize"> Sushil</h1> */}
      </div>
      <div className={`${poppins.className} text-5xl w-full h-80 flex justify-center-safe items-center-safe font-semibold rounded-3xl bg-radial-[at_50%_0%] from-[#D8001B] via-[#75020F] to-[#45050e26] from-0% via-55% to-120% capitalize`}> Code Cloud Creativity</div>
      <div className={`${poppins.className} flex flex-row justify-between py-8 capitalize`}>
        <h1> &#169; 2025 Sushil. all rights reserved</h1>
        <h1>website still under development</h1>
      </div>
    </section>
  );
}

export default Footer;
