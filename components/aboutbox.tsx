import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";

export async function AboutBoxReveal() {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#3a0096"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Test Master<span className="text-[#3a0096]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#3a0096"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          The ultimate tool for{" "}
          <span className="text-[#3a0096]">School&apos;s & Institutions</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#3a0096"} duration={0.5}>
        <div className="mt-6">
          <p>
            {/* 20+ free and open-source animated components built with
            <span className="font-semibold text-[#3a0096]"> React</span>,
            <span className="font-semibold text-[#3a0096]"> Typescript</span>,
            <span className="font-semibold text-[#3a0096]"> Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#3a0096]"> Framer Motion</span>
            . <br />
            100% open-source, and customizable. <br /> */}
            In today&apos;s fast-paced educational environment, teachers and
            students need an efficient way to conduct and take tests. Enter
            TestMaster, an intuitive web app that allows teachers to create
            customizable, timed tests for students to complete online. With
            TestMaster, teachers can easily input questions, answers, and
            multiple-choice options, and set time limits for each test.
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#3a0096"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#3a0096]">Explore</Button>
      </BoxReveal>
    </div>
  );
}
