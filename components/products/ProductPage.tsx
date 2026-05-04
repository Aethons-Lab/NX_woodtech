"use client";
import { products } from "@/lib/products";
import React, { useEffect, useState } from "react";
import ProductHeaderSection from "./ProductHeaderSection";
import ProductFilterSection from "./ProductFilterSection";
import ProductSection from "./ProductSection";
import ProductCTASection from "./ProductCTASection";

const ProductPage = () => {
  const categories = [
    "All",
    "Decorative Veneer",
    "Structural Plywood",
    "Solid Wood Doors",
  ];
  const [active, setActive] = useState<string>("All");
  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

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
    <div>
      {/* PAGE HEADER */}
      <ProductHeaderSection />
      {/* FILTER BAR */}
      <ProductFilterSection
        categories={categories}
        active={active}
        filtered={filtered}
        setActive={setActive}
      />
      {/* PRODUCT GRID */}
      <ProductSection filtered={filtered} />
      {/* CTA */}
      <ProductCTASection />
    </div>
  );
};

export default ProductPage;
