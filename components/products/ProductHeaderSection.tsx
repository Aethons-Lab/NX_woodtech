import Link from "next/link";

const ProductHeaderSection = () => {
  return (
    <section className="border-b border-[#2a1d1422] py-20 pb-25">
      <div className="mx-auto max-w-335 px-8">
        <div className="mb-9 flex gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b5847]">
          <Link
            href="/"
            className="text-[#2a1d14] transition-colors duration-150 hover:text-[#8b5e3c]"
          >
            Home
          </Link>
          <span className="text-[#8b5e3c]">/</span>
          <span>Products</span>
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <h1 className="text-[clamp(56px,8vw,120px)] leading-[0.95] tracking-[-0.035em]">
            Our <em className="font-normal italic text-[#8b5e3c]">Range</em>
          </h1>

          <p className="max-w-120 text-[17px] leading-[1.6] text-[#6b5847]">
            Six decades of craft distilled into three product families —
            decorative veneer, structural plywood, and solid wood doors. Every
            product pressed, graded, and finished at our Narayanganj facility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductHeaderSection;
