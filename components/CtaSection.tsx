import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CtaSectionProps {
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
}

const CtaSection = ({
  heading = "Email reimagined.",
  description = "Available today.",
  buttons = {
    primary: {
      text: "Get Started",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Contact Us",
      url: "https://www.shadcnblocks.com",
    },
  },
}: CtaSectionProps) => {
  return (
    <section className="pb-16 pt-14">
      <div className="container">
        <div className=" relative overflow-hidden  bg-accent rounded-lg p-8 md:rounded-xl ">
          <div className="relative z-10 mx-auto text-white/90 max-w-4xl text-center">
            <h3 className="mb-4 text-3xl font-medium md:text-5xl lg:mb-0 lg:text-6xl">
              {heading}
            </h3>
             <h3 className="mb-4 text-3xl font-medium md:text-5xl lg:mb-6 lg:text-6xl">
              {description}
            </h3>
            <div className="flex flex-col mt-12 justify-center gap-3 sm:flex-row sm:gap-4">
              {buttons.primary && (
                <Button size="lg" className="w-full sm:w-auto text-sm bg-stone-900 rounded-xl text-white/90 py-5 hover:bg-white hover:text-black" variant= "outline" asChild>
                  <a href={buttons.primary.url}>{buttons.primary.text}
                    <ArrowRight />
                  </a>
                </Button>
              )}
              {buttons.secondary && (
                <Button
                 
                  size="lg"
                  className="w-full sm:w-auto text-white/60 bg-accent text-sm hover:bg-accent hover:text-white/300"
                  asChild
                >
                  <a href={buttons.secondary.url}>{buttons.secondary.text}
                    <ArrowRight />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div
            aria-hidden="true"
            className=" max-w-9xl mx-auto absolute inset-0 z-0 flex items-center
             justify-center border-b border-b-white/5 rounded-2xl shadow-white"
          >
            <p className="pointer-events-none select-none text-[20rem] font-bold -mb-20  text-white/5">
              MailTea
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export { CtaSection };
