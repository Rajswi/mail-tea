const LogosSection = () => {
  const topRowCompanies = [
    {
      name: "Mercury",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/mercury.svg",
      width: 143,
      height: 26,
      href: "https://mercury.com",
    },
    {
      name: "Watershed",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/watershed.svg",
      width: 154,
      height: 31,
      href: "https://watershed.com",
    },
    {
      name: "Retool",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/retool.svg",
      width: 113,
      height: 22,
      href: "https://retool.com",
    },
    {
      name: "Descript",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/descript.svg",
      width: 112,
      height: 27,
      href: "https://descript.com",
    },
  ];

  const bottomRowCompanies = [
    {
      name: "Perplexity",
      logo: "https://html.tailus.io/blocks/customers/nvidia.svg",
      width: 141,
      height: 32,
      href: "https://perplexity.com",
    },
    {
      name: "Monzo",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/monzo.svg",
      width: 104,
      height: 18,
      href: "https://monzo.com",
    },
    {
      name: "Ramp",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/ramp.svg",
      width: 105,
      height: 28,
      href: "https://ramp.com",
    },
    {
      name: "Raycast",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/raycast.svg",
      width: 128,
      height: 33,
      href: "https://raycast.com",
    },
    {
      name: "Arc",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/arc.svg",
      width: 90,
      height: 28,
      href: "https://arc.com",
    },
  ];

  return (
    <section className="py-32">
      <div className="container space-y-10 lg:space-y-16 border-t-2 rounded-4xl shadow-black/10 px-20 py-8">
        <div className="text-center">
          <p className=" text-xl font-semibold text-balance md:text-xl lg:text-xl ">
          
            <br className="max-md:hidden" />
            <span className="text-muted-foreground mb-18">
              Companies of all sizes trust MailTea <br className="max-md:hidden" /> to deliver their most important emails.
            </span>
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-8 mt-20 ">
          {/* Top row - 4 logos */}
          <div className="grid grid-cols-2 items-center justify-items-center gap-x-12 gap-y-8 max-md:w-full sm:grid-cols-4 md:gap-x-20 lg:gap-x-28 px-20">
            {topRowCompanies.map((company, index) => (
              <a href={company.href} target="_blank" key={index}>
                <div className=" justify-center backdrop-blur-md rounded-lg h-10 px-1 py-1">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="object-contain transition-opacity invert hover:opacity-70"
                />
                </div>
              </a>
            ))}
          </div>

          {/* Bottom row - 5 logos */}
          <div className="grid grid-cols-2 items-center justify-items-center gap-x-12 gap-y-8 max-md:w-full sm:grid-cols-5 md:gap-x-20 lg:gap-x-28">
            {bottomRowCompanies.map((company, index) => (
              <a href={company.href} target="_blank" key={index}>
               <div className=" "> <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="object-contain justify-center  invert"
                />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { LogosSection };
