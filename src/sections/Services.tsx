"use client";
import SecondaryTitle from "@/components/SecondaryTitle";
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
        className={` ${inter.className} w-full h-screen overflow-hidden`}
      >
        <div className="w-full h-6/15 pt-10">
          <h1
            className={`${inter.className} leading-none font-bold text-transparent bg-radial-[at_50%_0%] from-[#7300FF] from-10% via-[#2F0069] via-55% to-[#110130] to-75% bg-clip-text text-[16rem] tracking-tighter text-center`}
          >
            Services
          </h1>
          <div
            className={`w-full ${inter.className} flex flex-row items-center justify-between px-80 opacity-80`}
          >
            <SecondaryTitle text="Collaborators" />
            <SecondaryTitle text="Recruiters" />
            <SecondaryTitle text="Recruiters" />
            <SecondaryTitle text="Recruiters" />
          </div>
        </div>
        <div className="w-full h-9/15 flex justify-between items-center px-35">
          {servicesData.map((p) => (
            <ServiceCard key={p.id} service={p} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
