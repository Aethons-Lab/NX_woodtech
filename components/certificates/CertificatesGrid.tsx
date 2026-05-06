"use client";

import React, { useState } from "react";
import {
  certificates,
  certificateCategories,
} from "@/lib/constants/certificates";
import CertificateCard from "./CertificateCard";
import { cn } from "@/lib/utils";

const CertificatesGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCertificates =
    selectedCategory === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  return (
    <section className="w-full lg:px-36 py-20 lg:py-28 bg-paper">
      <div className="mx-auto max-w-container px-8">
        {/* Filter Section */}
        <div className="mb-12">
          <h2 className="font-serif text-[clamp(28px,5vw,40px)] text-cocoa mb-6 leading-tight">
            Browse by Certification Type
          </h2>

          <div className="flex flex-wrap gap-3">
            {certificateCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300",
                  selectedCategory === category.id
                    ? "border border-cocoa bg-[#2a1d14] text-white shadow-md"
                    : "border border-bone text-cocoa hover:bg-brown/30 hover:shadow-lg",
                  //   selectedCategory === category.id
                  //     ? "bg-cocoa! text-bone shadow-md border border-bone"
                  //     : "text-brown border border-bone hover:bg-brown/30",
                )}
              >
                {category.label}
                <span className="ml-2 opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wider text-muted font-mono">
            Showing{" "}
            <span className="font-semibold text-cocoa">
              {filteredCertificates.length}
            </span>{" "}
            certification
            {filteredCertificates.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Certificates Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-16">
            <p className="text-muted text-base text-cocoa">
              No certificates found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesGrid;
