'use client'
import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getProduct, products } from '../../../lib/products'

export default function ProductDetailPage(): React.JSX.Element {
  const { slug } = useParams<{ slug: string }>()
  const product = getProduct(slug)

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
      { threshold: 0.08 }
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      const elem = el as HTMLElement
      elem.style.opacity = '0'
      elem.style.transform = 'translateY(20px)'
      elem.style.transition = 'opacity 0.65s ease, transform 0.65s ease'
      io.observe(elem)
    })
    return () => io.disconnect()
  }, [slug])

  if (!product) {
    return (
      <div className="container" style={{ padding: '120px 32px', textAlign: 'center' }}>
        <div className="eyebrow">404</div>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Product not found</h1>
        <Link href="/products" className="btn btn-primary">Back to products</Link>
      </div>
    )
  }

  const related = products.filter((p) => p.slug !== slug && p.category === product.category).slice(0, 2)
  const paragraphs = product.description.split('\n\n')

  return (
    <>
      {/* BREADCRUMB */}
      <div className="pd-breadcrumb">
        <div className="container">
          <div className="page-crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/products">Products</Link>
            <span className="sep">/</span>
            <span>{product.name}</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="pd-hero">
        <div className="container">
          <div className="pd-hero-grid">
            <div className="pd-hero-img-wrap" data-reveal>
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 100vw, 55vw"
                priority
              />
              <div className="pd-badge-wrap">
                <span className="pl-badge">{product.badge}</span>
              </div>
              <div className="pd-fig-caption">
                <span className="mono">Fig. {product.num}</span>
                {product.name} — {product.category}
              </div>
            </div>

            <div className="pd-hero-info" data-reveal>
              <div className="eyebrow">{product.category}</div>
              <h1 className="pd-title">{product.name}</h1>
              <p className="pd-lede">{product.shortDesc}</p>

              <div className="pd-specs">
                <div className="pd-specs-head">Technical specifications</div>
                <div className="pd-specs-grid">
                  {product.specs.map((s) => (
                    <div key={s.label} className="pd-spec-row">
                      <span className="pd-spec-label">{s.label}</span>
                      <span className="pd-spec-val">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pd-applications">
                <div className="pd-specs-head">Common applications</div>
                <div className="pd-app-chips">
                  {product.applications.map((app) => (
                    <span key={app} className="pd-app-chip">{app}</span>
                  ))}
                </div>
              </div>

              <div className="pd-actions">
                <Link href="/contact" className="btn btn-primary">
                  Request a quote <span className="arrow">→</span>
                </Link>
                <Link href="/products" className="btn btn-outline">
                  All products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="pd-desc-section">
        <div className="container">
          <div className="pd-desc-grid">
            <div className="pd-desc-side" data-reveal>
              <div className="eyebrow">About this product</div>
              <h2 className="pd-desc-heading">Crafted with<br />intention.</h2>
            </div>
            <div className="pd-desc-body" data-reveal>
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="pd-related">
          <div className="container">
            <div className="pd-related-head" data-reveal>
              <div className="eyebrow">From the same family</div>
              <h2>Related products</h2>
            </div>
            <div className="pd-related-grid">
              {related.map((rp) => (
                <article key={rp.slug} className="pl-card" data-reveal>
                  <Link href={`/products/${rp.slug}`} className="pl-card-link">
                    <div className="pl-card-img-wrap">
                      <Image
                        src={rp.image}
                        alt={rp.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <span className="pl-badge">{rp.badge}</span>
                    </div>
                    <div className="pl-card-body">
                      <div className="pl-num">{rp.num} /</div>
                      <h3 className="pl-name">{rp.name}</h3>
                      <p className="pl-desc">{rp.shortDesc}</p>
                      <div className="pl-footer">
                        <span className="pl-arrow">View details →</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <div data-reveal>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Get a sample</div>
            <h2>See this product in person.</h2>
            <p>
              Request a physical sample or arrange a site visit — our team will bring swatches
              and spec sheets to you.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact us <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
