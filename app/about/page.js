'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function AboutPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1'
            e.target.style.transform = 'translateY(0)'
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(16px)'
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <>
      {/* PAGE HEAD */}
      <section className="page-head">
        <div className="container">
          <div className="page-crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>About</span>
          </div>
          <div className="page-head-grid">
            <h1 className="page-title" data-reveal>
              About<br /><em>the mill.</em>
            </h1>
            <p className="page-meta" data-reveal>
              Woodtech Industries (Pvt.) Ltd. is a family-run plywood and
              wooden-door manufacturer operating from Bagerhat, Bangladesh since
              2013. Over ten years we've grown from one press to three production
              halls — still grading every sheet by hand.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="story">
        <div className="container">
          <div className="story-grid">
            <aside className="story-side" data-reveal>
              <div className="eyebrow">01 / The Story</div>
              <h3>
                Three presses, two generations, one stubborn idea about plywood.
              </h3>
            </aside>
            <div className="story-col" data-reveal>
              <p>
                A sheet of plywood is a small promise. It will be flat. It will
                not delaminate. It will hold a screw where the carpenter drives
                one.
              </p>
              <p>
                Woodtech Industries was founded in 2013 on the bet that
                Bangladesh's growing construction market deserved plywood that
                kept those promises. The founding team had spent a decade in
                timber trading and had seen, up close, how often imported and
                local boards alike failed the carpenters who trusted them.
              </p>
              <p>
                The original press ran out of a single hall in Bagerhat. The first
                customers were local furniture makers who would walk the yard,
                pull sheets off the stack, and bend them to test the bond. We
                still invite customers to do that.
              </p>
              <p>
                Today the facility spans three halls and 38,000 square feet of
                production floor, including a dedicated door shop and a laminating
                line. A second generation of the founding family now runs
                day-to-day operations, with many of the original press operators
                still on the team.
              </p>

              <div className="timeline">
                <div className="timeline-row">
                  <div className="timeline-year">2013</div>
                  <div className="timeline-text">
                    <strong>Founded in Bagerhat</strong>
                    Single press line, commercial plywood. Three founders, eleven
                    staff.
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="timeline-year">2015</div>
                  <div className="timeline-text">
                    <strong>ISO 9001 certification</strong>
                    Quality management system formalised across all production
                    lines.
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="timeline-year">2020</div>
                  <div className="timeline-text">
                    <strong>Shield Series launched</strong>
                    In-house R&amp;D delivers termite- and fire-resistant plywood for
                    institutional use.
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="timeline-year">2026</div>
                  <div className="timeline-text">
                    <strong>Third hall online</strong>
                    Laminating floor doubles output. 500+ completed projects to
                    date.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="mv">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card" data-reveal>
              <div className="mv-num">01</div>
              <div className="mv-label">Our Mission</div>
              <h3>Build panels we'd stake our name on — because we do.</h3>
              <p>
                To manufacture plywood and wooden doors that meet the
                specification sheet and then some. To employ our community fairly,
                source responsibly, and stand behind every delivery from press to
                polish.
              </p>
            </div>
            <div className="mv-card" data-reveal>
              <div className="mv-num">02</div>
              <div className="mv-label">Our Vision</div>
              <h3>
                Become the default spec for serious builders across South Asia.
              </h3>
              <p>
                A Woodtech sheet on the site means the carpenter won't have to
                sort, cull, or worry. A Woodtech door means the doorway closes the
                same way ten years on as it did installation day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values">
        <div className="container">
          <div className="values-head" data-reveal>
            <div className="eyebrow">02 / Core Values</div>
            <h2 className="section-title">What guides<br />the grading table.</h2>
          </div>
          <div className="values-grid">
            <div className="value-item" data-reveal>
              <div className="value-num">V / 01</div>
              <div className="value-icon">
                <svg viewBox="0 0 24 24"><path d="M3 12l6 6L21 6" /></svg>
              </div>
              <h3 className="value-title">Craft Integrity</h3>
              <p className="value-desc">
                We hand-grade every sheet. If it doesn't meet spec, it doesn't
                leave the yard — regardless of schedule pressure.
              </p>
            </div>
            <div className="value-item" data-reveal>
              <div className="value-num">V / 02</div>
              <div className="value-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" /></svg>
              </div>
              <h3 className="value-title">Honest Grading</h3>
              <p className="value-desc">
                MR is MR. BWP is BWP. We don't relabel boards to close a sale, and
                we'll tell you when a lower grade suffices for your use.
              </p>
            </div>
            <div className="value-item" data-reveal>
              <div className="value-num">V / 03</div>
              <div className="value-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" />
                  <path d="M3 9h18M9 3v18" />
                </svg>
              </div>
              <h3 className="value-title">People First</h3>
              <p className="value-desc">
                Our press operators average eleven years on the floor. Fair wages,
                safe equipment, and training aren't a program — they're the floor.
              </p>
            </div>
            <div className="value-item" data-reveal>
              <div className="value-num">V / 04</div>
              <div className="value-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>
              <h3 className="value-title">Built to Last</h3>
              <p className="value-desc">
                We design for the Bangladeshi climate first — humidity, termites,
                heat. A board that holds here holds anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="team">
        <div className="container">
          <div className="team-head">
            <div data-reveal>
              <div className="eyebrow">03 / Leadership</div>
              <h2 className="section-title">The people who<br />walk the floor.</h2>
            </div>
            <p className="section-lede" data-reveal>
              A small leadership team, all with direct production experience.
              You'll meet them if you visit — and most of them will pick up the
              phone if you call.
            </p>
          </div>
          <div className="team-grid">
            <article className="team-card" data-reveal>
              <div className="team-photo placeholder">
                <div>PORTRAIT<br />Aminur Rahman<br />— managing director</div>
              </div>
              <div className="team-info">
                <span className="mono">01 · MD</span>
                <h4>Aminur Rahman</h4>
                <div className="title">Managing Director</div>
                <p className="bio">
                  Managing Director of Woodtech Industries (Pvt.) Ltd.
                </p>
              </div>
            </article>
            <article className="team-card" data-reveal>
              <div className="team-photo placeholder">
                <div>PORTRAIT<br />Ahanasur Rahman<br />— director</div>
              </div>
              <div className="team-info">
                <span className="mono">02 · Director</span>
                <h4>Ahanasur Rahman</h4>
                <div className="title">Director</div>
                <p className="bio">Director of Woodtech Industries (Pvt.) Ltd.</p>
              </div>
            </article>
            <article className="team-card" data-reveal>
              <div className="team-photo placeholder">
                <div>PORTRAIT<br />Mizanur Rahman<br />— Director</div>
              </div>
              <div className="team-info">
                <span className="mono">03 · Director</span>
                <h4>Mizanur Rahman</h4>
                <div className="title">Director</div>
                <p className="bio">Director of Woodtech Industries (Pvt.) Ltd.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FACTORY BANNER */}
      <section className="factory">
        <div className="container factory-inner">
          <div data-reveal>
            <span className="factory-tag">Hall 03 · Bagerhat · 2026</span>
            <h2>
              38,000 sq ft of grading tables, presses, and patient men with
              calipers.
            </h2>
            <div className="factory-meta">
              <div>Presses<strong>4 hydraulic</strong></div>
              <div>Daily output<strong>1,200 sheets</strong></div>
              <div>Door shop<strong>200 units / day</strong></div>
              <div>Staff<strong>140 on payroll</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band-dark">
        <div className="container">
          <div data-reveal>
            <div className="eyebrow">Work with us</div>
            <h2>Come see the mill.</h2>
            <p>
              We're happy to host architects, specifiers, and contractors for a
              yard walk. Samples on request — or drop us a line about a project.
            </p>
            <Link href="/contact" className="btn btn-light">
              Get in touch <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
