import React from "react";
import { Geist, Oswald, Poppins } from "next/font/google";
import developerSkills from "@/data/developerSkills";
import designerSkills from "@/data/designerSkills";

// const geist = Geist({
//   weight: ["400"],
//   subsets: ["latin"],
//   variable: "--font-geist-mono",
// });

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

const lang = ["JavaScript", "Typescript", "Java", "Python", "HTML", "CSS"];
const frameworks = [
  "Node.js",
  "Express.js",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Material UI",
];
const devTools = [
  "Git",
  "Github (Actions, Workflows)",
  "Postman",
  "Terraform",
  "AWS CLI",
];
const libraries = ["GSAP", "Three.js", "Framer Motion"];
const others = [
  "AWS (Lambda, DynamoDB, S3, API Gateway, IAM, Cognito, KMS, Secrets Manager, SNS, SQS, CloudWatch, CloudFront, Amplify, EC2)",
  "Rest APIs",
  "Kafka",
  "Docker",
  "Serverless",
  "Kubernetes",
  "CI/CD",
];

const tredFineArt = [
  "Drawing & Sketching",
  "Painting (Acrylic / Oil / Watercolor)",
  "Charcoal Art",
  "Calligraphy",
  "Sculpture & Clay Modeling",
  "Life Drawing (Figure Drawing)",
];

const visuConceptArt = [
  "Storyboarding",
  "Concept Art",
  "Character Design",
  "Art Direction (Creative)",
];

const degitalArt = ["Pixel Art", "3D Art (Blender)", "Generative Art"];

const uiuxInter = [
  "UI/UX Design",
  "Interaction Design",
  "Microinteractions",
  "Motion Design (UI animation, microinteractions)",
  "User Flows & Journey Mapping",
  "Wireframing & Prototyping",
];

const visualDesig = [
  "Typography",
  "Layout & Composition",
  "Iconography",
  "Visual Hierarchy",
  "Branding & Identity Design",
  "Responsive Web Design",
];

const uxResStrat = [
  "UX Research",
  "Heuristic Evaluation",
  "A/B Testing",
  "Design Thinking",
];

const designTools = [
  "Figma",
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Blender",
  "Premiere Pro",
];

