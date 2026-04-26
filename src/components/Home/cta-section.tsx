import React from "react";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative w-full bg-black py-16 lg:py-40 px-6 lg:px-12 2xl:px-0">
      <div className="max-w-[1440px] mx-auto border-t border-white/10 pt-16 lg:pt-24">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 lg:gap-24">
          <div className="flex flex-col gap-6 lg:gap-8 max-w-4xl">
            <span className="text-xs lg:text-sm uppercase text-muted-foreground font-medium tracking-[0.2em]">
              Your product is 4 weeks away.
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold text-white tracking-tighter leading-[1] lg:leading-[0.9] flex flex-col lg:block">
              <span>Stop waiting.</span>
              <span className="text-primary lg:ml-4">Start shipping.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-8 lg:gap-10 items-start w-full lg:w-auto">
            <p className="max-w-[20rem] text-muted-foreground text-base lg:text-lg leading-relaxed">
              Tell us what you're building. We'll scope it, price it, and have a
              plan back to you within 24 hours.
            </p>
            <button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-md hover:bg-primary hover:text-white transition-all duration-300">
              Start Your Project
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
