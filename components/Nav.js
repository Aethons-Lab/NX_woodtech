'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          <img
            src="/logo.png"
            alt="Woodtech Ply Industries"
            style={{ height: '72px', width: 'auto', display: 'block' }}
          />
        </Link>
        <div className={`nav-links${open ? ' open' : ''}`}>
          <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
          <Link href="/products" className={pathname.startsWith('/products') ? 'active' : ''}>Products</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <Link href="/contact" className="nav-cta">Request Quote →</Link>
        </div>
        <button
          className="nav-mobile-toggle"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </nav>
  )
}
