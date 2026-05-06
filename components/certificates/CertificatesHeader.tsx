"use client";

import React from "react";
import { cn } from "@/lib/utils";

const CertificatesHeader = () => {
  return (
    <section className="w-full bg-bone py-20 lg:py-28">
      <div className="mx-auto max-w-container px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              Crafted Excellence · Certified Standards
            </div>
            <h1 className="font-serif text-[clamp(48px,8vw,80px)] leading-[1.1] tracking-[-0.035em] text-cocoa">
              Built on Trust
            </h1>
            <p className="text-[17px] leading-[1.6] text-muted max-w-2xl mx-auto">
              Our certifications are the golden thread weaving through every
              product—validation of our commitment to quality, sustainability,
              and excellence from the forest to your door.
            </p>
          </div>

          <div className="pt-4">
            <p className="text-[15px] leading-[1.7] text-muted max-w-3xl mx-auto">
              From ISO standards to environmental stewardship, every
              certification reflects our dedication to maintaining the highest
              benchmarks. We don't just meet industry expectations—we set them,
              crafting a legacy of reliability that our clients can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesHeader;
