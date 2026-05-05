"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function AboutPage(): React.JSX.Element {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      const elem = el as HTMLElement;
      elem.style.opacity = "0";
      elem.style.transform = "translateY(16px)";
      elem.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      io.observe(elem);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* PAGE HEAD */}
      <section className="py-20 lg:py-28 border-b border-[#2a1d1422]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b5847] mb-9 flex items-center gap-3">
            <span className="w-6 h-px bg-[#8b5e3c]"></span>
            <Link href="/">Home</Link>
            <span className="text-[#8b5e3c]">/</span>
            <span>About</span>
          </div>
          <div className="grid items-end gap-20 lg:grid-cols-2 lg:gap-20">
            <h1
              className="font-serif text-[clamp(56px,8vw,120px)] leading-[0.95] tracking-[-0.035em] mb-7"
              data-reveal
            >
              About
              <br />
              <em className="italic text-[#8b5e3c] font-normal">the mill.</em>
            </h1>
            <p
              className="text-[17px] leading-[1.6] text-[#6b5847] max-w-[480px]"
              data-reveal
            >
              Woodtech Industries (Pvt.) Ltd. is a family-run plywood and
              wooden-door manufacturer operating from Bagerhat, Bangladesh since
              2013. Over ten years we've grown from one press to three
              production halls — still grading every sheet by hand.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-32 bg-[#f6f1ea]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid gap-20 lg:grid-cols-[0.6fr_1fr] lg:gap-20 lg:items-start">
            <aside className="lg:sticky lg:top-[100px] lg:pt-2" data-reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8b5e3c] flex items-center gap-2.5 mb-4">
                <span className="w-6 h-px bg-[#8b5e3c]"></span>
                01 / The Story
              </div>
              <h3 className="text-3xl tracking-[-0.015em] leading-[1.1]">
                Three presses, two generations, one stubborn idea about plywood.
              </h3>
            </aside>
            <div className="space-y-6" data-reveal>
              <p className="text-[17px] leading-[1.65]">
                A sheet of plywood is a small promise. It will be flat. It will
                not delaminate. It will hold a screw where the carpenter drives
                one.
              </p>
              <p className="text-[17px] leading-[1.65]">
                Woodtech Industries was founded in 2013 on the bet that
                Bangladesh's growing construction market deserved plywood that
                kept those promises. The founding team had spent a decade in
                timber trading and had seen, up close, how often imported and
                local boards alike failed the carpenters who trusted them.
              </p>
              <p className="text-[17px] leading-[1.65]">
                The original press ran out of a single hall in Bagerhat. The
                first customers were local furniture makers who would walk the
                yard, pull sheets off the stack, and bend them to test the bond.
                We still invite customers to do that.
              </p>
              <p className="text-[17px] leading-[1.65]">
                Today the facility spans three halls and 38,000 square feet of
                production floor, including a dedicated door shop and a
                laminating line. A second generation of the founding family now
                runs day-to-day operations, with many of the original press
                operators still on the team.
              </p>

              <div className="mt-12 border-t border-[#2a1d1422] pt-10">
                <div className="space-y-5">
                  <div className="grid grid-cols-[120px_1fr] gap-8 py-5 border-b border-[#2a1d1422]">
                    <div className="font-serif text-2xl font-bold text-[#8b5e3c]">
                      2013
                    </div>
                    <div>
                      <strong className="font-semibold block mb-1">
                        Founded in Bagerhat
                      </strong>
                      Single press line, commercial plywood. Three founders,
                      eleven staff.
                    </div>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] gap-8 py-5 border-b border-[#2a1d1422]">
                    <div className="font-serif text-2xl font-bold text-[#8b5e3c]">
                      2015
                    </div>
                    <div>
                      <strong className="font-semibold block mb-1">
                        ISO 9001 certification
                      </strong>
                      Quality management system formalised across all production
                      lines.
                    </div>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] gap-8 py-5 border-b border-[#2a1d1422]">
                    <div className="font-serif text-2xl font-bold text-[#8b5e3c]">
                      2020
                    </div>
                    <div>
                      <strong className="font-semibold block mb-1">
                        Shield Series launched
                      </strong>
                      In-house R&amp;D delivers termite- and fire-resistant
                      plywood for institutional use.
                    </div>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] gap-8 py-5">
                    <div className="font-serif text-2xl font-bold text-[#8b5e3c]">
                      2026
                    </div>
                    <div>
                      <strong className="font-semibold block mb-1">
                        Third hall online
                      </strong>
                      Laminating floor doubles output. 500+ completed projects
                      to date.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-32 bg-[#ede5d8] border-t border-b border-[#2a1d1422]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div
              className="bg-[#f6f1ea] p-12 border border-[#2a1d1422] relative"
              data-reveal
            >
              <div className="absolute top-6 right-8 font-serif text-7xl font-bold text-[#ede5d8] leading-none">
                01
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8b5e3c] mb-5">
                Our Mission
              </div>
              <h3 className="text-3xl tracking-[-0.01em] leading-[1.15] mb-5 max-w-[360px]">
                Build panels we'd stake our name on — because we do.
              </h3>
              <p className="text-base leading-[1.6] text-[#6b5847] max-w-[420px]">
                To manufacture plywood and wooden doors that meet the
                specification sheet and then some. To employ our community
                fairly, source responsibly, and stand behind every delivery from
                press to polish.
              </p>
            </div>
            <div
              className="bg-[#f6f1ea] p-12 border border-[#2a1d1422] relative"
              data-reveal
            >
              <div className="absolute top-6 right-8 font-serif text-7xl font-bold text-[#ede5d8] leading-none">
                02
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8b5e3c] mb-5">
                Our Vision
              </div>
              <h3 className="text-3xl tracking-[-0.01em] leading-[1.15] mb-5 max-w-[360px]">
                Become the default spec for serious builders across South Asia.
              </h3>
              <p className="text-base leading-[1.6] text-[#6b5847] max-w-[420px]">
                A Woodtech sheet on the site means the carpenter won't have to
                sort, cull, or worry. A Woodtech door means the doorway closes
                the same way ten years on as it did installation day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-32 bg-[#f6f1ea]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16 max-w-[620px]" data-reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8b5e3c] flex items-center gap-2.5 mb-5">
              <span className="w-6 h-px bg-[#8b5e3c]"></span>
              02 / Core Values
            </div>
            <h2 className="font-serif text-[clamp(36px,4.5vw,56px)] tracking-[-0.02em] mb-4">
              What guides
              <br />
              the grading table.
            </h2>
          </div>
          <div className="grid gap-px lg:grid-cols-4 bg-[#2a1d1422] border border-[#2a1d1422]">
            <div
              className="bg-[#f6f1ea] p-10 hover:bg-[#ede5d8] transition-colors"
              data-reveal
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b5847] mb-6">
                V / 01
              </div>
              <div className="w-11 h-11 border border-[#2a1d14] grid place-items-center mb-5 rounded">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 stroke-[#2a1d14] fill-none"
                  strokeWidth="1.4"
                >
                  <path d="M3 12l6 6L21 6" />
                </svg>
              </div>
              <h3 className="text-xl mb-3 tracking-[-0.01em]">
                Craft Integrity
              </h3>
              <p className="text-sm leading-[1.55] text-[#6b5847]">
                We hand-grade every sheet. If it doesn't meet spec, it doesn't
                leave the yard — regardless of schedule pressure.
              </p>
            </div>
            <div
              className="bg-[#f6f1ea] p-10 hover:bg-[#ede5d8] transition-colors"
              data-reveal
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b5847] mb-6">
                V / 02
              </div>
              <div className="w-11 h-11 border border-[#2a1d14] grid place-items-center mb-5 rounded">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 stroke-[#2a1d14] fill-none"
                  strokeWidth="1.4"
                >
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <h3 className="text-xl mb-3 tracking-[-0.01em]">
                Honest Grading
              </h3>
              <p className="text-sm leading-[1.55] text-[#6b5847]">
                MR is MR. BWP is BWP. We don't relabel boards to close a sale,
                and we'll tell you when a lower grade suffices for your use.
              </p>
            </div>
            <div
              className="bg-[#f6f1ea] p-10 hover:bg-[#ede5d8] transition-colors"
              data-reveal
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b5847] mb-6">
                V / 03
              </div>
              <div className="w-11 h-11 border border-[#2a1d14] grid place-items-center mb-5 rounded">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 stroke-[#2a1d14] fill-none"
                  strokeWidth="1.4"
                >
                  <rect x="3" y="3" width="18" height="18" />
                  <path d="M3 9h18M9 3v18" />
                </svg>
              </div>
              <h3 className="text-xl mb-3 tracking-[-0.01em]">People First</h3>
              <p className="text-sm leading-[1.55] text-[#6b5847]">
                Our press operators average eleven years on the floor. Fair
                wages, safe equipment, and training aren't a program — they're
                the floor.
              </p>
            </div>
            <div
              className="bg-[#f6f1ea] p-10 hover:bg-[#ede5d8] transition-colors"
              data-reveal
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b5847] mb-6">
                V / 04
              </div>
              <div className="w-11 h-11 border border-[#2a1d14] grid place-items-center mb-5 rounded">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 stroke-[#2a1d14] fill-none"
                  strokeWidth="1.4"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>
              <h3 className="text-xl mb-3 tracking-[-0.01em]">Built to Last</h3>
              <p className="text-sm leading-[1.55] text-[#6b5847]">
                We design for the Bangladeshi climate first — humidity,
                termites, heat. A board that holds here holds anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-32 bg-[#ede5d8] border-t border-[#2a1d1422]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-12 lg:items-end mb-16">
            <div data-reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8b5e3c] flex items-center gap-2.5 mb-5">
                <span className="w-6 h-px bg-[#8b5e3c]"></span>
                03 / Leadership
              </div>
              <h2 className="font-serif text-[clamp(36px,4.5vw,56px)] tracking-[-0.02em] mb-4">
                The people who
                <br />
                walk the floor.
              </h2>
            </div>
            <p
              className="text-[18px] text-[#6b5847] leading-[1.6] max-w-[560px]"
              data-reveal
            >
              A small leadership team, all with direct production experience.
              You'll meet them if you visit — and most of them will pick up the
              phone if you call.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <article
              className="bg-[#f6f1ea] border border-[#2a1d1422] overflow-hidden"
              data-reveal
            >
              <div className="h-80 bg-[#ede5d8] border-b border-[#2a1d1422] flex items-center justify-center text-[#6b5847] text-center p-4 text-sm">
                <div>
                  PORTRAIT
                  <br />
                  Aminur Rahman
                  <br />— managing director
                </div>
              </div>
              <div className="p-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8b5e3c] block mb-2.5">
                  01 · MD
                </span>
                <h4 className="font-serif text-xl font-bold mb-1 tracking-[-0.01em]">
                  Aminur Rahman
                </h4>
                <div className="text-sm text-[#6b5847] mb-4">
                  Managing Director
                </div>
                <p className="text-sm leading-[1.55] text-[#2a1d14] pt-4 border-t border-[#2a1d1422]">
                  Managing Director of Woodtech Industries (Pvt.) Ltd.
                </p>
              </div>
            </article>
            <article
              className="bg-[#f6f1ea] border border-[#2a1d1422] overflow-hidden"
              data-reveal
            >
              <div className="h-80 bg-[#ede5d8] border-b border-[#2a1d1422] flex items-center justify-center text-[#6b5847] text-center p-4 text-sm">
                <div>
                  PORTRAIT
                  <br />
                  Ahanasur Rahman
                  <br />— director
                </div>
              </div>
              <div className="p-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8b5e3c] block mb-2.5">
                  02 · Director
                </span>
                <h4 className="font-serif text-xl font-bold mb-1 tracking-[-0.01em]">
                  Ahanasur Rahman
                </h4>
                <div className="text-sm text-[#6b5847] mb-4">Director</div>
                <p className="text-sm leading-[1.55] text-[#2a1d14] pt-4 border-t border-[#2a1d1422]">
                  Director of Woodtech Industries (Pvt.) Ltd.
                </p>
              </div>
            </article>
            <article
              className="bg-[#f6f1ea] border border-[#2a1d1422] overflow-hidden"
              data-reveal
            >
              <div className="h-80 bg-[#ede5d8] border-b border-[#2a1d1422] flex items-center justify-center text-[#6b5847] text-center p-4 text-sm">
                <div>
                  PORTRAIT
                  <br />
                  Mizanur Rahman
                  <br />— Director
                </div>
              </div>
              <div className="p-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8b5e3c] block mb-2.5">
                  03 · Director
                </span>
                <h4 className="font-serif text-xl font-bold mb-1 tracking-[-0.01em]">
                  Mizanur Rahman
                </h4>
                <div className="text-sm text-[#6b5847] mb-4">Director</div>
                <p className="text-sm leading-[1.55] text-[#2a1d14] pt-4 border-t border-[#2a1d1422]">
                  Director of Woodtech Industries (Pvt.) Ltd.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FACTORY BANNER */}
      <section
        className="relative min-h-[520px] overflow-hidden text-[#f6f1ea] flex items-end"
        style={{
          background:
            "linear-gradient(180deg, rgba(42, 29, 20, 0.2) 0%, rgba(42, 29, 20, 0.85) 100%), repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.08) 0px, rgba(0, 0, 0, 0.08) 1px, transparent 1px, transparent 4px), linear-gradient(180deg, #9c6b44 0%, #5a3a22 100%)",
        }}
      >
        <div
          className="relative max-w-6xl mx-auto px-8 py-20 w-full"
          data-reveal
        >
          <span className="inline-block bg-[#dfdf12] text-[#2a1d14] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] mb-6">
            Hall 03 · Bagerhat · 2026
          </span>
          <h2 className="font-serif text-[clamp(40px,5vw,72px)] leading-tight tracking-[-0.02em] max-w-[820px] mb-6">
            38,000 sq ft of grading tables, presses, and patient men with
            calipers.
          </h2>
          <div className="flex flex-wrap gap-10 font-mono text-sm uppercase tracking-[0.1em] text-opacity-80 pt-6 border-t border-opacity-20 border-[#f6f1ea] max-w-[820px]">
            <div>
              <span className="text-opacity-80 text-[#f6f1ea]">Presses</span>
              <strong className="text-[#f6f1ea] block mt-1 text-xl font-serif tracking-[-0.01em]">
                4 hydraulic
              </strong>
            </div>
            <div>
              <span className="text-opacity-80 text-[#f6f1ea]">
                Daily output
              </span>
              <strong className="text-[#f6f1ea] block mt-1 text-xl font-serif tracking-[-0.01em]">
                1,200 sheets
              </strong>
            </div>
            <div>
              <span className="text-opacity-80 text-[#f6f1ea]">Door shop</span>
              <strong className="text-[#f6f1ea] block mt-1 text-xl font-serif tracking-[-0.01em]">
                200 units / day
              </strong>
            </div>
            <div>
              <span className="text-opacity-80 text-[#f6f1ea]">Staff</span>
              <strong className="text-[#f6f1ea] block mt-1 text-xl font-serif tracking-[-0.01em]">
                140 on payroll
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2a1d14] text-[#f6f1ea]">
        <div className="max-w-6xl mx-auto px-8" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-opacity-50 text-[#f6f1ea] flex items-center gap-2.5 mb-5">
            <span className="w-6 h-px bg-opacity-50 bg-[#f6f1ea]"></span>
            Work with us
          </div>
          <h2 className="font-serif text-[clamp(40px,6vw,68px)] leading-[0.95] tracking-[-0.02em] mb-3">
            Come see the mill.
          </h2>
          <p className="text-[15px] leading-[1.6] text-opacity-75 text-[#f6f1ea] mb-8 max-w-2xl">
            We're happy to host architects, specifiers, and contractors for a
            yard walk. Samples on request — or drop us a line about a project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f6f1ea] text-[#2a1d14] px-8 py-3.5 rounded font-sans text-sm font-medium hover:bg-[#ede5d8] transition-colors"
          >
            Get in touch <span className="transition-transform">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
