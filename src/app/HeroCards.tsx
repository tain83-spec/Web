"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type CardDef = {
  src: string;
  stat?: { value: string; label: string; note: string };
  specialism?: { label: string; href: string };
};

// 4 stat cards, then 3 specialism cards
const CARDS: CardDef[] = [
  { src: "/cards/card-9.jpg", stat: { value: "UKCP",   label: "Registered",  note: "Psychotherapeutic Counsellor" } },
  { src: "/cards/card-1.jpg", stat: { value: "20+",    label: "Years",        note: "Mental health & addiction" } },
  { src: "/cards/card-3.jpg", stat: { value: "3",      label: "Locations",    note: "London · Norwich · Online" } },
  { src: "/cards/card-8.jpg", stat: { value: "50 min", label: "Sessions",     note: "Same time each week" } },
  { src: "/cards/card-2.jpg", specialism: { label: "Anxiety",       href: "/anxiety" } },
  { src: "/cards/card-4.jpg", specialism: { label: "Relationships", href: "/relationships" } },
  { src: "/cards/card-7.jpg", specialism: { label: "Boundaries",    href: "/boundaries" } },
];

// Hard left / hard right zigzag — full screen width
const FINAL = [
  { x: 0.62, y: 0.00, rot: -5 },  // far right
  { x: 0.02, y: 0.14, rot:  8 },  // far left
  { x: 0.60, y: 0.28, rot: -6 },  // far right
  { x: 0.02, y: 0.42, rot:  9 },  // far left
  { x: 0.60, y: 0.56, rot: -7 },  // far right
  { x: 0.02, y: 0.72, rot:  7 },  // far left
  { x: 0.60, y: 0.86, rot: -4 },  // far right — bleeds into next section
];

const PILE_X = 0.35;
const PILE_Y = 0.26;

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

export default function HeroCards() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef  = useRef<HTMLDivElement>(null);
  const outerRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const flipRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const flipped    = useRef<boolean[]>(CARDS.map(() => false));
  const rafId      = useRef<number>(0);

  useEffect(() => {
    function tick() {
      const wrapper = wrapperRef.current;
      const sticky  = stickyRef.current;
      if (!wrapper || !sticky) { rafId.current = requestAnimationFrame(tick); return; }

      const wRect       = wrapper.getBoundingClientRect();
      const scrollRange = wRect.height - window.innerHeight;
      const progress    = clamp(-wRect.top / scrollRange, 0, 1);

      const W     = sticky.offsetWidth;
      const H     = sticky.offsetHeight;
      const cardW = Math.max(220, Math.min(400, W * 0.30));

      CARDS.forEach((card, i) => {
        const outer   = outerRefs.current[i];
        const flipper = flipRefs.current[i];
        if (!outer || !flipper) return;

        const start = i * 0.10;
        const dur   = 0.38;
        const cp    = clamp((progress - start) / dur, 0, 1);
        const eased = easeOut(cp);

        const sx = W * PILE_X;
        const sy = H * PILE_Y;
        const fx = W * FINAL[i].x;
        const fy = H * FINAL[i].y;

        const tx = lerp(sx, fx, eased);
        const ty = lerp(sy, fy, eased);

        // 2 full rotations — dealt face-up
        const rot = FINAL[i].rot + (1 - eased) * 720;

        outer.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg)`;
        outer.style.width     = `${cardW}px`;

        // All cards flip when they land
        if (cp > 0.88 && !flipped.current[i]) {
          flipped.current[i] = true;
          flipper.style.transform  = "rotateY(180deg)";
          flipper.style.transition = "transform 0.65s cubic-bezier(0.4,0,0.2,1)";
        } else if (cp < 0.78 && flipped.current[i]) {
          flipped.current[i] = false;
          flipper.style.transform  = "rotateY(0deg)";
          flipper.style.transition = "transform 0.45s ease";
        }
      });

      rafId.current = requestAnimationFrame(tick);
    }

    rafId.current = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(rafId.current); };
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: "290vh", position: "relative" }}>
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background: "#F8F5F0",
          overflow: "visible", // cards allowed to extend past bottom edge
        }}
      >
        {/* "Space to be" headline — bottom-right, behind cards */}
        <div
          style={{
            position: "absolute",
            bottom: "clamp(2rem, 6vh, 5rem)",
            right: "clamp(1.5rem, 5vw, 5rem)",
            zIndex: 2,
            pointerEvents: "none",
            textAlign: "right",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4.5rem, 14vw, 15rem)",
              fontWeight: 700,
              lineHeight: 0.9,
              color: "var(--ink)",
              margin: 0,
            }}
          >
            Space<br />t<span style={{ fontWeight: 300, fontStyle: "italic" }}>o</span> be
          </h1>
        </div>

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
            <div style={{ perspective: "1200px", width: "100%", aspectRatio: "3/4" }}>
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
                    boxShadow:
                      "0 2px 4px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.14), 0 24px 48px rgba(0,0,0,0.10)",
                    outline: "1px solid rgba(255,255,255,0.9)",
                    outlineOffset: "-1px",
                  }}
                >
                  <Image
                    src={card.src}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 80vw, 40vw"
                    style={{ objectFit: "cover" }}
                    quality={90}
                  />
                </div>

                {/* Back — stat card */}
                {card.stat && (
                  <div
                    style={{
                      position: "absolute", inset: 0,
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background: "#1A1A1A",
                      borderRadius: 3,
                      boxShadow:
                        "0 2px 4px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.14), 0 24px 48px rgba(0,0,0,0.10)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      padding: "1.5rem",
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)",
                      color: "#F8F5F0",
                      fontWeight: 700,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}>
                      {card.stat.value}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.55rem, 0.8vw, 0.75rem)",
                      color: "#F8F5F0",
                      opacity: 0.5,
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                    }}>
                      {card.stat.label}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.6rem, 0.85vw, 0.8rem)",
                      color: "#F8F5F0",
                      opacity: 0.35,
                      textAlign: "center",
                      marginTop: 4,
                    }}>
                      {card.stat.note}
                    </span>
                  </div>
                )}

                {/* Back — specialism card (clickable link) */}
                {card.specialism && (
                  <Link
                    href={card.specialism.href}
                    style={{
                      position: "absolute", inset: 0,
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background: "#1A1A1A",
                      borderRadius: 3,
                      boxShadow:
                        "0 2px 4px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.14), 0 24px 48px rgba(0,0,0,0.10)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 12,
                      textDecoration: "none",
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1rem, 1.8vw, 1.6rem)",
                      color: "#F8F5F0",
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                    }}>
                      {card.specialism.label}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.55rem, 0.7vw, 0.7rem)",
                      color: "#F8F5F0",
                      opacity: 0.45,
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
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
