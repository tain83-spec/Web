"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

type Card = {
  src: string;
  left: string;
  top: string;
  rot: number;
  dur: string;
  delay: string;
  depth: number;
  flip?: { label: string; href: string };
};

const cards: Card[] = [
  { src: "/cards/card-1.jpg", left: "5%",  top: "8%",  rot: -6, dur: "8s",    delay: "0s",   depth: 0.012 },
  { src: "/cards/card-2.jpg", left: "22%", top: "35%", rot:  4, dur: "10s",   delay: "-3s",  depth: 0.025, flip: { label: "Anxiety",       href: "/anxiety" } },
  { src: "/cards/card-3.jpg", left: "42%", top: "5%",  rot: -3, dur: "9s",    delay: "-5s",  depth: 0.018 },
  { src: "/cards/card-4.jpg", left: "58%", top: "22%", rot:  7, dur: "11s",   delay: "-2s",  depth: 0.030, flip: { label: "Relationships", href: "/relationships" } },
  { src: "/cards/card-6.jpg", left: "73%", top: "40%", rot: -5, dur: "8.5s",  delay: "-7s",  depth: 0.022, flip: { label: "Boundaries",    href: "/boundaries" } },
  { src: "/cards/card-7.jpg", left: "15%", top: "52%", rot:  3, dur: "12s",   delay: "-4s",  depth: 0.015 },
  { src: "/cards/card-8.jpg", left: "50%", top: "52%", rot: -7, dur: "9.5s",  delay: "-1s",  depth: 0.028 },
  { src: "/cards/card-9.jpg", left: "83%", top: "8%",  rot:  2, dur: "10.5s", delay: "-6s",  depth: 0.010 },
];

export default function HeroCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [flipped, setFlipped] = useState(false);

  // Mouse parallax — direct DOM manipulation so we don't re-render on every move
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const dx = mx * cards[i].depth;
      const dy = my * cards[i].depth;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    cardRefs.current.forEach((el) => {
      if (!el) return;
      el.style.transform = "translate(0px, 0px)";
    });
  }, []);

  // Flip the specialism cards when this section scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFlipped(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: "85vh", background: "#F8F5F0" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Typographic anchor */}
      <p
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "12%",
          left: "6%",
          right: "6%",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3.5rem, 8vw, 8rem)",
          fontStyle: "italic",
          fontWeight: 700,
          lineHeight: 1.05,
          color: "#1A1A1A",
          opacity: 0.07,
          margin: 0,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        therapy as an act of creation
      </p>

      {cards.map((card, i) => {
        const isFlipped = flipped && !!card.flip;

        return (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            style={{
              position: "absolute",
              left: card.left,
              top: card.top,
              zIndex: 5 + i,
              // transition applied via CSS class; transform set directly in mouse handler
              transition: "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {/* Vertical float animation wrapper */}
            <div
              style={{
                animationName: "cardFloat",
                animationDuration: card.dur,
                animationDelay: card.delay,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDirection: "alternate",
              }}
            >
              {/* Static card rotation */}
              <div
                style={{
                  transform: `rotate(${card.rot}deg)`,
                  width: 260,
                  aspectRatio: "3/4",
                }}
              >
                {/* Perspective context for 3D flip */}
                <div style={{ width: "100%", height: "100%", perspective: "800px" }}>
                  {/* 3D flipper */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      transformStyle: "preserve-3d",
                      transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
                      transition: isFlipped
                        ? `transform 0.75s cubic-bezier(0.4, 0, 0.2, 1) ${i * 100}ms`
                        : "none",
                    }}
                  >
                    {/* Front face — photo */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        borderRadius: 2,
                        overflow: "hidden",
                      }}
                    >
                      <Image src={card.src} alt="" fill style={{ objectFit: "cover" }} />
                    </div>

                    {/* Back face — specialism label (only on flip cards) */}
                    {card.flip && (
                      <a
                        href={card.flip.href}
                        style={{
                          position: "absolute",
                          inset: 0,
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                          background: "#1A1A1A",
                          borderRadius: 2,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 10,
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(1rem, 1.5vw, 1.4rem)",
                            color: "#F8F5F0",
                            fontWeight: 700,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {card.flip.label}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.6rem",
                            color: "#F8F5F0",
                            opacity: 0.45,
                            textTransform: "uppercase",
                            letterSpacing: "0.14em",
                          }}
                        >
                          Explore →
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
