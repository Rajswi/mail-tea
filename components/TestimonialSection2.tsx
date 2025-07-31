"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronRight, Star, Zap } from "lucide-react";
import { useRef } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    avatar: "https://images.pexels.com/photos/7752844/pexels-photo-7752844.jpeg",
    content:
      "This platform has revolutionized the way we manage projects. It is incredibly user-friendly and efficient.",
  },
  {
    name: "David Lee",
    role: "CTO",
    avatar: "https://images.pexels.com/photos/5876516/pexels-photo-5876516.jpeg",
    content:
      "I have been impressed with the seamless integration and functionality. It has made our tech operations much smoother.",
  },
  {
    name: "Mark Thompson",
    role: "COO",
    avatar: "https://images.pexels.com/photos/7752893/pexels-photo-7752893.jpeg",
    content:
      "Managing our day-to-day tasks has never been easier. The interface is intuitive and saves us a lot of time.",
  },
  {
    name: "Emily Carter",
    role: "Tech Lead",
    avatar: "https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg",
    content:
      "The tools provided have significantly improved our team’s workflow and collaboration. Highly recommend it!",
  },
  {
    name: "Sophia Turner",
    role: "Designer",
    avatar: "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg",
    content:
      "From a design perspective, the flexibility and ease of use are outstanding. This has become an indispensable tool for our team.",
  },
  {
    name: "James Wilson",
    role: "Developer",
    avatar: "https://images.pexels.com/photos/7752844/pexels-photo-7752844.jpeg",
    content:
      "As a developer, I appreciate the robust features and simplicity. It has streamlined our processes considerably.",
  },
];

const TestimonialSection2 = () => {
  const plugin = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
    }),
  );

  return (
    <section className="py-14">
      <div className="container flex flex-col items-center gap-4 pb-6">
        
        <p className="text-center text-3xl font-normal lg:text-5xl">
          Beyond expectations
        </p>
        <p className="mx-auto max-w-3xl mt-0 text-normal text-m text-center text-muted-foreground lg:text-md">
          MailTea is driving remarkable developer experiences that enable success <br/>
stories, empower businesses, and fuel growth across industries and individuals.


        </p>
        
      </div>
      <div className="lg:container">
        <div className="mt-16 space-y-4">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseLeave={() => plugin.current.play()}
            className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:z-10 before:w-36 before:bg-linear-to-r before:from-background before:to-transparent after:absolute after:top-0 after:right-0 after:bottom-0 after:z-10 after:w-36 after:bg-linear-to-l after:from-background after:to-transparent"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                
                <CarouselItem key={index} className="basis-auto">
                  <Card className=" relative max-w-96 p-6 select-none">
                    <q className="leading-7 text-muted-foreground">
                      {testimonial.content}
                    </q>
                    <div className="flex justify-between">
                      <div className="mb-4 flex gap-4">
                        <Avatar className="size-9 rounded-full ring-1 ring-input">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                     
                    </div>
                    
                  </Card>
                  <div className="absolute -bottom-20 left-0 z-10 w-full h-full bg-gradient-to-t from-background to-transparent"/>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { TestimonialSection2 };
