import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ArrowLink = ({ href, children, className }: ArrowLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        "group flex items-center gap-2 text-md text-white transition-all w-fit",
        className
      )}
    >
      <span className="border-b border-white/20 group-hover:border-primary group-hover:text-primary transition-all">
        {children}
      </span>
      <ArrowUpRight className="size-4 text-white/40 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
};

export default ArrowLink;
