"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "About" },
  { href: "/sessions", label: "Sessions" },
  { href: "/anxiety", label: "Anxiety" },
  { href: "/relationships", label: "Relationships" },
  { href: "/boundaries", label: "Boundaries" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled || open;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        solid
          ? "bg-[var(--bg)] border-b border-[var(--rule)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-[clamp(1.5rem,5vw,5rem)] py-5">
        {/* Brand */}
        <Link href="/" className="flex flex-col leading-tight">
          <span
            className={cn(
              "font-display text-2xl font-bold tracking-tight transition-colors",
              solid ? "text-[var(--ink)]" : "text-white"
            )}
          >
            Martin Alderton
          </span>
          <span
            className={cn(
              "text-[0.65rem] uppercase tracking-[0.15em] transition-colors",
              solid ? "text-[var(--mid)]" : "text-white/60"
            )}
          >
            Psychotherapeutic Counselling
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "font-body text-[0.875rem] uppercase tracking-[0.08em] transition-colors duration-200",
                  pathname === link.href
                    ? solid ? "text-[var(--ink)]" : "text-white"
                    : solid ? "text-[var(--mid)] hover:text-[var(--ink)]" : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:martin@martinalderton.co.uk"
          className="hidden md:inline-flex items-center px-5 py-2 text-[0.875rem] font-medium text-white bg-[var(--accent)] hover:brightness-90 transition-all duration-200 rounded-[4px]"
        >
          Get in touch
        </a>

        {/* Mobile hamburger */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            solid ? "text-[var(--ink)]" : "text-white"
          )}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--bg)] border-t border-[var(--rule)] px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "font-body text-sm uppercase tracking-[0.08em]",
                pathname === link.href ? "text-[var(--ink)]" : "text-[var(--mid)]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:martin@martinalderton.co.uk"
            className="mt-2 inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[var(--accent)] rounded-[4px]"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
