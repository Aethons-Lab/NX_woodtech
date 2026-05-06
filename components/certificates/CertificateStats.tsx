"use client";

import React from "react";
import { certificates } from "@/lib/constants/certificates";
import Image from "next/image";
import tickIcon from "@/public/icons/icon-tick.svg";
import plantIcon from "@/public/icons/icon-plant.svg";
import clipboardIcon from "@/public/icons/icon-clipboard.svg";
import cupIcon from "@/public/icons/icon-cup.svg";

const CertificateStats = () => {
  const totalCertificates = certificates.length;
  const activeCount = certificates.filter(
    (cert) => !cert.expiryDate || new Date(cert.expiryDate) >= new Date(),
  ).length;
  const isoCount = certificates.filter(
    (cert) => cert.category === "ISO",
  ).length;
  const environmentalCount = certificates.filter(
    (cert) => cert.category === "Environmental",
  ).length;

  const stats = [
    {
      label: "Total Accreditations",
      value: totalCertificates,
      icon: cupIcon,
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Active Standards",
      value: activeCount,
      icon: tickIcon,
      color: "from-green-500 to-green-600",
    },
    {
      label: "Quality Systems",
      value: isoCount,
      icon: clipboardIcon,
      color: "from-purple-500 to-purple-600",
    },
    {
      label: "Sustainability Marks",
      value: environmentalCount,
      icon: plantIcon,
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-bone">
      <div className="mx-auto max-w-container px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-[clamp(32px,6vw,48px)] leading-[1.1] text-cocoa mb-3">
            Our Certification Portfolio
          </h2>
          <p className="text-[15px] leading-[1.6] text-muted max-w-2xl mx-auto">
            A comprehensive snapshot of our accreditations across quality,
            environmental, and safety standards
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-paper rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-bone"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted mb-2 font-mono">
                    {stat.label}
                  </p>
                  <p className="text-[clamp(28px,5vw,48px)] font-serif font-bold text-cocoa leading-none">
                    {stat.value}
                  </p>
                </div>
                <div className="size-9 opacity-40">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={100}
                    height={100}
                    sizes="100vw"
                    className="size-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateStats;
