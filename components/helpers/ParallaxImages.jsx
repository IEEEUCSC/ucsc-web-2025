"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ParallaxImages = () => {
  return (
    <div className="z-20 pointer-events-none w-full max-w-5xl py-6 mx-auto">
      <ParallaxImage
        src="/images/stack/4.jpg"
        alt="Temp Image1"
        className="w-1/3"
        selector="parallax-1"
        start={-200}
        end={200}
      />

      <ParallaxImage
        src="/images/stack/1.jpg"
        alt="Temp Image2"
        className="mx-auto w-2/3"
        selector="parallax-2"
        start={200}
        end={-250}
      />

      <ParallaxImage
        src="/images/stack/6.jpg"
        alt="Temp Image3"
        className="ml-auto w-1/3"
        selector="parallax-3"
        start={-200}
        end={-200}
      />
    </div>
  );
};

export default ParallaxImages;

const ParallaxImage = ({ className, selector, src, alt, start, end }) => {
  useGSAP(() => {
    //Parallax Animation
    gsap.fromTo(
      `.${selector}`,
      {
        translateY: start,
      },
      {
        translateY: end,
        scrollTrigger: {
          trigger: `.${selector}`,
          start: `${start}px bottom`,
          end: `bottom ${end * -1}px`,
          //markers: true,
          scrub: true,
          ease: "power2.out",
        },
      }
    );

    //Removing Hero Heading
    gsap.to(".hero-text", {
      opacity: 0,
      scrollTrigger: {
        start: "",
        end: "+=300px",
        scrub: true,
        ease: "power2.out",
      },
    });
  }, []);

  return (
    <div className={`${selector} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={1200}
        className="object-cover w-full h-full"
      />
    </div>
  );
};
