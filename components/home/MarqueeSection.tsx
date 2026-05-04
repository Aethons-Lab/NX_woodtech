"use client";

export function MarqueeSection() {
  return (
    <>
      <div
        className="marquee -mx-36 overflow-x-hidden border-y border-[#2a1d1422] py-4"
        aria-hidden="true"
      >
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Marine Grade Plywood
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Flush Doors
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Panel Doors
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Block Boards
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Decorative Veneer
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Commercial Ply
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Laminated Boards
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Marine Grade Plywood
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Flush Doors
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Panel Doors
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Block Boards
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Decorative Veneer
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Commercial Ply
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Laminated Boards
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
