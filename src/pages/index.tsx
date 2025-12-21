"use client";
import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import Content from "@/pages/Content";
import Loader from "@/sections/Loader";



export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <SeoHead
        title="Sushil Patil | Creative Developer & Designer"
        description="Explore the portfolio of Sushil Patil, a creative developer and designer crafting immersive web experiences, motion-led interfaces, and bold digital products."
        keywords={[
          "Sushil Patil",
          "creative developer",
          "web designer",
          "web animations",
          "portfolio",
          "frontend developer",
          "India",
        ]}
      />
      {/* Render content underneath so assets load during the loader */}
      <div aria-hidden={loading} className={loading ? "opacity-0 pointer-events-none select-none" : "opacity-100"}>
        <Content />
      </div>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* <Content /> */}
      {/* <Hero /> */}
      {/* <About/> */}
      {/* <Projects/> */}
      {/* <Skills/> */}
      {/* <Services/> */}
      {/* <Experience /> */}
      {/* <Footer/> */}
    </>
  );
}
