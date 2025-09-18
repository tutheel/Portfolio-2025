"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import developerSkills from "@/data/developerSkills";
import designerSkills from "@/data/designerSkills";

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

// const lang = ["JavaScript", "Typescript", "Java", "Python", "HTML", "CSS"];
// const frameworks = [
//   "Node.js",
//   "Express.js",
//   "React.js",
//   "Next.js",
//   "Tailwind CSS",
//   "Material UI",
// ];
// const devTools = [
//   "Git",
//   "Github (Actions, Workflows)",
//   "Postman",
//   "Terraform",
//   "AWS CLI",
// ];
// const libraries = ["GSAP", "Three.js", "Framer Motion"];
// const others = [
//   "AWS (Lambda, DynamoDB, S3, API Gateway, IAM, Cognito, KMS, Secrets Manager, SNS, SQS, CloudWatch, CloudFront, Amplify, EC2)",
//   "Rest APIs",
//   "Kafka",
//   "Docker",
//   "Serverless",
//   "Kubernetes",
//   "CI/CD",
// ];

// const tredFineArt = [
//   "Drawing & Sketching",
//   "Painting (Acrylic / Oil / Watercolor)",
//   "Charcoal Art",
//   "Calligraphy",
//   "Sculpture & Clay Modeling",
//   "Life Drawing (Figure Drawing)",
// ];

// const visuConceptArt = [
//   "Storyboarding",
//   "Concept Art",
//   "Character Design",
//   "Art Direction (Creative)",
// ];

// const degitalArt = ["Pixel Art", "3D Art (Blender)", "Generative Art"];

// const uiuxInter = [
//   "UI/UX Design",
//   "Interaction Design",
//   "Microinteractions",
//   "Motion Design (UI animation, microinteractions)",
//   "User Flows & Journey Mapping",
//   "Wireframing & Prototyping",
// ];

// const visualDesig = [
//   "Typography",
//   "Layout & Composition",
//   "Iconography",
//   "Visual Hierarchy",
//   "Branding & Identity Design",
//   "Responsive Web Design",
// ];

// const uxResStrat = [
//   "UX Research",
//   "Heuristic Evaluation",
//   "A/B Testing",
//   "Design Thinking",
// ];

// const designTools = [
//   "Figma",
//   "Photoshop",
//   "Illustrator",
//   "After Effects",
//   "Blender",
//   "Premiere Pro",
// ];

function Skills() {
  const [activeTab, setActiveTab] = useState<"developer" | "designer">(
    "developer"
  );

  type SkillData = Record<string, string[]>;

  const skills: SkillData =
    activeTab === "developer" ? developerSkills : designerSkills;
  return (
    <>
      <section className="w-full h-[130svh] bg-radial-[at_50%_0%] from-[#240051] from-0%  to-[#000000] to-75% flex flex-col items-center">
        {/* top */}
        <div
          className={`w-full ${inter.className} flex flex-row items-center justify-evenly px-80 pb-10 pt-45`}
        >
          <button
            onClick={() => setActiveTab("developer")}
            className={`font-medium text-5xl pb-5 transition-all duration-500 ${
              activeTab === "developer"
                ? "text-white"
                : "text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text"
            }`}
          >
            Developer
          </button>
          <button
            onClick={() => setActiveTab("designer")}
            className={`font-medium text-5xl pb-5 transition-all duration-500 ${
              activeTab === "designer"
                ? "text-white"
                : "text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text"
            }`}
          >
            Designer
          </button>
        </div>

        {/* content */}
        <div
          className={`${inter.className} w-full h-35 grid grid-cols-6 gap-5 px-10 pl-40`}
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className={` text-lg font-semibold capitalize`}>
                {category}
              </h3>
              <div className={` text-[#A6A6A6] text-md capitalize my-3`}>
                {skillList.map((item) => (
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

        {/* bottom */}
        <div
          className={`w-full ${inter.className} flex flex-row items-center justify-between px-25 pt-60`}
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
          className={`${inter.className} leading-none font-bold text-transparent bg-radial-[at_50%_-20%] from-[#7300FF] from-0% via-[#2F0069] via-50% to-[#110130] to-70% bg-clip-text text-[35svh] tracking-tighter text-center pb-20`}
        >
          Skills & Tools
        </h1>
      </section>
    </>
  );
}
export default Skills;
