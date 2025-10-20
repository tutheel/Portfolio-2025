"use client";
import React, { useEffect, useState } from "react";

// Loader configuration and callback props
// Flow overview:
// 1) Wait optional start delay
// 2) Begin ticking progress up to 95%
// 3) When window fully loads, wait until minimum duration is satisfied
// 4) Set progress to 100%
// 5) Fade out the percentage text, then hide it (display: none)
// 6) Fade out the overlay, then call onFinish()
type LoaderProps = {
  onFinish?: () => void;
  startDelayMs?: number;       // delay before progress starts
  minDurationMs?: number;      // minimum time loader stays visible
  tickIntervalMs?: number;     // how fast % increases before load
  fallbackMs?: number;         // safety timeout to force-complete
  textFadeMs?: number;         // fade duration for the 100% text
  overlayFadeMs?: number;      // fade duration for overlay
};

function Loader({
  onFinish,
  startDelayMs = 20,
  minDurationMs = 1200,
  tickIntervalMs = 30,
  fallbackMs = 5000,
  textFadeMs = 1000,
  overlayFadeMs = 1000,
}: LoaderProps) {
  // State
  const [progress, setProgress] = useState(0);                  // current progress (0-100)
  const [isTextFading, setIsTextFading] = useState(false);      // 5) animate opacity to 0
  const [isTextHidden, setIsTextHidden] = useState(false);      // then hide the text node
  const [isOverlayFading, setIsOverlayFading] = useState(false);// 6) fade out overlay

  // Track when the progress actually started to enforce minDurationMs
  const startTimeRef = React.useRef<number | null>(null);

  useEffect(() => {
    let done = false;
    let tick: number | undefined;

    // 1) optional start delay -> then begin ticking
    const startDelay: number = window.setTimeout(() => {
      startTimeRef.current = Date.now();
      // 2) tick progress up to 95% (final jump to 100 happens after load/minDuration)
      tick = window.setInterval(() => {
        setProgress((prev) => (prev < 95 ? prev + 1 : prev));
      }, tickIntervalMs);
    }, startDelayMs);

    // Complete on window load
    const handleLoad = () => {
      if (done) return;
      const startedAt = startTimeRef.current ?? Date.now();
      const elapsed = Date.now() - startedAt;
      const waitMore = Math.max(0, minDurationMs - elapsed);

      // 3) ensure minimum visible duration before finalizing
      window.setTimeout(() => {
        setProgress(100);            // 4) reach 100%
        setIsTextFading(true);       // 5a) start text fade-out
        window.setTimeout(() => {
          setIsTextHidden(true);     // 5b) remove text from layout/ARIA
          setIsOverlayFading(true);  // 6a) fade overlay
          window.setTimeout(() => {
            if (onFinish) onFinish(); // 6b) signal completion
          }, overlayFadeMs);
        }, textFadeMs);
      }, waitMore);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    // Hard timeout fallback (safety) — completes even if 'load' never fires
    const fallback = window.setTimeout(() => {
      if (done) return;
      setProgress(100);
      setIsTextFading(true);        // fade text
      window.setTimeout(() => {
        setIsTextHidden(true);      // hide text
        setIsOverlayFading(true);   // fade overlay
        window.setTimeout(() => {
          if (onFinish) onFinish(); // finish
        }, overlayFadeMs);
      }, textFadeMs);
    }, fallbackMs);

    return () => {
      done = true;
      if (tick) window.clearInterval(tick);       // clear ticking
      if (startDelay !== undefined) window.clearTimeout(startDelay); // clear start delay
      window.clearTimeout(fallback);               // clear fallback
      window.removeEventListener("load", handleLoad);
    };
  }, [onFinish, startDelayMs, minDurationMs, tickIntervalMs, fallbackMs, textFadeMs, overlayFadeMs]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end-safe justify-center bg-[#000]"
      style={{
        opacity: isOverlayFading ? 0 : 1,                  // 6a) overlay fades when true
        transition: `opacity ${overlayFadeMs}ms ease-out`,      // sync with overlayFadeMs
      }}
    >
      <div className="w-[60%] h-20 max-w-[520px]">
        <div className="h-[6px] w-full bg-[#000] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#7300FF] transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        {/* Percentage text: fades first, then gets hidden */}
        {!isTextHidden && (
          <div
            className="text-center text-white text-sm mt-3"
            style={{
              opacity: isTextFading ? 0 : 1,            // 5a) opacity animated
              transition: `opacity ${textFadeMs}ms ease`,// sync with textFadeMs
            }}
          >
            {progress}%
          </div>
        )}
      </div>
    </div>
  );
}

export default Loader;
