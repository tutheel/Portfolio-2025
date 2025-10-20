"use client";

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useEffect, useRef } from "react";
import NavBar from "@/sections/NavBar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Services from "@/sections/Services";
import Footer from "@/sections/Footer";

gsap.registerPlugin(ScrollTrigger);

function Content() {
  const navBarRef = useRef<HTMLDivElement | null>(null);
  const homePageRef = useRef<HTMLDivElement | null>(null);

  // 1) Smooth scroll (run ONCE)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    lenis.on("scroll", () => ScrollTrigger.update());

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []); // ← important

  // 2) Reveal timeline (ensure refs are mounted & styles measured)
  useLayoutEffect(() => {
    if (!homePageRef.current || !navBarRef.current) return;

    const ctx = gsap.context(() => {
      // Ensure starting state (don’t rely on Tailwind classes for animation start)
      gsap.set([homePageRef.current, navBarRef.current], { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      tl.to(homePageRef.current, { opacity: 1, duration: 1 })
        // start navbar slightly before the previous finishes
        .to(
          navBarRef.current,
          { opacity: 1, duration: 1.2, delay: 0.2 },
          "-=0.4"
        );
    });

    return () => ctx.revert();
  }); // ← run once after mount

  return (
    <div className="relative scrollbar-none">
      {/* Navbar on top */}
      <div ref={navBarRef} className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      {/* Hero behind Navbar */}
      <div ref={homePageRef} className="relative z-10">
        <section id="home" data-snap-section>
          <Hero />
        </section>
        <section id="about" data-snap-section>
          <About />
        </section>
        <section id="experience" data-snap-section data-snap-long>
          <Experience />
        </section>
        <section id="projects" data-snap-section>
          <Projects />
        </section>
        <section id="skills" data-snap-section>
          <Skills />
        </section>
        <section id="services" data-snap-section>
          <Services />
        </section>
        <section id="contact" data-snap-section>
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default Content;
