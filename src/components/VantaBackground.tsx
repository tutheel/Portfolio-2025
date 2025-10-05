"use client";
import React from "react";
import { useEffect, useRef } from "react";
import * as THREE from "three";
// Import the specific Vanta effect as a module (avoids relying on window.VANTA)
// Type is declared in a local ambient module below
import FOG, { VantaEffect } from "vanta/dist/vanta.fog.min";

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    // Ensure this runs only in the browser and once the ref is set
    if (typeof window === "undefined" || !vantaRef.current) return;
    if (effectRef.current) return; // avoid re-initializing

    effectRef.current = FOG({
      THREE,
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      highlightColor: 0xb300ff,
      midtoneColor: 0xc200ff,
      lowlightColor: 0xa400ff,
      baseColor: 0x0,
      blurFactor: 0.75,
      speed: 1.5,
      zoom: 0.23,
    });

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy?.();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <div ref={vantaRef} className="absolute inset-0 -z-10 pointer-events-none"></div>
    </>
  );
}
