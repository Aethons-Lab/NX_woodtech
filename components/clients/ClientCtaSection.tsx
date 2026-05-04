"use client";

import React from "react";

const ClientCtaSection = () => {
  return (
    <section className="cta-band-dark">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ margin: "0 auto 20px" }}>
            PARTNERSHIP
          </span>
          <h2
            style={{
              fontSize: "clamp(36px, 4.5vw, 52px)",
              letterSpacing: "-0.02em",
              marginBottom: "20px",
              color: "var(--bone)",
            }}
          >
            Ready to Partner With Us?
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(246, 241, 234, 0.7)",
              maxWidth: "560px",
              lineHeight: "1.6",
              margin: "0 auto 40px",
            }}
          >
            Whether you're a manufacturer, designer, builder, or distributor,
            we'd love to discuss how Woodtech can support your projects and
            business goals.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="/contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a
              href="/products"
              className="btn btn-outline"
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
