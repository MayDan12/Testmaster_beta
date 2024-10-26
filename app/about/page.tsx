import { AboutBoxReveal } from "@/components/aboutbox";
import AboutFeatures from "@/components/aboutfeature";
import Background from "@/components/background";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Image from "next/image";
export default function AboutUs() {
  return (
    <div className="relative">
      <Background />
      <div className="flex flex-col md:flex-row gap-6 mt-10 px-8 md:px-16 place-content-center">
        <AboutBoxReveal />
        <div>
          <Image
            src="/testcreate.jpg"
            alt="test create"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="bg-gray-700 text-white py-16 mt-10 flex flex-col md:flex-row-reverse gap-6  px-8 md:px-16 place-content-center">
        <div className="md:w-1/2 place-content-center">
          <h1 className="text-lg">
            TestMaster enables educators to input questions, multiple-choice
            options, and correct answers with ease, eliminating the tedious task
            of manual test creation. Each test can be personalized with
            adjustable time limits, ensuring a controlled and focused
            environment for students during the assessment process.
          </h1>
          <p>
            Beyond test creation, TestMaster&apos;s powerful features provide
            instant scoring and feedback, allowing students to see their
            performance as soon as they complete a test. This not only saves
            time but enhances learning by delivering real-time insights into
            their strengths and areas for improvement.
          </p>
        </div>
        <div className="">
          <Image src="/feature.jpg" alt="Feature" width={500} height={500} />
        </div>
      </div>

      <div className="mt-0 px-8 md:px-16">
        <VelocityScroll
          text="Test Master"
          default_velocity={5}
          className="font-display text-center text-5xl font-bold tracking-[-0.02em] text-gray-900 drop-shadow-sm dark:text-white md:text-6xl md:leading-[4rem]"
        />
      </div>
      <AboutFeatures />
    </div>
  );
}
