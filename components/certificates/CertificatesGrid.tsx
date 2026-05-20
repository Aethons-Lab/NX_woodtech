"use client";

import React from "react";
import { certificates } from "@/lib/constants/certificates";
import CertificateCard from "./CertificateCard";

const CertificatesGrid = () => {
  return (
    <section className="w-full lg:px-36 py-10  bg-paper">
      <div className="mx-auto max-w-container px-8">
        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wider text-muted font-mono">
            Showing{" "}
            <span className="font-semibold text-cocoa">
              {certificates.length}
            </span>{" "}
            certification{certificates.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Certificates Grid */}
        {certificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-16">
            <p className="text-muted text-base text-cocoa">
              No certificates found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesGrid;