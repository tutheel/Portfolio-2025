"use client";
// projectData.ts
export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  projectLink: string;
  codeLink: string;
};

const projectData: Project[] = [
  {
    id: "ved-janani",
    title: "Ved Janani",
    subtitle: "Fullstack Educational Website",
    description:
      "This project is a blend of thoughtful design and functional development, crafted to be both intuitive and reliable.",
    stack: ["Next.js", "Redux", "Tailwind CSS", "Framer Motion", "AWS"],
    projectLink: "https://www.google.com",
    codeLink: "https://github.com/tutheel/Ved-Janani",
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    subtitle: "Interactive Developer & Designer Portfolio",
    description:
      "A personal portfolio focused on motion, accessibility, and responsive design with a clean visual system.",
    stack: ["Next.js", "Tailwind CSS", "GSAP", "Framer Motion"],
    projectLink: "https://example.com/portfolio",
    codeLink: "https://github.com/you/portfolio",
  },
  {
    id: "rating-service",
    title: "Rating Service",
    subtitle: "Serverless Insurance Pricing Engine",
    description:
      "Event-driven architecture using Lambda and DynamoDB; designed for low-latency quote calculations.",
    stack: ["AWS Lambda", "API Gateway", "DynamoDB", "Node.js", "Terraform"],
    projectLink: "https://example.com/rating-service",
    codeLink: "https://github.com/you/rating-service",
  },
  {
    id: "graphene-supercap",
    title: "Supercapacitor",
    subtitle: "Cyclic Voltammetry Visualizer",
    description:
      "Data app to visualize CV curves and compute key electrochemical metrics from lab exports.",
    stack: ["Next.js", "Chart.js", "Tailwind CSS"],
    projectLink: "https://example.com/graphene-supercap",
    codeLink: "https://github.com/you/graphene-supercap",
  },
];

export default projectData;
