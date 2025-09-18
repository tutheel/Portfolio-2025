// app/components/DesignImagesMasked.tsx
"use client";

import Image from "next/image";

export default function DesignImagesMasked() {
  return (
    <div
      className={[
        "absolute inset-0 z-0 pointer-events-none select-none",
         // expand the container beyond edges (tweak % as you like)
        "sm:-inset-x-[6%] sm:-inset-y-[4%]",
        "md:-inset-x-[8%] md:-inset-y-[6%]",
        "lg:inset-x-[0%] lg:-inset-y-[8%]",
        // one dial for all responsive sizes (no hard-coded px)
        "sm:[--d:18rem] md:[--d:22rem] lg:[--d:36rem] xl:[--d:40rem]",
      ].join(" ")}
      aria-hidden="true"
    >
      {/* LEFT EDGE — shows only RIGHT half (all breakpoints) */}
      <div
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 overflow-hidden [--d:16rem] md:[--d:20rem] lg:[--d:38rem]"
        style={{ width: "calc(var(60rem) / 2)", height: "var(--d)" }}
      >
        {/* Inner canvas is full size; we shift it so only the right half is visible */}
        <div
          className="relative will-change-transform [backface-visibility:hidden]"
          style={{ width: "var(--d)", height: "var(--d)", left: "-50%" }}
        >
          {/* Rotating PNG */}
          <Image
            src="/indian.png"
            alt=""
            fill
            className="object-contain animate-[spin_20s_linear_infinite_reverse]"
            sizes="(min-width: 1024px) 34rem, (min-width: 768px) 28rem, 18rem"
            priority
          />
          {/* Color overlay, masked to PNG alpha so tint stays INSIDE the image only */}
          <div
            className="absolute inset-0 animate-[spin_20s_linear_infinite_reverse] mix-blend-screen opacity-80 will-change-transform [backface-visibility:hidden]"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #F0F0F0E6 0%, #4C00D8 30%, #192bc2 55%, #27187e70 70%)",
              // Mask the overlay to the PNG's alpha
              WebkitMaskImage: "url(/indian.png)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: "url(/indian.png)",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
              maskMode: "alpha",
            }}
          />
        </div>
      </div>

      {/* RIGHT EDGE — md+ only: shows only LEFT half */}
      <div
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden [--d:16rem] md:[--d:20rem] lg:[--d:38rem]"
        style={{ width: "calc(var(--d) / 2)", height: "var(--d)" }}
      >
        <div
          className="relative will-change-transform [backface-visibility:hidden]"
          style={{ width: "var(--d)", height: "var(--d)" }}
        >
          <Image
            src="/indian.png"
            alt=""
            fill
            className="object-contain animate-[spin_20s_linear_infinite]"
            sizes="(min-width: 1024px) 34rem, (min-width: 768px) 28rem, 18rem"
            priority
          />
          <div
            className="absolute inset-0 animate-[spin_20s_linear_infinite] mix-blend-screen opacity-80 will-change-transform [backface-visibility:hidden]"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #F0F0F0E6 0%, #4C00D8 30%, #192bc2 55%, #27187e70 70%)",
              WebkitMaskImage: "url(/indian.png)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: "url(/indian.png)",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
              maskMode: "alpha",
            }}
          />
        </div>
      </div>

      {/* TOP — small only: shows only BOTTOM half */}
      <div
        className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden"
        style={{ width: "var(--d)", height: "calc(var(--d) / 2)" }}
      >
        <div
          className="relative will-change-transform [backface-visibility:hidden]"
          style={{ width: "var(--d)", height: "var(--d)", top: "-50%" }}
        >
          <Image
            src="/indian.png"
            alt=""
            fill
            className="object-contain animate-[spin_12s_linear_infinite]"
            sizes="(min-width: 1024px) 34rem, (min-width: 768px) 28rem, 18rem"
            priority
          />
          <div
            className="absolute inset-0 animate-[spin_12s_linear_infinite] mix-blend-screen opacity-80 will-change-transform [backface-visibility:hidden]"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #F0F0F0E6 0.2%, #4C00D8 40%, #060606 100%)",
              WebkitMaskImage: "url(/indian.png)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: "url(/indian.png)",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
              maskMode: "alpha",
            }}
          />
        </div>
      </div>
    </div>
  );
}
