import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/section-header";
import { work1, work2, work3, ProjectLink } from "@/assets";
import ArrowLink from "@/components/ui/arrow-link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FLEXPLAYS",
    categories: "Branding, Web App, Platform Design, Backend",
    image: work3,
    isFeatured: true,
  },
  {
    title: "AMPLIFI",
    categories: "Web App, DeFi Platform, UX/UI, Brand Identity",
    image: work2,
    isFeatured: false,
  },
  {
    title: "ETERNAL GREEN LANDSCAPING",
    categories: "Mobile App, IOT Control, Backend, Analytics Dashboard, UX/UI",
    image: work1,
    isFeatured: false,
  },
];

const WorkSection = () => {
  return (
    <section
      id="work"
      className="relative w-full px-6 lg:px-12 2xl:px-0 max-w-[1440px] mx-auto py-12 lg:py-24"
    >
      <SectionHeader title="Our Work" subtitle="Selected Projects" />

      <div className="flex flex-col gap-2">
        {/* Featured Project */}
        {projects
          .filter((p) => p.isFeatured)
          .map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-white/5 mb-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="relative w-28 h-28 md:w-44 md:h-44 flex items-center justify-center">
                    {/* Dark circular backdrop */}
                    <div className="absolute inset-2 bg-black/60 rounded-full border border-white/5 shadow-2xl"></div>

                    {/* Rotating Text */}
                    <div className="absolute inset-0 animate-spin-slow">
                      <Image
                        src={ProjectLink}
                        alt="View Project"
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Static Arrow */}
                    <ArrowUpRight className="relative z-10 text-white size-8 md:size-12 opacity-90" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-start justify-between lg:gap-4">
                <h3 className="text-sm lg:text-md text-muted-foreground">
                  {project.title}
                </h3>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  ({project.categories})
                </p>
              </div>
            </div>
          ))}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects
            .filter((p) => !p.isFeatured)
            .map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-white/5 mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="relative w-24 h-24 md:w-36 md:h-36 flex items-center justify-center">
                      {/* Dark circular backdrop */}
                      <div className="absolute inset-2 bg-black/60 rounded-full border border-white/5 shadow-2xl"></div>

                      {/* Rotating Text */}
                      <div className="absolute inset-0 animate-spin-slow">
                        <Image
                          src={ProjectLink}
                          alt="View Project"
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Static Arrow */}
                      <ArrowUpRight className="relative z-10 text-white size-6 md:size-10 opacity-90" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-start justify-between lg:gap-4">
                  <h3 className="text-sm lg:text-md text-muted-foreground">
                    {project.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-muted-foreground">
                    ({project.categories})
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="w-full flex justify-center mt-8 lg:mt-16">
        <ArrowLink href="#">See all projects</ArrowLink>
      </div>
    </section>
  );
};

export default WorkSection;
