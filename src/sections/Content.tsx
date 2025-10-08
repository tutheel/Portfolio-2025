"use client";
import React, { useEffect, useRef } from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Lenis from "lenis";
import Services from "./Services";
import { gsap, CSSPlugin } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "./Experience";
import Footer from "./Footer";
import Projects from "./Projects";
import NavBar from "./NavBar";
gsap.registerPlugin(CSSPlugin, ScrollTrigger);

function Content() {
  const navBarRef = useRef(null);
  const homePageRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    // Keep ScrollTrigger in sync with Lenis
    lenis.on("scroll", () => ScrollTrigger.update());

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Optional: if using a custom scroller element, set scrollerProxy here
    // We use the window as scroller, so no need to set scrollerProxy.

    // Cleanup
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
    });
  };

  // Create ScrollTrigger snap across full-screen sections
  useEffect(() => {
    const container = homePageRef.current as HTMLElement | null;
    if (!container) return;

    const panels = Array.from(
      container.querySelectorAll<HTMLElement>("[data-snap-section]")
    );

    if (panels.length <= 1) return; // nothing to snap if single panel

    // Make sure each panel at least fills the viewport height
    panels.forEach((el) => {
      if (!el.classList.contains("min-h-screen")) el.classList.add("min-h-screen");
    });

    // A global ScrollTrigger that snaps to section indices (0..n-1)
    // Compute snap points based on actual panel offsets so mixed heights work
    const computeSnapPoints = () => {
      const max = ScrollTrigger.maxScroll(window) || 1;
      const points: number[] = [];
      panels.forEach((p) => {
        // Always snap to the top of each panel
        points.push(Math.min(1, Math.max(0, p.offsetTop / max)));

        // For long panels, also snap to their bottom edge so users can read fully
        if ((p as HTMLElement).dataset.snapLong !== undefined) {
          const bottom = p.offsetTop + p.offsetHeight - window.innerHeight;
          points.push(Math.min(1, Math.max(0, bottom / max)));
        }
      });

      // Also include explicit anchors inside panels (e.g., Experience sub-stops)
      const containerNode = homePageRef.current as HTMLElement | null;
      if (containerNode) {
        const anchors = Array.from(
          containerNode.querySelectorAll<HTMLElement>("[data-snap-anchor]")
        );
        anchors.forEach((a) => {
          points.push(Math.min(1, Math.max(0, a.offsetTop / max)));
        });
      }
      // Sort and dedupe
      const unique = Array.from(new Set(points.map((n) => Number(n.toFixed(6))))).sort(
        (a, b) => a - b
      );
      return unique;
    };

    let snapPoints = computeSnapPoints();

    const st = ScrollTrigger.create({
      start: 0,
      end: () => ScrollTrigger.maxScroll(window),
      snap: {
        snapTo: snapPoints,
        duration: 1.0,
        ease: "power2.out",
      },
      invalidateOnRefresh: true,
      onRefresh: (self) => {
        snapPoints = computeSnapPoints();
        if (self.vars.snap && typeof self.vars.snap === "object") {
          // update the snapTo array on refresh
          const snapVars = self.vars.snap as { snapTo?: number[]; duration?: number; ease?: string };
          snapVars.snapTo = snapPoints;
        }
      },
    });

    // Refresh on resize/content changes
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      st.kill();
    };
  }, []);
  return (
    <div className="relative scrollbar-none">
      {/* Navbar on top */}
      <div ref={navBarRef} className="fixed top-0 left-0 w-full z-50 opacity-0">
        <NavBar />
      </div>

      {/* Hero behind Navbar */}
      <div ref={homePageRef} className="relative z-10">
        <section id="home" data-snap-section className="min-h-screen">
          <Hero />
        </section>
        <section id="about" data-snap-section className="min-h-screen">
          <About />
        </section>
        <section id="experience" data-snap-section data-snap-long className="min-h-screen">
          <Experience/>
        </section>
        <section id="projects" data-snap-section className="min-h-screen">
          <Projects/>
        </section>
        <section id="skills" data-snap-section className="min-h-screen">
          <Skills />
        </section>
        <section id="services" data-snap-section className="min-h-screen">
          <Services />
        </section>
        <section id="contact" data-snap-section className="min-h-screen">
          <Footer/>
        </section>
      </div>
    </div>
  );
}

export default Content;
