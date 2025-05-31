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
    <section className="bg-[#060606]">
      {/* change the translate later for effect to 20 insread of 10 */}
      <div className="w-full h-30 lg:h-52 flex items-center-safe justify-center translate-y-10">
        <h1
          className={`${poppins.className} capitalize text-transparent bg-gradient-to-b from-[#75020F] from-0%  to-[#19171B] to-70% bg-clip-text font-bold text-4xl md:text-4xl lg:text-8xl`}
        >
          Here’s How I Can Help
        </h1>
      </div>
      <div className="w-full h-100 bg-[#cccccc] flex flex-row justify-around items-center px-10">
        <div
          className={`w-2/8 h-full ${poppins.className} text-center text-[20vw] font-bold text-[#060606] flex flex-col justify-end-safe items-center overflow-hidden`}
        >
          <h1 className="bg-linear-180 from-[#060606] from-40% to-[#cccccc] to-80% bg-clip-text text-transparent opacity-40">
            01
          </h1>
        </div>
        <div className="w-6/8 h-full flex flex-col justify-items-center-safe gap-5 pl-20">
          <div
            className={`${poppins.className} h-1/2 text-9xl text-left font-semibold tracking-tighter capitalize bg-linear-180 from-[#060606] from-40% to-[#cccccc] to-110% bg-clip-text text-transparent opacity-40 pt-10`}
          >
            Web Development
          </div>
          <div
            className={`${poppins.className} h-1/2 w-full text-left text-[#060606] font-medium capitalize text-2xl tracking-tight opacity-60 pr-40 top-1/2`}
          >
            Elegant and modern websites built with precision. I design
            responsive layouts that reflect your brand identity, prioritize user
            accessibility, and deliver seamless cross-device performance.
          </div>
        </div>
      </div>
      <div className="w-full h-100 bg-[#7a7a7a] flex flex-row justify-around items-center px-10">
        <div
          className={`w-2/8 h-full ${poppins.className} text-center text-[20vw] font-bold text-[#060606] flex flex-col justify-end-safe items-center overflow-hidden`}
        >
          <h1 className="bg-linear-180 from-[#060606] from-40% to-[#7a7a7a] to-80% bg-clip-text text-transparent">
            02
          </h1>
        </div>
        <div className="w-6/8 h-full flex flex-col justify-items-center-safe gap-5 pl-20">
          <div
            className={`${poppins.className} h-1/2 text-9xl text-left font-semibold tracking-tighter capitalize bg-linear-180 from-[#060606] from-40% to-[#7a7a7a] to-110% bg-clip-text text-transparent pt-10`}
          >
            UIUX Design
          </div>
          <div
            className={`${poppins.className} h-1/2 w-full text-left text-[#060606] font-medium capitalize text-2xl tracking-tight pr-40 top-1/2`}
          >
            I craft intuitive user interfaces and purposeful digital
            experiences. From wireframes to interactive prototypes, I focus on
            usability, clarity, and visual harmony to ensure your product
            engages and retains users.
          </div>
        </div>
      </div>
      <div className="w-full h-100 bg-radial-[at_50%_-40%] from-[#D8001B] via-[#75020F] to-[#45050e26] flex flex-row justify-around items-center px-10">
        <div
          className={`w-2/8 h-full ${poppins.className} text-center text-[20vw] font-bold text-[#060606] flex flex-col justify-end-safe items-center overflow-hidden`}
        >
          <h1 className="bg-linear-180 from-[#ffffff] from-40% to-[#060606] to-75% bg-clip-text text-transparent">
            03
          </h1>
        </div>
        <div className="w-6/8 h-full flex flex-col justify-items-center-safe gap-5 pl-20">
          <div
            className={`${poppins.className} h-1/2 text-9xl text-left font-semibold tracking-tighter capitalize bg-linear-180 from-[#ffffff] from-40% to-[#060606] to-150% bg-clip-text text-transparent pt-10`}
          >
            Cloud Solutions
          </div>
          <div
            className={`${poppins.className} h-1/2 w-full text-left text-[#ffffff] font-medium capitalize text-2xl tracking-tight pr-40 top-1/2`}
          >
            Scalable, secure, and cost-effective cloud architectures. I build and deploy serverless applications using AWS, integrating services like Lambda, S3, DynamoDB, and more—engineered for performance and reliability.
          </div>
        </div>
      </div>
    </section>
    // bg-radial-[at_50%_-40%] from-[#D8001B] via-[#75020F] to-[#45050e26]
    // <section className="w-full h-[120svh] bg-black relative">
    //   {/* Services text behind */}
    //   <div
    //     className={`absolute inset-0 top-20 text-center font-medium ${poppins.className} text-[5vw] z-10 opacity-60`}
    //   >
    //     <p className="bg-linear-180 from-[#ffffff] from-40% to-[#181818] to-90% bg-clip-text text-transparent">
    //       My Services
    //     </p>
    //   </div>
    //   {/* Foreground content */}
    //   <div className="w-full h-full flex flex-col items-center justify-center text-white text-4xl font-bold z-50 relative">
    //     <div className="w-full h-[20svh] flex flex-row items-center justify-start overflow-hidden p-10 gap-32">
    //       <div
    //         className={`${poppins.className} text-[11vw] pt-10 font-bold italic bg-linear-180 from-[#ff3700] from-40% to-[#181818] to-80% bg-clip-text text-transparent`}
    //       >
    //         01
    //       </div>
    //       <div
    //         className={`${oswald.className} text-[10vw] pt-10 font-medium uppercase bg-linear-180 from-[#ffffff] from-40% to-[#181818] to-80% bg-clip-text text-transparent `}
    //       >
    //         Web Development
    //       </div>
    //     </div>
    //     <div className="w-full h-[20svh] border-t-1 border-[#a3a3a33a] flex flex-row items-center justify-end overflow-hidden p-10 gap-32">
    //       <div
    //         className={`${oswald.className} text-[10vw] pt-10 font-medium uppercase bg-linear-180 from-[#ffffff] from-40% to-[#181818] to-80% bg-clip-text text-transparent `}
    //       >
    //         UI/UX Design
    //       </div>
    //       <div
    //         className={`${poppins.className} text-[11vw] pb-10 font-bold italic bg-linear-0 from-[#ff3700] from-40% to-[#181818] to-80% bg-clip-text text-transparent`}
    //       >
    //         02
    //       </div>
    //     </div>
    //     <div className="w-full h-[20svh] border-t-1 border-[#a3a3a33a] flex flex-row items-center justify-start overflow-hidden p-10 gap-32">
    //       <div
    //         className={`${poppins.className} text-[11vw] pt-10 font-bold italic bg-linear-180 from-[#ff3700] from-40% to-[#181818] to-80% bg-clip-text text-transparent`}
    //       >
    //         03
    //       </div>
    //       <div
    //         className={`${oswald.className} text-[10vw] pt-10 font-medium uppercase bg-linear-180 from-[#ffffff] from-40% to-[#181818] to-80% bg-clip-text text-transparent `}
    //       >
    //         Cloud Solutions
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Services;
