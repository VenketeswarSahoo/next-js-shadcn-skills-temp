import React from "react";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative w-full bg-black my-24 lg:my-40 mx-6 lg:mx-12 2xl:mx-0">
      <div className="max-w-[1440px] mx-auto border-t border-white/10 py-16">
        <div className="flex flex-col lg:flex-row items-end gap-24">
          <div className="flex flex-col gap-8 max-w-4xl">
            <span className="text-sm uppercase text-muted-foreground font-medium">
              Your product is 4 weeks away.
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold text-white">
              Stop waiting.
              <span className="text-primary ml-2">Start shipping.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-10 items-start w-full lg:w-auto">
            <p className="max-w-[18rem] text-muted-foreground text-base">
              Tell us what you're building. We'll scope it, price it, and have a
              plan back to you within 24 hours.
            </p>
            <button className="group flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-bold text-md hover:bg-primary hover:text-white transition-all duration-300">
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
