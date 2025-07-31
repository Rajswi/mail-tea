import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";

const technologies = [
  {
    name: "Node.js",
    logo: "https://icon.icepanel.io/Technology/svg/Node.js.svg",
  },
  
  {
    name: "Ruby",
    logo: "https://icon.icepanel.io/Technology/svg/Ruby.svg",
  },
  {
    name: "Python",
    logo: "https://icon.icepanel.io/Technology/svg/Python.svg",
  },
  {
    name: "PHP",
    logo: "https://icon.icepanel.io/Technology/svg/PHP.svg",
  },
  
  {
    name: "Rust",
    logo: "https://icon.icepanel.io/Technology/png-shadow-512/Rust.png",
  },
  {
    name: "Java",
    logo: "https://icon.icepanel.io/Technology/svg/Java.svg",
  },
  {
    name: "Elixir",
    logo: "https://icon.icepanel.io/Technology/svg/Elixir.svg",
  },
  {
    name: ".NET",
    logo: "https://icon.icepanel.io/Technology/svg/.NET.svg",
  },
  {
    name: "JavaScript",
    logo: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
  },
  {
    name: "PostgresSQL",
    logo: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
  },
];

const CodeSection = () => {
  return (
    <section className="relative overflow-hidden pb-32 pt-24">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        {/* <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        /> */}
      </div>
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
              <video
                src="https://resend.com/static/landing-page/3d-integrate-night.mp4"
                autoPlay
                loop
                muted
                className="h-44"
              />
            </div>
            <div>
              <p className="mb-7 mt-2 text-3xl font-normal tracking-tight text-pretty lg:text-6xl">
                Integrate {" "}
                <span className="text-purple-500">tonight</span>
              </p>
              <p className="mx-auto max-w-3xl text-muted-foreground lg:text-lg">
                A simple, elegant interface so you can start sending emails in minutes. It fits<br/> right into your code with SDKs for your favorite programming languages.
              </p>
            </div>
           

 <div className="flex flex-wrap items-center justify-center pt-8 pb-5 gap-x-9 gap-y-5">
      {technologies.map((tech) => (
        <div key={tech.name} className="group flex flex-col items-center gap-2">
          <a
            href="#"
            className={cn(
              "flex aspect-square h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-0 transition-colors group-hover:bg-white/10"
            )}
          >
            <img
              src={tech.logo}
              alt={`${tech.name} logo`}
              className="h-8 w-8 saturate-0 transition-all group-hover:saturate-100"
            />
          </a>
          <p className="text-sm text-muted-foreground transition-colors group-hover:text-white">
            {tech.name}
          </p>
        </div>
      ))}
    </div>

              
            <img src="/codeSection.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CodeSection };
