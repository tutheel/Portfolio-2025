"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LINES = [
  "Designing Clarity",
  "Developing Reliability",
  "Delivering impact",
];

type ScrollRevealLinesProps = {
  className?: string;
  /** delay (seconds) between each row's start time */
  rowDelay?: number;
};

export default function ScrollRevealLines({
  className,
  rowDelay = 0.25,
}: ScrollRevealLinesProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>("[data-row]");
      const chars = gsap.utils.toArray<HTMLElement>("[data-char]");

      gsap.set(chars, { yPercent: 120 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      rows.forEach((row, index) => {
        const rowChars = row.querySelectorAll<HTMLElement>("[data-char]");
        tl.to(
          rowChars,
          {
            yPercent: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.03,
          },
          index * rowDelay
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className={className}>
      {LINES.map((line) => (
        <div key={line} data-row className="overflow-hidden py-[0.08em]">
          <span className="inline-flex flex-wrap" style={{ whiteSpace: "pre" }}>
            {line.split("").map((char, index) => (
              <span
                key={`${line}-${index}`}
                data-char
                className="inline-block will-change-transform"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
