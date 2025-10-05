// servicesData.ts
"use client";

export type Services = {
  id: string;
  title: string;
  description: string;
};

const servicesData: Services[] = [
  {
    id: "web-applications",
    title: "Web Applications",
    description:
      "Full-stack web apps with clean architecture, performance-first builds, and scalable frontends using Next.js/React.",
  },
  {
    id: "aws-cloud-solutions",
    title: "Cloud Solutions with AWS",
    description:
      "Design and implement secure, cost-efficient AWS architectures using Lambda, API Gateway, DynamoDB, S3, SNS/SQS, and Terraform.",
  },
  {
    id: "event-driven-services",
    title: "Event-Driven Services",
    description:
      "Serverless event pipelines and orchestrations with robust error handling, retries, and observability for real-time workflows.",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Designs",
    description:
      "Human-centered interfaces, wireframes, and prototypes with accessible, responsive design systems and smooth micro-interactions.",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "Brand assets, banners, posters, and social graphics with consistent visual language tailored to your audience.",
  }
];

export default servicesData;
