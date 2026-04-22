import React from "react";
import { ArrowUpRight } from "lucide-react";
import { getDictionary, Locale, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";
import HomeClient from "@/app/[lang]/home-client";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden selection:bg-primary/30 selection:text-primary">
      <div
        className="absolute top-[-25%] left-[-15%] w-[80%] h-[80%] rounded-full opacity-[0.3] blur-[160px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 80%)",
        }}
      />

      {/* Pass dictionary and current lang to the client component */}
      <HomeClient dict={dict} lang={lang} />

      <section className="max-w-360 mx-auto min-h-[calc(100svh-120px)] lg:min-h-[calc(100vh-200px)] w-full px-6 lg:px-12 2xl:px-0 flex flex-col justify-center lg:block pb-16 lg:pb-0">
        <div className="relative lg:absolute lg:bottom-24 xl:bottom-40 w-full lg:w-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-10 lg:gap-0">
            <div className="lg:col-span-7 xl:col-span-7">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.1] lg:leading-[1] xl:leading-[0.9] tracking-tight">
                  <span className="block">{dict.firstLine}</span>
                  <span className="block text-primary">{dict.secondLine}</span>
                </h1>
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-8 lg:gap-10">
              <div className="flex flex-col gap-6 lg:gap-8">
                <p className="text-base lg:text-lg text-white/40 max-w-360">
                  {dict.description}
                </p>

                <a
                  href="#"
                  className="group flex items-center gap-2 text-md transition-all"
                >
                  <span className="border-b group-hover:border-primary group-hover:text-primary transition-all">
                    {dict.shipProduct}
                  </span>
                  <ArrowUpRight className="size-4 text-white/40 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative lg:absolute lg:bottom-6 bottom-0 w-full mt-4 lg:mt-0 pb-8 lg:pb-0 z-10">
        <div className="border-t border-white/20 pt-4 w-full">
          <p className="text-white/40 max-w-360 mx-auto px-6 lg:px-12 2xl:px-0 uppercase text-sm text-center lg:text-left leading-relaxed">
            {dict.techStack}
          </p>
        </div>
      </div>
    </main>
  );
}
