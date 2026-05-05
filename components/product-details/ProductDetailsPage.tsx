"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProduct, products } from "@/lib/products";

export default function ProductDetailPage(): React.JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const product = getProduct(slug);

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
      { threshold: 0.08 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      const elem = el as HTMLElement;
      elem.style.opacity = "0";
      elem.style.transform = "translateY(20px)";
      elem.style.transition = "opacity 0.65s ease, transform 0.65s ease";
      io.observe(elem);
    });
    return () => io.disconnect();
  }, [slug]);

  if (!product) {
    return (
      <div className="mx-auto max-w-335 px-8 py-30 text-center max-[480px]:py-20">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8b5e3c] mb-4">
          404
        </div>
        <h1 className="mb-5 text-[48px]">Product not found</h1>
        <Link
          href="/products"
          className="inline-flex items-center gap-2.5 rounded bg-[#2a1d14] px-5 py-3 text-sm font-medium text-[#f6f1ea] transition-all duration-150 hover:bg-[#8b5e3c]"
        >
          Back to products
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.slug !== slug && p.category === product.category)
    .slice(0, 2);
  const paragraphs = product.description.split("\n\n");

  return (
    <div>
      {/* BREADCRUMB */}
      <div className="bg-[#f6f1ea] border-b border-[#2a1d1422]">
        <div className="mx-auto max-w-335 px-8 py-3 max-[880px]:px-5 max-[480px]:px-4">
          <div className="flex gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b5847]">
            <Link
              href="/"
              className="text-[#2a1d14] transition-colors duration-150 hover:text-[#8b5e3c]"
            >
              Home
            </Link>
            <span className="text-[#8b5e3c]">/</span>
            <Link
              href="/products"
              className="text-[#2a1d14] transition-colors duration-150 hover:text-[#8b5e3c]"
            >
              Products
            </Link>
            <span className="text-[#8b5e3c]">/</span>
            <span className="text-[#6b5847]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-[#f6f1ea] py-16">
        <div className="mx-auto max-w-335 px-8 max-[880px]:px-5 max-[480px]:px-4">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div data-reveal className="relative h-150 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 55vw"
                priority
              />
              <div className="absolute left-4 top-4 z-10">
                <span className="bg-[#dfdf12] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-[#2a1d14]">
                  {product.badge}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-[rgba(42,29,20,0.82)] p-4 text-[#f6f1ea]">
                <span className="block font-mono text-[10px] text-[#7ab027]">
                  Fig. {product.num}
                </span>
                <div className="mt-1 font-serif text-lg font-medium">
                  {product.name} — {product.category}
                </div>
              </div>
            </div>

            <div data-reveal>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8b5e3c]">
                {product.category}
              </div>
              <h1 className="mb-4 text-[clamp(36px,4.5vw,56px)] leading-[1.05]">
                {product.name}
              </h1>
              <p className="mb-6 max-w-120 text-[17px] leading-[1.6] text-[#6b5847]">
                {product.shortDesc}
              </p>

              <div className="mb-6 border border-[#2a1d1422]">
                <div className="bg-[#ede5d8] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6b5847]">
                  Technical specifications
                </div>
                <div>
                  {product.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex justify-between gap-4 border-t border-[#2a1d1422] px-4 py-3"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6b5847]">
                        {s.label}
                      </span>
                      <span className="text-[14px] text-[#2a1d14] font-medium">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-3 bg-[#ede5d8] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6b5847]">
                  Common applications
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="rounded-full border border-[#2a1d1422] bg-[#ede5d8] px-4 py-2 text-sm text-[#2a1d14]"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded bg-[#2a1d14] px-5 py-3 text-sm font-medium text-[#f6f1ea] transition-all duration-150 hover:bg-[#8b5e3c]"
                >
                  Request a quote <span className="ml-1">→</span>
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2.5 rounded border border-[#2a1d14] px-4 py-3 text-sm text-[#2a1d14] bg-transparent hover:bg-[#f6f1ea]"
                >
                  All products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="bg-[#ede5d8] border-t border-[#2a1d1422] py-16">
        <div className="mx-auto max-w-335 px-8 max-[880px]:px-5 max-[480px]:px-4">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div data-reveal className="top-28">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8b5e3c]">
                About this product
              </div>
              <h2 className="text-[clamp(32px,3.5vw,48px)]">
                Crafted with
                <br />
                intention.
              </h2>
            </div>
            <div data-reveal className="prose max-w-none">
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="mb-6 text-[17px] leading-[1.7] text-[#2a1d14]"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="py-25 bg-[#f6f1ea] border-t border-[#2a1d1422]">
          <div className="mx-auto max-w-335 px-8 max-[880px]:px-5 max-[480px]:px-4">
            <div className="mb-12" data-reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8b5e3c] mb-2">
                From the same family
              </div>
              <h2
                className="text-[clamp(32px,3.5vw,48px)]"
                style={{ letterSpacing: "-0.02em" }}
              >
                Related products
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
              {related.map((rp) => (
                <article
                  key={rp.slug}
                  className="bg-[#f6f1ea] border border-[#2a1d1422] overflow-hidden transition-all duration-300"
                  style={{
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 20px 48px rgba(42, 29, 20, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                  data-reveal
                >
                  <Link
                    href={`/products/${rp.slug}`}
                    className="block no-underline text-inherit"
                  >
                    <div className="relative h-70 overflow-hidden">
                      <Image
                        src={rp.image}
                        alt={rp.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.transform =
                            "scale(1.04)";
                          (e.currentTarget as HTMLElement).style.transition =
                            "transform 0.5s ease";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.transform =
                            "scale(1)";
                        }}
                      />
                      <span className="absolute top-4 left-4 z-10 font-mono text-[9px] uppercase tracking-[0.15em] text-[#2a1d14] bg-[#dfdf12] px-2.5 py-1.5">
                        {rp.badge}
                      </span>
                    </div>
                    <div className="p-7">
                      <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b5847] mb-2">
                        {rp.num} /
                      </div>
                      <h3
                        className="font-serif text-2xl font-bold mb-2.5"
                        style={{ letterSpacing: "-0.01em", lineHeight: "1.1" }}
                      >
                        {rp.name}
                      </h3>
                      <p
                        className="text-sm text-[#6b5847] mb-5"
                        style={{ lineHeight: "1.55" }}
                      >
                        {rp.shortDesc}
                      </p>
                      <div className="flex justify-between items-center pt-4 border-t border-[#2a1d1422] gap-3">
                        <span
                          className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8b5e3c] transition-all duration-200 whitespace-nowrap"
                          style={{ cursor: "pointer" }}
                          onMouseEnter={(e) => {
                            (
                              e.currentTarget as HTMLElement
                            ).style.letterSpacing = "0.2em";
                          }}
                          onMouseLeave={(e) => {
                            (
                              e.currentTarget as HTMLElement
                            ).style.letterSpacing = "0.12em";
                          }}
                        >
                          View details →
                        </span>
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
      <section className="py-25 bg-[#f6f1ea] border-t border-[#2a1d1422] text-center">
        <div className="mx-auto max-w-335 px-8 max-[880px]:px-5 max-[480px]:px-4">
          <div data-reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8b5e3c] mb-5">
              Get a sample
            </div>
            <h2
              className="text-[clamp(40px,5vw,68px)] mb-5"
              style={{ letterSpacing: "-0.02em" }}
            >
              See this product in person.
            </h2>
            <p className="text-[18px] text-[#6b5847] max-w-135 mx-auto mb-9">
              Request a physical sample or arrange a site visit — our team will
              bring swatches and spec sheets to you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded bg-[#2a1d14] px-5 py-3 text-sm font-medium text-[#f6f1ea] transition-all duration-150"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#8b5e3c";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#2a1d14";
              }}
            >
              Contact us
              <span className="inline-block transition-transform duration-200">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
