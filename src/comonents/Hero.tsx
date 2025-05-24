import { Oswald, Poppins } from "next/font/google";

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const currentDate = () => {
  const now = new Date();

  const day = now.getDate().toString().padStart(2, "0");
  const month = now.toLocaleString("en-US", { month: "short" }).toUpperCase(); // e.g. "MAY"
  const year = now.getFullYear();
  
  return { day, month, year };
};

// const threeLines = ["Creative", "Cloud", "Code"];

function Hero() {
  const { day, month, year } = currentDate();
  return (
    <section className="w-full h-[110svh] bg-[#19171b]">
      <div className="w-full h-[30svh] bg-radial-[at_50%_100%] from-[#fff200] via-[#ff7300] to-[#c402ce] to-90% flex items-end justify-end overflow-hidden uppercase pr-2">
        <div
          className={`text-7xl tracking-tighter font-bold text-right ${oswald.className}`}
        >
          {/* add your Margue here also */}
          {/* <div className="invert">Artist</div>
          <div className="invert">Designer</div>
          <div className="invert">Developer</div> */}
          {/* <div className="invert">Developer & Designer</div> */}
        </div>
      </div>
      <div className="w-full h-[55svh] flex flex-row items-start-safe justify-between">
        <div
          className={`basis-1/2 text-9xl tracking-tight font-medium ml-2 mt-2 ${poppins.className} text-white`}
        >
          <p>Code</p>
          <p>Cloud</p>
          <p>Creativity</p>
        </div>

        <div className="w-1/2 text-md mt-2 mr-5 flex flex-row justify-end-safe">
          <div className={`w-[15vw] text-end text-sm ${poppins.className} `}>
            I believe technology should be smart, seamless, and stylish. I make
            sure it&apos;s all three.
          </div>
        </div>
      </div>
      <div className="w-full h-[15svh] border-t-1 border-white flex flex-row justify-between text-white text-sm pr-3 pl-3 pt-2 mt-15">
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
    </section>
  );
}

export default Hero;
