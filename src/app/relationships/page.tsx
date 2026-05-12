import { Button } from "@/components/ui/button";
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
      <section className="pt-36 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[var(--accent)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
              Relationships
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light leading-tight max-w-3xl">
            When the same difficulties keep coming back
          </h1>
        </div>
      </section>

      {/* Main */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6 text-[var(--muted-foreground)] leading-relaxed">
              <p className="text-lg text-[var(--foreground)]">
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
            <div className="border border-[var(--border)] p-8">
              <h2 className="font-serif text-2xl font-medium mb-6">
                Patterns that might feel familiar
              </h2>
              <ul className="space-y-4">
                {patterns.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span className="text-sm text-[var(--muted-foreground)]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Approach */}
          <div className="mt-20 py-16 border-t border-[var(--border)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-serif text-3xl font-light mb-6">
                  Understanding, not just managing
                </h2>
                <div className="space-y-5 text-[var(--muted-foreground)] leading-relaxed">
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

              <div className="bg-[var(--muted)] p-8">
                <p className="font-serif text-xl italic text-[var(--foreground)]/80 leading-relaxed">
                  &ldquo;How we relate in the room is live information — and it&apos;s where real change tends to happen.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[var(--primary)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--primary-foreground)] mb-4">
            The pattern can change
          </h2>
          <p className="text-[var(--primary-foreground)]/70 mb-8">
            Get in touch to arrange an initial conversation — no pressure, no commitment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-[var(--accent)] hover:opacity-90 border-0">
              <a href="mailto:martin@martinalderton.co.uk">
                Email Martin <ArrowRight size={16} />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="border-[var(--primary-foreground)]/30 text-[var(--primary-foreground)] hover:bg-[var(--primary-foreground)]/10 hover:text-[var(--primary-foreground)]">
              <Link href="/sessions">View sessions & fees</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
