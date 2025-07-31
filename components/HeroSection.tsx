import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Hero1Props {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image?: {
    src: string;
    alt: string;
  };
}

const HeroSection = ({
  heading = "Email for developers",
  description = "The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.",
  buttons = {
    primary: {
      text: "Get Started",
      url: "/signup",
    },
    secondary: {
      text: "Documentation",
      url: "/docs",
    },
  },
  image = {
    src: "https://cdn.cosmos.so/e6ead8ce-c834-4a03-addc-59664984b88a.mp4",
    alt: "Hero section demo image showing interface components",
  },
}: Hero1Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-3 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left mt-1 pr-6">
            
          
            <h1 className="my-5 text-pretty text-6xl font-medium lg:text-8xl">
              {heading}
            </h1>
            <p className="text-white/60 mb-8 max-w-xl lg:text-[17px]">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto text-md bg-stone-800 rounded-2xl text-white/90 py-5 hover:bg-white hover:text-black" variant= "outline">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild className="w-full sm:w-auto text-white/60 bg-accent text-md hover:bg-accent hover:text-white/300">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="oveflow-hidden -mt-2">
          <video
            src={image.src}
            autoPlay
            muted 
            loop
            className=" h-[600px] w-full rounded-md object-cover mb-0"
          />
          </div>
        </div>

      </div>
    </section>
  );
};

export { HeroSection };
