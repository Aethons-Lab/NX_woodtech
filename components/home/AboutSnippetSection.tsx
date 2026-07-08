"use client";
import Link from "next/link";

export function AboutSnippetSection(): React.JSX.Element {
  return (
    <section className="border-b border-[#2a1d1422] py-16 lg:py-20">
      <div className="mx-auto max-w-container px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div data-reveal className="space-y-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              — 001 / About
            </div>
            <h2 className="font-serif text-[clamp(40px,6vw,68px)] leading-[0.95] tracking-[-0.02em]">
              Wood, pressed with intention.
            </h2>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-brown transition-all duration-200 hover:gap-3"
            >
              Read our full story →
            </Link>
          </div>
          <div
            data-reveal
            className="space-y-4 font-sans text-[15px] leading-[1.7] text-muted"
          >
            <p>
              Woodtech Industries (Pvt.) Ltd. is one of Bangladesh's leading
              manufacturers of premium plywood and door, crafted from carefully
              selected timbers along with premium raw materials and high
              strength adhesive using the latest manufacturing technology and
              advanced equipment to ensure quality control and compliance with
              industry standards.
            </p>
            <p>
              Our Vision is to deliver quality services that exceed our
              customers' expectations, while our Mission is to build lasting
              relationships through exceptional service, innovation, and
              advanced technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
