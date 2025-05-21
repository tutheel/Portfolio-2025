import React from "react";
import { Geist, Oswald, Poppins } from "next/font/google";

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
    <div className="w-full h-screen bg-[#19171b] flex flex-col items-center justify-center select-none">
      {/* Hover text */}
      <div className="w-full h-[45%] flex flex-col justify-end">
        <div
          className={`w-full ${oswald.className} tracking-tight font-semibold uppercase flex flex-col items-center text-[16vw] leading-none`}
        >
          Developer
        </div>
      </div>

      {/* Skill Block */}
      <div className="w-full h-[50%] flex flex-row items-center justify-evenly">
        {/* Designer */}
        <div className="w-1/3 h-full bg-white flex flex-row items-center justify-center">
          <div className="w-[20%] h-full text-black flex flex-row items-center justify-center">
            <div className="rotate-270 flex flex-row items-center justify-center gap-2 -mb-18 mr-5">
              <div className="text-6xl">Designer</div>
              <div className="w-10 h-10 mt-3 bg-[#ff7300] rounded-full" />
            </div>
          </div>
          <div className="w-[80%] h-full text-right text-black pr-5 pt-5">
            <div
              className={`flex flex-col text-right text-md gap-5 font-light ${poppins.className}`}
            >
              <div>
                <p className="font-semibold">UI/UX Design & Interaction</p>
                {uiuxInter.map((skill, index) => (
                  <span
                    key={index}
                    className="hover:text-[#ff7300] transition duration-200 ease-in-out"
                  >
                    {skill}
                    {index < uiuxInter.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
              <div>
                <p className="font-semibold">Visual Design & Aesthetics</p>
                {visualDesig.map((skill, index) => (
                  <span
                    key={index}
                    className="hover:text-[#ff7300] transition duration-200 ease-in-out"
                  >
                    {skill}
                    {index < visualDesig.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
              <div>
                <p className="font-semibold">UX Research & Strategy</p>
                {uxResStrat.map((skill, index) => (
                  <span
                    key={index}
                    className="hover:text-[#ff7300] transition duration-200 ease-in-out"
                  >
                    {skill}
                    {index < uxResStrat.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
              <div>
                <p className="font-semibold">Design Tools</p>
                {designTools.map((skill, index) => (
                  <span
                    key={index}
                    className="hover:text-[#ff7300] transition duration-200 ease-in-out"
                  >
                    {skill}
                    {index < designTools.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Developer */}
        <div className="w-1/3 h-full bg-[#232323] flex flex-row items-center justify-center">
          <div className="w-[20%] h-full text-white  flex flex-row items-center justify-center">
            <div className="rotate-270 flex flex-row items-center justify-center gap-2 -mb-8 mr-5">
              <div className="text-6xl">Developer</div>
              <div className="w-10 h-10 mt-3 bg-[#ff7300] rounded-full" />
            </div>
          </div>
          <div className="w-[80%] h-full text-right text-white pr-5 pt-5">
            <div
              className={`flex flex-col text-right text-md gap-5 font-light ${poppins.className}`}
            >
              <div>
                <p className="font-semibold">Languages</p>
                {lang.map((skill, index) => (
                  <span
                    key={index}
                    className="hover:text-[#ff7300] transition duration-200 ease-in-out"
                  >
                    {skill}
                    {index < lang.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
              <div>
                <p className="font-semibold">Frameworks</p>
                {frameworks.map((skill, index) => (
                  <span
                    key={index}
                    className="hover:text-[#ff7300] transition duration-200 ease-in-out"
                  >
                    {skill}
                    {index < frameworks.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
              <div>
                <p className="font-semibold">Dev Tools</p>
                {devTools.map((skill, index) => (
                  <span
                    key={index}
                    className="hover:text-[#ff7300] transition duration-200 ease-in-out"
                  >
                    {skill}
                    {index < devTools.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
              <div>
                <p className="font-semibold">Libraries</p>
                {libraries.map((skill, index) => (
                  <span
                    key={index}
                    className="hover:text-[#ff7300] transition duration-200 ease-in-out"
                  >
                    {skill}
                    {index < libraries.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
              <div>
                <p className="font-semibold">Others</p>
                {others.map((skill, index) => (
                  <span
                    key={index}
                    className="hover:text-[#ff7300] transition duration-200 ease-in-out"
                  >
                    {skill}
                    {index < others.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Art */}
        <div className="w-1/3 h-full bg-black flex flex-row items-center justify-center">
          <div className="w-[20%] h-full text-white  flex flex-row items-center justify-center">
            <div className="rotate-270 flex flex-row items-center justify-center gap-2 -mb-52 mr-5">
              <div className="text-6xl">Art</div>
              <div className="w-10 h-10 mt-3 bg-[#ff7300] rounded-full" />
            </div>
          </div>
          <div className="w-[80%] h-full text-right text-white pr-5 pt-5">
            <div
              className={`flex flex-col text-right text-md gap-5 font-light ${poppins.className}`}
            >
              <div>
                <p className="font-semibold">Traditional Fine Arts</p>
                {tredFineArt.map((skill, index) => (
                  <span
                    key={index}
                    className="hover:text-[#ff7300] transition duration-200 ease-in-out"
                  >
                    {skill}
                    {index < tredFineArt.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
              <div>
                <p className="font-semibold">
                  Visual Storytelling & Conceptual Art
                </p>
                {visuConceptArt.map((skill, index) => (
                  <span
                    key={index}
                    className="hover:text-[#ff7300] transition duration-200 ease-in-out"
                  >
                    {skill}
                    {index < visuConceptArt.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
              <div>
                <p className="font-semibold">Digital & Experimental Art</p>
                {degitalArt.map((skill, index) => (
                  <span
                    key={index}
                    className="hover:text-[#ff7300] transition duration-200 ease-in-out"
                  >
                    {skill}
                    {index < degitalArt.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[5%] flex flex-row items-center justify-center">
        <p className={`${poppins.className}`}>
          Skills page is still under development
        </p>
      </div>
    </div>
  );
}
export default Skills;
