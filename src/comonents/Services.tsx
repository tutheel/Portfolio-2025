import { Oswald, Poppins } from "next/font/google";

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

function Services() {
  return (
    <section className="w-full h-[120svh] bg-black relative">
      {/* Services text behind */}
      <div
        className={`absolute inset-0 top-20 text-center font-medium ${poppins.className} text-[5vw] z-10 opacity-60`}
      >
        <p className="bg-linear-180 from-[#ffffff] from-40% to-[#181818] to-90% bg-clip-text text-transparent">
          My Services
        </p>
      </div>
      {/* Foreground content */}
      <div className="w-full h-full flex flex-col items-center justify-center text-white text-4xl font-bold z-50 relative">
        <div className="w-full h-[20svh] flex flex-row items-center justify-start overflow-hidden p-10 gap-32">
          <div
            className={`${poppins.className} text-[11vw] pt-10 font-bold italic bg-linear-180 from-[#ff3700] from-40% to-[#181818] to-80% bg-clip-text text-transparent`}
          >
            01
          </div>
          <div
            className={`${oswald.className} text-[10vw] pt-10 font-medium uppercase bg-linear-180 from-[#ffffff] from-40% to-[#181818] to-80% bg-clip-text text-transparent `}
          >
            Web Development
          </div>
        </div>
        <div className="w-full h-[20svh] border-t-1 border-[#a3a3a33a] flex flex-row items-center justify-end overflow-hidden p-10 gap-32">
          <div
            className={`${oswald.className} text-[10vw] pt-10 font-medium uppercase bg-linear-180 from-[#ffffff] from-40% to-[#181818] to-80% bg-clip-text text-transparent `}
          >
            UI/UX Design
          </div>
          <div
            className={`${poppins.className} text-[11vw] pb-10 font-bold italic bg-linear-0 from-[#ff3700] from-40% to-[#181818] to-80% bg-clip-text text-transparent`}
          >
            02
          </div>
        </div>
        <div className="w-full h-[20svh] border-t-1 border-[#a3a3a33a] flex flex-row items-center justify-start overflow-hidden p-10 gap-32">
          <div
            className={`${poppins.className} text-[11vw] pt-10 font-bold italic bg-linear-180 from-[#ff3700] from-40% to-[#181818] to-80% bg-clip-text text-transparent`}
          >
            03
          </div>
          <div
            className={`${oswald.className} text-[10vw] pt-10 font-medium uppercase bg-linear-180 from-[#ffffff] from-40% to-[#181818] to-80% bg-clip-text text-transparent `}
          >
            Cloud Solutions
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
