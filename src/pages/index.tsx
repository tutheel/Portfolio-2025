"use client";
import { useState } from "react";
import Loader from "@/sections/Loader";
import Content from "@/sections/Content";


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
