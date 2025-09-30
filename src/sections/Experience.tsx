"use client";
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
      <section className="w-full h-[250svh] bg-radial-[at_50%_0%] from-[#240051] from-0%  to-[#000000] to-75% flex flex-col items-center">
        {/* heading */}
        <h1
          className={`${inter.className} leading-none font-bold text-transparent bg-radial-[at_50%_0%] from-[#7300FF] from-10% via-[#2F0069] via-70% to-[#110130] to-95% bg-clip-text text-[30svh] tracking-tighter text-center pt-15 px-10`}
        >
          My Journey So Far...
        </h1>
        {/* Content */}
        <div className={` w-full ${inter.className} px-40 pt-10`}>
        <div className="h-[3px] w-full bg-[#2d0064]"></div>
          <div className="flex justify-around py-4">
            <h1 className="w-[25%] font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">
              Accenture
            </h1>
            <div className="w-[25%]">
              <h1 className="font-normal text-lg text-[#7300FF]">
                Software Engineer
              </h1>
              <h1 className="font-light text-sm text-[#a4a4a4] italic">
                Dec 2024 - Present
              </h1>
            </div>
            <h1 className="w-[50%]">
              <ul className="font-normal list-disc list-outside">
                <li>
                  Engineered a scalable, serverless workflow orchestration
                  system to asynchronously process insurance document operations
                  (print, store, email, preview) triggered by dynamic Guidewire
                  events.
                </li>
                <li>
                  Developed resilient request handling with AJV-based JSON
                  schema validation and error-handling logic, along with JSON
                  transformation services to ensure accurate payloads for
                  downstream API integrations.
                </li>
                <li>
                  Developed production-ready services using TypeScript/Node.js,
                  integrating 3rd-party APIs and maintaining 99% unit test
                  coverage with Jest to ensure code quality and stability.
                </li>
                <li>
                  Implemented a fully event-driven architecture using AWS
                  Lambda, API Gateway, S3, DynamoDB, SNS, Step Functions,
                  Secrets Manager, VPC, CloudWatch, IAM & MongoDB.
                </li>
                <li>
                  Managed infrastructure as code using Terraform, and automated
                  deployments via GitHub Actions, including secure secret
                  management through Terraform Workspaces.
                </li>
                <li>
                  Enabled Dynatrace for end-to-end request tracing, performance
                  monitoring, and failure detection across distributed
                  components.
                </li>
                <li>
                  Streamlined API testing using Postman with environment
                  variables, pre-request scripts, and test automation.
                </li>
                <li>
                  Gained working experience with Playwright for full-scale test
                  automation of application flows.
                </li>
                <li>
                  Collaborated across engineering, QA, and business teams to
                  align technical implementation with functional and
                  non-functional requirements.
                </li>
                <li className="text-[#a4a4a4] pt-2">
                  <b>TechStack:</b> Typescript, Node, AWS
                </li>
              </ul>
            </h1>
          </div>
          <div className="h-[3px] w-full bg-[#2d0064]"></div>
          <div className="flex justify-around py-4">
            <h1 className="w-[25%] font-medium text-xl text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">
              Accenture
            </h1>
            <div className="w-[25%]">
              <h1 className="font-normal text-lg text-[#7300FF]">
                Associate Software Engineer
              </h1>
              <h1 className="font-light text-sm text-[#a4a4a4] italic">
                Dec 2022 - Nov 2024
              </h1>
            </div>
            <h1 className="w-[50%]">
              <ul className="font-normal list-disc list-outside">
                <li>
                  Built a serverless rating service using AWS Lambda to support
                  the Rate process in the insurance lifecycle (Rate, Quote,
                  Issue).
                </li>
                <li>
                  Created a workflow where the service communicates between two
                  AWS accounts (standard and trusted) to pass policy details and
                  fetch additional rating information.
                </li>
                <li>
                  Used API Gateway to securely integrate with Lambda functions
                  and handle incoming requests from applications.
                </li>
                <li>
                  Stored rating request data in DynamoDB and used it to track
                  and manage incoming policy details.
                </li>
                <li>
                  Secured API access using Cognito for user authentication and
                  IAM roles for permissions between AWS services.
                </li>
                <li>
                  Kept services inside a VPC for additional network security.
                </li>
                <li>
                  Stored temporary files or logs in S3, and monitored service
                  activity and performance using CloudWatch Logs.
                </li>
                <li>
                  Wrote code in Node.js & Typescript to handle business logic,
                  perform request validation, communicate between trusted and
                  standard AWS accounts, and developed unit tests using Jest to
                  ensure core functionality and reliability.
                </li>
                <li>
                  Managed infrastructure using Terraform, defining all AWS
                  resources as code for easy setup and consistency across
                  environments.
                </li>
                <li>
                  Worked closely with the team to understand requirements, test
                  features, and make improvements.
                </li>
                <li className="text-[#a4a4a4] pt-2">
                  <b>TechStack:</b> Typescript, Node, AWS
                </li>
              </ul>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
