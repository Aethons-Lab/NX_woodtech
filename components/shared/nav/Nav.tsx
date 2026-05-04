"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav(): React.JSX.Element {
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
      className="sticky top-0 z-50 border-b border-[#d4c4b0] backdrop-blur-[12px]"
      style={{ backgroundColor: "rgba(246, 241, 234, 0.92)" }}
    >
      <div className="flex items-center justify-between max-w-[1340px] mx-auto lg:px-8 md:px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 font-serif font-bold text-xl py-[18px] px-8 md:px-4"
        >
          <img
            src="/logo.png"
            alt="Woodtech Ply Industries"
            style={{ height: "72px", width: "auto", display: "block" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-1 items-center">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/products" label="Products" />
          <NavLink href="/contact" label="Contact" />
          <Link
            href="/contact"
            className="bg-[#2a1d14] text-[#f6f1ea] px-4.5 py-2.5 rounded text-xs tracking-wider transition-colors duration-150 hover:bg-[#8b5e3c] border-none cursor-pointer ml-1"
          >
            Request Quote →
          </Link>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#f6f1ea] flex flex-col py-4 px-4 border-b border-[#d4c4b0] gap-1">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavLink href="/products" label="Products" />
            <NavLink href="/contact" label="Contact" />
            <Link
              href="/contact"
              className="bg-[#2a1d14] text-[#f6f1ea] px-4 py-2.5 rounded text-xs tracking-wider transition-colors duration-150 hover:bg-[#8b5e3c] border-none cursor-pointer"
            >
              Request Quote →
            </Link>
          </div>
        )}

        {/* Mobile Toggle */}
        <button
          className="md:hidden bg-none border border-[#d4c4b0] rounded px-2.5 py-2 cursor-pointer text-base mr-4"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
