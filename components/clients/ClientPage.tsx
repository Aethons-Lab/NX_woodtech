"use client";

import React from "react";
import ClientHeaderSection from "./ClientHeaderSection";
import ClientListSection from "./ClientListSection";
import ClientTestimonialsSection from "./ClientTestimonialsSection";
import ClientCtaSection from "./ClientCtaSection";

const ClientPage = () => {
  return (
    <div className="w-full">
      {/* PAGE HEADER */}
      <ClientHeaderSection />

      {/* CLIENT LIST */}
      <ClientListSection />

      {/* TESTIMONIALS */}
      {/* <ClientTestimonialsSection /> */}

      {/* CALL TO ACTION */}
      {/* <ClientCtaSection /> */}
    </div>
  );
};

export default ClientPage;
