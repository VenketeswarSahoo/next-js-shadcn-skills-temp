import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="w-full mb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase">
          {title}
        </h2>
        <div className="flex items-center gap-2 text-xs md:text-sm font-medium tracking-widest text-white/40 uppercase">
          <span className="w-2 h-2 bg-primary rounded-full inline-block"></span>
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