function Skills() {
  return (
    <>
      <section className="bg-[#060606]">
        <div className="w-full h-30 lg:h-52 flex items-center-safe justify-center translate-y-20">
          <h1
            className={`${poppins.className} capitalize text-transparent bg-gradient-to-b from-[#75020F] from-0%  to-[#19171B] to-70% bg-clip-text font-bold text-4xl md:text-4xl lg:text-8xl`}
          >
            These are my skills
          </h1>
        </div>
        {/* Developer */}
        <div className="w-full h-40 lg:h-48 flex items-center-safe justify-center translate-y-20">
          <h1
            className={`${poppins.className} text-transparent opacity-10 bg-gradient-to-b from-[#ffffff] from-32%  to-[#19171B] to-100% bg-clip-text font-medium text-7xl md:text-5xl lg:text-[30vh]`}
          >
            Developer
          </h1>
        </div>
        <div className="w-full h-[125vh] lg:h-[80vh] mt-8 px-5 lg:px-20">
          <div className="flex flex-row justify-start-safe items-center-safe gap-2 lg:gap-5">
            <h1
              className={`${poppins.className} text-4xl lg:text-7xl text-transparent bg-gradient-to-b from-[#ffffff] from-12%  to-[#19171B] to-120% bg-clip-text pb-2`}
            >
              Developer
            </h1>
            <div className="w-5 h-5 lg:w-10 lg:h-10 mt-1 rounded-full bg-linear-to-b from-[#75020F] from-12%  to-[#2B0307] to-100%" />
          </div>
          <div className="my-8 h-[2px] w-full bg-radial from-[#ffffff] from-12%  to-[#19171B] to-100%" />
          <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 px-5 lg:px-20">
            {Object.entries(developerSkills).map(([category, items]) => (
              <div key={category}>
                <h3
                  className={`${poppins.className} text-lg font-semibold capitalize`}
                >
                  {category}
                </h3>
                {category == "AWS Services" ? (
                  <div
                    className={`${poppins.className} grid grid-cols-1 lg:grid-cols-2 text-[#A6A6A6] text-md capitalize my-3`}
                  >
                    {items.map((item) => (
                      <p
                        key={item}
                        className="py-0.5  hover:text-white transition-colors duration-300"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div
                    className={`${poppins.className} text-[#A6A6A6] text-md capitalize my-3`}
                  >
                    {items.map((item) => (
                      <p
                        key={item}
                        className="py-0.5  hover:text-white transition-colors duration-300"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Designer */}
        <div className="w-full h-40 lg:h-52 flex items-center-safe justify-center translate-y-20">
          <h1
            className={`${poppins.className} text-transparent opacity-10 bg-gradient-to-b from-[#ffffff] from-32%  to-[#19171B] to-100% bg-clip-text font-medium text-7xl md:text-5xl lg:text-[30vh]`}
          >
            Designer
          </h1>
        </div>
        <div className="w-full h-[125vh] lg:h-[60vh] mt-8 px-5 lg:px-20">
          <div className="flex flex-row justify-end-safe items-center-safe gap-2 lg:gap-5">
            <div className="w-5 h-5 lg:w-10 lg:h-10 mt-1 rounded-full bg-linear-to-b from-[#75020F] from-12%  to-[#2B0307] to-100%" />
            <h1
              className={`${poppins.className} text-4xl lg:text-7xl text-transparent bg-gradient-to-b from-[#ffffff] from-12%  to-[#19171B] to-120% bg-clip-text pb-2`}
            >
              Designer
            </h1>
          </div>
          <div className="my-8 h-[2px] w-full bg-radial from-[#ffffff] from-12%  to-[#19171B] to-100%" />
          <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 px-5 lg:px-20">
            {Object.entries(designerSkills).map(([category, items]) => (
              <div key={category}>
                <h3
                  className={`${poppins.className} text-lg font-semibold capitalize`}
                >
                  {category}
                </h3>
                <div
                  className={`${poppins.className} text-[#A6A6A6] text-md capitalize my-3`}
                >
                  {items.map((item) => (
                    <p
                      key={item}
                      className="py-0.5  hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
    // <div className="w-full h-[120svh] bg-[#19171b] flex flex-col gap-10 items-center justify-center select-none">
    //   {/* Hover text */}
    //   <div className="w-full h-[45svh] flex flex-col justify-end">
    //     <div
    //       className={`w-full ${oswald.className} tracking-tight font-semibold uppercase flex flex-col items-center text-[12vw] leading-none bg-linear-180 from-[#fff200] from-10% via-[#ff7300] via-50% to-[#c402ce] to-70% bg-clip-text text-transparent`}
    //     >
    //       Developer
    //     </div>
    //   </div>

    //   {/* Skill Block */}
    //   <div className="w-full h-[55svh] flex flex-row items-center justify-evenly gap-5 px-10">
    //     {/* Developer */}
    //     <div className="w-1/2 h-full bg-black flex flex-row items-center justify-center rounded-xl">
    //       <div className="w-[20%] h-full text-white  flex flex-row items-center justify-center">
    //         <div className="rotate-270 flex flex-row items-center justify-center gap-2 -mb-8 mr-5">
    //           <div className="text-6xl">Developer</div>
    //           <div className="w-10 h-10 mt-3 bg-linear-270 from-[#fff200] from-10% via-[#ff7300] via-50% to-[#c402ce] to-80% rounded-full" />
    //         </div>
    //       </div>
    //       <div className="w-[80%] h-full text-right flex flex-col justify-start pt-5 text-white pr-5">
    //         <div
    //           className={`flex flex-col text-right text-sm gap-5 font-light ${poppins.className}`}
    //         >
    //           <div>
    //             <p className="font-semibold">Languages</p>
    //             {lang.map((skill, index) => (
    //               <span
    //                 key={index}
    //                 className="hover:text-[#ff7300] transition duration-200 ease-in-out"
    //               >
    //                 {skill}
    //                 {index < lang.length - 1 && <span>, </span>}
    //               </span>
    //             ))}
    //           </div>
    //           <div>
    //             <p className="font-semibold">Frameworks</p>
    //             {frameworks.map((skill, index) => (
    //               <span
    //                 key={index}
    //                 className="hover:text-[#ff7300] transition duration-200 ease-in-out"
    //               >
    //                 {skill}
    //                 {index < frameworks.length - 1 && <span>, </span>}
    //               </span>
    //             ))}
    //           </div>
    //           <div>
    //             <p className="font-semibold">Dev Tools</p>
    //             {devTools.map((skill, index) => (
    //               <span
    //                 key={index}
    //                 className="hover:text-[#ff7300] transition duration-200 ease-in-out"
    //               >
    //                 {skill}
    //                 {index < devTools.length - 1 && <span>, </span>}
    //               </span>
    //             ))}
    //           </div>
    //           <div>
    //             <p className="font-semibold">Libraries</p>
    //             {libraries.map((skill, index) => (
    //               <span
    //                 key={index}
    //                 className="hover:text-[#ff7300] transition duration-200 ease-in-out"
    //               >
    //                 {skill}
    //                 {index < libraries.length - 1 && <span>, </span>}
    //               </span>
    //             ))}
    //           </div>
    //           <div>
    //             <p className="font-semibold">Others</p>
    //             {others.map((skill, index) => (
    //               <span
    //                 key={index}
    //                 className="hover:text-[#ff7300] transition duration-200 ease-in-out"
    //               >
    //                 {skill}
    //                 {index < others.length - 1 && <span>, </span>}
    //               </span>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* Designer */}
    //     <div className="w-1/2 h-full bg-white flex flex-row items-center justify-center rounded-xl">
    //       <div className="w-[20%] h-full text-black flex flex-row items-center justify-center">
    //         <div className="rotate-270 flex flex-row items-center justify-center gap-2 -mb-18 mr-5">
    //           <div className="text-6xl">Designer</div>
    //           <div className="w-10 h-10 mt-3 bg-linear-270 from-[#fff200] from-10% via-[#ff7300] via-50% to-[#c402ce] to-80% rounded-full" />
    //         </div>
    //       </div>
    //       <div className="w-[80%] h-full text-right flex flex-col justify-start pt-5 text-black pr-5">
    //         <div
    //           className={`flex flex-col text-right text-sm gap-5 font-light ${poppins.className}`}
    //         >
    //           <div>
    //             <p className="font-semibold">UI/UX Design & Interaction</p>
    //             {uiuxInter.map((skill, index) => (
    //               <span
    //                 key={index}
    //                 className="hover:text-[#ff7300] transition duration-200 ease-in-out"
    //               >
    //                 {skill}
    //                 {index < uiuxInter.length - 1 && <span>, </span>}
    //               </span>
    //             ))}
    //           </div>
    //           <div>
    //             <p className="font-semibold">Visual Design & Aesthetics</p>
    //             {visualDesig.map((skill, index) => (
    //               <span
    //                 key={index}
    //                 className="hover:text-[#ff7300] transition duration-200 ease-in-out"
    //               >
    //                 {skill}
    //                 {index < visualDesig.length - 1 && <span>, </span>}
    //               </span>
    //             ))}
    //           </div>
    //           <div>
    //             <p className="font-semibold">UX Research & Strategy</p>
    //             {uxResStrat.map((skill, index) => (
    //               <span
    //                 key={index}
    //                 className="hover:text-[#ff7300] transition duration-200 ease-in-out"
    //               >
    //                 {skill}
    //                 {index < uxResStrat.length - 1 && <span>, </span>}
    //               </span>
    //             ))}
    //           </div>
    //           <div>
    //             <p className="font-semibold">Design Tools</p>
    //             {designTools.map((skill, index) => (
    //               <span
    //                 key={index}
    //                 className="hover:text-[#ff7300] transition duration-200 ease-in-out"
    //               >
    //                 {skill}
    //                 {index < designTools.length - 1 && <span>, </span>}
    //               </span>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Art */}
    //     {/* <div className="w-1/3 h-full bg-[#232323] flex flex-row items-center justify-center">
    //       <div className="w-[20%] h-full text-white  flex flex-row items-center justify-center">
    //         <div className="rotate-270 flex flex-row items-center justify-center gap-2 -mb-52 mr-5">
    //           <div className="text-6xl">Art</div>
    //           <div className="w-10 h-10 mt-3 bg-[#ff7300] rounded-full" />
    //         </div>
    //       </div>
    //       <div className="w-[80%] h-full text-right text-white pr-5 pt-5">
    //         <div
    //           className={`flex flex-col text-right text-md gap-5 font-light ${poppins.className}`}
    //         >
    //           <div>
    //             <p className="font-semibold">Traditional Fine Arts</p>
    //             {tredFineArt.map((skill, index) => (
    //               <span
    //                 key={index}
    //                 className="hover:text-[#ff7300] transition duration-200 ease-in-out"
    //               >
    //                 {skill}
    //                 {index < tredFineArt.length - 1 && <span>, </span>}
    //               </span>
    //             ))}
    //           </div>
    //           <div>
    //             <p className="font-semibold">
    //               Visual Storytelling & Conceptual Art
    //             </p>
    //             {visuConceptArt.map((skill, index) => (
    //               <span
    //                 key={index}
    //                 className="hover:text-[#ff7300] transition duration-200 ease-in-out"
    //               >
    //                 {skill}
    //                 {index < visuConceptArt.length - 1 && <span>, </span>}
    //               </span>
    //             ))}
    //           </div>
    //           <div>
    //             <p className="font-semibold">Digital & Experimental Art</p>
    //             {degitalArt.map((skill, index) => (
    //               <span
    //                 key={index}
    //                 className="hover:text-[#ff7300] transition duration-200 ease-in-out"
    //               >
    //                 {skill}
    //                 {index < degitalArt.length - 1 && <span>, </span>}
    //               </span>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div> */}
    //   </div>
    //   {/* <div className="w-full h-[5%] flex flex-row items-center justify-center">
    //     <p className={`${poppins.className}`}>
    //       Skills page is still under development
    //     </p>
    //   </div> */}
    // </div>
  );
}
export default Skills;
