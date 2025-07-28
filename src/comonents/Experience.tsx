import React from "react";
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

const Experience = () => {
  return (
    <>
      <section className="w-full h-[160svh] bg-radial-[at_50%_0%] from-[#240051] from-0%  to-[#000000] to-75% flex flex-col items-center">
        {/* Content */}
        <div className={` w-full ${inter.className} px-40 pt-60`}>
          <div className="h-[2px] w-full bg-gradient-to-r from-[#7300FF] to-[#1E0043]"></div>
          <div className="flex justify-around py-4">
            <h1 className="w-[25%] font-medium text-2xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">
              Accenture
            </h1>
            <div className="w-[25%]">
              <h1 className="font-light text-xl text-[#7300FF]">
                Software Engineer
              </h1>
              <h1 className="font-light text-xl text-[#a4a4a4] italic">
                Dec 2024 - Present
              </h1>
            </div>
            <h1 className="w-[50%]">
              <ul className="font-normal list-disc list-outside">
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eius, consequatur. Tenetur eos numquam reiciendis. Adipisci
                  corporis quibusdam minima cumque quis neque! Aliquam
                  reiciendis placeat sapiente mollitia quod nisi fugiat debitis!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eius, consequatur. Tenetur eos numquam reiciendis. Adipisci
                  corporis quibusdam minima cumque quis neque! Aliquam
                  reiciendis placeat sapiente mollitia quod nisi fugiat debitis!
                </li>
                <li className="text-[#a4a4a4] pt-2">
                  <b>TechStack:</b> Typescript, Node, AWS
                </li>
              </ul>
            </h1>
          </div>
          <div className="h-[2px] w-full bg-gradient-to-r from-[#7300FF] to-[#1E0043]"></div>
          <div className="flex justify-around py-4">
            <h1 className="w-[25%] font-medium text-2xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">
              Accenture
            </h1>
            <div className="w-[25%]">
              <h1 className="font-light text-xl text-[#7300FF]">
                Associate Software Engineer
              </h1>
              <h1 className="font-light text-xl text-[#a4a4a4] italic">
                Dec 2022 - Nov 2024
              </h1>
            </div>
            <h1 className="w-[50%]">
              <ul className="font-normal list-disc list-outside">
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eius, consequatur. Tenetur eos numquam reiciendis. Adipisci
                  corporis quibusdam minima cumque quis neque! Aliquam
                  reiciendis placeat sapiente mollitia quod nisi fugiat debitis!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eius, consequatur. Tenetur eos numquam reiciendis. Adipisci
                  corporis quibusdam minima cumque quis neque! Aliquam
                  reiciendis placeat sapiente mollitia quod nisi fugiat debitis!
                </li>
                <li className="text-[#a4a4a4] pt-2">
                  <b>TechStack:</b> Typescript, Node, AWS
                </li>
              </ul>
            </h1>
          </div>
        </div>

        {/* footer */}
        <div
          className={`w-full ${inter.className} flex flex-row items-center justify-between px-25 pt-40`}
        >
          <h1 className="font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">
            for Everyone
          </h1>
          <h1 className="font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">
            Recruiters
          </h1>
          <h1 className="font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">
            Collaborators
          </h1>
          <h1 className="font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">
            Collaborators
          </h1>
          <h1 className="font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">
            Collaborators
          </h1>
        </div>
        <h1
          className={`${inter.className} leading-none font-bold text-transparent bg-radial-[at_50%_0%] from-[#7300FF] from-0% via-[#2F0069] via-60% to-[#110130] to-80% bg-clip-text text-[28svh] tracking-tighter text-center pb-20`}
        >
          That&apos;s My Journey So Far
        </h1>
      </section>
    </>
  );
};

export default Experience;
