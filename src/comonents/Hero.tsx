import { Inter } from "next/font/google";
// import { useEffect, useRef } from "react";
// import { gsap, CSSPlugin } from "gsap";
import { useEffect, useRef, useState } from "react";
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
  const month = now.toLocaleString("en-US", { month: "short" }).toUpperCase(); // e.g. "MAY"
  const year = now.getFullYear();

  return { day, month, year };
};

function Hero() {
  const { day, month, year } = currentDate();

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
    <section className="w-full h-screen bg-radial-[at_50%_120%] from-[#240051]  to-[#000000] to-90%">
      {/* hero head */}
      <div className="relative w-full h-11/12">
        {/* text */}
        <div className=" absolute inset-0 w- full h-full flex flex-col justify-center items-center z-10 pt-20">
          <h1
            className={`${inter.className} text-white text-5xl font-light tracking-tighter`}
          >
            Hello I&apos;m
          </h1>
          <h1
            className={`${inter.className} text-white text-[15vh] font-normal tracking-tighter leading-none`}
          >
            Sushil Patil
          </h1>
          <h1 className={`${inter.className} text-white text-xl font-medium`}>
            Creative Developer & Designer
          </h1>
          <h1
            className={`${inter.className} text-gray-500 text-xl font-medium`}
          >
            From Karnataka, India
          </h1>
        </div>
        {/* design */}
        <div className="absolute inset-0 flex justify-between items-center z-0 pointer-events-none blur-[1px] pt-8">
          {/* Left image: show only right half */}
          <div className="relative w-[400px] h-[800px] overflow-hidden flex-shrink-0">
            <div
              className="absolute left-0 top-0 w-[800px] h-[800px] animate-[spin_30s_linear_infinite_reverse]"
              style={{
                WebkitMaskImage: `url(/indian.png)`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                maskImage: `url(/indian.png)`,
                maskRepeat: "no-repeat",
                maskSize: "cover",
                background: "radial-gradient(#F0F0F0, #4C00D8, #060606);",
                left: "-400px", // half of 800px
                top: "0",
              }}
            />
          </div>
          {/* Right image: show only left half */}
          <div className="relative w-[400px] h-[800px] overflow-hidden flex-shrink-0">
            <div
              className="absolute left-0 top-0 w-[800px] h-[800px] animate-[spin_30s_linear_infinite]"
              style={{
                WebkitMaskImage: `url(/indian.png)`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                maskImage: `url(/indian.png)`,
                maskRepeat: "no-repeat",
                maskSize: "cover",
                background: "radial-gradient(#F0F0F0, #4C00D8, #060606);",
                left: "0",
                top: "0",
              }}
            />
          </div>
        </div>
      </div>

      {/* hero footer */}
      <div className="w-full h-1/12 flex flex-col md:flex-row justify-between items-center px-5">
        <div className="mb-2 mt-5 text-gray-500 lg:mt-0 font-medium">
          {day} {month} {year}
        </div>
        <div className="mb-2 mt-5 lg:mt-0">Scroll Down</div>
        <div className="mb-2 mt-5 text-gray-500 lg:mt-0 font-medium">
          <a href="">Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
