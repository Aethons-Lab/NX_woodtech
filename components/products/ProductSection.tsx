import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const ProductSection: FC<{ filtered: any[] }> = ({ filtered }) => {
  return (
    <section className="bg-[#ede5d8] py-20 pb-30 max-[600px]:py-12 max-[600px]:pb-20">
      <div className="mx-auto max-w-335 px-8 max-[880px]:px-5 max-[480px]:px-4">
        <div className="grid gap-6 lg:grid-cols-3 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
          {filtered.map((product) => (
            <article
              key={product.slug}
              data-reveal
              className="overflow-hidden border border-[#2a1d1422] bg-[#f6f1ea] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(42,29,20,0.1)]"
            >
              <Link
                href={`/products/${product.slug}`}
                className="block text-inherit no-underline"
              >
                <div className="relative h-70 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 z-10 bg-[#dfdf12] px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-[#2a1d14]">
                    {product.badge}
                  </span>
                  <span className="absolute bottom-4 right-4 z-10 bg-[rgba(42,29,20,0.75)] px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#f6f1ea] backdrop-blur-xs">
                    {product.category}
                  </span>
                </div>
                <div className="px-6 py-7">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b5847]">
                    {product.num} /
                  </div>
                  <h2 className="mb-2.5 font-serif text-[24px] font-bold leading-[1.1] tracking-[-0.01em] text-[#2a1d14]">
                    {product.name}
                  </h2>
                  <p className="mb-5 text-sm leading-[1.55] text-[#6b5847]">
                    {product.shortDesc}
                  </p>
                  <div className="flex items-center justify-between gap-3 border-t border-[#2a1d1422] pt-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#6b5847]">
                      {product.specs[0].value} · {product.specs[1].value}
                    </span>
                    <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.12em] text-[#8b5e3c] transition-[letter-spacing] duration-200 hover:tracking-[0.2em]">
                      View details →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
