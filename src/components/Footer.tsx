import Link from "next/link";

const pages = [
  { href: "/about", label: "About" },
  { href: "/sessions", label: "Sessions & Fees" },
  { href: "/anxiety", label: "Anxiety" },
  { href: "/relationships", label: "Relationships" },
  { href: "/boundaries", label: "Boundaries" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-white">
      <div className="mx-auto max-w-[1200px] px-[clamp(1.5rem,5vw,5rem)] py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-bold tracking-tight">Martin Alderton</p>
            <p className="mt-1 font-body text-[0.65rem] uppercase tracking-[0.15em] text-white/40">
              Psychotherapeutic Counselling
            </p>
            <p className="mt-5 font-body text-sm text-white/50 leading-relaxed max-w-[30ch]">
              UKCP-registered counsellor offering a confidential space to make sense of what&apos;s
              going on beneath the surface.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-body text-[0.65rem] uppercase tracking-[0.15em] text-white/40 mb-5">Pages</p>
            <ul className="space-y-3">
              {pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-[0.65rem] uppercase tracking-[0.15em] text-white/40 mb-5">Contact</p>
            <ul className="space-y-3 font-body text-sm text-white/50">
              <li>
                <a
                  href="mailto:martin@martinalderton.co.uk"
                  className="hover:text-white transition-colors"
                >
                  martin@martinalderton.co.uk
                </a>
              </li>
              <li>
                <a href="tel:07799563910" className="hover:text-white transition-colors">
                  07799 563 910
                </a>
              </li>
              <li className="pt-2 space-y-1 text-white/35">
                <p>Harley Street, London</p>
                <p>Norwich, Norfolk</p>
                <p>Online (UK-wide)</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/25">
            &copy; {new Date().getFullYear()} Martin Alderton. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/25">
            UKCP Registered &middot; Confidential &middot; Professional
          </p>
        </div>
      </div>
    </footer>
  );
}
