"use client";

export function WhySection(): React.JSX.Element {
  return (
    <section className="border-b border-[#2a1d1422] py-24 lg:py-32">
      <div className="mx-auto max-w-container px-8">
        <div className="mb-20 space-y-8 lg:mb-24">
          <div data-reveal className="space-y-4">
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

        <div className="grid gap-12 lg:grid-cols-2">
          <div
            className="space-y-4 rounded-lg border border-[#2a1d1422] p-8 transition-all duration-300 hover:shadow-lg"
            data-reveal
          >
            <div className="font-mono text-[14px] font-bold uppercase tracking-[0.1em] text-brown">
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
            <p className="font-sans text-sm leading-[1.5] text-muted">
              Every sheet is hand-graded against IS standards before leaving the
              yard. Rejects don't ship — they go back through the line.
            </p>
          </div>

          <div
            className="space-y-4 rounded-lg border border-[#2a1d1422] p-8 transition-all duration-300 hover:shadow-lg"
            data-reveal
          >
            <div className="font-mono text-[14px] font-bold uppercase tracking-[0.1em] text-brown">
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
            <p className="font-sans text-sm leading-[1.5] text-muted">
              Phenolic resin bonding and cross-grain core construction. Built
              for Bangladeshi humidity, tested against water immersion and
              thermal cycling.
            </p>
          </div>

          <div
            className="space-y-4 rounded-lg border border-[#2a1d1422] p-8 transition-all duration-300 hover:shadow-lg"
            data-reveal
          >
            <div className="font-mono text-[14px] font-bold uppercase tracking-[0.1em] text-brown">
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
            <p className="font-sans text-sm leading-[1.5] text-muted">
              In-house R&amp;D on adhesives and veneer processing. Our Shield
              Series uses a termite- and fire-resistant formulation developed on
              site.
            </p>
          </div>

          <div
            className="space-y-4 rounded-lg border border-[#2a1d1422] p-8 transition-all duration-300 hover:shadow-lg"
            data-reveal
          >
            <div className="font-mono text-[14px] font-bold uppercase tracking-[0.1em] text-brown">
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
            <p className="font-sans text-sm leading-[1.5] text-muted">
              Two decades of continuous operation, same ownership, same
              production teams. Warranty stands behind every delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
