"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/clients", label: "Clients" },
  { href: "/about", label: "About" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  const isActive = (path: string): boolean => {
    if (path.includes("products")) return pathname.startsWith("/products");
    return pathname === path;
  };

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className="relative px-4 py-2.5 text-sm font-medium rounded transition-colors duration-150 hover:bg-[#d4c4b0]"
    >
      {label}
      {isActive(href) && (
        <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#7ab027]" />
      )}
    </Link>
  );

  return (
    <nav
      className="sticky top-0 z-50 overflow-x-clip border-b border-[#d4c4b0] backdrop-blur-md"
      style={{ backgroundColor: "rgba(246, 241, 234, 0.92)" }}
    >
      <div className="flex items-center justify-between max-w-335 mx-auto lg:px-8 md:px-4 px-2">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 font-serif font-bold text-xl py-4.5 px-2 lg:px-8 md:px-4"
        >
          <img
            src="/logo.png"
            alt="Woodtech Ply Industries"
            style={{ height: "72px", width: "auto", display: "block" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-1 items-center">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
          <Link
            href="/contact"
            className="bg-[#2a1d14] text-[#f6f1ea] px-4.5 py-2.5 rounded text-xs tracking-wider transition-colors duration-150 hover:bg-[#8b5e3c] border-none cursor-pointer ml-1"
          >
            Request Quote →
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-40 overflow-x-clip md:hidden transition-opacity duration-300 ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          aria-hidden={!open}
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#2a1d14]/30 backdrop-blur-[1px]"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />

          <aside
            className={`absolute right-0 top-0 flex h-full w-full max-w-105 flex-col border-l border-[#d4c4b0] bg-[#f6f1ea] shadow-[0_24px_80px_rgba(42,29,20,0.22)] transition-transform duration-300 ease-out ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-[#d4c4b0] px-5 py-4">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-[#6b5847]">
                Menu
              </div>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full border border-[#d4c4b0] text-lg text-[#2a1d14] transition-colors duration-150 hover:bg-[#d4c4b0]"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-2 px-5 py-6 bg-[#d4c4b0]">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-[#2a1d14] px-5 py-3 text-xs font-medium tracking-[0.14em] text-[#f6f1ea] transition-colors duration-150 hover:bg-[#8b5e3c]"
              >
                Request Quote →
              </Link>
            </div>
          </aside>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden ml-auto rounded border border-[#d4c4b0] bg-[#f6f1ea] px-3 py-2 text-base text-[#2a1d14] transition-colors duration-150 hover:bg-[#d4c4b0]"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
