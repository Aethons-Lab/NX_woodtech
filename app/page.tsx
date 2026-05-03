'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function HomePage(): React.JSX.Element {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = '1';
            (e.target as HTMLElement).style.transform = 'translateY(0)'
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      const elem = el as HTMLElement
      elem.style.opacity = '0'
      elem.style.transform = 'translateY(16px)'
      elem.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      io.observe(elem)
    })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const TWEAKS: Record<string, string> = {
      brown: '#8B5E3C',
      olive: '#7AB027',
      yellow: '#DFDF12',
      heroHeadline: 'Crafting quality, building futures.',
      heroLayout: 'split',
    }
    const root = document.documentElement

    function applyTweaks(t: Record<string, string>): void {
      if (t.brown) root.style.setProperty('--brown', t.brown)
      if (t.olive) root.style.setProperty('--olive', t.olive)
      if (t.yellow) root.style.setProperty('--yellow', t.yellow)
      if (t.heroLayout) document.body.setAttribute('data-hero-layout', t.heroLayout)
      if (t.heroHeadline) {
        const h = document.querySelector('[data-tweak="heroHeadline"]')
        if (h) h.textContent = t.heroHeadline
      }
    }
    applyTweaks(TWEAKS)

    let panel: HTMLDivElement | null = null

    function buildPanel(): void {
      panel = document.createElement('div')
      panel.id = 'tweaks-panel'
      const hasHeadline = !!document.querySelector('[data-tweak="heroHeadline"]')
      panel.innerHTML = `
        <style>
          #tweaks-panel {
            position: fixed; bottom: 24px; right: 24px; z-index: 1000;
            width: 280px; background: #fff; border: 1px solid #2A1D1422;
            border-radius: 8px; box-shadow: 0 20px 60px rgba(42,29,20,0.18);
            font-family: 'Work Sans', sans-serif; color: #2A1D14; overflow: hidden;
          }
          #tweaks-panel .tp-header {
            padding: 14px 16px; border-bottom: 1px solid #2A1D1422;
            display: flex; justify-content: space-between; align-items: center;
            background: #F6F1EA;
          }
          #tweaks-panel .tp-title {
            font-family: 'JetBrains Mono', monospace; font-size: 11px;
            letter-spacing: 0.2em; text-transform: uppercase;
          }
          #tweaks-panel .tp-body { padding: 14px 16px; max-height: 70vh; overflow-y: auto; }
          #tweaks-panel .tp-row { margin-bottom: 14px; }
          #tweaks-panel label {
            display: block; font-size: 11px; letter-spacing: 0.1em;
            text-transform: uppercase; color: #6B5847; margin-bottom: 6px;
            font-family: 'JetBrains Mono', monospace;
          }
          #tweaks-panel .tp-swatches { display: flex; gap: 6px; flex-wrap: wrap; }
          #tweaks-panel .tp-sw {
            width: 28px; height: 28px; border-radius: 4px;
            border: 2px solid transparent; cursor: pointer;
          }
          #tweaks-panel .tp-sw.active { border-color: #2A1D14; }
          #tweaks-panel input[type="text"], #tweaks-panel select {
            width: 100%; padding: 8px 10px; border: 1px solid #2A1D1433;
            border-radius: 4px; font-size: 13px; font-family: inherit; background: #fff;
          }
        </style>
        <div class="tp-header"><span class="tp-title">Tweaks</span></div>
        <div class="tp-body">
          <div class="tp-row">
            <label>Brown</label>
            <div class="tp-swatches" data-key="brown">
              <div class="tp-sw" style="background:#8B5E3C" data-val="#8B5E3C"></div>
              <div class="tp-sw" style="background:#6B4226" data-val="#6B4226"></div>
              <div class="tp-sw" style="background:#A9784E" data-val="#A9784E"></div>
              <div class="tp-sw" style="background:#5C3A22" data-val="#5C3A22"></div>
            </div>
          </div>
          <div class="tp-row">
            <label>Accent (Olive)</label>
            <div class="tp-swatches" data-key="olive">
              <div class="tp-sw" style="background:#7AB027" data-val="#7AB027"></div>
              <div class="tp-sw" style="background:#5C8A1F" data-val="#5C8A1F"></div>
              <div class="tp-sw" style="background:#DFDF12" data-val="#DFDF12"></div>
              <div class="tp-sw" style="background:#C68A3A" data-val="#C68A3A"></div>
            </div>
          </div>
          ${hasHeadline ? `
          <div class="tp-row">
            <label>Hero Headline</label>
            <input type="text" data-input="heroHeadline" />
          </div>
          <div class="tp-row">
            <label>Hero Layout</label>
            <select data-input="heroLayout">
              <option value="split">Split — image right</option>
              <option value="centered">Centered editorial</option>
              <option value="overlay">Full-bleed overlay</option>
            </select>
          </div>` : ''}
        </div>
      `
      document.body.appendChild(panel)

      panel.querySelectorAll('.tp-swatches').forEach((group) => {
        const key = (group as HTMLElement).dataset.key ?? ''
        group.querySelectorAll('.tp-sw').forEach((sw) => {
          const swEl = sw as HTMLElement
          if (swEl.dataset.val === TWEAKS[key]) swEl.classList.add('active')
          swEl.addEventListener('click', () => {
            group.querySelectorAll('.tp-sw').forEach((s) => s.classList.remove('active'))
            swEl.classList.add('active')
            TWEAKS[key] = swEl.dataset.val ?? ''
            applyTweaks({ [key]: swEl.dataset.val ?? '' })
            persist()
          })
        })
      })

      panel.querySelectorAll('[data-input]').forEach((inp) => {
        const inpEl = inp as HTMLInputElement | HTMLSelectElement
        const key = inpEl.dataset.input ?? ''
        inpEl.value = TWEAKS[key] ?? ''
        inpEl.addEventListener('input', () => {
          TWEAKS[key] = inpEl.value
          applyTweaks({ [key]: inpEl.value })
          persist()
        })
      })
    }

    function persist(): void {
      try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: TWEAKS }, '*') } catch {}
    }

    const onMessage = (e: MessageEvent): void => {
      if (!e.data || !e.data.type) return
      if (e.data.type === '__activate_edit_mode') {
        if (!panel) buildPanel()
        panel!.style.display = 'block'
      } else if (e.data.type === '__deactivate_edit_mode') {
        if (panel) panel.style.display = 'none'
      }
    }
    window.addEventListener('message', onMessage)
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*') } catch {}

    return () => {
      window.removeEventListener('message', onMessage)
      if (panel) panel.remove()
    }
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div data-reveal>
              <div className="eyebrow">Est. 2013 · Plywood &amp; Doors</div>
              <h1 className="hero-headline" data-tweak="heroHeadline">
                Crafting quality, <em>building</em> futures.
              </h1>
              <p className="hero-lede">
                Engineered plywood and solid wooden doors, pressed and finished in
                Bangladesh to a standard trusted by architects, contractors, and
                furniture makers for over two decades.
              </p>
              <div className="hero-actions">
                <a href="#products" className="btn btn-primary">
                  Explore our products <span className="arrow">→</span>
                </a>
                <Link href="/about" className="btn btn-outline">Our story</Link>
              </div>
              <div className="hero-meta">
                <div className="hero-meta-item">
                  <div className="n">13+</div>
                  <div className="l">Years of craft</div>
                </div>
                <div className="hero-meta-item">
                  <div className="n">12</div>
                  <div className="l">Product lines</div>
                </div>
                <div className="hero-meta-item">
                  <div className="n">ISO</div>
                  <div className="l">9001 certified</div>
                </div>
              </div>
            </div>

            <div className="hero-visual" data-reveal>
              <div className="hero-badge">New · Shield Series Doors</div>
              <div className="hero-stack">
                <div className="placeholder a">
                  <div>PRODUCT SHOT<br />Stacked plywood sheets<br />angled light</div>
                </div>
                <div className="placeholder b">
                  <div>DETAIL<br />Door edge profile</div>
                </div>
                <div className="placeholder c">
                  <div>TEXTURE<br />Veneer grain macro</div>
                </div>
              </div>
              <div className="hero-caption">
                <span className="mono">Fig. 01</span>
                18mm marine-grade ply, phenolic bonded.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Marine Grade Plywood</span>
          <span>Flush Doors</span>
          <span>Panel Doors</span>
          <span>Block Boards</span>
          <span>Decorative Veneer</span>
          <span>Commercial Ply</span>
          <span>Laminated Boards</span>
          <span>Marine Grade Plywood</span>
          <span>Flush Doors</span>
          <span>Panel Doors</span>
          <span>Block Boards</span>
          <span>Decorative Veneer</span>
          <span>Commercial Ply</span>
          <span>Laminated Boards</span>
        </div>
      </div>

      {/* ABOUT SNIPPET */}
      <section className="about-snippet">
        <div className="container">
          <div className="about-grid">
            <div data-reveal>
              <div className="about-num">— 001 / About</div>
              <h2 className="about-heading">Wood, pressed with intention.</h2>
              <Link href="/about" className="about-link">Read our full story →</Link>
            </div>
            <div className="about-body" data-reveal>
              <p>
                Woodtech Industries (Pvt.) Ltd. has been pressing plywood and
                finishing doors in Bangladesh since 2003. What started as a single
                press-line in Narayanganj now spans three production halls, a
                dedicated door shop, and a laminating floor that supplies
                furniture makers across the region.
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

      {/* PRODUCTS */}
      <section id="products" className="products">
        <div className="container">
          <div className="products-head">
            <div data-reveal>
              <div className="eyebrow">002 / The Range</div>
              <h2 className="section-title">Built for the<br />hands that build.</h2>
            </div>
            <p className="section-lede" data-reveal>
              Three product lines, each graded to IS standards and manufactured
              for tropical climate stability. Custom sizes and finishes on
              request.
            </p>
          </div>

          <div className="product-grid">
            <article className="product-card" data-reveal>
              <div className="product-image placeholder">
                <span className="product-badge">Flagship</span>
                <div>PLYWOOD<br />Marine &amp; commercial<br />sheets, stacked</div>
              </div>
              <div className="product-info">
                <div className="product-num">01 / Plywood</div>
                <h3 className="product-name">Plywood Sheets</h3>
                <p className="product-desc">
                  Phenolic- and urea-bonded sheets from 4mm to 25mm. Marine grade,
                  BWP, and MR variants — pressed flat and edge-sealed for long
                  panel life.
                </p>
                <div className="product-specs">
                  <span>4–25 mm</span>
                  <span>·</span>
                  <span>8×4 ft std</span>
                  <span>·</span>
                  <span>IS:303</span>
                </div>
              </div>
            </article>

            <article className="product-card" data-reveal>
              <div className="product-image placeholder">
                <span className="product-badge">Popular</span>
                <div>FLUSH DOORS<br />Smooth veneered<br />face, hollow core</div>
              </div>
              <div className="product-info">
                <div className="product-num">02 / Doors</div>
                <h3 className="product-name">Flush Doors</h3>
                <p className="product-desc">
                  Solid and hollow core flush doors with cross-band construction.
                  Teak, sapele and gurjan veneer faces, ready for polish or
                  laminate finishing.
                </p>
                <div className="product-specs">
                  <span>30–40 mm</span>
                  <span>·</span>
                  <span>Custom sizes</span>
                  <span>·</span>
                  <span>IS:2202</span>
                </div>
              </div>
            </article>

            <article className="product-card" data-reveal>
              <div className="product-image placeholder">
                <span className="product-badge">Heritage</span>
                <div>PANEL DOORS<br />Frame &amp; stile<br />classical profile</div>
              </div>
              <div className="product-info">
                <div className="product-num">03 / Doors</div>
                <h3 className="product-name">Panel Doors</h3>
                <p className="product-desc">
                  Traditional frame-and-stile doors in seasoned hardwood. Two,
                  four and six-panel profiles — milled, assembled and sanded
                  in-house.
                </p>
                <div className="product-specs">
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

      {/* WHY */}
      <section className="why">
        <div className="container">
          <div className="why-head">
            <div data-reveal>
              <div className="eyebrow">003 / Why Woodtech</div>
              <h2 className="section-title">
                Four reasons our<br />panels outlast the build.
              </h2>
            </div>
            <p className="section-lede" data-reveal>
              We don't compete on price alone — we compete on what you don't have
              to worry about once the site is closed.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-item" data-reveal>
              <div className="why-num">F / 01</div>
              <div className="why-icon">
                <svg viewBox="0 0 24 24"><path d="M3 12l6 6L21 6" /></svg>
              </div>
              <h3 className="why-title">Quality</h3>
              <p className="why-desc">
                Every sheet is hand-graded against IS standards before leaving the
                yard. Rejects don't ship — they go back through the line.
              </p>
            </div>
            <div className="why-item" data-reveal>
              <div className="why-num">F / 02</div>
              <div className="why-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="1" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
              <h3 className="why-title">Durability</h3>
              <p className="why-desc">
                Phenolic resin bonding and cross-grain core construction. Built
                for Bangladeshi humidity, tested against water immersion and
                thermal cycling.
              </p>
            </div>
            <div className="why-item" data-reveal>
              <div className="why-num">F / 03</div>
              <div className="why-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 4v16M4 12h16" />
                </svg>
              </div>
              <h3 className="why-title">Innovation</h3>
              <p className="why-desc">
                In-house R&amp;D on adhesives and veneer processing. Our Shield Series
                uses a termite- and fire-resistant formulation developed on site.
              </p>
            </div>
            <div className="why-item" data-reveal>
              <div className="why-num">F / 04</div>
              <div className="why-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3l8 4v6c0 4-3.5 7-8 8-4.5-1-8-4-8-8V7l8-4z" />
                </svg>
              </div>
              <h3 className="why-title">Trust</h3>
              <p className="why-desc">
                Two decades of continuous operation, same ownership, same
                production teams. Warranty stands behind every delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat" data-reveal>
              <div className="stat-n">13<sup>+</sup></div>
              <div className="stat-l">Years of continuous operation since 2013</div>
            </div>
            <div className="stat" data-reveal>
              <div className="stat-n">500<sup>+</sup></div>
              <div className="stat-l">Residential, commercial and institutional projects delivered</div>
            </div>
            <div className="stat" data-reveal>
              <div className="stat-n">38<sup>k</sup></div>
              <div className="stat-l">Square feet of active production floor across 3 halls</div>
            </div>
            <div className="stat" data-reveal>
              <div className="stat-n">12</div>
              <div className="stat-l">Distinct product lines, custom sizes on request</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-grid">
            <div data-reveal>
              <div className="eyebrow">004 / In their words</div>
              <p className="tq">
                Woodtech ply has been our default spec for three office fit-outs
                now. The sheets come through flat, the grading is honest, and when
                we need a non-standard size they actually answer the phone.
              </p>
              <div className="t-meta">
                <div className="t-avatar">AR</div>
                <div>
                  <div className="t-name">Arman Rahim</div>
                  <div className="t-role">Principal · Rahim &amp; Associates Architects</div>
                </div>
              </div>
            </div>
            <div className="placeholder t-image" data-reveal>
              <div>PORTRAIT<br />Architect on site<br />with plywood stack</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <div data-reveal>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>005 / Start a project</div>
            <h2>Tell us what you're building.</h2>
            <p>
              Bulk orders, custom sizes, site samples — send us the spec and we'll
              come back within one business day with pricing and lead times.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Request a quote <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
