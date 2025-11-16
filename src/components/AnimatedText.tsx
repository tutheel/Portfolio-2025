"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = containerRef.current?.querySelectorAll(".word");
    if (!words) return;

    // Create a GSAP context to scope animations safely
    const ctx = gsap.context(() => {
      // Reset before animating
      gsap.set(words, { opacity: 0, y: 20 });

      // Animate in sequence
      gsap.to(words, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        ease: "power2.out",
        duration: 0.5,
      });
    }, containerRef);

    // ✅ Cleanup animation on unmount or text change
    return () => ctx.revert();
  }, [text]);

  return (
    <p
      ref={containerRef}
      className="flex flex-wrap text-[1.5rem] lg:text-[2.5rem] tracking-tight"
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="word minline-block mr-[0.25em]">
          {word}
        </span>
      ))}
    </p>
  );
}
