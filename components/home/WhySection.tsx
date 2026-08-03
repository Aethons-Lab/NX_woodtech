"use client";

export function WhySection(): React.JSX.Element {
  return (
    <section className="border-b border-[#2a1d1422] py-16 lg:py-20">
      <div className="mx-auto max-w-container px-8">
        <div className="mb-12 space-y-5 lg:mb-16">
          <div data-reveal className="space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              003 / Why Woodtech
            </div>
            <h2 className="font-serif text-[clamp(40px,6vw,68px)] leading-[0.95] tracking-[-0.02em]">
              Four reasons our
              <br />
              panels outlast the build.
            </h2>
          </div>
          <p
            className="max-w-2xl font-sans text-[15px] leading-[1.6] text-muted"
            data-reveal
          >
            We don't compete on price alone — we compete on what you don't have
            to worry about once the site is closed.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div
            className="space-y-3 rounded-lg border border-[#2a1d1422] p-6 transition-all duration-300 hover:shadow-lg"
            data-reveal
          >
            <div className="font-mono text-[14px] font-bold uppercase tracking-widest text-brown">
              F / 01
            </div>
            <div className="h-12 w-12">
              <svg
                viewBox="0 0 24 24"
                className="h-full w-full stroke-brown stroke-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12l6 6L21 6" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold text-cocoa">Quality</h3>
            <p className="font-sans text-sm leading-normal text-muted">
              The Plywood and Door are being made with high quality and selected
              timbers. Some of the technological innovations include high
              quality of adhesive/resin, wood preparation, panel sanding and
              press technology.
            </p>
          </div>

          <div
            className="space-y-3 rounded-lg border border-[#2a1d1422] p-6 transition-all duration-300 hover:shadow-lg"
            data-reveal
          >
            <div className="font-mono text-[14px] font-bold uppercase tracking-widest text-brown">
              F / 02
            </div>
            <div className="h-12 w-12">
              <svg
                viewBox="0 0 24 24"
                className="h-full w-full stroke-brown stroke-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="1" />
                <path d="M9 9h6v6H9z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold text-cocoa">
              Durability
            </h3>
            <p className="font-sans text-sm leading-normal text-muted">
              Woodtech plywood is designed in various forms to suit different
              environments and usages needs. Each type handles stress, moisture,
              and daily wear differently. So choosing the right one ensures
              longevity with satisfactory performance.
            </p>
          </div>

          <div
            className="space-y-3 rounded-lg border border-[#2a1d1422] p-6 transition-all duration-300 hover:shadow-lg"
            data-reveal
          >
            <div className="font-mono text-[14px] font-bold uppercase tracking-widest text-brown">
              F / 03
            </div>
            <div className="h-12 w-12">
              <svg
                viewBox="0 0 24 24"
                className="h-full w-full stroke-brown stroke-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="8" />
                <path d="M12 4v16M4 12h16" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold text-cocoa">
              Innovation
            </h3>
            <p className="font-sans text-sm leading-normal text-muted">
              Driven by innovation and growing demand for high performance,
              Woodtech is manufacturing water resistant, anti-termite,
              borer-proof boards. We are also going to introduce Fire Retardant
              Plywood.
            </p>
          </div>

          <div
            className="space-y-3 rounded-lg border border-[#2a1d1422] p-6 transition-all duration-300 hover:shadow-lg"
            data-reveal
          >
            <div className="font-mono text-[14px] font-bold uppercase tracking-widest text-brown">
              F / 04
            </div>
            <div className="h-12 w-12">
              <svg
                viewBox="0 0 24 24"
                className="h-full w-full stroke-brown stroke-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l8 4v6c0 4-3.5 7-8 8-4.5-1-8-4-8-8V7l8-4z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold text-cocoa">Trust</h3>
            <p className="font-sans text-sm leading-normal text-muted">
              More than a decade of continuous operation, same ownership and
              production team. Warranty stands behind every delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
