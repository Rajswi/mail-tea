import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";

const CodeSection2 = () => {
  return (
    <section className="relative overflow-hidden pb-28 pt-14">
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
                src="https://resend.com/static/landing-page/3d-broadcast.mp4"
                autoPlay
                loop
                muted
                className="h-36"
              />
            </div>
            <div className="mb-10">
              <p className="mb-7 mt-2 text-3xl font-normal tracking-tight text-pretty lg:text-5xl">
                Write using a delightful editor{" "}
                
              </p>
              <p className="mx-auto max-w-3xl mt-0 text-md text-muted-foreground lg:text-md">
                A modern editor that makes it easy for anyone to write, format,
                and send emails.
                <br /> Visually build your email and change the design by adding
                custom styles. 
              </p>
            </div>

            <img src="/CodeSection2.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CodeSection2 };
