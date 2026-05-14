"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type CardDef = {
  src: string;
  label?: string;
  href?: string;
};

// 2 photo-only cards + 3 specialism cards
const CARDS: CardDef[] = [
  { src: "/cards/card-9.jpg" },
  { src: "/cards/card-1.jpg" },
  { src: "/cards/card-2.jpg", label: "Anxiety",       href: "/anxiety" },
  { src: "/cards/card-4.jpg", label: "Relationships", href: "/relationships" },
  { src: "/cards/card-7.jpg", label: "Boundaries",    href: "/boundaries" },
];

// Slight offsets so the pile looks like a physical card deck
const OFFSETS = [
  { x:  0, y:  0, rot:  2 },
  { x: -7, y:  5, rot: -4 },
  { x:  6, y: -4, rot:  5 },
  { x: -4, y:  9, rot: -2 },
  { x:  9, y: -3, rot:  3 },
];

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

export default function HeroCards() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const outerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const flipRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const flipped   = useRef<boolean[]>(CARDS.map(() => false));
  const rafId     = useRef<number>(0);

  useEffect(() => {
    function tick() {
      const wrapper = wrapperRef.current;
      const sticky  = stickyRef.current;
      if (!wrapper || !sticky) { rafId.current = requestAnimationFrame(tick); return; }

      const wRect    = wrapper.getBoundingClientRect();
      const scrollRange = wRect.height - window.innerHeight;
      const progress = clamp(-wRect.top / scrollRange, 0, 1);

      const W = sticky.offsetWidth;
      const H = sticky.offsetHeight;
      const cardW = Math.min(220, W * 0.18); // responsive width

      CARDS.forEach((card, i) => {
        const outer  = outerRefs.current[i];
        const flipper = flipRefs.current[i];
        if (!outer || !flipper) return;

        // Per-card stagger: card i starts moving later
        const start = i * 0.10;
        const dur   = 0.50;
        const cp    = clamp((progress - start) / dur, 0, 1);
        const eased = easeInOut(cp);

        // Left-pile → right-pile positions (in px, using percentage of container)
        const lx = W * 0.06 + OFFSETS[i].x;
        const ly = H * 0.18 + OFFSETS[i].y;
        const rx = W * 0.74 + OFFSETS[i].x;
        const ry = H * 0.18 + OFFSETS[i].y;

        const tx  = lerp(lx, rx, eased);
        const ty  = lerp(ly, ry, eased);
        const rot = OFFSETS[i].rot + eased * 360; // one full spin, ends at base

        outer.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg)`;
        outer.style.width = `${cardW}px`;

        // Flip specialism cards when they've almost arrived (cp > 0.92)
        if (card.label) {
          if (cp > 0.92 && !flipped.current[i]) {
            flipped.current[i] = true;
            flipper.style.transform  = "rotateY(180deg)";
            flipper.style.transition = `transform 0.7s cubic-bezier(0.4,0,0.2,1) ${(i - 2) * 80}ms`;
          } else if (cp < 0.85 && flipped.current[i]) {
            flipped.current[i] = false;
            flipper.style.transform  = "rotateY(0deg)";
            flipper.style.transition = "transform 0.5s ease";
          }
        }
      });

      rafId.current = requestAnimationFrame(tick);
    }

    rafId.current = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(rafId.current); };
  }, []);

  return (
    // Tall wrapper gives the scroll distance
    <div ref={wrapperRef} style={{ height: "280vh", position: "relative" }}>
      {/* Sticky viewport — the visible stage */}
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background: "#F8F5F0",
          overflow: "hidden",
        }}
      >
        {/* Large faint background text */}
        <p
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "6%",
            left: "4%",
            right: "4%",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 8vw, 9rem)",
            fontStyle: "italic",
            fontWeight: 700,
            lineHeight: 1.0,
            color: "#1A1A1A",
            opacity: 0.055,
            pointerEvents: "none",
            userSelect: "none",
            margin: 0,
          }}
        >
          therapy as an act<br />of creation
        </p>

        {/* Cards */}
        {CARDS.map((card, i) => (
          <div
            key={i}
            ref={(el) => { outerRefs.current[i] = el; }}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 5 + i,
              willChange: "transform",
            }}
          >
            {/* Perspective for 3-D flip */}
            <div style={{ perspective: "900px", width: "100%", aspectRatio: "3/4" }}>
              {/* Flipper */}
              <div
                ref={(el) => { flipRefs.current[i] = el; }}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front — photo */}
                <div
                  style={{
                    position: "absolute", inset: 0,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    borderRadius: 3,
                    overflow: "hidden",
                  }}
                >
                  <Image src={card.src} alt="" fill style={{ objectFit: "cover" }} />
                </div>

                {/* Back — specialism label */}
                {card.label && card.href && (
                  <Link
                    href={card.href}
                    style={{
                      position: "absolute", inset: 0,
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background: "#1A1A1A",
                      borderRadius: 3,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      textDecoration: "none",
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(0.9rem, 1.4vw, 1.3rem)",
                      color: "#F8F5F0",
                      fontWeight: 700,
                    }}>
                      {card.label}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.58rem",
                      color: "#F8F5F0",
                      opacity: 0.45,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                    }}>
                      Explore →
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
