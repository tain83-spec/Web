import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--primary)] text-[var(--primary-foreground)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl font-medium">Martin Alderton</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--primary-foreground)]/50">
              Psychotherapeutic Counselling
            </p>
            <p className="mt-4 text-sm text-[var(--primary-foreground)]/70 leading-relaxed">
              UKCP-registered counsellor offering a confidential space to make sense of what&apos;s going on beneath the surface.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--primary-foreground)]/50 mb-4">Pages</p>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/sessions", label: "Sessions & Fees" },
                { href: "/anxiety", label: "Anxiety" },
                { href: "/relationships", label: "Relationships" },
                { href: "/boundaries", label: "Boundaries" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--primary-foreground)]/70 hover:text-[var(--primary-foreground)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--primary-foreground)]/50 mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-[var(--primary-foreground)]/70">
              <li>
                <a
                  href="mailto:martin@martinalderton.co.uk"
                  className="hover:text-[var(--primary-foreground)] transition-colors"
                >
                  martin@martinalderton.co.uk
                </a>
              </li>
              <li>
                <a
                  href="tel:07799563910"
                  className="hover:text-[var(--primary-foreground)] transition-colors"
                >
                  07799 563 910
                </a>
              </li>
              <li className="pt-2 space-y-1">
                <p>Harley Street, London</p>
                <p>Norwich, Norfolk</p>
                <p>Online (UK-wide)</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--primary-foreground)]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--primary-foreground)]/40">
          <p>© {new Date().getFullYear()} Martin Alderton. All rights reserved.</p>
          <p>UKCP Registered &middot; Confidential &middot; Professional</p>
        </div>
      </div>
    </footer>
  );
}
