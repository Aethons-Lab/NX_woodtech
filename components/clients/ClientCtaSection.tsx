"use client";

import React from "react";

const ClientCtaSection = () => {
  return (
    <section className="cta-band-dark">
      <div className="mx-auto max-w-335 px-4 max-[880px]:px-5 lg:px-8">
        <div className="text-center">
          <span
            className="eyebrow mb-3 max-[640px]:mb-2 max-[880px]:mb-4 inline-flex font-mono text-[9px] max-[640px]:text-[8px] lg:text-[11px] uppercase tracking-[0.15em] text-[#dfdf12] mx-auto"
            style={{ display: "flex", justifyContent: "center" }}
          >
            PARTNERSHIP
          </span>
          <h2 className="mb-4 max-[640px]:mb-2 max-[880px]:mb-4 text-[clamp(28px,5vw,52px)] leading-[0.95] tracking-[-0.02em] text-[#f6f1ea]">
            Ready to Partner With Us?
          </h2>
          <p className="mx-auto mb-8 max-[640px]:mb-6 max-[880px]:mb-6 max-w-full max-[640px]:max-w-sm max-[880px]:max-w-2xl lg:max-w-140 text-base max-[640px]:text-sm lg:text-lg leading-[1.6] text-[rgba(246,241,234,0.7)]">
            Whether you're a manufacturer, designer, builder, or distributor,
            we'd love to discuss how Woodtech can support your projects and
            business goals.
          </p>
          <div className="flex flex-col max-[640px]:gap-3 max-[880px]:gap-3 lg:gap-4 justify-center flex-wrap max-[880px]:flex-row">
            <a href="/contact" className="btn btn-primary inline-flex">
              Get in Touch
            </a>
            <a
              href="/products"
              className="btn btn-outline inline-flex"
              style={{
                color: "var(--bone)",
                borderColor: "var(--bone)",
              }}
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCtaSection;
