"use client";

import Link from "next/link";
import { X } from "lucide-react";
import gsap from "gsap";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
  type RefObject,
} from "react";
import { Inter } from "next/font/google";
import RollingText, { type RollingTextHandle } from "./RollingText";

type OverlayMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  toggleRef: RefObject<HTMLButtonElement | null>;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const menuItems = [
  { label: "About", target: "about" },
  { label: "Experience", target: "experience" },
  { label: "Services", target: "services" },
  { label: "Skills", target: "skills" },
  { label: "Artworks", target: "artworks" },
  { label: "Contact", target: "contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/iamsushilpatil/" },
  { label: "Email", href: "mailto:sushilpatildev@gmail.com" },
  { label: "Twitter", href: "https://x.com/tutheeel" },
  { label: "GitHub", href: "https://github.com/tutheel" },
];

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setPrefers(media.matches);
    handler();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return prefers;
}

export default function OverlayMenu({ isOpen, onClose, toggleRef }: OverlayMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const whiteRef = useRef<HTMLDivElement>(null);
  const purpleRef = useRef<HTMLDivElement>(null);
  const blackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const rollingRefs = useRef<Array<RollingTextHandle | null>>([]);
  const socialRollingRefs = useRef<Array<RollingTextHandle | null>>([]);
  const masterTl = useRef<gsap.core.Timeline | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  itemRefs.current.length = menuItems.length;
  rollingRefs.current.length = menuItems.length;
  socialRollingRefs.current.length = socials.length;

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      const panels = [whiteRef.current, purpleRef.current, blackRef.current].filter(Boolean) as gsap.TweenTarget[];
      const headerEl = headerRef.current ? [headerRef.current] : [];
      const itemsEl = itemRefs.current.filter(Boolean) as gsap.TweenTarget[];
      const socialsEl = socialsRef.current ? [socialsRef.current] : [];

      tl.set(panels, { transformOrigin: "top", scaleY: 0 });
      tl.set(headerEl, { opacity: 0, y: 12, pointerEvents: "none" });
      tl.set(itemsEl, { opacity: 0, y: 20 });
      tl.set(socialsEl, { opacity: 0, y: 12, pointerEvents: "none" });

      tl.to(whiteRef.current, { scaleY: 1, duration: 0.46, ease: "power3.inOut" })
        .to(purpleRef.current, { scaleY: 1, duration: 0.4, ease: "power3.inOut" }, "-=0.24")
        .to(blackRef.current, { scaleY: 1, duration: 0.46, ease: "power3.inOut" }, "-=0.26")
        .to(headerEl, {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
          onStart: () => {
            gsap.set(headerRef.current, { pointerEvents: "auto" });
          },
          onReverseComplete: () => {
            gsap.set(headerRef.current, { pointerEvents: "none" });
          },
        })
        .to(itemsEl, { opacity: 1, y: 0, duration: 0.3, stagger: 0.08, ease: "power2.out" }, "-=0.05")
        .to(
          socialsEl,
          {
            opacity: 1,
            y: 0,
            duration: 0.28,
            ease: "power2.out",
            onStart: () => {
              gsap.set(socialsRef.current, { pointerEvents: "auto" });
            },
            onReverseComplete: () => {
              gsap.set(socialsRef.current, { pointerEvents: "none" });
            },
          },
          "-=0.05"
        );

      tl.eventCallback("onReverseComplete", () => {
        gsap.set(panels, { scaleY: 0 });
        gsap.set(itemsEl, { opacity: 0, y: 20 });
        gsap.set(headerEl, { opacity: 0, y: 12, pointerEvents: "none" });
        gsap.set(socialsEl, { opacity: 0, y: 12, pointerEvents: "none" });
        setIsVisible(false);
        toggleRef.current?.focus();
      });

      masterTl.current = tl;
    }, overlayRef);

    return () => {
      masterTl.current?.kill();
      masterTl.current = null;
      ctx.revert();
    };
  }, [prefersReducedMotion, toggleRef]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(isOpen);
      if (isOpen) {
        requestAnimationFrame(() => itemRefs.current[0]?.focus());
      } else {
        toggleRef.current?.focus();
      }
      return;
    }

    if (!masterTl.current) return;

    if (isOpen) {
      setIsVisible(true);
      requestAnimationFrame(() => {
        masterTl.current?.play(0);
        itemRefs.current[0]?.focus();
      });
    } else {
      masterTl.current?.reverse();
    }
  }, [isOpen, prefersReducedMotion, toggleRef]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleItemClick = (target: string) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    } else if (target === "artworks") {
      window.location.href = "/artworks";
    }
    onClose();
  };

  const isAnimating = !!masterTl.current?.isActive();
  const active = isVisible || isAnimating || (prefersReducedMotion && isOpen);

  return (
    <div
      id="overlay-menu"
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[60]"
      style={{
        visibility: active ? "visible" : "hidden",
        opacity: active ? 1 : 0,
        pointerEvents: active ? "auto" : "none",
      }}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 pointer-events-none" />
      <div
        ref={whiteRef}
        className="absolute inset-0 bg-white origin-top scale-y-0 will-change-transform pointer-events-none"
      />
      <div
        ref={purpleRef}
        className="absolute inset-0 bg-[#6F00F8] origin-top scale-y-0 will-change-transform pointer-events-none"
      />
      <div
        ref={blackRef}
        className="absolute inset-0 bg-black origin-top scale-y-0 will-change-transform pointer-events-none"
      />

      <div className="relative z-10 flex h-full w-full flex-col justify-between px-4 sm:px-6 lg:px-4">
        <div
          ref={headerRef}
          className="absolute top-4 left-0 right-0 mx-auto flex max-w-6xl lg:max-w-full items-center justify-between px-4 text-white"
        >
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              onClose();
            }}
            className={`${inter.className} text-white text-2xl font-semibold tracking-tight focus:outline-none focus-visible:ring focus-visible:ring-white/60`}
          >
            Sushil
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex items-center justify-center rounded-md px-2 text-white focus:outline-none focus-visible:ring focus-visible:ring-white/60"
          >
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col items-end gap-1 text-5xl sm:text-6xl text-white font-semibold pt-14 px-2 lg:px-10 w-full max-w-6xl lg:max-w-full mx-auto">
          {menuItems.map((item, index) => (
            <li key={item.target}>
              <button
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                type="button"
                onClick={() => handleItemClick(item.target)}
                onFocus={() => rollingRefs.current[index]?.play()}
                onBlur={() => rollingRefs.current[index]?.reverse()}
                onMouseEnter={() => rollingRefs.current[index]?.play()}
                onMouseLeave={() => rollingRefs.current[index]?.reverse()}
                className="block focus:outline-none focus-visible:ring focus-visible:ring-white/60 px-1 py-0.5"
              >
                <RollingText
                  ref={(el) => {
                    rollingRefs.current[index] = el;
                  }}
                  text={item.label}
                  className={`${inter.className} uppercase tracking-tight`}
                  duration={0.45}
                  stagger={0.045}
                  ease="power3.out"
                />
              </button>
            </li>
          ))}
        </ul>

        <div
          ref={socialsRef}
          className={`${inter.className} w-full max-w-6xl lg:max-w-full mx-auto mb-6 flex flex-row flex-wrap gap-4 px-4 text-white text-sm lg:text-2xl`}
        >
          {socials.map((social, index) => (
            <a
              key={`${social.label}-${index}`}
              href={social.href}
              target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <RollingText
                  ref={(el) => {
                    socialRollingRefs.current[index] = el;
                  }}
                  text={social.label}
                  className={`${inter.className} uppercase tracking-tight`}
                  duration={0.45}
                  stagger={0.045}
                  ease="power3.out"
                />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
