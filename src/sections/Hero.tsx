"use client";
import DesignOrbs from "@/components/DesignOrbs";
import { Inter } from "next/font/google";
import { ChevronDown } from "lucide-react";
import { useLayoutEffect } from "react";
// import { useEffect, useRef } from "react";
// import { gsap, CSSPlugin } from "gsap";
// import { useEffect, useRef, useState } from "react";
// gsap.registerPlugin(CSSPlugin);

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
// const montserrat = Montserrat({
//   weight: ["200", "300", "400", "500", "600", "700"],
//   subsets: ["latin"],
// });

// const oswald = Oswald({
//   weight: ["200", "300", "400", "500", "600", "700"],
//   subsets: ["latin"],
// });
// const poppins = Poppins({
//   weight: ["200", "300", "400", "500", "600", "700"],
//   subsets: ["latin"],
// });

const currentDate = () => {
  const now = new Date();

  const day = now.getDate().toString().padStart(2, "0");
  const monthRaw = now.toLocaleString("en-US", { month: "short" });
  const month =
    monthRaw.charAt(0).toUpperCase() + monthRaw.slice(1).toLowerCase(); // e.g. "May"
  const year = now.getFullYear();

  return { day, month, year };
};

function Hero() {
  const { day, month, year } = currentDate();

  useLayoutEffect(() => {
      // if (!homePageRef.current || !navBarRef.current) return;
  
      // const ctx = gsap.context(() => {
      //   // Ensure starting state (don’t rely on Tailwind classes for animation start)
      //   gsap.set([homePageRef.current, navBarRef.current], { opacity: 0 });
  
      //   const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      //   tl.to(homePageRef.current, { opacity: 1, duration: 1 })
      //     // start navbar slightly before the previous finishes
      //     .to(
      //       navBarRef.current,
      //       { opacity: 1, duration: 1.2, delay: 0.2 },
      //       "-=0.4"
      //     );
      // });
  
      // return () => ctx.revert();
    });

  // const [isOpen, setIsOpen] = useState(false);
  // const menuRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (isOpen) {
  //     gsap.fromTo(
  //       menuRef.current,
  //       { height: 0, opacity: 0 },
  //       {
  //         height: "auto",
  //         opacity: 1,
  //         duration: 0.4,
  //         ease: "power2.out",
  //       }
  //     );
  //   } else {
  //     gsap.to(menuRef.current, {
  //       height: 0,
  //       opacity: 0,
  //       duration: 0.3,
  //       ease: "power2.inOut",
  //     });
  //   }
  // }, [isOpen]);

  // useEffect(() => {
  //   reveal();
  // }, []);

  // const reveal = () => {
  //   const t1 = gsap.timeline({
  //     onComplete: () => {
  //       console.log("Completed!");
  //     },
  //   });

  //   t1.to(heroTopSectionRef.current, {
  //     opacity: "100%",
  //     delay: 0.5,
  //     duration: 1.5,
  //     ease: "Power3.easeInOut",
  //   })
  //     .to(gredSectionRef.current, {
  //       opacity: "100%",
  //       duration: 0.5,
  //       ease: "Power3.easeInOut",
  //     })
  //     .to(heroSectionRef.current, {
  //       opacity: "100%",
  //       duration: 0.5,
  //       ease: "Power3.easeInOut",
  //     })
  //     .to(heroTextOneRef.current, {
  //       opacity: "100%",
  //       y: 0,
  //       duration: 0.8,
  //       ease: "Power3.easeInOut",
  //     })
  //     .to(heroTextTwoRef.current, {
  //       opacity: "100%",
  //       y: 0,
  //       duration: 0.8,
  //       ease: "Power3.easeInOut",
  //     })
  //     .to(heroTextThreeRef.current, {
  //       opacity: "100%",
  //       y: 0,
  //       duration: 0.8,
  //       ease: "Power3.easeInOut",
  //     })
  //     .to(tagLineRef.current, {
  //       opacity: "100%",
  //       y: 0,
  //       duration: 0.8,
  //       ease: "Power3.easeInOut",
  //     })
  //     .to(scrollSectionRef.current, {
  //       opacity: "100%",
  //       duration: 0.5,
  //       ease: "Power3.easeInOut",
  //     });
  // };

  return (
    <section className="w-full h-screen bg-linear-to-b lg:bg-radial-[at_50%_160%] from-[#240051] to-[#000000] to-60%">
      {/* hero head */}
      <div className="relative w-full h-11/12 lg:h-11/12">
        {/* text */}
        <div className="absolute inset-0 w-full h-full flex flex-col justify-start lg:justify-center items-center z-10 pt-20 lg:pt-20 text-center">
          <h1
            className={`${inter.className} text-white text-3xl lg:text-5xl font-light tracking-tighter`}
          >
            Hello I&apos;m
          </h1>
          <h1
            className={`${inter.className} text-white text-6xl lg:text-[17vh] font-normal tracking-tighter leading-none`}
          >
            Sushil Patil
          </h1>
          <h1 className={`${inter.className} text-white text-md lg:text-md font-normal`}>
            Developer & Designer
          </h1>
          <h1
            className={`${inter.className} text-gray-400 text-sm lg:text-md font-normal`}
          >
            From Karnataka, India
          </h1>
        </div>
        {/* design */}
        <div className="lg:relative lg:w-full lg:h-11/12 lg:top-12 lg:blur-[1px]">
          {/* design layer behind the text */}
          <DesignOrbs />
        </div>
        {/* mobile hero image at bottom (show bottom half) */}
        <div className="absolute inset-x-0 bottom-0 h-full lg:hidden overflow-hidden flex items-end justify-center z-50">
          <div className="relative">
            <img
              src="/Sushil.png"
              alt="Portrait of Sushil Patil"
              className="w-100 h-145 object-cover object-bottom -mb-15"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/100 via-black/10 to-transparent" />
          </div>
        </div>
      </div>

      {/* hero footer */}
      <div className="relative w-full h-1/12 lg:h-1/12 flex flex-row justify-between items-center text-sm text-center z-100">
        <div className="pl-5 text-white lg:mt-0 font-light normal-case lg:font-medium transition-colors duration-400 ease-out hover:text-[#7327ff] hover:drop-shadow-[0_2px_20px_#4C00D8]">
          {day}-{month} {year}
        </div>
        <div className="pr-6 lg:pr-8 lg:mt-0 text-xs text-white flex items-center justify-center cursor-default hover:tracking-widest transform duration-200 ease-in-out">
          <ChevronDown className="w-5 h-5" />
        </div>
        <div className="text-white lg:mt-0 font-light capitalize lg:font-medium">
          <a
            className="transition-colors pr-5 duration-500 ease-out hover:text-[#7327ff] hover:drop-shadow-[0_0px_5px_#7327ff]"
            href="/Sushils%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
