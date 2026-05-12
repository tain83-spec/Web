import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Martin Alderton | Psychotherapeutic Counsellor",
  description:
    "UKCP-registered psychotherapeutic counsellor with over 20 years working in residential mental health and addiction services.",
};

const credentials = [
  "UKCP Registered Psychotherapeutic Counsellor",
  "20+ years in residential mental health & addiction services",
  "Supervised practice throughout career",
  "Ongoing professional development",
  "Full indemnity insurance",
  "Strict confidentiality as standard",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[var(--accent)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
              About
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light leading-tight max-w-3xl">
            A therapist who understands what it means to need therapy
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6 text-[var(--muted-foreground)] leading-relaxed">
              <p className="text-lg text-[var(--foreground)]">
                I&apos;m Martin Alderton — a UKCP-registered psychotherapeutic counsellor
                with over 20 years working in residential mental health and addiction services,
                supporting people through some of the most complex and difficult experiences a person can face.
              </p>
              <p>
                I became a therapist because I had to. What I found in therapy changed everything —
                not just about a particular relationship, but about how I related to people generally.
                That experience is at the heart of how I work.
              </p>
              <p>
                My approach rests on a belief that a person is a social, embodied, meaning-making system —
                shaped by relationships, carried in the body, and capable of genuine change through relationship.
              </p>
              <p>
                I work relationally, which means the relationship between us is itself part of the therapy.
                What happens between us in the room gives us live material to work with — not just history,
                but the present moment.
              </p>
              <p>
                My focus is on what actually shifts something: developing the capacity to regulate,
                recognising patterns as they happen, and gradually building a different relationship
                with yourself and others that you can actually feel, not just describe.
              </p>
            </div>

            {/* Credentials */}
            <div>
              <div className="border border-[var(--border)] p-8">
                <h2 className="font-serif text-2xl font-medium mb-6">Credentials</h2>
                <ul className="space-y-4">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                      <span className="text-sm text-[var(--muted-foreground)]">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-8 bg-[var(--muted)]">
                <p className="font-serif text-xl italic text-[var(--foreground)]/80 leading-relaxed">
                  &ldquo;The relationship between us is itself part of the therapy.&rdquo;
                </p>
              </div>

              <div className="mt-6">
                <Image
                  src="/ukcp-psa-logos.png"
                  alt="UKCP and Professional Standards Authority accredited register logos"
                  width={320}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[var(--primary)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--primary-foreground)] mb-4">
            Ready to find out if we&apos;re a good fit?
          </h2>
          <p className="text-[var(--primary-foreground)]/70 mb-8">
            Get in touch for an initial conversation — no pressure, no commitment.
          </p>
          <Button asChild size="lg" className="bg-[var(--accent)] hover:opacity-90 border-0">
            <a href="mailto:martin@martinalderton.co.uk">
              Email Martin <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
