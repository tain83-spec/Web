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
      <section style={{ padding: "0" }}>
        <div style={{ display: "flex", alignItems: "stretch", minHeight: "85vh" }}>

          {/* LEFT COLUMN — 55%, handles all its own padding */}
          <div style={{
            width: "55%",
            padding: "clamp(5rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)",
            display: "flex",
            flexDirection: "column",
          }}>
            <p className="label" style={{ marginBottom: "1rem" }}>About</p>
            <h2
              className="font-display font-bold leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1.05,
                color: "var(--ink)",
                marginBottom: "3rem",
              }}
            >
              A therapist who understands what it means to need therapy
            </h2>

            <div
              className="font-body"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                color: "var(--mid)",
                lineHeight: 1.75,
              }}
            >
              <p style={{ fontSize: "1.0625rem", color: "var(--ink)" }}>
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

            {/* Credentials — small-caps list at bottom */}
            <div style={{ marginTop: "auto", paddingTop: "3rem", borderTop: "1px solid var(--rule)" }}>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {credentials.map((c) => (
                  <li
                    key={c}
                    className="font-body"
                    style={{
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--mid)",
                      opacity: 0.7,
                    }}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN — 45%, zero padding, bleeds to viewport edge */}
          <div style={{
            width: "45%",
            position: "relative",
            flexShrink: 0,
          }}>
            <Image
              src="/martin-alderton.jpg"
              fill
              style={{ objectFit: "cover", objectPosition: "50% 20%" }}
              alt="Martin Alderton"
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
