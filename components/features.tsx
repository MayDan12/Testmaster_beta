"use client";

import { motion } from "framer-motion";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Create and Assign Tests",
    description:
      "Easily create custom tests with multiple question types and assign them to students with just a few clicks. Ensure a seamless testing experience.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Secure and Timed Exams",
    description:
      "All tests are secured with time limits and encryption, ensuring integrity in every assessment. Students get real-time feedback after submission.",
    icon: LockClosedIcon,
  },
  {
    name: "Track Progress and Results",
    description:
      "Automatically track student performance and generate detailed reports. Test Master helps you analyze results for better decision-making.",
    icon: ServerIcon,
  },
];

export default function Features() {
  return (
    <div className="overflow-hidden py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:pr-8 lg:pt-4"
          >
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-[#3a0096]">
                Test Smarter
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better way to assess students
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Test Master revolutionizes online exams, making it easier for
                educators to create, manage, and analyze tests. Ensure students
                get the best testing experience with our secure platform.
              </p>
              <dl className="mt-7 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative pl-9"
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-[#3a0096]"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <svg
              className="w-full h-auto"
              viewBox="0 0 800 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="800" height="600" rx="8" fill="#F3F4F6" />
              <rect
                x="40"
                y="40"
                width="720"
                height="80"
                rx="4"
                fill="#E5E7EB"
              />
              <rect
                x="60"
                y="60"
                width="200"
                height="40"
                rx="4"
                fill="#3A0096"
              />
              <rect
                x="280"
                y="60"
                width="120"
                height="40"
                rx="4"
                fill="#D1D5DB"
              />
              <rect
                x="420"
                y="60"
                width="120"
                height="40"
                rx="4"
                fill="#D1D5DB"
              />
              <rect
                x="560"
                y="60"
                width="120"
                height="40"
                rx="4"
                fill="#D1D5DB"
              />
              <rect
                x="40"
                y="140"
                width="460"
                height="420"
                rx="4"
                fill="#E5E7EB"
              />
              <rect
                x="60"
                y="160"
                width="420"
                height="40"
                rx="4"
                fill="#D1D5DB"
              />
              <rect
                x="60"
                y="220"
                width="420"
                height="320"
                rx="4"
                fill="white"
              />
              <rect
                x="80"
                y="240"
                width="380"
                height="30"
                rx="4"
                fill="#F3F4F6"
              />
              <rect
                x="80"
                y="290"
                width="380"
                height="30"
                rx="4"
                fill="#F3F4F6"
              />
              <rect
                x="80"
                y="340"
                width="380"
                height="30"
                rx="4"
                fill="#F3F4F6"
              />
              <rect
                x="80"
                y="390"
                width="380"
                height="30"
                rx="4"
                fill="#F3F4F6"
              />
              <rect
                x="80"
                y="440"
                width="380"
                height="30"
                rx="4"
                fill="#F3F4F6"
              />
              <rect
                x="80"
                y="490"
                width="180"
                height="30"
                rx="4"
                fill="#3A0096"
              />
              <rect
                x="520"
                y="140"
                width="240"
                height="420"
                rx="4"
                fill="#E5E7EB"
              />
              <rect
                x="540"
                y="160"
                width="200"
                height="40"
                rx="4"
                fill="#D1D5DB"
              />
              <rect
                x="540"
                y="220"
                width="200"
                height="100"
                rx="4"
                fill="white"
              />
              <rect
                x="560"
                y="240"
                width="160"
                height="20"
                rx="4"
                fill="#F3F4F6"
              />
              <rect
                x="560"
                y="280"
                width="160"
                height="20"
                rx="4"
                fill="#F3F4F6"
              />
              <rect
                x="540"
                y="340"
                width="200"
                height="100"
                rx="4"
                fill="white"
              />
              <rect
                x="560"
                y="360"
                width="160"
                height="20"
                rx="4"
                fill="#F3F4F6"
              />
              <rect
                x="560"
                y="400"
                width="160"
                height="20"
                rx="4"
                fill="#F3F4F6"
              />
              <rect
                x="540"
                y="460"
                width="200"
                height="80"
                rx="4"
                fill="#3A0096"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
