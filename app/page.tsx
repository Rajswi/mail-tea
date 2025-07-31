import { CodeSection } from "@/components/CodeSection";
import { CtaSection } from "@/components/CtaSection";
import { FeatureSection } from "@/components/FeatureSection";
import { CodeSection2 } from "@/components/CodeSection2";
import { FeatureSection3 } from "@/components/FeatureSection3";
import { CodeSection3 } from "@/components/CodeSection3";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { LogosSection } from "@/components/LogosSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { TestimonialSection2 } from "@/components/TestimonialSection2";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
     <HeroSection />
     <LogosSection />
     <CodeSection />
     <FeatureSection />
     <CodeSection2 />
     <FeatureSection3/>
     <TestimonialSection />
     <CodeSection3 />
     <TestimonialSection2 />
     <CtaSection />
     <Footer />
    </div>
  )
}