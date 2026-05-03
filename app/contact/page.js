'use client'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const LeafletMap = dynamic(() => import('../../components/LeafletMap'), { ssr: false })

const CHIPS = ['Plywood', 'Flush Doors', 'Panel Doors', 'Block Board', 'Custom Size', 'Site Visit']

const SCHEDULE = [
  { open: 9 * 60, close: 18 * 60 }, // Sun
  { open: 9 * 60, close: 18 * 60 }, // Mon
  { open: 9 * 60, close: 18 * 60 }, // Tue
  { open: 9 * 60, close: 18 * 60 }, // Wed
  { open: 9 * 60, close: 18 * 60 }, // Thu
  null,                               // Fri closed
  { open: 9 * 60, close: 14 * 60 }, // Sat
]

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default function ContactPage() {
  const [selectedChips, setSelectedChips] = useState(new Set())
  const [showSuccess, setShowSuccess] = useState(false)
  const [refNumber, setRefNumber] = useState('')
  const [submitLabel, setSubmitLabel] = useState('Send enquiry')
  const [fieldErrors, setFieldErrors] = useState({})
  const [hoursStatus, setHoursStatus] = useState({ open: false, text: '' })
  const [todayIdx, setTodayIdx] = useState(-1)
  const [activeMapIdx, setActiveMapIdx] = useState(0)
  const formRef = useRef(null)

  // Scroll reveal
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

  // Business hours status
  useEffect(() => {
    const now = new Date()
    const day = now.getDay()
    const minutes = now.getHours() * 60 + now.getMinutes()
    setTodayIdx(day)

    const today = SCHEDULE[day]
    if (today && minutes >= today.open && minutes < today.close) {
      const closeH = String(Math.floor(today.close / 60)).padStart(2, '0')
      setHoursStatus({ open: true, text: `Closing at ${closeH}:00 today` })
    } else {
      let next = null
      for (let i = 0; i < 7; i++) {
        const idx = (day + i) % 7
        if (SCHEDULE[idx] && (i > 0 || minutes < SCHEDULE[idx].open)) {
          next = { idx, sched: SCHEDULE[idx], days: i }
          break
        }
      }
      if (next) {
        const label =
          next.days === 0 ? 'later today' : next.days === 1 ? 'tomorrow' : DAY_NAMES[next.idx]
        const openH = String(Math.floor(next.sched.open / 60)).padStart(2, '0')
        setHoursStatus({ open: false, text: `Opens ${label} at ${openH}:00` })
      }
    }
  }, [])

  function toggleChip(val) {
    setSelectedChips((prev) => {
      const next = new Set(prev)
      next.has(val) ? next.delete(val) : next.add(val)
      return next
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errors = {}
    const name = e.target['f-name'].value.trim()
    const email = e.target['f-email'].value.trim()
    const msg = e.target['f-msg'].value.trim()

    if (!name) errors['f-name'] = true
    if (!email) errors['f-email'] = true
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors['f-email'] = true
    if (!msg) errors['f-msg'] = true

    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) return

    setSubmitLabel('Sending…')
    setTimeout(() => {
      const ref = 'WT-' + Math.floor(100000 + Math.random() * 900000)
      setRefNumber('REF / ' + ref)
      setShowSuccess(true)
    }, 700)
  }

  function handleReset() {
    formRef.current.reset()
    setSelectedChips(new Set())
    setFieldErrors({})
    setSubmitLabel('Send enquiry')
    setShowSuccess(false)
  }

  return (
    <>
      {/* PAGE HEAD */}
      <section className="contact-page-head">
        <div className="container">
          <div className="page-crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Contact</span>
          </div>
          <div className="contact-page-head-grid">
            <h1 className="page-title" data-reveal>
              Tell us what<br /><em>you&apos;re building.</em>
            </h1>
            <div className="page-head-right" data-reveal>
              <p className="page-lede">
                Projects, samples, site visits, bulk quotes — we'll come back within one business day.
                Three locations across Dhaka, Khulna and Bagerhat.
              </p>
              <div className="head-facts">
                <div className="head-fact">
                  <div className="head-fact-icon">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
                  </div>
                  <div>
                    <div className="head-fact-label">Response time</div>
                    <div className="head-fact-val">Within 1 business day</div>
                  </div>
                </div>
                <div className="head-fact">
                  <div className="head-fact-icon">
                    <svg viewBox="0 0 24 24"><path d="M4 5c0 10 5 15 15 15l2-4-5-2-2 2c-3-1-5-3-6-6l2-2-2-5z" /></svg>
                  </div>
                  <div>
                    <div className="head-fact-label">Direct lines</div>
                    <div className="head-fact-val">02477721103<br />0255012800</div>
                  </div>
                </div>
                <div className="head-fact">
                  <div className="head-fact-icon">
                    <svg viewBox="0 0 24 24"><path d="M3 7h18v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" /><path d="M3 7l9 7 9-7" /></svg>
                  </div>
                  <div>
                    <div className="head-fact-label">Email us</div>
                    <div className="head-fact-val">info@woodtechipl.com</div>
                  </div>
                </div>
                <div className="head-fact">
                  <div className="head-fact-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
                  </div>
                  <div>
                    <div className="head-fact-label">Our locations</div>
                    <div className="head-fact-val">Dhaka · Khulna · Bagerhat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="contact">
        <div className="container">
          <div className="contact-grid">
            {/* FORM */}
            <div className="form-card" data-reveal>
              {!showSuccess ? (
                <form id="contactForm" noValidate onSubmit={handleSubmit} ref={formRef}>
                  <div className="form-head">
                    <h2>Start a conversation.</h2>
                    <span className="form-step">Form · 01 / 01</span>
                  </div>

                  <div className={`field${fieldErrors['f-name'] ? ' error' : ''}`}>
                    <label className="field-label" htmlFor="f-name">
                      Name <span className="req">*</span>
                    </label>
                    <input id="f-name" name="f-name" type="text" placeholder="Your full name" />
                  </div>

                  <div className={`field field-row2${fieldErrors['f-email'] ? ' error' : ''}`}>
                    <label className="field-label" htmlFor="f-email">
                      Contact <span className="req">*</span>
                    </label>
                    <input id="f-email" name="f-email" type="email" placeholder="you@company.com" />
                    <input id="f-phone" name="f-phone" type="tel" placeholder="+880 1X XXXX XXXX" />
                  </div>

                  <div className="field">
                    <label className="field-label" htmlFor="f-company">Company</label>
                    <input id="f-company" name="f-company" type="text" placeholder="Studio, contractor or firm — optional" />
                  </div>

                  <div className="form-interests">
                    <span className="field-label">Interested in</span>
                    <div className="chip-row">
                      {CHIPS.map((c) => (
                        <div
                          key={c}
                          className={`chip${selectedChips.has(c) ? ' active' : ''}`}
                          onClick={() => toggleChip(c)}
                        >
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`field${fieldErrors['f-msg'] ? ' error' : ''}`}>
                    <label className="field-label" htmlFor="f-msg">
                      Message <span className="req">*</span>
                    </label>
                    <textarea
                      id="f-msg"
                      name="f-msg"
                      placeholder="Tell us about your project — quantities, sizes, timeline, or anything else we should know."
                    />
                  </div>

                  <div className="form-foot">
                    <p className="form-note">
                      By submitting you agree we may contact you about your enquiry. We don't share
                      your details with anyone else.
                    </p>
                    <button type="submit" className="btn btn-primary">
                      {submitLabel} <span className="arrow">→</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="form-success">
                  <div className="mono">Received · 200 OK</div>
                  <h3>Thank you. We&apos;ll be in touch.</h3>
                  <p>
                    A member of our team will respond within one business day. If it&apos;s urgent, give
                    us a ring — we actually pick up.
                  </p>
                  <div className="ref">{refNumber}</div>
                  <div>
                    <button
                      className="btn btn-outline"
                      onClick={handleReset}
                      style={{ background: 'transparent', color: 'var(--bone)', borderColor: 'rgba(246,241,234,0.3)' }}
                    >
                      Send another
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* INFO COLUMN */}
            <aside className="info-col">
              <div className="info-card dark" data-reveal>
                <div className="info-label">01 · Direct lines</div>
                <div className="info-title">Reach a person, not a form.</div>
                <div className="info-row">
                  <span className="k">Khulna</span>
                  <span className="v">
                    <a href="tel:02477721103">02477721103</a> | <a href="tel:01874090410">01874090410</a>
                  </span>
                </div>
                <div className="info-row">
                  <span className="k">Dhaka</span>
                  <span className="v">
                    <a href="tel:0255012800">0255012800</a> | <a href="tel:01874090420">01874090420</a>
                  </span>
                </div>
                <div className="info-row">
                  <span className="k">Email</span>
                  <span className="v"><a href="mailto:info@woodtechipl.com">info@woodtechipl.com</a></span>
                </div>
                <div className="info-row">
                  <span className="k">Alt Email</span>
                  <span className="v"><a href="mailto:woodtechipl@gmail.com">woodtechipl@gmail.com</a></span>
                </div>
              </div>

              <div className="info-card" data-reveal>
                <div className="info-label">02 · Offices &amp; Factory</div>
                <div className="info-title">Where to find us.</div>
                <div className="info-row">
                  <span className="k">Khulna Office</span>
                  <span className="v">
                    Dhaka Trade Centre, Suite No. 1<br />
                    11th Floor, 99 Kazi Nazrul Islam Ave<br />
                    Kawranbazar
                  </span>
                </div>
                <div className="info-row">
                  <span className="k">Dhaka Office</span>
                  <span className="v">
                    08, Old Jessore Road (2nd Floor)<br />
                    Khulna-9100
                  </span>
                </div>
                <div className="info-row">
                  <span className="k">Factory</span>
                  <span className="v">
                    Chara bot tolar more<br />
                    Khulna-Mongla Highway<br />
                    Fakirhat, Bagerhat
                  </span>
                </div>
              </div>

              <div className="info-card" data-reveal>
                <div className="info-label">03 · Hours</div>
                <div className="info-title">Business hours.</div>
                <div className="hours-table">
                  {[
                    { day: 0, name: 'Sunday', time: '09:00 — 18:00', closed: false },
                    { day: 1, name: 'Monday', time: '09:00 — 18:00', closed: false },
                    { day: 2, name: 'Tuesday', time: '09:00 — 18:00', closed: false },
                    { day: 3, name: 'Wednesday', time: '09:00 — 18:00', closed: false },
                    { day: 4, name: 'Thursday', time: '09:00 — 18:00', closed: false },
                    { day: 5, name: 'Friday', time: 'Closed', closed: true },
                    { day: 6, name: 'Saturday', time: '09:00 — 14:00', closed: false },
                  ].map((row) => (
                    <div
                      key={row.day}
                      className={`hours-row${row.closed ? ' closed' : ''}${row.day === todayIdx ? ' today' : ''}`}
                    >
                      <span className="day">{row.name}</span>
                      <span className="time">{row.time}</span>
                    </div>
                  ))}
                </div>
                <div
                  className="hours-status"
                  style={{ borderLeftColor: hoursStatus.open ? 'var(--olive)' : 'var(--brown)' }}
                >
                  <strong style={{ color: hoursStatus.open ? 'var(--olive)' : 'var(--brown)' }}>
                    {hoursStatus.open ? '● Open now' : '● Closed now'}
                  </strong>
                  <span>{hoursStatus.text}</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <div className="container">
          <div className="map-head">
            <div data-reveal>
              <div className="eyebrow">04 / Location</div>
              <h2 className="section-title">Walk the yard.</h2>
            </div>
            <p className="section-lede" data-reveal>
              Visitors welcome by appointment. Email ahead and we'll have samples out. Our factory is
              located on the Khulna-Mongla Highway at Fakirhat, Bagerhat.
            </p>
          </div>
          <div className="map-layout" data-reveal>
            {/* Sidebar */}
            <div className="map-sidebar">
              {[
                {
                  num: '01',
                  name: 'Khulna Office',
                  addr: 'Dhaka Trade Centre, Suite No. 1, 11th Floor, 99 Kazi Nazrul Islam Avenue, Kawranbazar, Dhaka',
                  phone: '02477721103 | 01874090410',
                  dir: 'https://www.google.com/maps/search/?api=1&query=Kawranbazar+Dhaka+Bangladesh',
                },
                {
                  num: '02',
                  name: 'Dhaka Office',
                  addr: '08, Old Jessore Road (2nd Floor), Khulna-9100',
                  phone: '0255012800 | 01874090420',
                  dir: 'https://www.google.com/maps/search/?api=1&query=Old+Jessore+Road+Khulna+Bangladesh',
                },
                {
                  num: '03',
                  name: 'Factory',
                  addr: 'Chara bot tolar more, Khulna-Mongla Highway, Fakirhat, Bagerhat',
                  phone: null,
                  dir: 'https://www.google.com/maps/search/?api=1&query=Fakirhat+Bagerhat+Bangladesh',
                },
              ].map((loc, i) => (
                <div
                  key={i}
                  className={`loc-card${activeMapIdx === i ? ' active' : ''}`}
                  onClick={() => setActiveMapIdx(i)}
                >
                  <div className="loc-num">{loc.num}</div>
                  <div className="loc-body">
                    <div className="loc-name">{loc.name}</div>
                    <div className="loc-addr">{loc.addr}</div>
                    {loc.phone && <div className="loc-phone">{loc.phone}</div>}
                    <a
                      className="loc-dir"
                      href={loc.dir}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Get directions <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* Map */}
            <div className="map-wrap">
              <LeafletMap activeIdx={activeMapIdx} />
            </div>
          </div>
        </div>
      </section>

      {/* ALT CONTACT */}
      <section className="alt-contact">
        <div className="container">
          <div className="alt-head" data-reveal>
            <div className="eyebrow">05 / Other ways</div>
            <h2 className="section-title">Pick your lane.</h2>
          </div>
          <div className="alt-grid">
            <a className="alt-card" href="mailto:info@woodtechipl.com" data-reveal>
              <div className="alt-icon">
                <svg viewBox="0 0 24 24"><path d="M3 7h18v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" /><path d="M3 7l9 7 9-7" /></svg>
              </div>
              <h3>Request a quote</h3>
              <p>Send specs, quantities and delivery address. We'll respond with pricing and lead time within one business day.</p>
              <span className="alt-link">info@woodtechipl.com →</span>
            </a>
            <a className="alt-card" href="tel:02477721103" data-reveal>
              <div className="alt-icon">
                <svg viewBox="0 0 24 24"><path d="M4 5c0 10 5 15 15 15l2-4-5-2-2 2c-3-1-5-3-6-6l2-2-2-5z" /></svg>
              </div>
              <h3>Call the yard</h3>
              <p>For urgent enquiries, site visits or to talk to sales directly. We're on the line Sun–Thu 9–6, Sat 9–2.</p>
              <span className="alt-link">02477721103 →</span>
            </a>
            <a className="alt-card" href="#" data-reveal>
              <div className="alt-icon">
                <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="1" /><path d="M3 8h18M8 4v16" /></svg>
              </div>
              <h3>Download the spec sheet</h3>
              <p>Full technical specifications for our plywood and door ranges — grades, dimensions, certifications, and warranty terms.</p>
              <span className="alt-link">PDF · 2.4 MB →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
