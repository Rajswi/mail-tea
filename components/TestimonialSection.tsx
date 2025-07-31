import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { ArrowBigLeft, ArrowLeft, ArrowRight } from "lucide-react";

interface TestimonialSectionProps {
  quote?: string;
  author?: {
    name: string;
    role: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
  ctaButton?: {
    text: string;
    url: string;
  };

}

const TestimonialSection = ({
  quote = "MailTea is transforming email for developers. Simple interface, easy integrations, handy templates. What else could we ask for.",
  author = {
    name: "Rajswi Manjri",
    role: "CEO at Blueberry",
    avatar: {
      src: "https://media.licdn.com/dms/image/v2/D4D03AQES1n2_qssU5Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1702206822377?e=1756944000&v=beta&t=QDqKnBxlOiOPSK1qOom2nyOMyvaKbS7az2k_SrOuYcY",
      alt: "Customer Name",
    },
  },
  ctaButton = {
    text: "Send with Next.js",
    url: "#",
  }
}: TestimonialSectionProps) => {
  return (
    <section className="py-6">
      <div className="container border-t-2 rounded-4xl shadow-black/10 px-8 py-32">
        <div className="flex flex-col items-center text-center">
          <div className="mb-18">
            <img src="https://resend.com/static/landing-page/vercel.svg"
            className="h-10 w-10"/>
          </div>
          <p className="mb-12 max-w-4xl px-8 font-medium lg:text-xl">
            MailTea is transforming email for developers.<br/> Simple interface, easy integrations, handy <br/>templates. What else could we ask for.
          </p>
          <div className="flex items-center gap-2 md:gap-4">
            <Avatar className="size-12 md:size-12">
              <AvatarImage  src={author.avatar.src} alt={author.avatar.alt} />
              <AvatarFallback>{author.name}</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm font-normal md:text-base">{author.name}</p>
              <p className="text-muted-foreground text-xs md:text-sm">
                {author.role}
              </p>
            </div>
          </div>
          {ctaButton && (
             <Button className="text-xs text-white/70 rounded-2xl bg-stone-800 py-0 hover:bg-white hover:text-black mt-12" asChild variant="outline">
                <a  href={ctaButton.url}>{ctaButton.text}  <ArrowRight /></a>
               
             </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export { TestimonialSection };
