"use client";

import React, { useEffect } from "react";
import { clients } from "@/lib/constants/clients";

const ClientListSection = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      const elem = el as HTMLElement;
      elem.style.opacity = "0";
      elem.style.transform = "translateY(20px)";
      elem.style.transition = "opacity 0.65s ease, transform 0.65s ease";
      io.observe(elem);
    });
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-28 px-36" style={{ background: "var(--paper)" }}>
      <div className="container">
        <div className="grid grid-cols-3 gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              data-reveal
              className="product-card overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                background: "var(--bone)",
                border: "1px solid var(--rule)",
              }}
            >
              <div className="flex flex-col p-7 h-80">
                <div className="flex-1">
                  <div
                    className="product-num mb-2.5"
                    style={{ color: "var(--brown)" }}
                  >
                    {client.industry}
                  </div>

                  <h3
                    className="text-xl mb-2.5 font-bold leading-tight"
                    style={{
                      letterSpacing: "-0.01em",
                      color: "var(--cocoa)",
                      fontFamily: '"Libre Caslon Text", Georgia, serif',
                    }}
                  >
                    {client.name}
                  </h3>

                  <p
                    className="text-sm mb-5 leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {client.description}
                  </p>
                </div>

                <div
                  className="flex items-center justify-between pt-4 border-t"
                  style={{ borderColor: "var(--rule)" }}
                >
                  <div>
                    <p
                      className="text-3xl font-bold mb-1"
                      style={{ color: "var(--cocoa)" }}
                    >
                      {client.projectCount}
                    </p>
                    <p
                      className="text-xs uppercase tracking-wider"
                      style={{
                        color: "var(--muted)",
                        fontFamily: '"JetBrains Mono", monospace',
                      }}
                    >
                      Projects
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className="text-3xl font-bold mb-1"
                      style={{ color: "var(--cocoa)" }}
                    >
                      {client.yearsPartnership}y
                    </p>
                    <p
                      className="text-xs uppercase tracking-wider"
                      style={{
                        color: "var(--muted)",
                        fontFamily: '"JetBrains Mono", monospace',
                      }}
                    >
                      Partnership
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientListSection;
