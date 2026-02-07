"use client";
import React, { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring animation for the outer ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    },
    [cursorX, cursorY, isVisible]
  );

  const onMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const onMouseDown = useCallback(() => {
    setIsClicking(true);
  }, []);

  const onMouseUp = useCallback(() => {
    setIsClicking(false);
  }, []);

  useEffect(() => {
    // Check for hover states on interactive elements
    const handleElementHover = () => {
      const hoveredElements = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, [data-cursor-hover]"
      );

      hoveredElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    handleElementHover();

    // Re-check for new elements periodically (for dynamic content)
    const observer = new MutationObserver(handleElementHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      observer.disconnect();
    };
  }, [onMouseMove, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 500, damping: 28 },
          opacity: { duration: 0.2 },
        }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "12px",
            height: "12px",
          }}
        >
          {/* Core dot */}
          <div
            className="absolute inset-0 rounded-full bg-[#ffffff]"
            // style={{
            //   boxShadow: `
            //     0 0 10px 2px rgba(115, 0, 255, 0.8),
            //     0 0 20px 4px rgba(115, 0, 255, 0.6),
            //     0 0 30px 6px rgba(115, 0, 255, 0.4),
            //     0 0 40px 8px rgba(115, 0, 255, 0.2)
            //   `,
            // }}
          />
        </div>
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 25 },
          opacity: { duration: 0.2 },
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{
            // boxShadow: isHovering
            //   ? "0 0 15px 3px rgba(255, 255, 255, 0.6), 0 0 30px 6px rgba(255, 255, 255, 0.3)"
            //   : "none",
            borderColor: isHovering
              ? "rgba(255, 255, 255, 0.8)"
              : "rgba(115, 0, 255, 0.5)",
          }}
          transition={{ duration: 0.2 }}
          style={{
            width: "40px",
            height: "40px",
            border: "2px solid rgba(115, 0, 255, 0.5)",
          }}
        />
      </motion.div>

    </>
  );
};

export default CustomCursor;
