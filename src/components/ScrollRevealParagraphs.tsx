"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealParagraphsProps = {
  paragraphs: string[];
  className?: string;
  paragraphClassName?: string;
  gapClasses?: string;
};

export default function ScrollRevealParagraphs({
  paragraphs,
  className,
  paragraphClassName = "",
  gapClasses = "gap-8 md:gap-10 lg:gap-12",
}: ScrollRevealParagraphsProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-paragraph]");
      gsap.set(items, { yPercent: 30, opacity: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }).to(items, {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className={className}>
      <div className={`ml-auto flex w-full max-w-3xl flex-col items-end ${gapClasses}`}>
        {paragraphs.map((text, index) => (
          <p
            key={`paragraph-${index}`}
            data-paragraph
            className={`w-full max-w-xl text-left ${paragraphClassName}`}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
