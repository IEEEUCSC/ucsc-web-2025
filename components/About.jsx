import Image from "next/image";

import TextScroll from "./helpers/TextScroll";
import TextVelocityScroll from "./helpers/TextVelocityScroll";
import AnimatedImageStack from "./helpers/AnimatedImageStack";

const About = () => {
  return (
    <section className="py-20 mt-10 relative md:px-16 px-6" id="about-us">
      <div className="flex md:flex-row flex-col gap-8">
        <div className="w-full h-screen overflow-hidden flex-1 sticky top-16 md:flex hidden">
          <Image
            src="/images/6.jpg"
            width={2000}
            height={2000}
            className="w-full h-full object-cover"
            alt="About Image"
          />
        </div>

        <div className="flex flex-col flex-1 gap-6 md:w-1/2 w-full">
          <div className="w-full h-full bg-neutral-200 overflow-hidden whitespace-nowrap velocity-container relative">
            <AnimatedImageStack />

            <TextVelocityScroll
              className="text-[150px] 2xl:text-[300px] font-bold uppercasecase leading-none text-secondary-blue"
              selector="velocity-1"
              container="velocity-container"
              fromX={-100}
              toX={-30}
            >
              UCSC IEEE
            </TextVelocityScroll>

            <TextVelocityScroll
              className="text-[150px] 2xl:text-[300px] font-bold uppercasecase leading-none text-secondary-blue"
              selector="velocity-2"
              container="velocity-container"
              fromX={-70}
              toX={-110}
            >
              UCSC IEEE
            </TextVelocityScroll>

            <TextVelocityScroll
              className="text-[150px] 2xl:text-[300px] font-bold uppercasecase leading-none text-secondary-blue"
              selector="velocity-3"
              container="velocity-container"
              fromX={-120}
              toX={-10}
            >
              UCSC IEEE
            </TextVelocityScroll>

            <TextVelocityScroll
              className="text-[150px] 2xl:text-[300px] font-bold uppercasecase leading-none text-secondary-blue"
              selector="velocity-4"
              container="velocity-container"
              fromX={-10}
              toX={-150}
            >
              UCSC IEEE
            </TextVelocityScroll>
          </div>

          <div className="space-y-4 pt-10 md:w-3/4 w-full text-secondary-blue">
            <TextScroll className="text-lg" selector="about-1">
              The IEEE Student Branch of University of Colombo School of
              Computing was established in 2011 and has achieved great success
              during the past few years. The student branch has been formed with
              the participation and contribution of all four batches of
              University of Colombo School of Computing and it has organized
              many activities to enhance professional development of the
              students.
            </TextScroll>

            <TextScroll className="text-lg" selector="about-2">
              The IEEE Student Branch of University of Colombo School of
              Computing was established in 2011 and has achieved great success
              during the past few years. The student branch has been formed with
              the participation and contribution of all four batches of
              University of Colombo School of Computing and it has organized
              many activities to enhance professional development of the
              students.
            </TextScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
