"use client";

export function ProductShowcaseSection(): React.JSX.Element {
  return (
    <section
      id="products"
      className="border-b border-[#2a1d1422] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-container px-8">
        <div className="mb-12 space-y-5 lg:mb-16">
          <div data-reveal className="space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              002 / The Range
            </div>
            <h2 className="font-serif text-[clamp(40px,6vw,68px)] leading-[0.95] tracking-[-0.02em]">
              Built for the
              <br />
              hands that build.
            </h2>
          </div>
          <p
            className="max-w-2xl font-sans text-[15px] leading-[1.6] text-muted"
            data-reveal
          >
            Three product lines, each graded to IS standards and manufactured
            for tropical climate stability. Custom sizes and finishes on
            request.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <article
            className="group rounded-lg border border-[#2a1d1422] transition-all duration-300 hover:shadow-lg"
            data-reveal
          >
            <div className="placeholder aspect-square bg-paper p-8 text-sm text-muted">
              <span className="inline-block rounded-full bg-bone px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-cocoa">
                Flagship
              </span>
              <div className="mt-4">
                PLYWOOD
                <br />
                Marine &amp; commercial
                <br />
                sheets, stacked
              </div>
            </div>
            <div className="space-y-2.5 p-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                01 / Plywood
              </div>
              <h3 className="font-serif text-xl font-bold leading-tight text-cocoa">
                Plywood Sheets
              </h3>
              <p className="font-sans text-sm leading-normal text-muted">
                Phenolic- and urea-bonded sheets from 4mm to 25mm. Marine grade,
                BWP, and MR variants — pressed flat and edge-sealed for long
                panel life.
              </p>
              <div className="flex flex-wrap gap-2 pt-1.5 font-mono text-[11px] text-muted">
                <span>4–25 mm</span>
                <span>·</span>
                <span>8×4 ft std</span>
                <span>·</span>
                <span>IS:303</span>
              </div>
            </div>
          </article>

          <article
            className="group rounded-lg border border-[#2a1d1422] transition-all duration-300 hover:shadow-lg"
            data-reveal
          >
            <div className="placeholder aspect-square bg-paper p-8 text-sm text-muted">
              <span className="inline-block rounded-full bg-bone px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-cocoa">
                Popular
              </span>
              <div className="mt-4">
                FLUSH DOORS
                <br />
                Smooth veneered
                <br />
                face, hollow core
              </div>
            </div>
            <div className="space-y-2.5 p-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                02 / Doors
              </div>
              <h3 className="font-serif text-xl font-bold leading-tight text-cocoa">
                Flush Doors
              </h3>
              <p className="font-sans text-sm leading-normal text-muted">
                Solid and hollow core flush doors with cross-band construction.
                Teak, sapele and gurjan veneer faces, ready for polish or
                laminate finishing.
              </p>
              <div className="flex flex-wrap gap-2 pt-1.5 font-mono text-[11px] text-muted">
                <span>30–40 mm</span>
                <span>·</span>
                <span>Custom sizes</span>
                <span>·</span>
                <span>IS:2202</span>
              </div>
            </div>
          </article>

          <article
            className="group rounded-lg border border-[#2a1d1422] transition-all duration-300 hover:shadow-lg"
            data-reveal
          >
            <div className="placeholder aspect-square bg-paper p-8 text-sm text-muted">
              <span className="inline-block rounded-full bg-bone px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-cocoa">
                Heritage
              </span>
              <div className="mt-4">
                PANEL DOORS
                <br />
                Frame &amp; stile
                <br />
                classical profile
              </div>
            </div>
            <div className="space-y-2.5 p-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                03 / Doors
              </div>
              <h3 className="font-serif text-xl font-bold leading-tight text-cocoa">
                Panel Doors
              </h3>
              <p className="font-sans text-sm leading-normal text-muted">
                Traditional frame-and-stile doors in seasoned hardwood. Two,
                four and six-panel profiles — milled, assembled and sanded
                in-house.
              </p>
              <div className="flex flex-wrap gap-2 pt-1.5 font-mono text-[11px] text-muted">
                <span>35–45 mm</span>
                <span>·</span>
                <span>Hardwood</span>
                <span>·</span>
                <span>Hand-finished</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
