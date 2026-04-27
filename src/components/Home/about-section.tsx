import React from "react";
import { NumberTicker } from "../ui/number-ticker";

const stats = [
  {
    value1: 3,
    text: "x",
    label: "Faster Delivery",
    description:
      "AI-powered workflows let us ship 3x faster than traditional agencies, without ever cutting corners.",
  },
  {
    value1: 50,
    text: "+",
    label: "Products Shipped",
    description:
      "Brands, SaaS products, AI tools, and on-chain apps delivered globally.",
  },
  {
    value1: 2,
    value2: 4,
    text: "wk",
    label: "Average Sprint",
    description:
      "From brief to launch-ready product. We move fast because your market window won't wait.",
  },
];

import Section from "../ui/section";

const AboutSection = () => {
  return (
    <Section id="about" py="pb-16 lg:pb-32">
      <span className="text-sm uppercase font-medium text-muted-foreground pb-4 mb-16 block border-b border-white/10 pt-8">
        About Us
      </span>

      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white max-w-[62rem] mb-24 lg:mb-32">
        We're not a traditional agency. We're a studio where designers and
        engineers use{" "}
        <span className="text-primary italic">AI to move faster</span> and
        deliver better work than you've come to expect.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col gap-6">
            <div className="flex items-baseline text-6xl lg:text-8xl font-black text-primary tracking-tighter">
              <NumberTicker value={stat.value1} className="text-inherit" />
              {stat.value2 && (
                <>
                  <span className="mr-3">-</span>
                  <NumberTicker value={stat.value2} className="text-inherit" />
                </>
              )}
              <span>{stat.text}</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-white">{stat.label}</h3>
              <p className="text-muted-foreground text-md max-w-sm">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AboutSection;
