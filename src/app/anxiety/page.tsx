import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anxiety Counselling | Martin Alderton",
  description:
    "Therapy for anxiety, overwhelm, panic, and worry. Understanding what sits beneath the anxiety and finding a way through.",
};

const signs = [
  "Constant worry that&apos;s hard to switch off",
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
      <section className="pt-36 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[var(--accent)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
              Anxiety
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light leading-tight max-w-3xl">
            When worry becomes something you can&apos;t switch off
          </h1>
        </div>
      </section>

      {/* Main */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6 text-[var(--muted-foreground)] leading-relaxed">
              <p className="text-lg text-[var(--foreground)]">
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
            <div className="border border-[var(--border)] p-8">
              <h2 className="font-serif text-2xl font-medium mb-6">
                You might recognise some of these
              </h2>
              <ul className="space-y-4">
                {signs.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span
                      className="text-sm text-[var(--muted-foreground)]"
                      dangerouslySetInnerHTML={{ __html: sign }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Approach section */}
          <div className="mt-20 py-16 border-t border-[var(--border)]">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl font-light mb-6">How I work with anxiety</h2>
              <div className="space-y-5 text-[var(--muted-foreground)] leading-relaxed">
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
      <section className="py-20 px-6 bg-[var(--primary)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--primary-foreground)] mb-4">
            You don&apos;t have to stay in this state
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
