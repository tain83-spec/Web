import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boundaries in Therapy | Martin Alderton Counselling",
  description:
    "Therapy for difficulty with boundaries — saying yes when you mean no, putting others first, and finding where you end and others begin.",
};

const signs = [
  "Saying yes when you mean no — and resenting it afterwards",
  "Feeling responsible for other people's feelings and moods",
  "Difficulty knowing what you actually want, separate from others",
  "Guilt when you prioritise yourself",
  "People-pleasing at the cost of your own needs",
  "Feeling invaded or controlled in close relationships",
  "Finding it hard to disagree or disappoint people",
];

export default function BoundariesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[var(--accent)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
              Boundaries
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light leading-tight max-w-3xl">
            Finding where you end and others begin
          </h1>
        </div>
      </section>

      {/* Main */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6 text-[var(--muted-foreground)] leading-relaxed">
              <p className="text-lg text-[var(--foreground)]">
                Difficulty with boundaries is rarely about not knowing where they should be.
                It&apos;s usually about what happens when you try to hold them — the guilt,
                the fear of what others will think, the sense that your own needs matter less.
              </p>
              <p>
                For many people, this has deep roots. Learning early that love was conditional,
                or that keeping the peace meant making yourself smaller, leaves a mark.
                It becomes automatic: put others first, manage their feelings, don&apos;t take up too much space.
              </p>
              <p>
                Therapy can help you understand where this came from, and what it would mean —
                and feel like — to do something different. Not as a technique, but as a genuine
                change in how you experience yourself in relation to others.
              </p>
              <p>
                That shift tends to happen slowly, in small moments. Noticing the guilt, but choosing
                differently. Finding that the feared catastrophe doesn&apos;t happen. Building a sense
                of self that doesn&apos;t depend on others&apos; approval.
              </p>
            </div>

            {/* Signs */}
            <div className="border border-[var(--border)] p-8">
              <h2 className="font-serif text-2xl font-medium mb-6">
                Does any of this feel familiar?
              </h2>
              <ul className="space-y-4">
                {signs.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span className="text-sm text-[var(--muted-foreground)]">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pull quote */}
          <div className="mt-20 py-16 border-t border-[var(--border)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-[var(--muted)] p-10">
                <p className="font-serif text-2xl italic text-[var(--foreground)]/80 leading-relaxed">
                  &ldquo;Boundaries aren&apos;t walls. They&apos;re the conditions under which genuine connection becomes possible.&rdquo;
                </p>
              </div>
              <div className="space-y-5 text-[var(--muted-foreground)] leading-relaxed">
                <h2 className="font-serif text-3xl font-light text-[var(--foreground)]">
                  Not about pushing people away
                </h2>
                <p>
                  There&apos;s a common fear that boundaries mean being cold, distant, or selfish.
                  In practice, people who develop clearer boundaries often find their relationships
                  improve — because they can be more genuinely present, without the resentment that
                  builds when needs go unmet.
                </p>
                <p>
                  This work is ultimately about developing a more solid sense of self —
                  knowing what you think, what you feel, what you need, and being able to
                  act from that, rather than in reaction to others.
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
            Your needs matter too
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
