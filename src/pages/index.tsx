"use client";
import About from "@/comonents/About";
import Content from "@/comonents/Content";
import Loader from "@/comonents/Loader";
import Services from "@/comonents/Services";
import Skills from "@/comonents/Skills";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? <Loader onFinish={() => setLoading(false)} /> : <Content />}
      {/* <Services /> */}
    </>
  );
}
