"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import CertificatesHeader from "./CertificatesHeader";
import CertificateStats from "./CertificateStats";
import CertificatesGrid from "./CertificatesGrid";
import CertificateBenefits from "./CertificateBenefits";
import CertificateCTA from "./CertificateCTA";

const CertificatesPage = () => {
  useScrollReveal();

  return (
    <div className="w-full">
      {/* Header Section */}
      <CertificatesHeader />

      {/* Statistics Section */}
      <div className="lg:px-36">
        <CertificateStats />
      </div>

      {/* Certificates Grid with Filters */}
      <CertificatesGrid />

      {/* Benefits Section */}
      <CertificateBenefits />

      {/* Call to Action Section */}
      <CertificateCTA />
    </div>
  );
};

export default CertificatesPage;
