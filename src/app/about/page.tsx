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
      <section className="pt-40 pb-20 px-[clamp(1.5rem,5vw,5rem)]">
        <div className="mx-auto max-w-[1200px]">
          <p className="label mb-4">About</p>
          <h1 className="font-display text-[var(--ink)] max-w-[700px]">
            A therapist who understands what it means to need therapy
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-32 px-[clamp(1.5rem,5vw,5rem)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6 font-body text-[var(--mid)] leading-relaxed">
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

            {/* Credentials */}
            <div>
              <div className="border border-[var(--rule)] p-8">
                <h2 className="font-display text-2xl font-bold text-[var(--ink)] mb-6">Credentials</h2>
                <ul className="space-y-4">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <div className="mt-2 h-1 w-5 bg-[var(--accent)] shrink-0" />
                      <span className="font-body text-sm text-[var(--mid)]">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-8 bg-[var(--surface)]">
                <p className="font-display text-xl italic text-[var(--ink)]/75 leading-relaxed">
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
