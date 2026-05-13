import Image from "next/image";
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
      {/* Hero — full-bleed portrait, same structure as home */}
      <section className="relative h-[100dvh] min-h-[80vh] overflow-hidden">
        <Image
          src="/martin-alderton.jpg"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
          alt="Martin Alderton, psychotherapeutic counsellor"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        <div className="absolute inset-0 flex items-end pb-24 px-[clamp(1.5rem,5vw,5rem)]">
          <div className="max-w-[700px]">
            <p className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-white/50 mb-5">
              About
            </p>
            <h1 className="font-display text-white leading-[1.05] mb-6">
              A therapist who understands what it means to need therapy
            </h1>
            <p className="font-body text-lg text-white/60 max-w-[52ch]">
              UKCP-registered &mdash; over 20 years in mental health &amp; addiction services.
            </p>
          </div>
        </div>
      </section>

      {/* Bio content */}
      <section className="py-32 px-[clamp(1.5rem,5vw,5rem)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16">

            {/* Left — bio */}
            <div className="space-y-5 font-body text-[var(--mid)] leading-relaxed">
              <p className="text-lg text-[var(--ink)]">
                I am interested in finding out who you are at the deepest levels.
                It doesn&apos;t matter where you&apos;ve been, what you&apos;ve seen, or where
                you&apos;re at right now. I want to understand, and I want to help you
                understand your self. Because the self is waiting to be witnessed
                and acknowledged.
              </p>
              <p>
                I will be looking to create with you, to find as much space for
                beauty, joy, and possibility in your life as we can build together.
              </p>
              <p>
                I became a therapist because I had to. What I found in therapy
                changed everything. Not just about a particular relationship, but
                about how I related to people generally. Things changed for me when
                I stopped adapting to fit someone else&apos;s world, and started
                identifying what was actually mine. That shift is at the heart of
                the work I offer.
              </p>
              <p>
                What drives me in the room is curiosity. I want to know what I&apos;m
                missing, but I can&apos;t see what you can&apos;t see. The question I bring
                into every session is: how are we going to make that manifest
                together? I notice beauty in the emergence of something new.
                That&apos;s what I&apos;m looking for with you.
              </p>
              <p>
                My approach rests on a belief that a person is a social, embodied,
                meaning-making system. Shaped by relationship, carried in the body,
                and capable of genuine change. The therapeutic relationship itself
                is the medium of change, not just the context for it.
              </p>
              <p>
                The capacity for self-understanding exists in everyone. What it
                needs is the right conditions: the biological safety of feeling
                genuinely held. Therapy offers that: a starting point, and a launch
                pad for finding that same feeling elsewhere in your life.
              </p>
              <p>
                I work with anxiety, relationship patterns, low self-worth, trauma,
                and the places where something keeps repeating. I&apos;m a
                UKCP-registered psychotherapeutic counsellor with over 20 years&apos;
                experience in residential mental health and addiction services, now
                in private practice at Harley Street, London; Norwich; and online.
              </p>
            </div>

            {/* Right — credentials + quote */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="label mb-5">Credentials</p>
                <ul className="space-y-3">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <div className="mt-2 h-1 w-4 bg-[var(--accent)] shrink-0" />
                      <span className="font-body text-sm text-[var(--mid)]">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-[var(--surface)]">
                <p className="font-display text-lg italic text-[var(--ink)]/75 leading-relaxed">
                  &ldquo;The relationship between us is itself part of the therapy.&rdquo;
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-[clamp(1.5rem,5vw,5rem)] bg-[var(--bg-dark)]">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="font-display text-white mb-4">
            Ready to find out if we&apos;re a good fit?
          </h2>
          <p className="font-body text-white/50 mb-10">
            Get in touch for an initial conversation — no pressure, no commitment.
          </p>
          <a
            href="mailto:martin@martinalderton.co.uk"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--accent)] text-white font-body text-[0.875rem] uppercase tracking-[0.06em] hover:brightness-90 transition-all duration-200 rounded-[4px]"
          >
            Email Martin <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </>
  );
}
