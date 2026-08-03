"use client";
import Image from "next/image";
import gurjan from "@/public/products/gurjan-plywood.jpg";
import teak from "@/public/products/teak.jpg";
import whiteOak from "@/public/products/white-oak.jpg";

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
            Plywood market is undergoing transformation due to changing consumer
            preferences and favorable demographic trends. Growing consumer
            aspirations for sophisticated interior designs are driving demand
            for premium plywood with enhanced textures, finishes and decorative
            laminates. Keeping this in our mind, we are manufacturing wide range
            of plywoods and doors for office spaces, bedrooms, living rooms,
            bathrooms and kitchens
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <article
            className="group rounded-lg border border-[#2a1d1422] transition-all duration-300 hover:shadow-lg"
            data-reveal
          >
            <div className="relative aspect-square rounded-lg overflow-hidden bg-paper">
              <Image
                src={gurjan}
                alt="Gurjan plywood sheets - marine grade"
                fill
                className="object-cover"
                loading="lazy"
                quality={70}
                sizes="(max-width: 1024px) 100vw, 33vw"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent flex flex-col justify-end p-4 text-white">
                <span className="inline-block rounded-full bg-bone/90 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-cocoa w-fit">
                  Flagship
                </span>
              </div>
            </div>
            <div className="space-y-2.5 p-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                01 / Plywood
              </div>
              <h3 className="font-serif text-xl font-bold leading-tight text-cocoa">
                Plywood
              </h3>
              <p className="font-sans text-sm leading-normal text-muted">
                Woodtech General Purpose Plywood is manufactured from carefully
                selected timber of high density and superior bonding capability
                to ensure durability and the desired mechanical properties.
              </p>
              <div className="flex flex-wrap gap-2 pt-1.5 font-mono text-[11px] text-muted">
                <span>3–25 mm</span>
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
            <div className="relative aspect-square rounded-lg overflow-hidden bg-paper">
              <Image
                src={teak}
                alt="Teak veneer flush doors"
                fill
                className="object-cover"
                loading="lazy"
                quality={70}
                sizes="(max-width: 1024px) 100vw, 33vw"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent flex flex-col justify-end p-4 text-white">
                <span className="inline-block rounded-full bg-bone/90 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-cocoa w-fit">
                  Popular
                </span>
              </div>
            </div>
            <div className="space-y-2.5 p-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                02 / Door
              </div>
              <h3 className="font-serif text-xl font-bold leading-tight text-cocoa">
                Veneer Flush Door
              </h3>
              <p className="font-sans text-sm leading-normal text-muted">
                Woodtech Flush Door is a premium product made from high class
                selected veneers, well seasoned wood and is bonded with UF & PF
                resin to ensure solidarity and rigidity. Woodtech Flush Door can
                be easily painted or polished as it has a smooth and flawless
                surface finishing.
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
            <div className="relative aspect-square rounded-lg overflow-hidden bg-paper">
              <Image
                src={whiteOak}
                alt="White oak panel doors"
                fill
                className="object-cover"
                loading="lazy"
                quality={70}
                sizes="(max-width: 1024px) 100vw, 33vw"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent flex flex-col justify-end p-4 text-white">
                <span className="inline-block rounded-full bg-bone/90 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-cocoa w-fit">
                  Heritage
                </span>
              </div>
            </div>
            <div className="space-y-2.5 p-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                03 / Door
              </div>
              <h3 className="font-serif text-xl font-bold leading-tight text-cocoa">
                Solid Wooden Door
              </h3>
              <p className="font-sans text-sm leading-normal text-muted">
                Passed through proper chemical processes and made from premium
                seasoned hardwood, our solid wooden doors are built to deliver
                lasting strength, natural beauty, and superior performance.
                Every door is precision-engineered, expertly assembled, and
                finely finished in-house, offering timeless designs that enhance
                the elegance, security, and value of any space.
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
