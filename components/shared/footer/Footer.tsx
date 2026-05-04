import Link from "next/link";
import { links } from "../links";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-[#2a1d14] text-[#f6f1ea] pt-20 pb-8 max-[480px]:pt-12 max-[480px]:pb-6">
      <div className="mx-auto max-w-335 px-8 max-[880px]:px-5 max-[480px]:px-4">
        <div className="mb-14 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] max-[880px]:grid-cols-2 max-[880px]:gap-8 max-[480px]:grid-cols-1 max-[480px]:gap-6">
          <div className="max-w-[320px]">
            <div className="flex items-center text-[#f6f1ea]">
              <img
                src="/logo.png"
                alt="Woodtech Ply Industries"
                className="block h-12 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="mt-4.5 text-sm leading-[1.6] text-[rgba(246,241,234,0.65)]">
              Engineered plywood and solid wooden doors, crafted in Bangladesh
              since 2003. Quality you can press your hand against.
            </p>
          </div>

          <div>
            <h4 className="mb-4.5 font-mono text-[11px] font-medium uppercase tracking-wider text-[rgba(246,241,234,0.5)]">
              Explore
            </h4>
            <div className="flex flex-col gap-2.5">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[rgba(246,241,234,0.85)] transition-colors duration-150 hover:text-[#7ab027]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4.5 font-mono text-[11px] font-medium uppercase tracking-wider text-[rgba(246,241,234,0.5)]">
              Products
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/#products"
                className="text-sm text-[rgba(246,241,234,0.85)] transition-colors duration-150 hover:text-[#7ab027]"
              >
                Plywood
              </Link>
              <Link
                href="/#products"
                className="text-sm text-[rgba(246,241,234,0.85)] transition-colors duration-150 hover:text-[#7ab027]"
              >
                Flush Doors
              </Link>
              <Link
                href="/#products"
                className="text-sm text-[rgba(246,241,234,0.85)] transition-colors duration-150 hover:text-[#7ab027]"
              >
                Panel Doors
              </Link>
              <Link
                href="/#products"
                className="text-sm text-[rgba(246,241,234,0.85)] transition-colors duration-150 hover:text-[#7ab027]"
              >
                Block Boards
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4.5 font-mono text-[11px] font-medium uppercase tracking-wider text-[rgba(246,241,234,0.5)]">
              Contact
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                className="text-sm text-[rgba(246,241,234,0.85)] transition-colors duration-150 hover:text-[#7ab027]"
                href="tel:02477721103"
              >
                02477721103
              </a>
              <a
                className="text-sm text-[rgba(246,241,234,0.85)] transition-colors duration-150 hover:text-[#7ab027]"
                href="mailto:info@woodtechipl.com"
              >
                info@woodtechipl.com
              </a>
              <a
                className="text-sm text-[rgba(246,241,234,0.85)] transition-colors duration-150 hover:text-[#7ab027]"
                href="https://woodtechipl.com"
              >
                woodtechipl.com
              </a>
              <span className="text-sm text-[rgba(246,241,234,0.65)]">
                Dhaka / Khulna / Bagerhat
              </span>
            </div>

            <div className="mt-4.5 flex gap-2.5">
              <a
                href="https://www.facebook.com/share/1BvpTJzk96/?mibextid=wwXIfr"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded border border-[rgba(246,241,234,0.15)] text-sm text-[rgba(246,241,234,0.7)] transition-all duration-150 hover:border-[#7ab027] hover:bg-[#7ab027] hover:text-[#2a1d14]"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/woodtechipl?igsh=MXcxeDU5bWczZ3pydA=="
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded border border-[rgba(246,241,234,0.15)] text-sm text-[rgba(246,241,234,0.7)] transition-all duration-150 hover:border-[#7ab027] hover:bg-[#7ab027] hover:text-[#2a1d14]"
              >
                ◉
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded border border-[rgba(246,241,234,0.15)] text-sm text-[rgba(246,241,234,0.7)] transition-all duration-150 hover:border-[#7ab027] hover:bg-[#7ab027] hover:text-[#2a1d14]"
              >
                in
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[rgba(246,241,234,0.1)] pt-6 text-center font-mono text-xs tracking-wider text-[rgba(246,241,234,0.5)] max-[880px]:flex-col max-[880px]:gap-4">
          <div>© 2026 Woodtech Industries (Pvt.) Ltd. All rights reserved.</div>
          <div>Dhaka / Khulna / Bagerhat / Bangladesh</div>
        </div>
      </div>
    </footer>
  );
}
