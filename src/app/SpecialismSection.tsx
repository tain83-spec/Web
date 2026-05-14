"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const specialisms = [
  {
    href: "/anxiety",
    title: "Anxiety",
    desc: "Overwhelm, worry, panic. Learning to regulate and find solid ground again.",
  },
  {
    href: "/relationships",
    title: "Relationships",
    desc: "Patterns that keep repeating. Understanding what you bring — and why.",
  },
  {
    href: "/boundaries",
    title: "Boundaries",
    desc: "Saying yes when you mean no. Finding where you end and others begin.",
  },
];

export default function SpecialismSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll("[data-slide]");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 px-[clamp(1.5rem,5vw,5rem)]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label mb-4">What brings people</p>
            <h2 className="font-display text-[var(--ink)] mb-6">
              Many people come not knowing exactly what they need
            </h2>
            <p className="font-body text-[var(--mid)] leading-relaxed mb-4">
              Only that something isn&apos;t working. Perhaps you&apos;re feeling overwhelmed,
              or stuck in patterns you can&apos;t seem to shift. Maybe the same difficulties
              keep returning — in relationships, at work, or in the way you feel about yourself.
            </p>
            <p className="font-body text-[var(--mid)] leading-relaxed">
              My focus is on what actually shifts something: developing the capacity to regulate,
              recognising patterns as they happen, and gradually building a different relationship
              with yourself and others that you can <em>actually feel</em>, not just describe.
            </p>
          </div>

          <div ref={cardsRef} className="flex flex-col gap-3">
            {specialisms.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                data-slide={i % 2 === 0 ? "right" : "left"}
                style={{ "--slide-delay": `${i * 130}ms` } as React.CSSProperties}
                className="group flex items-start justify-between gap-4 p-7 border border-[var(--rule)] hover:border-[var(--ink)] transition-colors duration-200"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-[var(--ink)] mb-1.5 group-hover:text-[var(--accent)] transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--mid)] leading-relaxed">{s.desc}</p>
                </div>
                <ArrowRight
                  size={17}
                  className="mt-1 shrink-0 text-[var(--mid)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-200"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
