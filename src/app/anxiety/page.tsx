import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anxiety Counselling | Martin Alderton",
  description:
    "Therapy for anxiety, overwhelm, panic, and worry. Understanding what sits beneath the anxiety and finding a way through.",
};

const signs = [
  "Constant worry that's hard to switch off",
  "Feeling overwhelmed by things that used to feel manageable",
  "Panic attacks or physical symptoms of anxiety",
  "Avoiding situations because of what might happen",
  "Hypervigilance — always waiting for something to go wrong",
  "Difficulty sleeping or concentrating",
  "Feeling disconnected from yourself or the world around you",
];

export default function AnxietyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-[clamp(1.5rem,5vw,5rem)]">
        <div className="mx-auto max-w-[1200px]">
          <p className="label mb-4">Anxiety</p>
          <h1 className="font-display text-[var(--ink)] max-w-[700px]">
            When worry becomes something you can&apos;t switch off
          </h1>
        </div>
      </section>

      {/* Main */}
      <section className="pb-32 px-[clamp(1.5rem,5vw,5rem)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-5 font-body text-[var(--mid)] leading-relaxed">
              <p className="text-lg text-[var(--ink)]">
                Anxiety isn&apos;t just feeling nervous. At its worst, it can be exhausting —
                a constant background hum of dread, a body that won&apos;t settle,
                a mind that keeps returning to what might go wrong.
              </p>
              <p>
                Most anxiety has a logic to it, even when it doesn&apos;t feel that way.
                It&apos;s often the nervous system&apos;s best attempt to keep us safe —
                learned in earlier experiences and now misfiring in the present.
              </p>
              <p>
                In therapy, we work to understand what&apos;s actually happening: what triggers the anxiety,
                what it&apos;s protecting against, and what would need to be different for it to settle.
                This isn&apos;t about eliminating anxiety entirely — some of it is appropriate —
                but about developing a different relationship with it.
              </p>
              <p>
                That means building the capacity to regulate: to notice the anxiety, to stay with it
                without being overwhelmed, and gradually to respond rather than react.
              </p>
            </div>

            {/* Signs */}
            <div className="border border-[var(--rule)] p-8">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)] mb-6">
                You might recognise some of these
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

          {/* Approach section */}
          <div className="mt-20 py-16 border-t border-[var(--rule)]">
            <div className="max-w-[600px]">
              <h2 className="font-display text-[var(--ink)] mb-6">How I work with anxiety</h2>
              <div className="space-y-5 font-body text-[var(--mid)] leading-relaxed">
                <p>
                  I work relationally and somatically. That means paying attention not just to
                  the thoughts that drive anxiety, but to the body — where the anxiety lives,
                  how it moves, what it&apos;s asking for.
                </p>
                <p>
                  Over time, therapy can help you develop the capacity to be with difficult
                  states rather than avoiding them. That&apos;s usually where the shift happens —
                  not in understanding anxiety better intellectually, but in experiencing
                  that you can survive it.
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
            You don&apos;t have to stay in this state
          </h2>
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
