"use client";
import Link from "next/link";

export function CTASection(): React.JSX.Element {
  return (
    <section className="bg-bone py-16 lg:py-20">
      <div className="mx-auto max-w-container px-8">
        <div data-reveal className="space-y-6 text-center">
          <div className="flex justify-center">
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              005 / Start a project
            </div>
          </div>
          <h2 className="font-serif text-[clamp(40px,6vw,72px)] leading-[0.95] tracking-[-0.02em] text-cocoa">
            Tell us what you're building.
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-[15px] leading-[1.6] text-muted">
            Bulk orders, custom sizes, site samples — send us the spec and we'll
            come back within one business day with pricing and lead times.
          </p>
          <div className="flex justify-center pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brown px-8 py-3.5 font-sans text-sm font-medium text-bone transition-all duration-200 hover:bg-[#6b4226]"
            >
              Request a quote <span className="transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
