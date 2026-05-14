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
      <section className="pt-40 pb-20 px-[clamp(1.5rem,5vw,5rem)]">
        <div className="mx-auto max-w-[1200px]">
          <p className="label mb-4">Boundaries</p>
          <h1 className="font-display text-[var(--ink)] max-w-[700px]">
            Finding where you end and others begin
          </h1>
        </div>
      </section>

      {/* Main */}
      <section className="pb-32 px-[clamp(1.5rem,5vw,5rem)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-5 font-body text-[var(--mid)] leading-relaxed">
              <p className="text-lg text-[var(--ink)]">
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
            <div className="border border-[var(--rule)] p-8">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)] mb-6">
                Does any of this feel familiar?
              </h2>
              <ul className="space-y-4">
                {signs.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <div className="mt-2 h-1 w-5 bg-[var(--accent)] shrink-0" />
                    <span className="font-body text-sm text-[var(--mid)]">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pull quote + approach */}
          <div className="mt-20 py-16 border-t border-[var(--rule)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-[var(--surface)] p-10">
                <p className="font-display text-2xl italic text-[var(--ink)]/75 leading-relaxed">
                  &ldquo;Boundaries aren&apos;t walls. They&apos;re the conditions under which genuine connection becomes possible.&rdquo;
                </p>
              </div>
              <div className="space-y-5 font-body text-[var(--mid)] leading-relaxed">
                <h2 className="font-display text-[var(--ink)]">
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
      <section className="py-24 px-[clamp(1.5rem,5vw,5rem)] bg-[var(--bg-dark)]">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="font-display text-white mb-4">Your needs matter too</h2>
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
