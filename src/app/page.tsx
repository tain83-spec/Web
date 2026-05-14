import Link from "next/link";
import { ArrowRight, MapPin, Monitor } from "lucide-react";
import type { Metadata } from "next";
import SpecialismSection from "./SpecialismSection";
import HeroCards from "./HeroCards";

export const metadata: Metadata = {
  title: "Martin Alderton | Psychotherapeutic Counselling",
  description:
    "UKCP-registered psychotherapeutic counsellor offering individual therapy in London (Harley Street), Norwich, and online. Specialising in anxiety, relationship difficulties, and repeating patterns.",
};


const locations = [
  { icon: MapPin, name: "Harley Street", detail: "Central London, W1G" },
  { icon: MapPin, name: "Norwich", detail: "Norfolk, NR1" },
  { icon: Monitor, name: "Online", detail: "Anywhere in the UK" },
];

export default function Home() {
  return (
    <>
      {/* Hero — clean typographic, no photo */}
      <section className="relative overflow-hidden bg-[var(--bg)] min-h-[80vh] flex flex-col justify-end pb-28 px-[clamp(1.5rem,5vw,5rem)]">
        <div className="relative z-10 max-w-[750px]">
          <p className="label mb-6">UKCP Registered Psychotherapeutic Counsellor</p>
          <h1 className="font-display text-[var(--ink)] leading-[1.05] mb-7">
            A space to make sense of what&apos;s going on beneath the surface
          </h1>
          <p className="font-body text-lg text-[var(--mid)] mb-10 max-w-[52ch]">
            Individual therapy in London, Norwich, and online — for people who feel stuck,
            overwhelmed, or caught in patterns they can&apos;t seem to shift.
          </p>
          <a
            href="mailto:martin@martinalderton.co.uk"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--accent)] text-white font-body text-[0.875rem] uppercase tracking-[0.06em] hover:brightness-90 transition-all duration-200 rounded-[4px]"
          >
            Get in touch <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Scattered cards — mouse parallax + flip to reveal specialisms */}
      <HeroCards />

      {/* Stats strip */}
      <div className="border-b border-[var(--rule)] bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-[clamp(1.5rem,5vw,5rem)] py-8">
          <div className="flex flex-wrap gap-8 md:gap-0 md:divide-x md:divide-[var(--rule)]">
            {[
              { value: "20+", label: "Years experience", note: "Mental health & addiction services" },
              { value: "3", label: "Locations", note: "London, Norwich & online" },
              { value: "50 min", label: "Sessions", note: "Same time each week" },
              { value: "UKCP", label: "Registered", note: "Full professional accreditation" },
            ].map((s) => (
              <div key={s.label} className="md:px-10 first:pl-0 last:pr-0 flex-1 min-w-[140px]">
                <p className="font-display text-3xl font-bold text-[var(--ink)]">{s.value}</p>
                <p className="font-body text-[0.8rem] uppercase tracking-[0.1em] text-[var(--mid)] mt-0.5">{s.label}</p>
                <p className="font-body text-xs text-[var(--mid)]/70 mt-1">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specialisms */}
      <SpecialismSection />

      {/* Quote */}
      <section className="py-24 px-[clamp(1.5rem,5vw,5rem)] bg-[var(--bg-dark)]">
        <div className="mx-auto max-w-[800px] text-center">
          <blockquote className="font-display text-2xl md:text-[2rem] font-normal italic text-white/90 leading-[1.4]">
            &ldquo;I became a therapist because I had to. What I found in therapy changed
            everything — not just about that relationship, but about how I related to people generally.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-[var(--accent)]" />
            <span className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
              Martin Alderton
            </span>
            <div className="h-px w-8 bg-[var(--accent)]" />
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-32 px-[clamp(1.5rem,5vw,5rem)]">
        <div className="mx-auto max-w-[1200px]">
          <p className="label mb-4">Where we can meet</p>
          <h2 className="font-display text-[var(--ink)] mb-12">
            London, Norwich &amp; online
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div key={loc.name} className="p-8 border border-[var(--rule)]">
                <loc.icon size={18} className="text-[var(--accent)] mb-5" />
                <h3 className="font-display text-xl font-bold text-[var(--ink)]">{loc.name}</h3>
                <p className="font-body text-sm text-[var(--mid)] mt-1">{loc.detail}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-[var(--mid)] mt-6">
            All locations offer the same professional, confidential standard of care.
          </p>
        </div>
      </section>

      {/* About strip */}
      <section className="py-24 px-[clamp(1.5rem,5vw,5rem)] bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label mb-4">About me</p>
              <h2 className="font-display text-[var(--ink)] mb-6">
                Over 20 years working in mental health and addiction services
              </h2>
              <p className="font-body text-[var(--mid)] leading-relaxed mb-8">
                I&apos;m a UKCP-registered psychotherapeutic counsellor. My approach rests on a belief
                that a person is a social, embodied, meaning-making system — shaped by relationships,
                carried in the body, and capable of genuine change.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-body text-[0.875rem] uppercase tracking-[0.06em] text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
              >
                Read more about me <ArrowRight size={14} />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                "UKCP Registered — full professional accreditation",
                "Supervised practice maintained throughout",
                "Strict confidentiality as standard",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-2 h-1 w-5 bg-[var(--accent)] shrink-0" />
                  <p className="font-body text-[var(--mid)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-[clamp(1.5rem,5vw,5rem)]">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="font-display text-[var(--ink)] mb-6">
            Ready to take a first step?
          </h2>
          <p className="font-body text-[var(--mid)] leading-relaxed mb-10">
            If you&apos;re unsure whether counselling is right for you, or whether now is the right time,
            you&apos;re welcome to get in touch for an initial conversation. No pressure to commit.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:martin@martinalderton.co.uk"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--accent)] text-white font-body text-[0.875rem] uppercase tracking-[0.06em] hover:brightness-90 transition-all duration-200 rounded-[4px]"
            >
              Email Martin <ArrowRight size={15} />
            </a>
            <Link
              href="/sessions"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--ink)] text-[var(--ink)] font-body text-[0.875rem] uppercase tracking-[0.06em] hover:bg-[var(--ink)] hover:text-white transition-all duration-200 rounded-[4px]"
            >
              Sessions &amp; fees
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
