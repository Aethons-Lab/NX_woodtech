"use client";

export function TestimonialSection(): React.JSX.Element {
  return (
    <section className="border-b border-[#2a1d1422] py-16 lg:py-20">
      <div className="mx-auto max-w-container px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div data-reveal className="space-y-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              004 / In their words
            </div>
            <blockquote className="space-y-4 border-l-4 border-brown pl-5">
              <p className="font-serif text-[clamp(24px,4vw,40px)] leading-[1.2] text-cocoa">
                Woodtech ply has been our default spec for three office fit-outs
                now. The sheets come through flat, the grading is honest, and
                when we need a non-standard size they actually answer the phone.
              </p>
            </blockquote>
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brown font-mono text-sm font-bold text-bone">
                AR
              </div>
              <div className="space-y-0.5">
                <div className="font-serif text-lg font-bold text-cocoa">
                  Arman Rahim
                </div>
                <div className="font-sans text-sm text-muted">
                  Principal · Rahim &amp; Associates Architects
                </div>
              </div>
            </div>
          </div>
          <div
            className="placeholder aspect-square rounded-lg bg-paper p-6 text-sm text-muted"
            data-reveal
          >
            <div>
              PORTRAIT
              <br />
              Architect on site
              <br />
              with plywood stack
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
