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
      "ved Janani is AWS Serverless educational platform offering courses, quizzes, and interactive content for learners. Under development..",
    stack: ["Next.js", "AWS", "Clerk", "Tailwind CSS", "Framer Motion"],
    projectLink: "https://ved-janani.com",
    codeLink: "https://github.com/tutheel/Ved-Janani",
  },
  {
    id: "xpenzi",
    title: "Xpenzi",
    subtitle: "AI Expense Management Website",
    description:
      "Xpenzi is a Splitwise-inspired SaaS with AI budgeting insights, optimized for serverless AWS and Vercel delivery. Under development..",
    stack: [
      "Next.js",
      "AWS",
      "shadCn-UI",
      "prisma",
      "clerk",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "terraform",
    ],
    projectLink: "https://xpenzi.com",
    codeLink: "https://github.com/tutheel/Xpenzi",
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    subtitle: "Interactive Developer & Designer Portfolio",
    description:
      "A personal portfolio focused on motion, accessibility, and responsive design with a clean visual system.",
    stack: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "lenis-motion",
      "Three.js",
      "Vercel",
    ],
    projectLink: "https://tutheel.dev",
    codeLink: "https://github.com/you/portfolio",
  },
  {
    id: "ochi-design",
    title: "Ochi-Design",
    subtitle: "Frontend Project",
    description:
      "Frontend of ochi-design.com. built for Practicing framer motion and GSAP animations.",
    stack: [
      "Javascript",
      "React",
      "Framer Motion",
      "Gsap",
      "Node.js",
      "Tailwind CSS",
    ],
    projectLink: "https://ochi-design.com",
    codeLink: "https://github.com/tutheel/OCHI_Design",
  },
];

export default projectData;

// ,{
//     id: "TodoApp-ts-frontend",
//     title: "TodoApp Frontend",
//     subtitle: "Front End for Todo Application",
//     description:
//       "Sleek and modern frontend for a Todo application with task management, and real-time updates.",
//     stack: ["Typescript", "React.js", "MUI", "tanstack-query", "Axios"],
//     projectLink: "https://todoapp-frontend-ts.vercel.app/",
//     codeLink: "https://github.com/tutheel/TODOApp-ts-",
//   },
//   {
//     id: "TodoApp-ts-backend",
//     title: "TodoApp Backend",
//     subtitle: "Backend for Todo Application",
//     description:
//       "Robust backend for a Todo application featuring task management, and real-time updates using Node.js and Express.",
//     stack: ["Typescript", "Nodejs", "express", "MySQL", "Axios"],
//     projectLink: "",
//     codeLink: "https://github.com/tutheel/TODOApp-ts-",
//   },
