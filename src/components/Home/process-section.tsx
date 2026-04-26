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
      className="relative w-full px-6 lg:px-12 2xl:px-0 max-w-[1440px] mx-auto py-24 lg:py-40"
    >
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end border-b border-white/10 pb-12">
          <div className="flex flex-col gap-6">
            <span className="text-sm font-medium text-muted-foreground uppercase">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl">
              From brief to shipped{" "}
              <span className="text-primary">in weeks.</span>
            </h2>
          </div>
          <p className="max-w-[20rem] text-muted-foreground text-sm text-right">
            A lean, AI-powered process built for speed. No unnecessary rounds,
            no bloated timelines. Just outcomes.
          </p>
        </div>

        {/* Process List */}
        <div className="flex flex-col">
          {processes.map((process, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 md:grid-cols-12 items-start py-4 lg:py-8 border-b border-white/5 last:border-0 group:"
            >
              <div className="md:col-span-1 text-sm font-bold text-muted-foreground/40 mb-4 md:mb-0">
                {process.number}
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl lg:text-3xl font-bold text-white uppercase group-hover:text-primary transition-colors">
                  {process.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-muted-foreground text-sm lg:text-md max-w-xl">
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
