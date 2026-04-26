import AboutSection from "@/components/Home/about-section";
import Hero from "@/components/Home/hero";
import PartnerSection from "@/components/Home/partner-section";
import ProcessSection from "@/components/Home/process-section";
import ServicesSection from "@/components/Home/services-section";
import WorkSection from "@/components/Home/work-section";
import React from "react";

interface PageProps {
  params: Promise<{ lang: string }>;
}

const Home = ({ params }: PageProps) => {
  return (
    <div className="flex flex-col bg-black">
      <Hero params={params} />
      <PartnerSection />
      <AboutSection />
      <WorkSection />
      <ServicesSection />
      <ProcessSection />
    </div>
  );
};

export default Home;
