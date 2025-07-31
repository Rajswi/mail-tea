import { FlaskConical, PanelTop } from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className=" mb-20 max-w-3xl text-center md:text-left">
          <p className="mb-6 text-5xl font-normal md:mb-11 md:text-6xl">
           First-class <br/>
developer experience
          </p>
          <p className="font-normal text-white/60 md:text-lg">
           We are a team of engineers who love building tools for other engineers.<br/>
Our goal is to create the email platform we've always wished we had — one that <span className="">just works</span>.
          </p>
        </div>
        <div className="mx-auto grid gap-10 md:grid-cols-2">
          <div className="relative order-1 overflow-hidden flex h-full items-center border-t  rounded-t-3xl  bg-muted">
            <video
              src="https://cdn.dribbble.com/userupload/7098494/file/large-91b6f2c9a2ddc203f8e763848bce7853.mp4"
             autoPlay
             loop
             muted
              className="w-full object-cover"
            />
            <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-t from-background to-transparent"/>
          </div>
          <div className=" relative overflow-hidden order-3 h-full border-t  rounded-t-3xl   bg-muted md:px-10 md:pt-10">
            <video
              src="https://cdn.dribbble.com/userupload/18370191/file/original-fa956607b6cf10ec3f63d3133d5a181a.mp4"
              autoPlay
             loop
             muted
              className=" w-full rounded-t-lg object-cover scale-105"
            />
            <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-t from-background to-transparent"/>
          </div>
          <div className="order-2 pt-0 max-w-[412px]   md:order-3">
            <div className="md:ml-8 ">
              <FlaskConical className="text-white/60" />
            <p className="mb-2 text-2xl pt-3 font-normal md:mb-6">
              Test Mode
            </p>
            <p className="mb-6 text-sm text-white/60">
              Simulate events and experiment with our API <br/> without the risk of accidentally sending real <br/> emails to real people.
            </p>
            <a href="#" className="ont-normal text-white/80 hover:text-white/150">
              Learn more
            </a>
            </div>

          </div>
          <div className="order-4  max-w-[412px] md:order-3 pt-0 md:ml-8">
            <PanelTop className="text-white/60" />
            <p className="mb-2 pt-3  text-2xl font-normal md:mb-6">
              Modular Webhooks
            </p>
            <p className="mb-6  text-sm text-white/60">
              Receive real-time notifications directly to your <br/>server. Every time an email is delivered, opened, <br/> bounces, or a link is clicked.
            </p>
            <a href="#" className="font-normal text-white/80 hover:text-white/150">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeatureSection };
