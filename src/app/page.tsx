import Link from "next/link";
import { ArrowRight, MapPin, Monitor, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
  {
    icon: MapPin,
    name: "Harley Street",
    detail: "Central London, W1G",
    note: "In-person sessions",
  },
  {
    icon: MapPin,
    name: "Norwich",
    detail: "Norfolk, NR1",
    note: "In-person sessions",
  },
  {
    icon: Monitor,
    name: "Online",
    detail: "Anywhere in the UK",
    note: "Video sessions",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-[var(--accent)]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
                Psychotherapeutic Counselling
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.05] tracking-tight text-[var(--foreground)] mb-8">
              A space to make sense of what&apos;s{" "}
              <em className="text-[var(--accent)]">going on beneath the surface</em>
            </h1>

            <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-2xl mb-12">
              I offer calm, confidential individual therapy in London, Norwich, and online.
              For people who feel stuck, overwhelmed, or caught in patterns they can&apos;t seem to shift.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Button asChild size="lg">
                <a href="mailto:martin@martinalderton.co.uk">
                  Email to arrange a conversation
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="group">
                <a href="tel:07799563910" className="flex items-center gap-2">
                  07799 563 910
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              <Badge variant="outline">UKCP Registered</Badge>
              <Badge variant="outline">20+ Years Experience</Badge>
              <Badge variant="outline">Individual Therapy</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* What brings people */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6">
                Many people come not knowing exactly what they need
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
                Only that something isn&apos;t working. Perhaps you&apos;re feeling overwhelmed,
                or stuck in patterns you can&apos;t seem to shift. Maybe the same difficulties
                keep returning — in relationships, at work, or in the way you feel about yourself.
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                My focus is on what actually shifts something: developing the capacity to regulate,
                recognising patterns as they happen, and gradually building a different relationship
                with yourself and others that you can <em>actually feel</em>, not just describe.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {specialisms.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group flex items-start justify-between gap-4 p-6 border border-[var(--border)] hover:border-[var(--foreground)] transition-all duration-200"
                >
                  <div>
                    <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="mt-1 shrink-0 text-[var(--muted-foreground)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-200"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-6 bg-[var(--primary)]">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="font-serif text-2xl md:text-3xl font-light italic text-[var(--primary-foreground)]/90 leading-relaxed">
            &ldquo;I became a therapist because I had to. What I found in therapy changed
            everything — not just about that relationship, but about how I related to people generally.&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[var(--accent)]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--primary-foreground)]/50">
              Martin Alderton
            </span>
            <div className="h-px w-8 bg-[var(--accent)]" />
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="font-serif text-4xl font-light mb-3">Where we can meet</h2>
            <p className="text-[var(--muted-foreground)]">
              All locations offer the same professional, confidential standard of care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="p-8 border border-[var(--border)] flex flex-col gap-4"
              >
                <loc.icon size={20} className="text-[var(--accent)]" />
                <div>
                  <h3 className="font-serif text-xl font-medium">{loc.name}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] mt-1">{loc.detail}</p>
                </div>
                <Badge variant="outline" className="w-fit">{loc.note}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="py-20 px-6 bg-[var(--muted)]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)] mb-4">About me</p>
              <h2 className="font-serif text-4xl font-light leading-tight mb-6">
                Over 20 years working in mental health and addiction services
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                I&apos;m a UKCP-registered psychotherapeutic counsellor. My approach rests on a belief
                that a person is a social, embodied, meaning-making system — shaped by relationships,
                carried in the body, and capable of genuine change.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: Shield, text: "UKCP Registered — full professional accreditation" },
                { icon: Shield, text: "Supervised practice maintained throughout" },
                { icon: Shield, text: "Strict confidentiality as standard" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4">
                  <item.icon size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                  <p className="text-sm text-[var(--muted-foreground)]">{item.text}</p>
                </div>
              ))}
              <div className="mt-4">
                <Button asChild variant="secondary">
                  <Link href="/about">Read more about me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
            Ready to take a first step?
          </h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed mb-10 max-w-xl mx-auto">
            If you&apos;re unsure whether counselling is right for you, or whether now is the right time,
            you&apos;re welcome to get in touch for an initial conversation. No pressure to commit.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <a href="mailto:martin@martinalderton.co.uk">
                Email Martin <ArrowRight size={16} />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/sessions">View sessions & fees</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
