import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relationship Difficulties | Martin Alderton Counselling",
  description:
    "Therapy for relationship difficulties, recurring patterns, and understanding what you bring to your connections with others.",
};

const patterns = [
  "The same arguments keep happening in different relationships",
  "Feeling unseen, unheard, or chronically misunderstood",
  "Pulling close then pushing away — or watching others do that to you",
  "Difficulty knowing what you actually want in a relationship",
  "Fear of abandonment or rejection driving your decisions",
  "Choosing people who aren't good for you, again and again",
  "Feeling responsible for everyone else's emotional state",
];

export default function RelationshipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-[clamp(1.5rem,5vw,5rem)]">
        <div className="mx-auto max-w-[1200px]">
          <p className="label mb-4">Relationships</p>
          <h1 className="font-display text-[var(--ink)] max-w-[700px]">
            When the same difficulties keep coming back
          </h1>
        </div>
      </section>

      {/* Main */}
      <section className="pb-32 px-[clamp(1.5rem,5vw,5rem)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-5 font-body text-[var(--mid)] leading-relaxed">
              <p className="text-lg text-[var(--ink)]">
                Relationship difficulties rarely come out of nowhere. They have roots —
                in early experiences, in what we learned about closeness, about safety,
                about what we could expect from other people.
              </p>
              <p>
                When those patterns repeat — in romantic relationships, friendships,
                at work, with family — it&apos;s often the same underlying dynamic playing out
                in different contexts. The names and faces change; the feeling doesn&apos;t.
              </p>
              <p>
                Therapy can help you understand what you bring to your relationships:
                the expectations you carry without knowing it, the way you signal what you need
                (or don&apos;t), the patterns of connection and disconnection that have become familiar.
              </p>
              <p>
                The therapy relationship itself becomes part of this work. How we relate in the room
                is live information — and it&apos;s where real change tends to happen.
              </p>
            </div>

            {/* Patterns */}
            <div className="border border-[var(--rule)] p-8">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)] mb-6">
                Patterns that might feel familiar
              </h2>
              <ul className="space-y-4">
                {patterns.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="mt-2 h-1 w-5 bg-[var(--accent)] shrink-0" />
                    <span className="font-body text-sm text-[var(--mid)]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Approach */}
          <div className="mt-20 py-16 border-t border-[var(--rule)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-display text-[var(--ink)] mb-6">
                  Understanding, not just managing
                </h2>
                <div className="space-y-5 font-body text-[var(--mid)] leading-relaxed">
                  <p>
                    The aim isn&apos;t to teach you better communication techniques —
                    though practical things may shift too. It&apos;s to understand why you
                    relate the way you do, and what would have to change for something
                    genuinely different to become possible.
                  </p>
                  <p>
                    That understanding tends to come through experience, not just insight.
                    Noticing what&apos;s happening in the room between us is often
                    where the real shift takes place.
                  </p>
                </div>
              </div>

              <div className="bg-[var(--surface)] p-8 flex items-center">
                <p className="font-display text-xl italic text-[var(--ink)]/75 leading-relaxed">
                  &ldquo;How we relate in the room is live information — and it&apos;s where real change tends to happen.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-[clamp(1.5rem,5vw,5rem)] bg-[var(--bg-dark)]">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="font-display text-white mb-4">The pattern can change</h2>
          <p className="font-body text-white/50 mb-10">
            Get in touch to arrange an initial conversation — no pressure, no commitment.
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
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white/70 font-body text-[0.875rem] uppercase tracking-[0.06em] hover:border-white hover:text-white transition-all duration-200 rounded-[4px]"
            >
              Sessions &amp; fees
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
