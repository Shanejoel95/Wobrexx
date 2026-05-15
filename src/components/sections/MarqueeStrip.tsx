const capabilities = [
  "Process Automation",
  "Custom SaaS Platforms",
  "Websites & Web Experiences",
  "Software Maintenance",
  "Security-First Architecture",
  "150+ Integrations",
  "Global-Ready Systems",
  "2-Week Launch",
  "Dedicated Support",
  "Real-Time Analytics",
];

const Dot = () => (
  <span className="w-1 h-1 rounded-full bg-secondary-foreground/30 flex-shrink-0 mx-1" />
);

export const MarqueeStrip = () => {
  const doubled = [...capabilities, ...capabilities];

  return (
    <div className="bg-secondary overflow-hidden py-3.5 relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-secondary-foreground text-[13px] font-semibold tracking-wide px-4"
          >
            {item}
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
};
