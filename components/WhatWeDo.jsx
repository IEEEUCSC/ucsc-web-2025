"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

import { whatweDo } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const container = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: container.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        document.body.style.backgroundColor = "#03141E";
      },
      onEnterBack: () => {
        document.body.style.backgroundColor = "#03141E";
      },
      onLeave: () => {
        document.body.style.backgroundColor = "#F2F2F2";
      },
      onLeaveBack: () => {
        document.body.style.backgroundColor = "#F2F2F2";
      },
    });

    const images = document.querySelectorAll(".parallax-div");
    const titles = document.querySelectorAll(".parallax-title");

    images.forEach((image, index) => {
      gsap.to(image, {
        scale: 1.3,
        scrollTrigger: {
          trigger: image,
          start: "top+300px bottom",
          end: "bottom top",
          ease: "power2.in",
          scrub: true,
        },
      });
    });

    titles.forEach((title, index) => {
      gsap.to(title, {
        y: "-75%",
        scrollTrigger: {
          trigger: title,
          start: "top center",
          end: "bottom top",
          ease: "power2.in",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section className="mt-20" ref={container} id="what-we-do">
      <h3 className="text-primary-white font-semibold text-8xl text-center uppercase">
        What we do
      </h3>

      <div className="gap-12 flex flex-col items-center justify-center py-28">
        {whatweDo.map(({ title, description, image, imageAlt }, index) => (
          <div className="flex  group w-[1100px] h-[70vh] gap-8" key={index}>
            <div className="text-secondary-white w-full space-y-16 overflow-hidden py-10">
              <span className="text-6xl font-light uppercase parallax-title inline-block">
                {title}
              </span>
              <p className="w-[250px] text-neutral-400">{description}</p>
            </div>

            <div className="w-full h-[400px] overflow-hidden">
              <div className="w-full h-full parallax-div">
                <Image
                  src={image}
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover group-hover:grayscale-0 grayscale duration-500 transition-all"
                  alt={imageAlt}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
