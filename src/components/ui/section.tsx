import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  py?: string;
}

const Section = ({
  children,
  className,
  containerClassName,
  id,
  py = "py-16 lg:py-32",
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full px-6 lg:px-12 2xl:px-0 max-w-[1440px] mx-auto",
        py,
        className
      )}
    >
      <div className={cn("w-full", containerClassName)}>{children}</div>
    </section>
  );
};

export default Section;
