import React from "react";
import NavBar from "./NavBar";
import { Oswald, Poppins } from "next/font/google";

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const currentDate = () => {
  // const date = new Date();
  const now = new Date();

  const day = now.getDate().toString().padStart(2, "0");
  const month = now.toLocaleString("en-US", { month: "short" }).toUpperCase(); // e.g. "MAY"
  const year = now.getFullYear();
  // const options: Intl.DateTimeFormatOptions = {
  //   month: "long",
  //   day: "2-digit",
  //   year: "numeric",
  // };
  // const date = now.toLocaleDateString('en-IN', {
  //   year: 'numeric',
  //   month: '2-digit',
  //   day: '2-digit',
  // });

  // const time = now.toLocaleTimeString('en-IN', {
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   second: '2-digit',
  // });
  // return date.toLocaleDateString("en-US", options);
  // return `${date} ${time}`;
  // return `${day} ${month} ${year}`;
  return { day, month, year };
};

// const threeLines = ["Creative", "Cloud", "Code"];

function Hero() {
  const { day, month, year } = currentDate();
  return (
    <div className="w-screen h-screen bg-[#19171b]">
      <div className="w-full h-[60svh] bg-radial-[at_50%_100%] from-[#fff200] via-[#ff7300] to-[#c402ce] to-90% flex items-end justify-end overflow-hidden uppercase pr-2">
        <div
          className={`text-7xl tracking-tighter font-bold text-right ${oswald.className}`}
        >
          <div className="invert">Artist</div>
          <div className="invert">Designer</div>
          <div className="invert">Developer</div>
          {/* <div className="invert">Developer & Designer</div> */}
        </div>
      </div>
      <div className="w-full h-[30svh] flex flex-row">
        <div
          className={`basis-1/2 text-7xl font-bold ml-2 tracking-tighter ${oswald.className} uppercase text-white`}
        >
          <div>Creativity</div>
          <div>Cloud</div>
          <div>Code</div>
        </div>

        <div className="w-1/2 text-md mt-2">
          <div className={`w-[15vw] ml-50 text-wrap ${poppins.className} `}>
            I believe technology should be smart, seamless, and stylish. I make
            sure it's all three.
          </div>
        </div>
        <div className="w-1/2 text-md mt-2">
          <div className={`w-[15vw] ml-50 text-wrap ${poppins.className}`}>
            <div>I am developer, designer & artist from india</div>
            {/* <div>from India</div> */}
          </div>
        </div>
      </div>
      <div className="w-full h-[10svh] flex flex-row justify-between text-white text-sm pr-3 pl-3 pt-8">
        <div className={`flex flex-col items-center ${poppins.className} `}>
          <div className="tracking-tight font-light">
            &#169; Sushil Patil / 2025
          </div>
        </div>
        <div className={`flex flex-col items-center ${poppins.className} `}>
          <div className="tracking-tight font-light">Scroll Down</div>
          <div className="-mt-5  text-3xl select-none duration-300 ease-in hover:-mt-1">
            &#8964;
          </div>
        </div>
        <div className={`flex flex-col items-center ${poppins.className}`}>
          <div className="tracking-tighter font-light">
            {day} {month} {year}
          </div>
          {/* <div className="tracking-widest font-medium -mt-1.5">{year}</div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
