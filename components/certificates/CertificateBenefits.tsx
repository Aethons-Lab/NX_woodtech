"use client";

import React from "react";

interface CertificateBenefit {
  title: string;
  description: string;
  icon: string;
}

const CertificateBenefits = () => {
  const benefits: CertificateBenefit[] = [
    {
      title: "Golden Standard Quality",
      description:
        "ISO 9001 certification anchors our commitment to excellence, ensuring every product meets the highest international benchmarks with precision and care.",
      icon: "✓",
    },
    {
      title: "Olive-Grounded Sustainability",
      description:
        "FSC and PEFC certifications validate our dedication to responsible forest stewardship, safeguarding natural resources for generations to come.",
      icon: "🌱",
    },
    {
      title: "Safe & Secure Practices",
      description:
        "ISO 45001 certification demonstrates our unwavering dedication to protecting our workforce, ensuring workplace safety exceeds every standard.",
      icon: "🛡️",
    },
    {
      title: "Global Market Reach",
      description:
        "CE and BIS certifications open doors across international markets, proving our products meet regulatory excellence worldwide.",
      icon: "🌍",
    },
    {
      title: "Continuously Refined Excellence",
      description:
        "Regular audits and recertifications keep us evolving, ensuring we stay ahead of industry standards and customer expectations.",
      icon: "📈",
    },
    {
      title: "Trusted Partner Heritage",
      description:
        "Our comprehensive certifications represent a solid foundation of trust, offering customers confidence in every piece we craft.",
      icon: "🤝",
    },
  ];

  return (
    <section className="w-full lg:px-36 py-20 lg:py-28 bg-cocoa">
      <div className="mx-auto max-w-container px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-[clamp(32px,6vw,48px)] text-bone mb-3 leading-tight">
            Why Our Certifications Matter
          </h2>
          <p className="text-[15px] leading-[1.6] text-bone/80 max-w-2xl mx-auto">
            Our certifications represent our unwavering commitment to
            excellence, sustainability, and operational integrity
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-paper/10 rounded-lg p-6 hover:bg-paper/20 transition-colors duration-300 border border-bone/10 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="font-serif text-lg font-bold text-bone mb-2">
                {benefit.title}
              </h3>
              <p className="text-bone/75 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateBenefits;
