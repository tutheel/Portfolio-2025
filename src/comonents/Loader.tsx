import React from "react";
import { useState, useEffect, useRef } from "react";
import { gsap, CSSPlugin } from "gsap";
import { Oswald } from "next/font/google";
gsap.registerPlugin(CSSPlugin);

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

function Loader({ onFinish }: { onFinish?: () => void }) {
  const [counter, setCounter] = useState(0);
  const progressBarRef = useRef(null);
  const followRef = useRef(null);
  const followRefTwo = useRef(null);
  const counterRef = useRef(null);
  const loadRef = useRef(null);
  const mainLoadRef = useRef(null);
  // const contentLinesRef = useRef(null);
  // const line1Ref = useRef(null);
  // const line2Ref = useRef(null);
  // const line3Ref = useRef(null);
  // const line4Ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => {
        if (counter < 100) {
          return counter + 1;
        }
        clearInterval(interval);
        reveal();
        return 100;
      });
    }, 15);

    return () => clearInterval(interval);
  });

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        if (onFinish) onFinish();
        console.log("Completed!");
      },
    });
    t1.to(followRef.current, {
      width: "100%",
      delay: 0.5,
      duration: 1.2,
      ease: "Power3.easeInOut",
    })
      .to(counterRef.current, {
        opacity: 0,
        duration: 0.4,
      })
      .to(counterRef.current, {
        display: "none",
        duration: 0.1,
      })
      .to(followRef.current, {
        height: "100%",
        top: "0%",
        duration: 1.0,
        ease: "Power3.easeInOut",
      })
      .to(followRefTwo.current, {
        height: "100%",
        width: "100%",
        top: "0%",
        duration: 0.01,
        // ease: "Power3.easeInOut",
      })
      .to(progressBarRef.current, {
        display: "none",
      })
      .to(followRef.current, {
        width: "0%",
        top: "0%",
        duration: 1,
        delay: 0.2,
        ease: "Power3.easeInOut",
      })
      .to(followRefTwo.current, {
        width: "0%",
        top: "0%",
        duration: 0.3,
        ease: "Power4.out",
      })
      .to(loadRef.current, {
        opacity: 0,
        display: "none",
        duration: 0.01,
      })
      .to(mainLoadRef.current, {
        opacity: 0,
        display: "none",
        duration: 0.3,
        ease: "Power4.out",
      });
    // .to(contentLinesRef.current, {
    //   opacity: 1,
    //   duration: 0.5,
    //   ease: "Power3.easeInOut",
    // })
    // .to(line1Ref.current, {
    //   opacity: 1,
    //   y: 0,
    //   duration: 0.8,
    //   ease: "Power3.easeOut",
    // })
    // .to(
    //   line2Ref.current,
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 0.8,
    //     ease: "Power3.easeOut",
    //   },
    //   "-=0.4"
    // )
    // .to(
    //   line3Ref.current,
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 0.8,
    //     ease: "Power3.easeOut",
    //   },
    //   "-=0.4"
    // )
    // .to(
    //   line4Ref.current,
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 0.8,
    //     ease: "Power3.easeOut",
    //   },
    //   "-=0.4"
    // );
  };
  return (
    <div ref={mainLoadRef} className="w-screen h-screen relative text-center overflow-hidden">
      {/* content - placed first so it's behind the loading div */}
      {/* <div className="h-full w-full absolute top-0 left-0 bg-[#0b0b0b] flex items-center justify-center z-0">
        <div
          ref={contentLinesRef}
          className="flex flex-col items-center justify-center space-y-4 opacity-0"
        >
          <p
            ref={line1Ref}
            className="text-lines text-[50px] opacity-0 translate-y-8"
          >
            the greated Glory in living lies,
          </p>
          <p
            ref={line2Ref}
            className="text-lines text-[50px] opacity-0 translate-y-8"
          >
            not in never falling,
          </p>
          <p
            ref={line3Ref}
            className="text-lines text-[50px] opacity-0 translate-y-8"
          >
            but in rising every time we fall
          </p>
          <p
            ref={line4Ref}
            className="text-lines text-[30px] opacity-0 translate-y-8"
          >
            -Nelson Mandela
          </p>
        </div>
      </div> */}

      {/* loading - placed second so it's in front of the content div */}
      <div
        ref={loadRef}
        className="w-full h-full bg-[#0b0b0b] absolute top-0 left-0 z-10"
      >
        {/* follow2 */}
        <div
          ref={followRefTwo}
          className="h-[4px] bg-white absolute left-0 top-1/2 flex justify-center items-center z-30"
        ></div>
        {/* follow */}
        <div
          ref={followRef}
          // className="h-[4px] bg-radial-[at_100%_50%] from-[#fff200] via-[#ff7300] to-[#c402ce] to-90% absolute left-0 top-1/2 flex justify-center items-center z-40"
           className="h-[4px] bg-linear-to-r from-[#2F0069] from-0%  to-[#7300FF] to-100% absolute left-0 top-1/2 flex justify-center items-center z-40"
        ></div>

        {/* ProgressBar */}
        <div
          ref={progressBarRef}
          className="h-[4px] bg-[#fff] absolute left-0 top-1/2 flex justify-center items-center z-20"
          style={{ width: `${counter}%` }}
        ></div>

        {/* counter */}
        <p
          ref={counterRef}
          className={`absolute text-[40px] ${oswald.className} tracking-tight left-1/2 top-5/6 text-white font-medium`}
        >
          {counter}%
        </p>
      </div>
    </div>
  );
}

export default Loader;
