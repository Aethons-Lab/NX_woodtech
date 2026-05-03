import Link from 'next/link'

export default function Footer(): React.JSX.Element {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <img
                src="/logo.png"
                alt="Woodtech Ply Industries"
                style={{ height: '48px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p>
              Engineered plywood and solid wooden doors, crafted in Bangladesh
              since 2003. Quality you can press your hand against.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/#products">Products</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h4>Products</h4>
            <div className="footer-links">
              <Link href="/#products">Plywood</Link>
              <Link href="/#products">Flush Doors</Link>
              <Link href="/#products">Panel Doors</Link>
              <Link href="/#products">Block Boards</Link>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="footer-links">
              <a href="tel:02477721103">02477721103</a>
              <a href="mailto:info@woodtechipl.com">info@woodtechipl.com</a>
              <a href="https://woodtechipl.com">woodtechipl.com</a>
              <span style={{ color: 'rgba(246,241,234,0.65)', fontSize: '14px' }}>
                Dhaka / Khulna / Bagerhat
              </span>
            </div>
            <div className="social-row" style={{ marginTop: '18px' }}>
              <a
                href="https://www.facebook.com/share/1BvpTJzk96/?mibextid=wwXIfr"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/woodtechipl?igsh=MXcxeDU5bWczZ3pydA=="
                aria-label="Instagram"
              >
                ◉
              </a>
              <a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Woodtech Industries (Pvt.) Ltd. All rights reserved.</div>
          <div>Dhaka / Khulna / Bagerhat / Bangladesh</div>
        </div>
      </div>
    </footer>
  )
}
