import { Oswald, Poppins, Montserrat } from "next/font/google";
// import { useEffect, useRef } from "react";
import { gsap, CSSPlugin } from "gsap";
import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(CSSPlugin);

const montserrat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700"],
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

const currentDate = () => {
  const now = new Date();

  const day = now.getDate().toString().padStart(2, "0");
  const month = now.toLocaleString("en-US", { month: "short" }).toUpperCase(); // e.g. "MAY"
  const year = now.getFullYear();

  return { day, month, year };
};

const menuItems = [
  "About",
  "Skills",
  "Services",
  "Work",
  "Experience",
  "Contact",
];

const textOne =
  "I believe technology should be smart, seamless, and stylish. I make sure it’s all three.";
const texttwo = "I’m Designer & Creative Developer from Karnataka, India.";

function Hero() {
  const { day, month, year } = currentDate();
  // const heroTopSectionRef = useRef(null);
  // const gredSectionRef = useRef(null);
  // const heroSectionRef = useRef(null);
  // const scrollSectionRef = useRef(null);
  // const heroTextOneRef = useRef(null);
  // const heroTextTwoRef = useRef(null);
  // const heroTextThreeRef = useRef(null);
  // const tagLineRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);
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
    <section className="w-full min-h-screen flex flex-col bg-[#060606]">
      <div className="basis-[15%] flex flex-col md:flex-row justify-between items-start px-5 py-2 pt-4 gap-4">
        <span
          className={`w-full md:w-1/2 md:h-1/4 ${oswald.className} text-3xl md:text-4xl uppercase`}
        >
          <button className="text-transparent bg-gradient-to-b from-[#ffffff] from-40% to-[#636060] to-140% bg-clip-text">
            SUSHIL
          </button>
        </span>

        <span className="w-full md:w-1/2 md:h-3/4 flex flex-col md:flex-row md:gap-8 lg:gap-20">
          <span
            className={`text-left ${poppins.className} text-sm md:text-md hover:text-[#D8001B] transition duration-200 ease-in-out`}
          >
            {textOne}
          </span>
          <span
            className={`text-left ${poppins.className} text-sm md:text-md hover:text-[#D8001B] transition duration-200 ease-in-out`}
          >
            {texttwo}
          </span>
          <div
            className={`text-right md:text-left flex flex-col md:flex-col gap-2 md:gap-4 uppercase ${montserrat.className}`}
          >
            <div className="normalMenu hidden md:flex flex-col justify-center items-end">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-[#D8001B] transition"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="mobileMenu md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                className="text-white"
              >
                {isOpen ? <h1>Menu</h1> : <h1>Menu</h1>}
              </button>
            </div>
          </div>
        </span>
      </div>

      <div className="flex-8 basis-[80%] relative overflow-hidden bg-radial-[at_50%_-40%] from-[#D8001B] via-[#75020F] to-[#45050e26] from-0% via-55% to-95%">
        <h1
          className={`${poppins.className} hidden md:hidden lg:flex text-transparent bg-gradient-to-b from-[#ffffff] from-50% to-[#636060] to-110% bg-clip-text absolute lg:bottom-80 text-6xl md:text-6xl lg:text-[10vh] lg:left-1/5 whitespace-nowrap font-semibold`}
        >
          Code - Cloud - Creativiy
        </h1>
        <div
          className={`${poppins.className} text-transparent bg-gradient-to-b from-[#ffffff] from-50% via-[#ffffff] via-70%  to-[#636060] to-90% bg-clip-text absolute bottom-4 left-4 text-6xl md:text-6xl lg:text-[30vh] whitespace-nowrap font-semibold`}
        >
          Creative Developer - Designer
        </div>
      </div>

      <div
        className={`basis-[10%] border-t border-white/80 font-light text-xs md:text-sm flex flex-col md:flex-row justify-between items-center px-5 py-5 ${poppins.className}`}
      >
        <div className="mb-2 mt-5 lg:mt-0">
          {day} {month} {year}
        </div>
        <div className="mb-2 mt-5 lg:mt-0">Scroll Down</div>
        <div className="mb-2 mt-5 lg:mt-0">
          <a href="">Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
