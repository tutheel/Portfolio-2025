"use client";
import { useState } from "react";
import Loader from "@/sections/Loader";
import Content from "@/sections/Content";


export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? <Loader onFinish={() => setLoading(false)} /> : <Content />}

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
