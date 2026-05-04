"use client";
import Link from "next/link";

export function HeroSection(): React.JSX.Element {
  return (
    <section className="relative py-32 lg:py-48">
      <div className="mx-auto max-w-container px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-32">
          <div data-reveal className="space-y-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              Est. 2013 · Plywood &amp; Doors
            </div>
            <h1
              className="hero-headline font-serif text-[clamp(48px,8vw,96px)] leading-[1.05] tracking-[-0.035em]"
              data-tweak="heroHeadline"
            >
              Crafting quality,{" "}
              <em className="font-normal italic text-brown">building</em>{" "}
              futures.
            </h1>
            <p className="hero-lede max-w-xl text-[17px] leading-[1.6] text-muted">
              Engineered plywood and solid wooden doors, pressed and finished in
              Bangladesh to a standard trusted by architects, contractors, and
              furniture makers for over two decades.
            </p>
            <div className="hero-actions flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <a
                href="#products"
                className="btn btn-primary inline-flex items-center gap-2 rounded-full bg-brown px-8 py-3.5 font-sans text-sm font-medium text-bone transition-all duration-200 hover:bg-[#6b4226]"
              >
                Explore our products{" "}
                <span className="hero-arrow transition-transform">→</span>
              </a>
              <Link
                href="/about"
                className="btn btn-outline inline-flex items-center gap-2 rounded-full border-2 border-cocoa px-8 py-3 font-sans text-sm font-medium text-cocoa transition-all duration-200 hover:bg-cocoa hover:text-bone"
              >
                Our story
              </Link>
            </div>
            <div className="hero-meta flex gap-12 pt-6 md:gap-16">
              <div className="hero-meta-item">
                <div className="text-[clamp(28px,4vw,48px)] font-serif font-bold leading-none text-cocoa">
                  13+
                </div>
                <div className="text-[12px] uppercase tracking-[0.1em] text-muted">
                  Years of craft
                </div>
              </div>
              <div className="hero-meta-item">
                <div className="text-[clamp(28px,4vw,48px)] font-serif font-bold leading-none text-cocoa">
                  12
                </div>
                <div className="text-[12px] uppercase tracking-[0.1em] text-muted">
                  Product lines
                </div>
              </div>
              <div className="hero-meta-item">
                <div className="text-[clamp(28px,4vw,48px)] font-serif font-bold leading-none text-cocoa">
                  ISO
                </div>
                <div className="text-[12px] uppercase tracking-[0.1em] text-muted">
                  9001 certified
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="hero-badge absolute -top-3 right-8 inline-block rounded-full bg-bone px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-cocoa shadow-lg">
              New · Shield Series Doors
            </div>
            <div className="hero-stack space-y-4">
              <div className="placeholder a aspect-square rounded-lg bg-paper p-8 text-sm text-muted">
                <div>
                  PRODUCT SHOT
                  <br />
                  Stacked plywood sheets
                  <br />
                  angled light
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="placeholder b aspect-square rounded-lg bg-paper p-8 text-sm text-muted">
                  <div>
                    DETAIL
                    <br />
                    Door edge profile
                  </div>
                </div>
                <div className="placeholder c aspect-square rounded-lg bg-paper p-8 text-sm text-muted">
                  <div>
                    TEXTURE
                    <br />
                    Veneer grain macro
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-caption mt-6 space-y-2 text-sm text-muted">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em]">
                Fig. 01
              </span>
              <p>18mm marine-grade ply, phenolic bonded.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
