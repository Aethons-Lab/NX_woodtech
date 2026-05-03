'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '../../lib/products'

const categories = ['All', 'Decorative Veneer', 'Structural Plywood', 'Solid Wood Doors']

export default function ProductsPage() {
  const [active, setActive] = useState('All')

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
      { threshold: 0.08 }
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.65s ease, transform 0.65s ease'
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-head">
        <div className="container">
          <div className="page-crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Products</span>
          </div>
          <div className="page-head-grid">
            <div>
              <h1 className="page-title">
                Our <em>Range</em>
              </h1>
            </div>
            <div>
              <p className="page-meta">
                Six decades of craft distilled into three product families — decorative veneer,
                structural plywood, and solid wood doors. Every product pressed, graded, and
                finished at our Narayanganj facility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="products-filter-bar">
        <div className="container">
          <div className="filter-inner">
            <span className="filter-label">Filter by</span>
            <div className="filter-chips">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-chip${active === cat ? ' active' : ''}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="filter-count">{filtered.length} products</span>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <section className="products-listing">
        <div className="container">
          <div className="pl-grid">
            {filtered.map((product) => (
              <article key={product.slug} className="pl-card" data-reveal>
                <Link href={`/products/${product.slug}`} className="pl-card-link">
                  <div className="pl-card-img-wrap">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="pl-badge">{product.badge}</span>
                    <span className="pl-cat">{product.category}</span>
                  </div>
                  <div className="pl-card-body">
                    <div className="pl-num">{product.num} /</div>
                    <h2 className="pl-name">{product.name}</h2>
                    <p className="pl-desc">{product.shortDesc}</p>
                    <div className="pl-footer">
                      <span className="pl-specs-preview">
                        {product.specs[0].value} · {product.specs[1].value}
                      </span>
                      <span className="pl-arrow">View details →</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band-dark">
        <div className="container">
          <div data-reveal>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Custom orders</div>
            <h2>Need a size or spec we don't list?</h2>
            <p>
              Custom thicknesses, non-standard sheet dimensions, and bespoke veneer matching are
              available on request. Lead times and pricing on enquiry.
            </p>
            <Link href="/contact" className="btn btn-light">
              Request a custom quote <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
