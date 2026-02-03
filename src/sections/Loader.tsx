"use client";
import React, { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import gsap from "gsap";

const inter = Inter({
  weight: ["300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
});

type LoaderProps = {
  onFinish?: () => void;
};

const words = ["DESIGN", "BUILD", "EVOLVE"];

function Loader({ onFinish }: LoaderProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLDivElement | null)[]>([]);
  const barFillRef = useRef<HTMLDivElement>(null);
  const barTrackRef = useRef<HTMLDivElement>(null);
  const curtainTopRef = useRef<HTMLDivElement>(null);
  const curtainBottomRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  // Wait for window load
  useEffect(() => {
    if (document.readyState === "complete") {
      setReady(true);
    } else {
      const onLoad = () => setReady(true);
      window.addEventListener("load", onLoad, { once: true });
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  // Fallback safety timeout
  useEffect(() => {
    const fallback = window.setTimeout(() => setReady(true), 5000);
    return () => window.clearTimeout(fallback);
  }, []);

  // GSAP animation sequence
  useEffect(() => {
    if (!overlayRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onFinish) onFinish();
        },
      });

      // Initial states — all letters off-screen below
      wordRefs.current.forEach((el) => {
        if (!el) return;
        const chars = el.querySelectorAll<HTMLElement>("[data-char]");
        chars.forEach((ch) => gsap.set(ch, { yPercent: 110, visibility: "visible" }));
      });
      gsap.set(barTrackRef.current, { opacity: 1 });
      gsap.set(barFillRef.current, { width: "0%" });

      // Bar fills alongside the word sequence
      tl.to(barFillRef.current, {
        width: ready ? "100%" : "55%",
        duration: ready ? 2.8 : 2.8,
        ease: "power1.inOut",
      }, 0);

      // Word cycle: letters roll in staggered, hold, then roll out staggered
      let wordTime = 0.1;
      words.forEach((_, i) => {
        const el = wordRefs.current[i];
        if (!el) return;
        const chars = el.querySelectorAll<HTMLElement>("[data-char]");
        if (!chars.length) return;

        // Letters roll in from below
        tl.to(chars, {
          yPercent: 0,
          duration: 0.45,
          stagger: 0.04,
          ease: "power3.out",
        }, wordTime);

        const rollInEnd = wordTime + 0.45 + 0.04 * (chars.length - 1);

        // Hold
        const holdEnd = rollInEnd + 0.3;

        // Roll out upward (except last word)
        if (i < words.length - 1) {
          tl.to(chars, {
            yPercent: -110,
            duration: 0.35,
            stagger: 0.03,
            ease: "power3.in",
          }, holdEnd);

          const rollOutEnd = holdEnd + 0.35 + 0.03 * (chars.length - 1);
          wordTime = rollOutEnd + 0.08;
        }
      });

      // If page not loaded yet, pause and wait
      if (!ready) {
        tl.addPause();
      }

      // Complete the bar
      tl.to(barFillRef.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      });

      // Hold for a beat
      tl.to({}, { duration: 0.3 });

      // 1. Fade out the progress bar
      tl.to(barTrackRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });

      // 2. Fade out the last word's letters
      const lastEl = wordRefs.current[words.length - 1];
      const lastChars = lastEl ? lastEl.querySelectorAll<HTMLElement>("[data-char]") : [];
      tl.to(Array.from(lastChars), {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });

      // 3. Fade out the entire loader overlay
      tl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }, overlayRef);

    return () => ctx.revert();
  }, [ready, onFinish]);

  // Resume paused timeline when page is ready
  useEffect(() => {
    if (ready) {
      gsap.globalTimeline.resume();
    }
  }, [ready]);

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[9999]">
      {/* Split curtain backgrounds */}
      <div
        ref={curtainTopRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-black"
      />
      <div
        ref={curtainBottomRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-black"
      />

      {/* Centered word display */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="relative h-[1.15em] overflow-hidden px-4 text-[4rem] md:text-[5.5rem] lg:text-[5.5rem] leading-none">
          {words.map((word, i) => (
            <div
              key={word}
              ref={(el) => { wordRefs.current[i] = el; }}
              className={`${i === 0 ? "" : "absolute inset-0"} flex items-center justify-center`}
            >
              <span className={`${inter.className} inline-flex font-bold tracking-tighter`}>
                {word.split("").map((char, j) => (
                  <span key={j} className="inline-block overflow-hidden">
                    <span
                      data-char
                      className="inline-block text-white invisible will-change-transform"
                    >
                      {char}
                    </span>
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar at the bottom */}
      <div
        ref={barTrackRef}
        className="absolute bottom-0 left-0 right-0 z-10 h-[3px] bg-[#1a1a1a]"
      >
        <div
          ref={barFillRef}
          className="h-full w-0 bg-gradient-to-r from-[#7300FF] to-[#5900ff]"
        />
      </div>
    </div>
  );
}

export default Loader;
