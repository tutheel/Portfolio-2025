"use client";
import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Lenis from "lenis";
import Services from "./Services";

function Content() {
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

  return (
    <div className="relative scrollbar-none">
      {/* Navbar on top */}
      <div className="fixed invert top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      {/* Hero behind Navbar */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services/>
      </div>
    </div>
  );
}

export default Content;
