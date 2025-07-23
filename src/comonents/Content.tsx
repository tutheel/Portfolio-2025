"use client";
import React, { useEffect, useRef } from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Lenis from "lenis";
import Services from "./Services";
import { gsap, CSSPlugin } from "gsap";
import Experience from "./Experience";
import Footer from "./Footer";
import Projects from "./Projects";
gsap.registerPlugin(CSSPlugin);

function Content() {
  const navBarRef = useRef(null);
  const homePageRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    reveal();
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("Completed!");
      },
    });

    t1.to(homePageRef.current, {
      ease: "Power3.easeInOut",
    }).to(navBarRef.current, {
      opacity: "100%",
      delay: 0.5,
      duration: 1.5,
      ease: "Power3.easeInOut",
    })
  };
  return (
    <div className="relative scrollbar-none">
      {/* Navbar on top */}
      {/* <div ref={navBarRef} className="fixed invert top-0 left-0 w-full z-50 opacity-0">
        <NavBar />
      </div> */}

      {/* Hero behind Navbar */}
      <div ref={homePageRef} className="relative z-10">
        <Hero />
        <About />
        <Projects/>
        {/* <Skills />
        <Services />
        <Experience/>
        <Footer/> */}
      </div>
    </div>
  );
}

export default Content;
