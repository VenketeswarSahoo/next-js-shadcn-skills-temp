"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Strategic brand identities built for category leadership. Naming, visual systems, and messaging that make you impossible to ignore.",
  },
  {
    number: "02",
    title: "Product & Development",
    description:
      "AI-accelerated engineering that ships production-ready web and mobile products in 2-4 weeks. Speed without compromise.",
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Custom AI tools, smart automations, and intelligent workflows that save your team thousands of hours and unlock a new level of productivity.",
  },
  {
    number: "04",
    title: "Web3 & Blockchain",
    description:
      "On-chain applications and smart contracts that bridge the gap between complex tech and intuitive user experiences.",
  },
  {
    number: "05",
    title: "Motion & Media",
    description:
      "High-fidelity motion graphics and video production that tell your story with cinematic precision and impact.",
  },
  {
    number: "06",
    title: "Growth & Strategy",
    description:
      "Data-driven growth strategies that scale your product from zero to one and beyond with predictable results.",
  },
];

const ServicesSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate horizontal scroll distance
  // We use a tight spring to smooth out the scroll wheel steps without adding "floaty" delay
  const xRaw = useTransform(scrollYProgress, [0, 0.1, 1], [0, 0, -85]);
  const xSpring = useSpring(xRaw, {
    stiffness: 400,
    damping: 90,
    mass: 1,
    restDelta: 0.001,
  });
  const x = useTransform(xSpring, (value) => `${value}%`);

  return (
    <>
      {/* Desktop Version: Sticky Horizontal Scroll */}
      <section
        ref={targetRef}
        className="hidden lg:block relative h-[240vh] bg-black"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x, willChange: "transform" }} className="flex">
            {/* Intro Section */}
            <div className="flex h-screen w-[75vw] flex-none flex-col justify-between px-6 py-24 lg:px-12 lg:py-32">
              <div className="w-full">
                <span className="text-sm font-medium text-muted-foreground mb-8 block uppercase">
                  Services
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-white max-w-2xl">
                  End-to-end delivery. One studio. Zero bottlenecks, zero
                  handoff delays.
                </h2>
                <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase mt-8">
                  <span className="flex gap-2">
                    {[...Array(6)].map((_, i) => (
                      <span
                        key={i}
                        className="h-1 w-1 rounded-full bg-muted-foreground"
                      />
                    ))}
                  </span>
                  Scroll to explore
                </div>
              </div>

              <p className="max-w-md text-muted-foreground text-sm md:text-lg">
                Brand, product, AI, blockchain, and media. All under one roof,
                all moving at the speed your business demands. We ship what
                other agencies scope out for six months.
              </p>
            </div>

            {/* Cards Section */}
            <div className="flex items-end pb-32 pr-[50vw]">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative flex h-[70vh] w-[350px] md:w-[450px] lg:w-[600px] flex-none flex-col justify-between border-l border-white/5 p-10 lg:p-16 lg:pb-24 transition-colors"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/[0.15] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-primary scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100" />

                  <div className="relative">
                    <span className="text-8xl md:text-[10rem] font-bold transition-colors text-muted-foreground/20">
                      {service.number}
                    </span>
                  </div>

                  <div className="flex flex-col gap-8 relative">
                    <div className="relative h-px w-full bg-white/10 overflow-hidden">
                      <div className="absolute inset-0 bg-primary scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                    </div>

                    <div className="flex flex-col gap-4">
                      <h3 className="text-2xl md:text-4xl font-medium text-white">
                        {service.title}
                      </h3>
                      <p className="text-md md:text-lg text-muted-foreground max-w-[90%]">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-4 opacity-0 -translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      <span className="text-primary text-sm font-medium flex items-center gap-2 cursor-pointer">
                        Explore <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Version: Simple Vertical List */}
      <section className="lg:hidden block bg-black px-6 py-20">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <span className="text-sm font-medium text-muted-foreground uppercase">
              Services
            </span>
            <h2 className="text-3xl font-medium text-white">
              End-to-end delivery. One studio. Zero bottlenecks, zero handoff
              delays.
            </h2>
          </div>

          <div className="flex flex-col">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col gap-6 py-12 border-b border-white/10 last:border-0"
              >
                <span className="text-6xl font-bold text-muted-foreground/20 leading-none">
                  {service.number}
                </span>
                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-2">
                  <span className="text-primary text-sm font-medium flex items-center gap-2">
                    Explore <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
