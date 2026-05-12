"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="flex flex-col leading-tight group">
          <span className="font-serif text-xl font-medium tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
            Martin Alderton
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
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
                  "text-sm transition-colors duration-200",
                  pathname === link.href
                    ? "text-[var(--foreground)] font-medium"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
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
          className="hidden md:inline-flex items-center gap-2 rounded-none border border-[var(--primary)] px-5 py-2 text-sm font-medium text-[var(--primary)] transition-all duration-200 hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]"
        >
          Get in touch
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[var(--foreground)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-sm py-1",
                pathname === link.href
                  ? "text-[var(--foreground)] font-medium"
                  : "text-[var(--muted-foreground)]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:martin@martinalderton.co.uk"
            className="mt-2 inline-flex items-center justify-center border border-[var(--primary)] px-5 py-2.5 text-sm font-medium text-[var(--primary)]"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
