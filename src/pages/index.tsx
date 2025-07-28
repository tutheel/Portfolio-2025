"use client";
import { useState } from "react";
import Loader from "@/comonents/Loader";
import Content from "@/comonents/Content";

// import About from "@/comonents/About";
// import Experience from "@/comonents/Experience";
// import Footer from "@/comonents/Footer";
// import Hero from "@/comonents/Hero";
// import Projects from "@/comonents/Projects";
// import Services from "@/comonents/Services";
// import Skills from "@/comonents/Skills";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? <Loader onFinish={() => setLoading(false)} /> : <Content />}

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
