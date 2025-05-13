import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import PastEvents from "@/components/PastEvents";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatWeDo />
      <Timeline />
      <PastEvents />
      <Team />
      <Contact />
    </>
  );
}
