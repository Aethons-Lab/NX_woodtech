"use client";

export function StatsSection(): React.JSX.Element {
  return (
    <section className="border-b border-[#2a1d1422] py-24 lg:py-32">
      <div className="mx-auto max-w-container px-8">
        <div className="grid gap-16 lg:grid-cols-4">
          <div className="space-y-3 border-l-2 border-brown pl-6" data-reveal>
            <div className="font-serif text-[clamp(36px,6vw,64px)] font-bold leading-none text-cocoa">
              13<sup className="text-[0.4em] font-normal">+</sup>
            </div>
            <p className="font-sans text-[14px] leading-[1.5] text-muted">
              Years of continuous operation since 2013
            </p>
          </div>
          <div className="space-y-3 border-l-2 border-brown pl-6" data-reveal>
            <div className="font-serif text-[clamp(36px,6vw,64px)] font-bold leading-none text-cocoa">
              500<sup className="text-[0.4em] font-normal">+</sup>
            </div>
            <p className="font-sans text-[14px] leading-[1.5] text-muted">
              Residential, commercial and institutional projects delivered
            </p>
          </div>
          <div className="space-y-3 border-l-2 border-brown pl-6" data-reveal>
            <div className="font-serif text-[clamp(36px,6vw,64px)] font-bold leading-none text-cocoa">
              38<sup className="text-[0.4em] font-normal">k</sup>
            </div>
            <p className="font-sans text-[14px] leading-[1.5] text-muted">
              Square feet of active production floor across 3 halls
            </p>
          </div>
          <div className="space-y-3 border-l-2 border-brown pl-6" data-reveal>
            <div className="font-serif text-[clamp(36px,6vw,64px)] font-bold leading-none text-cocoa">
              12
            </div>
            <p className="font-sans text-[14px] leading-[1.5] text-muted">
              Distinct product lines, custom sizes on request
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
