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
      {/* Main section */}
      <section style={{ padding: "8rem 0" }}>
        {/* Full-width container for heading */}
        <div className="container mx-auto px-[clamp(1.5rem,5vw,5rem)] max-w-[1200px]">
          <p className="label mb-4">About</p>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight mb-16 max-w-[900px] text-[var(--ink)]">
            A therapist who understands what it means to need therapy
          </h1>
        </div>

        {/* Two-column split — no container wrapper, photo goes edge to edge on right */}
        <div className="flex flex-col lg:flex-row">

          {/* Left column — 55% */}
          <div className="w-full lg:w-[55%] px-[clamp(1.5rem,5vw,5rem)] lg:pl-[clamp(1.5rem,5vw,5rem)] lg:pr-16 pb-16 flex flex-col">
            <div className="space-y-5 font-body text-[var(--mid)] leading-relaxed">
              <p className="text-lg text-[var(--ink)]">
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

            {/* Credentials — small-caps list, no box */}
            <div className="mt-auto pt-12 border-t border-[var(--rule)]">
              <ul className="space-y-2">
                {credentials.map((c) => (
                  <li
                    key={c}
                    className="font-body text-[0.7rem] uppercase tracking-[0.12em] text-[var(--mid)]/70"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column — 45%, full height, no padding */}
          <div className="w-full lg:w-[45%] relative min-h-[600px] lg:min-h-0">
            <Image
              src="/martin-alderton.jpg"
              fill
              style={{ objectFit: "cover", objectPosition: "50% 15%" }}
              alt="Martin Alderton, psychotherapist"
              priority
            />
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
