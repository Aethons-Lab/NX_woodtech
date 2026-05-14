"use client";

import React from "react";
import Image from "next/image";
import plantIcon from "@/public/icons/icon-plant.svg";
import tickIcon from "@/public/icons/icon-tick.svg";
import cupIcon from "@/public/icons/icon-cup.svg";
import clipboardIcon from "@/public/icons/icon-clipboard.svg";
import globeIcon from "@/public/icons/icon-globe.svg";
import statIcon from "@/public/icons/icon-stat.svg";
import trustIcon from "@/public/icons/icon-trust.svg";

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
      icon: tickIcon,
    },
    {
      title: "Olive-Grounded Sustainability",
      description:
        "FSC and PEFC certifications validate our dedication to responsible forest stewardship, safeguarding natural resources for generations to come.",
      icon: plantIcon,
    },
    {
      title: "Safe & Secure Practices",
      description:
        "Our ISO 9001:2015 quality system strengthens safe, controlled production practices at every stage of manufacturing.",
      icon: clipboardIcon,
    },
    {
      title: "Global Market Reach",
      description:
        "CE and BIS certifications open doors across international markets, proving our products meet regulatory excellence worldwide.",
      icon: globeIcon,
    },
    {
      title: "Continuously Refined Excellence",
      description:
        "Regular audits and recertifications keep us evolving, ensuring we stay ahead of industry standards and customer expectations.",
      icon: statIcon,
    },
    {
      title: "Trusted Partner Heritage",
      description:
        "Our comprehensive certifications represent a solid foundation of trust, offering customers confidence in every piece we craft.",
      icon: trustIcon,
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
              <div className="size-9 mb-4">
                <Image
                  alt={benefit.title}
                  src={benefit.icon}
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="w-full h-full object-contain"
                />
              </div>
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
