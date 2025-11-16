"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Menu, X } from "lucide-react";

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: [
    "latin",
    "latin-ext",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
  ],
});

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "/artworks", label: "Artworks" },
  { href: "#contact", label: "Contact" },
];

function NavBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => setIsMobileOpen((prev) => !prev);
  const handleLinkClick = () => setIsMobileOpen(false);

  return (
    <header className="w-full px-4 pt-4 sm:px-6 lg:px-12">
      <nav
        className={`${inter.className} mx-auto flex w-full max-w-5xl flex-col gap-3 rounded-xl border border-[#32006e] bg-black/80 px-4 py-3 text-center text-base font-semibold shadow-[0_20px_35px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-y-2 sm:px-6`}
      >
        {/* Mobile-only toggle: keeps desktop layout untouched */}
        <div className="flex w-full items-center justify-between sm:hidden">
          <span className={`${inter.className} text-xl font-medium text-white tracking-wide`}>
            Sushil
          </span>
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMobileOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation menu"
            className="rounded-md border border-white/20 p-2 text-white transition hover:border-white hover:bg-white/10"
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Nav links: hidden on mobile until toggled, always visible on larger screens */}
        <div
          id="primary-navigation"
          className={`w-full ${isMobileOpen ? "flex" : "hidden"} flex-col gap-1 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:justify-between`}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="rounded-md px-2 py-2 text-xs font-light tracking-wide text-indigo-200 transition duration-300 ease-out hover:text-white sm:py-1 sm:text-xs"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
