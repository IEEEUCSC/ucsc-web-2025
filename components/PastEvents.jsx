"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { pastEvents } from "@/utils";
import { useState, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PastEvents = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const carouselWidth =
    (pastEvents.length * containerWidth) / 5 + pastEvents.length * 2;

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useGSAP(() => {
    gsap.to(".carousel", {
      xPercent: (-100 * (carouselWidth - containerWidth)) / carouselWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        ease: "none",
      },
    });
  }, []);

  return (
    <section
      className="h-[200vh] w-full wrapper"
      ref={containerRef}
      id="past-events"
    >
      <div className="sticky top-20 overflow-hidden h-fit">
        <div>
          <h3 className="text-center text-8xl font-semibold text-secondary-blue">
            Past Events
          </h3>
        </div>

        <div className="carousel flex gap-[2px] mt-6">
          {pastEvents.map(({ title, summary, image, date, url }, index) => (
            <div
              className="h-[500px] flex-shrink-0 event"
              key={index}
              style={{ width: containerWidth / 5 }}
            >
              <Link href={url}>
                <div className="px-6 py-6 space-y-2 text-secondary-blue hover:bg-secondary-white transition-colors">
                  <p className="line-clamp-2 text-xs mb-2">{date}</p>
                  <span className="font-semibold text-lg">{title}</span>

                  <p className="line-clamp-3 text-xs">{summary}</p>
                </div>

                <div className="bg-red-400 w-full ">
                  <Image
                    src={`/images/past-events/${image}`}
                    width={1000}
                    height={1000}
                    className="w-full object-cover aspect-square"
                    alt={title}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
