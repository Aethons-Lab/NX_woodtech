"use client";

import React from "react";

const CertificateCTA = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-brown">
      <div className="mx-auto max-w-container px-8">
        <div className="text-center space-y-8">
          <h2 className="font-serif text-[clamp(36px,7vw,56px)] text-bone leading-tight">
            Your Assurance of Excellence
          </h2>

          <p className="text-[16px] leading-[1.7] text-bone/85 max-w-2xl mx-auto">
            Every certification we hold is a promise—a commitment to deliver
            wood products and craftsmanship that transcend ordinary standards.
            Choose quality you can trust. Choose excellence that endures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button className="inline-flex items-center gap-2 rounded-full bg-bone text-brown px-8 py-3.5 font-sans text-sm font-medium transition-all duration-200 hover:bg-gold hover:text-cocoa">
              View All Certificates
              <span>↓</span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border-2 border-bone text-bone px-8 py-3 font-sans text-sm font-medium transition-all duration-200 hover:bg-bone hover:text-brown">
              Our Commitments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateCTA;
