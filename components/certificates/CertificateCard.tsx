"use client";

import React from "react";
import { Certificate } from "@/lib/constants/certificates";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  const isExpired =
    certificate.expiryDate && new Date(certificate.expiryDate) < new Date();

  const categoryColors: Record<string, string> = {
    ISO: "bg-gold/10 text-brown",
    Environmental: "bg-olive/10 text-olive",
    Safety: "bg-brown/10 text-brown",
    Quality: "bg-gold/10 text-gold",
    "Industry-Specific": "bg-muted/10 text-muted",
  };

  return (
    <div className="bg-paper rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-136 flex flex-col border border-bone">
      {/* Certificate Image */}
      <div className="bg-bone flex items-center justify-center p-4">
        <div className="w-full h-56 flex items-center justify-center border-2 border-dashed border-brown/20 rounded overflow-hidden">
          {/* <span className="text-muted text-center text-sm font-serif">
            {certificate.name}
          </span> */}
          <Image
            alt={certificate.name}
            src={certificate.image}
            width={100}
            height={100}
            sizes="100vw"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Certificate Content */}
      <div className="p-6 h-80 flex flex-col overflow-hidden">
        {/* Category Badge */}
        <div className="mb-3">
          <span
            className={cn(
              "inline-block py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
              categoryColors[certificate.category] || "bg-muted/10 text-muted",
            )}
          >
            {certificate.category}
          </span>
        </div>

        {/* Certificate Name */}
        <h3 className="text-lg font-serif font-bold text-cocoa mb-1 line-clamp-2">
          {certificate.name}
        </h3>

        {/* Issuer */}
        <p className="text-sm text-muted mb-3 line-clamp-2">
          {certificate.issuer}
        </p>

        {/* Description */}
        <p className="text-muted text-sm mb-4 h-28 overflow-hidden leading-relaxed">
          {certificate.description}
        </p>

        {/* Details */}
        <div className="space-y-2 text-sm border-t border-bone pt-4 mt-auto">
          <div className="flex justify-between">
            <span className="text-muted">Cert. Number:</span>
            <span className="font-mono text-cocoa font-semibold">
              {certificate.certificationNumber}
            </span>
          </div>

          {/* {certificate.issueDate && (
            <div className="flex justify-between">
              <span className="text-muted">Issued:</span>
              <span className="text-cocoa font-medium">
                {new Date(certificate.issueDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          )} */}

          {/* {certificate.expiryDate && (
            <div className="flex justify-between">
              <span className="text-muted">Expires:</span>
              <span
                className={cn(
                  "font-semibold",
                  isExpired ? "text-brown" : "text-olive",
                )}
              >
                {new Date(certificate.expiryDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
                {isExpired && " (Expired)"}
              </span>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
