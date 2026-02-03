export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  summary: string;
  points: string[];
  techStack: string;
}

export const experiences: ExperienceItem[] = [
  {
    company: "Accenture",
    role: "Software Engineer",
    duration: "Dec 2024 - Present",
    summary: "Building serverless workflow orchestration for insurance document processing on AWS.",
    points: [
      "Engineered a scalable, serverless workflow orchestration system to asynchronously process insurance document operations (print, store, email, preview) triggered by dynamic Guidewire events.",
      "Developed resilient request handling with AJV-based JSON schema validation and error-handling logic, along with JSON transformation services to ensure accurate payloads for downstream API integrations.",
      "Developed production-ready services using TypeScript/Node.js, integrating 3rd-party APIs and maintaining 99% unit test coverage with Jest to ensure code quality and stability.",
      "Implemented a fully event-driven architecture using AWS Lambda, API Gateway, S3, DynamoDB, SNS, Step Functions, Secrets Manager, VPC, CloudWatch, IAM & MongoDB.",
      "Managed infrastructure as code using Terraform, and automated deployments via GitHub Actions, including secure secret management through Terraform Workspaces.",
      "Enabled Dynatrace for end-to-end request tracing, performance monitoring, and failure detection across distributed components.",
      "Streamlined API testing using Postman with environment variables, pre-request scripts, and test automation.",
      "Gained working experience with Playwright for full-scale test automation of application flows.",
      "Collaborated across engineering, QA, and business teams to align technical implementation with functional and non-functional requirements.",
    ],
    techStack: "Typescript, Node, AWS",
  },
  {
    company: "Accenture",
    role: "Associate Software Engineer",
    duration: "Dec 2022 - Nov 2024",
    summary: "Developed a serverless rating service powering the insurance lifecycle on AWS.",
    points: [
      "Built a serverless rating service using AWS Lambda to support the Rate process in the insurance lifecycle (Rate, Quote, Issue).",
      "Created a workflow where the service communicates between two AWS accounts (standard and trusted) to pass policy details and fetch additional rating information.",
      "Used API Gateway to securely integrate with Lambda functions and handle incoming requests from applications.",
      "Stored rating request data in DynamoDB and used it to track and manage incoming policy details.",
      "Secured API access using Cognito for user authentication and IAM roles for permissions between AWS services.",
      "Kept services inside a VPC for additional network security.",
      "Stored temporary files or logs in S3, and monitored service activity and performance using CloudWatch Logs.",
      "Wrote code in Node.js & Typescript to handle business logic, perform request validation, communicate between trusted and standard AWS accounts, and developed unit tests using Jest to ensure core functionality and reliability.",
      "Managed infrastructure using Terraform, defining all AWS resources as code for easy setup and consistency across environments.",
      "Worked closely with the team to understand requirements, test features, and make improvements.",
    ],
    techStack: "Typescript, Node, AWS",
  },
];
