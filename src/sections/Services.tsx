"use client";
// import SecondaryTitle from "@/components/SecondaryTitle";
import ServiceCard from "@/components/ServiceCard";
import servicesData from "@/data/servicesData";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: [
    "latin",
    "latin-ext",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
  ],
});

function Services() {
  return (
    <>
      <section
        className={` ${inter.className} w-full max-h-max overflow-hidden flex flex-col justify-start items-center bg-radial-[at_50%_0%] from-[#240051] from-0%  to-[#000000] to-75%`}
      >
        <div className="w-full h-1/2">
          <h1
            className={`${inter.className} font-bold top-0 text-transparent bg-radial-[at_50%_0%] from-[#7300FF] from-10% via-[#2F0069] via-55% to-[#110130] to-75% bg-clip-text text-[6.5rem] lg:text-[21.5rem] tracking-tighter text-center pt-25 lg:pt-0`}
          >
            Services
          </h1>
          {/* <div
            className={`w-full ${inter.className} flex flex-row items-center justify-between px-80 opacity-80`}
          >
            <SecondaryTitle text="Collaborators" />
            <SecondaryTitle text="Recruiters" />
            <SecondaryTitle text="Recruiters" />
            <SecondaryTitle text="Recruiters" />
          </div> */}
        </div>
        <div className="w-full h-1/2 flex flex-col lg:flex-row justify-evenly items-center-safe lg:items-start space-y-5 lg:space-y-0 pb-10">
          {servicesData.map((p) => (
            <ServiceCard key={p.id} service={p} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
