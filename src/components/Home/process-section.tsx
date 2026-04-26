import React from "react";

const processes = [
  {
    number: "01",
    title: "Align",
    description:
      "One sharp workshop to lock in scope, goals, and success metrics. No bloated discovery phases. We extract what matters and start moving within 24 hours.",
  },
  {
    number: "02",
    title: "Sprint Design",
    description:
      "High-fidelity, production-ready designs in days. We prototype fast, validate early, and eliminate guesswork before a single line of code is written.",
  },
  {
    number: "03",
    title: "AI-Powered Build",
    description:
      "AI handles the heavy lifting while our engineers guarantee quality. The result: clean, scalable code shipped at a pace no traditional studio can touch.",
  },
  {
    number: "04",
    title: "QA & Launch",
    description:
      "Rigorous testing, staging environments, and launch-day support. We ship it live, keep an eye on it, and fix anything on the spot.",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Post-launch iteration, new features, and performance optimization. We stay in it as your product grows, as partners not just vendors.",
  },
];

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="relative w-full px-6 lg:px-12 2xl:px-0 max-w-[1440px] mx-auto py-16 lg:py-40"
    >
      <div className="flex flex-col gap-12 lg:gap-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-white/10 pb-12 gap-8">
          <div className="flex flex-col gap-4 lg:gap-6">
            <span className="text-xs lg:text-sm font-medium text-muted-foreground uppercase tracking-widest">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tighter max-w-4xl leading-[1.1]">
              From brief to shipped{" "}
              <span className="text-primary">in weeks.</span>
            </h2>
          </div>
          <p className="max-w-[22rem] text-muted-foreground text-sm lg:text-base lg:text-right leading-relaxed">
            A lean, AI-powered process built for speed. No unnecessary rounds,
            no bloated timelines. Just outcomes.
          </p>
        </div>

        {/* Process List */}
        <div className="flex flex-col">
          {processes.map((process, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 md:grid-cols-12 items-start py-8 lg:py-12 border-b border-white/5 last:border-0 transition-all duration-300"
            >
              <div className="md:col-span-1 text-sm font-bold text-muted-foreground/30 mb-4 md:mb-0">
                {process.number}
              </div>
              <div className="md:col-span-4 lg:col-span-3">
                <h3 className="text-2xl lg:text-3xl font-bold text-white uppercase group-hover:text-primary transition-colors duration-300">
                  {process.title}
                </h3>
              </div>
              <div className="md:col-span-7 lg:col-span-8 mt-2 md:mt-0">
                <p className="text-muted-foreground text-sm lg:text-lg leading-relaxed max-w-2xl">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
