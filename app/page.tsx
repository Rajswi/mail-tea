import { CodeSection } from "@/components/CodeSection";
import { CtaSection } from "@/components/CtaSection";
import { FeatureSection } from "@/components/FeatureSection";
import { FeatureSection2 } from "@/components/FeatureSection2";
import { FeatureSection3 } from "@/components/FeatureSection3";
import { FeatureSection4 } from "@/components/FeatureSection4";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { LogosSection } from "@/components/LogosSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { TestimonialSection2 } from "@/components/TestimonialSection2";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <HeroSection />
     <LogosSection />
     <CodeSection />
     <FeatureSection />
     <FeatureSection2 />
     <FeatureSection3/>
     <TestimonialSection />
     <FeatureSection4 />
     <TestimonialSection2 />
     <CtaSection />
     <Footer />
    </>
  )
}