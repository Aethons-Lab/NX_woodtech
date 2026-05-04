"use client";

import React, { useEffect, useState } from "react";
import { clients } from "@/lib/constants/clients";

const ClientTestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeClient = clients[activeIndex];

  return (
    <section className="h-auto max-[640px]:h-180 max-[880px]:h-auto lg:h-250 overflow-hidden bg-paper px-4 py-12 max-[880px]:px-5 max-[880px]:py-16 lg:px-36 lg:py-28">
      <div className="container mx-auto flex h-full flex-col justify-center">
        <div className="mb-12 max-[640px]:mb-8 max-[880px]:mb-10 text-center">
          <div className="mb-3 max-[640px]:mb-2 inline-flex font-mono text-[9px] max-[640px]:text-[8px] lg:text-lg uppercase tracking-[0.15em] text-[#6b5847]">
            TESTIMONIALS
          </div>
          <h2 className="mb-3 max-[640px]:mb-2 max-[880px]:mb-4 text-[clamp(32px,6vw,120px)] leading-[0.95] tracking-[-0.035em]">
            Client Feedback
          </h2>
          <p className="mx-auto max-w-full max-[640px]:max-w-sm max-[880px]:max-w-2xl lg:max-w-3xl text-[clamp(14px,3vw,28px)] leading-[1.55] text-[#6b5847]">
            Hear directly from our valued partners
          </p>
        </div>

        <div className="mx-auto max-w-full max-[640px]:max-w-xs max-[480px]:max-w-64 max-[880px]:max-w-160 lg:max-w-200 border border-[#2a1d1422] bg-[#ede5d8] py-4 max-[640px]:py-3 max-[880px]:p-6 lg:py-8 lg:px-12 rounded-lg">
          <div className="testimonial-grid items-start gap-3 max-[640px]:gap-2 lg:gap-4">
            <blockquote className="max-w-full text-sm max-[480px]:text-xs max-[640px]:text-base max-[880px]:text-lg lg:max-w-4xl lg:text-3xl font-medium italic font-serif text-cocoa leading-normal max-[640px]:leading-[1.4]">
              {activeClient.testimonial}
            </blockquote>

            <div className="t-meta justify-start py-2 max-[640px]:py-2 lg:py-5 w-full">
              <div className="text-start">
                <p className="t-name max-w-full wrap-break-word text-xs max-[640px]:text-sm lg:text-lg font-semibold text-[#8b5e3c] leading-[1.4]">
                  {activeClient.testimonialAuthor}
                </p>
                <p className="t-role max-w-full wrap-break-word text-[10px] max-[640px]:text-xs lg:text-sm text-[#6b5847] leading-[1.3]">
                  {activeClient.testimonialAuthorRole}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-1 max-[640px]:gap-1.5 lg:gap-2 mt-3 max-[640px]:mt-4 lg:mt-6">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${
                  index === activeIndex ? "w-8" : "w-2"
                }`}
                style={{
                  background:
                    index === activeIndex ? "var(--brown)" : "var(--rule)",
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
