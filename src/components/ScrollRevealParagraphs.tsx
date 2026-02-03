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
      const words = gsap.utils.toArray<HTMLElement>("[data-word]");
      gsap.set(words, { y: 12, opacity: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }).to(words, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.03,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className={className}>
      <div className={`ml-auto flex w-full max-full flex-col items-start ${gapClasses}`}>
        {paragraphs.map((text, index) => (
          <p
            key={`paragraph-${index}`}
            className={`w-full max-w-xl text-left ${paragraphClassName}`}
          >
            {text.split(" ").map((word, i) => (
              <span
                key={`word-${index}-${i}`}
                data-word
                className="inline-block"
                style={{ marginRight: "0.25em" }}
              >
                {word}
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}
