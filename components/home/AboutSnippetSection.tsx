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
              Woodtech Industries (Pvt.) Ltd. was founded in 2014 in Bagerhat.
              Building on a decade of prior timber-trading experience, the
              business grew from one press line to multiple production halls, a
              dedicated door shop, and a laminating floor serving projects
              across Bangladesh.
            </p>
            <p>
              Every sheet that leaves our yard is graded by hand, because
              specification sheets can't tell the difference between a panel
              that will hold up in a Dhaka monsoon and one that won't. We think
              that matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
