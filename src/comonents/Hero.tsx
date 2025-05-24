import { Oswald, Poppins } from "next/font/google";
import { useEffect, useRef } from "react";
import { gsap, CSSPlugin } from "gsap";
gsap.registerPlugin(CSSPlugin);

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

const content = {
  heroWords: ["Code", "Cloud", "Creativity"],
};

function Hero() {
  const { day, month, year } = currentDate();
  const heroTopSectionRef = useRef(null);
  const gredSectionRef = useRef(null);
  const heroSectionRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const heroTextOneRef = useRef(null);
  const heroTextTwoRef = useRef(null);
  const heroTextThreeRef = useRef(null);
  const tagLineRef = useRef(null);

  useEffect(() => {
    reveal();
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("Completed!");
      },
    });

    t1.to(heroTopSectionRef.current, {
      opacity: "100%",
      delay: 0.5,
      duration: 1.5,
      ease: "Power3.easeInOut",
    })
      .to(gredSectionRef.current, {
        opacity: "100%",
        duration: 0.5,
        ease: "Power3.easeInOut",
      })
      .to(heroSectionRef.current, {
        opacity: "100%",
        duration: 0.5,
        ease: "Power3.easeInOut",
      })
      .to(scrollSectionRef.current, {
        opacity: "100%",
        duration: 0.5,
        ease: "Power3.easeInOut",
      })
      .to(heroTextOneRef.current, {
        opacity: "100%",
        y: 0,
        duration: 0.8,
        ease: "Power3.easeInOut",
      })
      .to(heroTextTwoRef.current, {
        opacity: "100%",
        y: 0,
        duration: 0.8,
        ease: "Power3.easeInOut",
      })
      .to(heroTextThreeRef.current, {
        opacity: "100%",
        y: 0,
        duration: 0.8,
        ease: "Power3.easeInOut",
      })
      .to(tagLineRef.current, {
        opacity: "100%",
        y: 0,
        duration: 0.8,
        ease: "Power3.easeInOut",
      });
  };

  return (
    <section
      ref={heroTopSectionRef}
      className="w-full h-[110svh] bg-[#0c0c0c] opacity-0"
    >
      {/* Gradient Section */}
      <div
        ref={gredSectionRef}
        className="opacity-0 w-full h-[30svh] bg-radial-[at_50%_100%] from-[#fff200] via-[#ff7300] to-[#c402ce] to-90% flex items-end justify-end overflow-hidden uppercase pr-2"
      >
        <div
          className={`text-7xl tracking-tighter font-bold text-right ${oswald.className}`}
        >
          {/* add your Margue here also */}
          {/* <div className="invert">Artist</div>
          <div className="invert">Designer</div>
          <div className="invert">Developer</div> */}
          {/* <div className="invert">Developer & Designer</div> */}
        </div>
      </div>
      {/* Hero Section */}
      <div
        ref={heroSectionRef}
        className="opacity-0 w-full h-[55svh] flex flex-row items-start-safe justify-between"
      >
        <div
          className={`basis-1/2 text-9xl tracking-tight font-medium ml-2 mt-2 ${poppins.className} text-white`}
        >
          <div ref={heroTextOneRef} className="opacity-0 translate-y-10 bg-linear-180 from-[#fff200] from-10% via-[#ff7300] via-50% to-[#c402ce] to-80% bg-clip-text text-transparent">
            Code
          </div>
          <div ref={heroTextTwoRef} className="opacity-0 translate-y-10 bg-linear-180 from-[#fff200] from-10% via-[#ff7300] via-50% to-[#c402ce] to-80% bg-clip-text text-transparent">
            Cloud
          </div>
          <div ref={heroTextThreeRef} className="opacity-0 translate-y-10 bg-linear-180 from-[#fff200] from-10% via-[#ff7300] via-50% to-[#c402ce] to-80% bg-clip-text text-transparent">
            Creativity
          </div>
        </div>

        <div className="w-1/2 text-md mt-2 mr-5 flex flex-row justify-end-safe">
          <div ref={tagLineRef} className={`opacity-0 translate-y-10 w-[15vw] text-end text-sm ${poppins.className} `}>
            I believe technology should be smart, seamless, and stylish. I make
            sure it&apos;s all three.
          </div>
        </div>
      </div>
      {/* scroll down section */}
      <div
        ref={scrollSectionRef}
        className="opacity-0 w-full h-[15svh] border-t-1 border-white flex flex-row justify-between text-white text-sm pr-3 pl-3 pt-2 mt-15"
      >
        <div className={`flex flex-col items-center ${poppins.className} `}>
          <div className="tracking-tight font-light">
            &#169; Sushil Patil / 2025
          </div>
        </div>
        <div className={`flex flex-col items-center ${poppins.className} `}>
          <div className="tracking-tight font-light">Scroll Down</div>
          <div className="-mt-5  text-3xl select-none duration-300 ease-in hover:-mt-1">
            &#8964;
          </div>
        </div>
        <div className={`flex flex-col items-center ${poppins.className}`}>
          <div className="tracking-tighter font-light">
            {day} {month} {year}
          </div>
          {/* <div className="tracking-widest font-medium -mt-1.5">{year}</div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
