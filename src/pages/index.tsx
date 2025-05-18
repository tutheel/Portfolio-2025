import Content from "@/comonents/Content";
import Loader from "@/comonents/Loader";
import { useState } from "react";


export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <Content />
      )}
      {/* <Content /> */}
    </>
  );
}
