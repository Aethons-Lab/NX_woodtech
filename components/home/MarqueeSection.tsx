"use client";

export function MarqueeSection() {
  return (
    <>
      <div
        className="marquee lg:-mx-36 overflow-x-hidden border-y border-[#2a1d1422] py-4"
        aria-hidden="true"
      >
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Marine Grade Plywood
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Veneer Flush Door
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Water Proof Marine Door
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Block Board
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Decorative Plywood
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Commercial Plywood
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Laminated Board
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Marine Plywood
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Veneer Flush Door
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Panel Door
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Block Board
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Decorative Veneer
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Commercial Ply
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Laminated Board
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Flexi Plywood
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Cup Board
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Solid Wooden Door
          </span>
        </div>
      </div>
      <style jsx global>{`
        .marquee-track {
          animation: marquee-scroll 28s linear infinite;
          will-change: transform;
        }

        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}
