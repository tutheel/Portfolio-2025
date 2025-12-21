"use client";

import Navbar from "@/components/Navbar";

export default function NavOverlayDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0b0b1a] to-black text-white">
      <Navbar />
      <div className="pt-24 space-y-24 px-6 max-w-5xl mx-auto">
        <section id="about" className="h-72 border border-white/10 rounded-xl p-6">About section</section>
        <section id="experience" className="h-72 border border-white/10 rounded-xl p-6">Experience section</section>
        <section id="services" className="h-72 border border-white/10 rounded-xl p-6">Services section</section>
        <section id="skills" className="h-72 border border-white/10 rounded-xl p-6">Skills section</section>
        <section id="artworks" className="h-72 border border-white/10 rounded-xl p-6">Artworks section</section>
        <section id="contact" className="h-72 border border-white/10 rounded-xl p-6">Contact section</section>
      </div>
    </main>
  );
}
