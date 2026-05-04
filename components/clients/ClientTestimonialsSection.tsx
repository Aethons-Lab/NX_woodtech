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
    <section className="h-250 overflow-hidden bg-paper px-36 py-28">
      <div className="container mx-auto flex h-full flex-col justify-center">
        <div className="mb-20 text-center">
          <div className="mb-5 inline-flex font-mono text-lg uppercase tracking-[0.15em] text-[#6b5847]">
            TESTIMONIALS
          </div>
          <h2 className="mb-5 text-[clamp(56px,8vw,120px)] leading-[0.95] tracking-[-0.035em]">
            Client Feedback
          </h2>
          <p className="mx-auto max-w-3xl text-[clamp(20px,2vw,28px)] leading-[1.55] text-[#6b5847]">
            Hear directly from our valued partners
          </p>
        </div>

        <div className="mx-auto max-w-200 border border-[#2a1d1422] bg-[#ede5d8] py-8 px-12 rounded-lg">
          <div className="testimonial-grid items-start ">
            <blockquote className="max-w-4xl text-2xl font-medium italic font-serif text-cocoa lg:text-3xl">
              {activeClient.testimonial}
            </blockquote>

            <div className="t-meta justify-start py-5">
              <div className="text-start">
                <p className="t-name text-lg font-semibold text-[#8b5e3c]">
                  {activeClient.testimonialAuthor}
                </p>
                <p className="t-role">{activeClient.testimonialAuthorRole}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
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
