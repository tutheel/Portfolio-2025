"use client";
declare module "vanta/dist/vanta.fog.min" {
  import * as THREEType from "three";
  export type VantaEffect = {
    destroy?: () => void;
  } | null;
  const FOG: (options: {
    THREE: typeof THREEType;
    el: HTMLElement;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
    blurFactor?: number;
    speed?: number;
    zoom?: number;
  }) => VantaEffect;
  export default FOG;
}

