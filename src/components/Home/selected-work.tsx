"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { work1, work2, work3 } from "@/assets";

const row1Images = [work1, work2, work3, work1, work2, work3];
const row2Images = [work3, work2, work1, work3, work2, work1];

const SelectedWorkSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Row 1 moves Left to Right
  const x1 = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  // Row 2 moves Right to Left
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden flex flex-col gap-4"
    >
      {/* Black Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[45%] bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />

      <div className="absolute top-4 left-6 lg:top-8 lg:left-12 z-20">
        <div className="flex flex-col gap-8">
          <span className="text-sm font-medium text-muted-foreground uppercase">
            Selected Work
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl">
              Built fast.
              <br />
              <span className="text-primary">No exceptions.</span>
            </h2>
          </div>
          <p className="max-w-[20rem] text-muted-foreground text-md">
            <span className="text-white font-medium">20+</span> products across
            brand, product, AI, and blockchain — every one shipped in 2–4 weeks.
          </p>
        </div>
      </div>

      {/* Row 1 */}
      <div className="flex w-full overflow-hidden">
        <motion.div style={{ x: x1 }} className="flex gap-4 flex-none">
          {row1Images.map((img, index) => (
            <div
              key={index}
              className="relative w-[300px] md:w-[450px] lg:w-[480px] aspect-[16/10] overflow-hidden rounded-2xl"
            >
              <Image
                src={img}
                alt={`Gallery ${index}`}
                fill
                className="object-cover transition-all duration-700"
              />
            </div>
          ))}
          {/* Repeat for seamless look if needed, but parallax handles it differently */}
          {row1Images.map((img, index) => (
            <div
              key={`repeat-${index}`}
              className="relative w-[300px] md:w-[450px] lg:w-[480px] aspect-[16/10] overflow-hidden rounded-2xl"
            >
              <Image
                src={img}
                alt={`Gallery Repeat ${index}`}
                fill
                className="object-cover transition-all duration-700"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          style={{ x: x2 }}
          className="flex gap-4 flex-none ml-[-10%]"
        >
          {row2Images.map((img, index) => (
            <div
              key={index}
              className="relative w-[300px] md:w-[450px] lg:w-[480px] aspect-[16/10] overflow-hidden rounded-2xl"
            >
              <Image
                src={img}
                alt={`Gallery Row 2 ${index}`}
                fill
                className="object-cover transition-all duration-700"
              />
            </div>
          ))}
          {row2Images.map((img, index) => (
            <div
              key={`repeat-2-${index}`}
              className="relative w-[300px] md:w-[450px] lg:w-[480px] aspect-[16/10] overflow-hidden rounded-2xl"
            >
              <Image
                src={img}
                alt={`Gallery Row 2 Repeat ${index}`}
                fill
                className="object-cover transition-all duration-700"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 3 */}
      <div className="flex w-full overflow-hidden">
        <motion.div style={{ x: x1 }} className="flex gap-4 flex-none">
          {row1Images.map((img, index) => (
            <div
              key={index}
              className="relative w-[300px] md:w-[450px] lg:w-[480px] aspect-[16/10] overflow-hidden rounded-2xl"
            >
              <Image
                src={img}
                alt={`Gallery ${index}`}
                fill
                className="object-cover transition-all duration-700"
              />
            </div>
          ))}
          {/* Repeat for seamless look if needed, but parallax handles it differently */}
          {row1Images.map((img, index) => (
            <div
              key={`repeat-${index}`}
              className="relative w-[300px] md:w-[450px] lg:w-[480px] aspect-[16/10] overflow-hidden rounded-2xl"
            >
              <Image
                src={img}
                alt={`Gallery Repeat ${index}`}
                fill
                className="object-cover transition-all duration-700"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
