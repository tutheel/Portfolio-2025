"use client";

import gsap from "gsap";
import {
  forwardRef,
  type FocusEvent,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  type MouseEvent,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react";

export type RollingTextHandle = {
  play: () => void;
  reverse: () => void;
};

type RollingTextProps<T extends ElementType = "span"> = {
  as?: T;
  text: string;
  className?: string;
  duration?: number;
  stagger?: number;
  ease?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "ref">;

const RollingText = forwardRef<RollingTextHandle, RollingTextProps>(
  (
    {
      as,
      text,
      className = "",
      duration = 0.45,
      stagger = 0.035,
      ease = "power3.ease-out",
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
    const Wrapper = (as || "span") as ElementType;
    const topRefs = useRef<Array<HTMLSpanElement | null>>([]);
    const bottomRefs = useRef<Array<HTMLSpanElement | null>>([]);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const [prefersReducedMotion, setPRM] = useState(false);

    useEffect(() => {
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      const handle = () => setPRM(media.matches);
      handle();
      media.addEventListener("change", handle);
      return () => media.removeEventListener("change", handle);
    }, []);

    useLayoutEffect(() => {
      if (prefersReducedMotion) return;
      const tops = topRefs.current;
      const bottoms = bottomRefs.current;
      const ctx = gsap.context(() => {
        gsap.set(tops, { yPercent: 0 });
        gsap.set(bottoms, { yPercent: 92 });

        tl.current = gsap.timeline({ paused: true });
        tl.current
          .to(tops, { yPercent: -100, duration, ease, stagger }, 0)
          .to(bottoms, { yPercent: -100, duration, ease, stagger }, 0);
      });
      return () => ctx.revert();
    }, [duration, ease, stagger, prefersReducedMotion]);

    const play = () => {
      if (prefersReducedMotion) return;
      tl.current?.play(0);
    };
    const reverse = () => {
      if (prefersReducedMotion) return;
      tl.current?.reverse();
    };

    useImperativeHandle(ref, () => ({ play, reverse }), [prefersReducedMotion]);

    const chars = text.split("").map((ch) => (ch === " " ? "\u00A0" : ch));
    topRefs.current.length = chars.length;
    bottomRefs.current.length = chars.length;

    return (
      <Wrapper
        className={`inline-flex items-center leading-none ${className}`}
        onMouseEnter={(e: MouseEvent<HTMLElement>) => {
          play();
          onMouseEnter?.(e);
        }}
        onMouseLeave={(e: MouseEvent<HTMLElement>) => {
          reverse();
          onMouseLeave?.(e);
        }}
        onFocus={(e: FocusEvent<HTMLElement>) => {
          play();
          onFocus?.(e);
        }}
        onBlur={(e: FocusEvent<HTMLElement>) => {
          reverse();
          onBlur?.(e);
        }}
        {...rest}
      >
        {chars.map((char, idx) => (
          <span
            key={`${char}-${idx}`}
            className="relative inline-block overflow-hidden align-baseline h-[1.02em]"
          >
            <span
              ref={(el) => {
                topRefs.current[idx] = el;
              }}
              className="block will-change-transform leading-[1.02em]"
            >
              {char}
            </span>
            <span
              ref={(el) => {
                bottomRefs.current[idx] = el;
              }}
              className="block will-change-transform leading-[1.02em] text-[#5900ff]"
            >
              {char}
            </span>
          </span>
        ))}
      </Wrapper>
    );
  }
);

RollingText.displayName = "RollingText";

export default RollingText;
