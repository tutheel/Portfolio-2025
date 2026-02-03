"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import OverlayMenu from "./OverlayMenu";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll while menu is open
  useEffect(() => {
    const body = document.body;
    if (isOpen) body.classList.add("overflow-hidden");
    else body.classList.remove("overflow-hidden");
    return () => body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl lg:max-w-full items-center justify-between px-4 py-3">
          <Link
            href="/"
            onClick={handleLogoClick}
            className={`${inter.className} text-white text-2xl font-semibold tracking-tight`}
          >
            Sushil
          </Link>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls="overlay-menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-md p-2 text-white transition hover:text-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-white/60"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <OverlayMenu isOpen={isOpen} onClose={() => setIsOpen(false)} toggleRef={toggleRef} />
    </>
  );
}
