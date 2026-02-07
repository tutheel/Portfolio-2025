import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next";
import CustomCursor from "@/components/CustomCursor";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Block right-click context menu on images
    const handleContext = (e: MouseEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    // Block drag on images
    const handleDrag = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContext);
    document.addEventListener("dragstart", handleDrag);

    return () => {
      document.removeEventListener("contextmenu", handleContext);
      document.removeEventListener("dragstart", handleDrag);
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
