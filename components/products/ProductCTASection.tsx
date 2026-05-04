import Link from "next/link";

const ProductCTASection = () => {
  return (
    <section className="border-t border-[#2a1d14] bg-[#2a1d14] px-0 py-25 text-[#f6f1ea] max-[600px]:py-20">
      <div className="mx-auto max-w-335 px-8 text-center max-[880px]:px-5 max-[480px]:px-4">
        <div data-reveal>
          <div className="mb-5 inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#dfdf12] before:h-px before:w-6 before:bg-[#dfdf12] before:content-[''] after:h-px after:w-6 after:bg-[#dfdf12] after:content-['']">
            Custom orders
          </div>
          <h2 className="mb-5 text-[clamp(40px,5vw,68px)] tracking-[-0.02em]">
            Need a size or spec we don't list?
          </h2>
          <p className="mx-auto mb-9 max-w-135 text-[18px] leading-[1.6] text-[rgba(246,241,234,0.7)]">
            Custom thicknesses, non-standard sheet dimensions, and bespoke
            veneer matching are available on request. Lead times and pricing on
            enquiry.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded border border-transparent bg-[#f6f1ea] px-6 py-3.5 text-sm font-medium text-[#2a1d14] transition-all duration-180 hover:-translate-y-px hover:bg-[#ede5d8]"
          >
            Request a custom quote{" "}
            <span className="transition-transform duration-200 hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCTASection;
