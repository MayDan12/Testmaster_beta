import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Seamless Test Creation",
    description:
      "Effortlessly create and deploy tests for your students. Customize questions, set timers, and publish with ease to ensure a smooth experience.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Secured Assessments",
    description:
      "All tests come with SSL encryption and advanced security measures, safeguarding student data and ensuring the integrity of the examination process.",
    icon: LockClosedIcon,
  },
  {
    name: "Automated Grading",
    description:
      "Simplify grading with automated scoring. Results are calculated instantly, providing immediate feedback to students, and helping you manage scores efficiently.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced Reporting",
    description:
      "Gain insights into student performance with detailed analytics. Track progress, identify trends, and help your students succeed with comprehensive reports.",
    icon: FingerPrintIcon,
  },
];

export default function AboutFeatures() {
  return (
    <div className="bg-white pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-7 text-[#3a0096]">
            Assess Smarter
          </h2>
          <p className="mt-1 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Everything you need to manage tests efficiently
          </p>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Test Master streamlines the entire testing process—from creation and
            deployment to grading and reporting. Enhance your assessment process
            with powerful tools designed for educators.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16  lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#3a0096]">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
