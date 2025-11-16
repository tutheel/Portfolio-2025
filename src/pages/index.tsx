"use client";
import { useState } from "react";
import Content from "@/pages/Content";
import Loader from "@/sections/Loader";



export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
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
