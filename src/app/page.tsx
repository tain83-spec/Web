import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Monitor } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Martin Alderton | Psychotherapeutic Counselling",
  description:
    "UKCP-registered psychotherapeutic counsellor offering individual therapy in London (Harley Street), Norwich, and online. Specialising in anxiety, relationship difficulties, and repeating patterns.",
};

const scatteredCards = [
  { src: "/cards/card-1.jpg", left: "5%",  top: "8%",  rot: -6, dur: "8s",    delay: "0s"   },
  { src: "/cards/card-2.jpg", left: "22%", top: "35%", rot:  4, dur: "10s",   delay: "-3s"  },
  { src: "/cards/card-3.jpg", left: "42%", top: "5%",  rot: -3, dur: "9s",    delay: "-5s"  },
  { src: "/cards/card-4.jpg", left: "58%", top: "22%", rot:  7, dur: "11s",   delay: "-2s"  },
  { src: "/cards/card-6.jpg", left: "73%", top: "40%", rot: -5, dur: "8.5s",  delay: "-7s"  },
  { src: "/cards/card-7.jpg", left: "15%", top: "52%", rot:  3, dur: "12s",   delay: "-4s"  },
  { src: "/cards/card-8.jpg", left: "50%", top: "52%", rot: -7, dur: "9.5s",  delay: "-1s"  },
  { src: "/cards/card-9.jpg", left: "83%", top: "8%",  rot:  2, dur: "10.5s", delay: "-6s"  },
];

const specialisms = [
  {
    href: "/anxiety",
    title: "Anxiety",
    desc: "Overwhelm, worry, panic. Learning to regulate and find solid ground again.",
  },
  {
    href: "/relationships",
    title: "Relationships",
    desc: "Patterns that keep repeating. Understanding what you bring — and why.",
  },
  {
    href: "/boundaries",
    title: "Boundaries",
    desc: "Saying yes when you mean no. Finding where you end and others begin.",
  },
];

const locations = [
  { icon: MapPin, name: "Harley Street", detail: "Central London, W1G" },
  { icon: MapPin, name: "Norwich", detail: "Norfolk, NR1" },
  { icon: Monitor, name: "Online", detail: "Anywhere in the UK" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[80vh] overflow-hidden">
        <Image
          src="/norwich-practice.jpg"
          alt="Therapy practice room"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
        <div className="absolute inset-0 z-[3] flex items-end pb-24 px-[clamp(1.5rem,5vw,5rem)]">
          <div className="max-w-[750px]">
            <h1 className="font-display text-white leading-[1.05] mb-6">
              A space to make sense of what&apos;s going on beneath the surface
            </h1>
            <p className="font-body text-lg text-white/60 mb-10 max-w-[52ch]">
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
        </div>
      </section>

      {/* Scattered cards — ning-h.com style */}
      <section
        className="relative overflow-hidden"
        style={{ height: "85vh", background: "#F8F5F0" }}
        aria-hidden="true"
      >
        {/* Typographic anchor */}
        <p
          style={{
            position: "absolute",
            bottom: "12%",
            left: "6%",
            right: "6%",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 8vw, 8rem)",
            fontStyle: "italic",
            fontWeight: 700,
            lineHeight: 1.05,
            color: "#1A1A1A",
            opacity: 0.07,
            margin: 0,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          therapy as an act of creation
        </p>

        {/* Scattered cards */}
        {scatteredCards.map((card, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: card.left,
              top: card.top,
              zIndex: 5 + i,
              animationName: "cardFloat",
              animationDuration: card.dur,
              animationDelay: card.delay,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDirection: "alternate",
            }}
          >
            <div
              style={{
                transform: `rotate(${card.rot}deg)`,
                position: "relative",
                width: 260,
                aspectRatio: "3/4",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Image src={card.src} alt="" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        ))}
      </section>

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
      <section className="py-32 px-[clamp(1.5rem,5vw,5rem)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="label mb-4">What brings people</p>
              <h2 className="font-display text-[var(--ink)] mb-6">
                Many people come not knowing exactly what they need
              </h2>
              <p className="font-body text-[var(--mid)] leading-relaxed mb-4">
                Only that something isn&apos;t working. Perhaps you&apos;re feeling overwhelmed,
                or stuck in patterns you can&apos;t seem to shift. Maybe the same difficulties
                keep returning — in relationships, at work, or in the way you feel about yourself.
              </p>
              <p className="font-body text-[var(--mid)] leading-relaxed">
                My focus is on what actually shifts something: developing the capacity to regulate,
                recognising patterns as they happen, and gradually building a different relationship
                with yourself and others that you can <em>actually feel</em>, not just describe.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {specialisms.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group flex items-start justify-between gap-4 p-7 border border-[var(--rule)] hover:border-[var(--ink)] transition-colors duration-200"
                >
                  <div>
                    <h3 className="font-display text-xl font-bold text-[var(--ink)] mb-1.5 group-hover:text-[var(--accent)] transition-colors">
                      {s.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--mid)] leading-relaxed">{s.desc}</p>
                  </div>
                  <ArrowRight
                    size={17}
                    className="mt-1 shrink-0 text-[var(--mid)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-200"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

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
