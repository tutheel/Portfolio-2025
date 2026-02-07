"use client";
import DesignOrbs from "@/components/DesignOrbs";
import { Inter } from "next/font/google";
import { ChevronDown } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

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

  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const helloRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);
  const locationRef = useRef<HTMLHeadingElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !overlayRef.current ||
      !helloRef.current ||
      !nameRef.current ||
      !roleRef.current ||
      !locationRef.current ||
      !footerRef.current ||
      !orbsRef.current
    )
      return;

    const ctx = gsap.context(() => {
      // Set initial states — text + footer + orbs hidden
      gsap.set(
        [helloRef.current, nameRef.current],
        { opacity: 0, y: 40 }
      );
      gsap.set(
        [roleRef.current, locationRef.current],
        { opacity: 0, y: 25 }
      );
      gsap.set(footerRef.current, { opacity: 0, y: 10 });
      gsap.set(orbsRef.current, { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Step 1: Fade out the black overlay to reveal the purple gradient
      tl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
        delay: 0.15,
      })
        // Step 2: "Hello I'm"
        .to(
          helloRef.current,
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        )
        // Step 3: "Sushil Patil"
        .to(
          nameRef.current,
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        )
        // Step 4: "Developer & Designer"
        .to(
          roleRef.current,
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.2"
        )
        // Step 5: "From Karnataka, India"
        .to(
          locationRef.current,
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.15"
        )
        // Step 6: Footer (date + chevron + resume)
        .to(
          footerRef.current,
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
          "-=0.15"
        )
        // Step 7: Design orbs fade in last
        .to(
          orbsRef.current,
          { opacity: 1, duration: 0.7, ease: "power2.inOut" },
          "-=0.25"
        );
    }, sectionRef);

    return () => ctx.revert();
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-linear-to-t from-[#240051] to-[#000000] to-60% hero-bg"
    >
      {/* Black overlay — covers gradient until animation reveals it */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black z-20 pointer-events-none"
      />

      {/* hero head */}
      <div className="relative w-full h-11/12 lg:h-11/12">
        {/* text */}
        <div className="absolute inset-0 w-full h-full flex flex-col justify-start lg:justify-center items-center z-10 pt-20 lg:pt-20 text-center">
          <h1
            ref={helloRef}
            className={`${inter.className} text-white text-3xl lg:text-5xl font-light tracking-tighter`}
          >
            Hello I&apos;m
          </h1>
          <h1
            ref={nameRef}
            className={`${inter.className} text-white text-6xl lg:text-[17vh] font-normal tracking-tighter leading-none`}
          >
            Sushil Patil
          </h1>
          <h1
            ref={roleRef}
            className={`${inter.className} text-white text-md lg:text-md font-normal`}
          >
            Developer & Designer
          </h1>
          <h1
            ref={locationRef}
            className={`${inter.className} text-gray-400 text-sm lg:text-md font-normal`}
          >
            From Karnataka, India
          </h1>
        </div>
        {/* design */}
        <div
          ref={orbsRef}
          className="lg:relative lg:w-full lg:h-11/12 lg:top-12 lg:blur-[1px]"
        >
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
      <div
        ref={footerRef}
        className="relative w-full h-1/12 lg:h-1/12 flex flex-row justify-between items-center text-sm text-center z-100"
      >
        <div className="pl-5 text-white lg:mt-0 font-light normal-case lg:font-medium transition-colors duration-400 ease-out hover:text-[#7327ff] hover:drop-shadow-[0_2px_20px_#4C00D8]">
          {day} {month} {year}
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
