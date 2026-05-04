import { FC } from "react";

const ProductFilterSection: FC<{
  categories: string[];
  active: string;
  filtered: any[];
  setActive: React.Dispatch<React.SetStateAction<string>>;
}> = ({ categories, active, filtered, setActive }) => {
  return (
    <div className="sticky top-[73px] z-40 border-b border-[#2a1d1422] bg-[#f6f1ea]">
      <div className="mx-auto max-w-335 px-8 max-[880px]:px-5 max-[480px]:px-4">
        <div className="flex flex-wrap items-center gap-5 py-4 max-[600px]:gap-3">
          <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] text-[#6b5847]">
            Filter by
          </span>
          <div className="flex flex-1 flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`rounded-full border border-[#2a1d1422] bg-[#f6f1ea] px-4 py-2 text-[13px] font-normal text-[#2a1d14] transition-all duration-150 hover:border-[#2a1d14] ${
                  active === cat
                    ? "border-[#2a1d14] bg-[#2a1d14] text-[#f6f1ea]"
                    : ""
                }`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="ml-auto whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.12em] text-[#6b5847] max-[600px]:hidden">
            {filtered.length} products
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterSection;
