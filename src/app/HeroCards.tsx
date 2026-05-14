"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type CardDef = {
  src: string;
  label?: string;
  href?: string;
};

const CARDS: CardDef[] = [
  { src: "/cards/card-9.jpg" },
  { src: "/cards/card-1.jpg" },
  { src: "/cards/card-2.jpg", label: "Anxiety",       href: "/anxiety" },
  { src: "/cards/card-4.jpg", label: "Relationships", href: "/relationships" },
  { src: "/cards/card-7.jpg", label: "Boundaries",    href: "/boundaries" },
];

// Zigzag: right → left → right → left → right
const FINAL = [
  { x: 0.52, y: 0.05, rot: -5 },
  { x: 0.26, y: 0.23, rot:  9 },
  { x: 0.55, y: 0.37, rot: -7 },
  { x: 0.24, y: 0.54, rot:  8 },
  { x: 0.50, y: 0.68, rot: -5 },
];

// Pile starts top-left, pushed down so cards are visible
const PILE_X = 0.05;
const PILE_Y = 0.12;

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
      const cardW = Math.max(110, Math.min(180, W * 0.17));

      CARDS.forEach((card, i) => {
        const outer   = outerRefs.current[i];
        const flipper = flipRefs.current[i];
        if (!outer || !flipper) return;

        const start = i * 0.13;
        const dur   = 0.42;
        const cp    = clamp((progress - start) / dur, 0, 1);
        const eased = easeOut(cp);

        const sx = W * PILE_X;
        const sy = H * PILE_Y;
        const fx = W * FINAL[i].x;
        const fy = H * FINAL[i].y;

        const tx = lerp(sx, fx, eased);
        const ty = lerp(sy, fy, eased);

        // 1 full rotation as card travels — starts and ends face-up
        const rot = FINAL[i].rot + (1 - eased) * 360;

        outer.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg)`;
        outer.style.width     = `${cardW}px`;

        // Flip specialism cards as they land
        if (card.label) {
          if (cp > 0.88 && !flipped.current[i]) {
            flipped.current[i] = true;
            flipper.style.transform  = "rotateY(180deg)";
            flipper.style.transition = "transform 0.65s cubic-bezier(0.4,0,0.2,1)";
          } else if (cp < 0.78 && flipped.current[i]) {
            flipped.current[i] = false;
            flipper.style.transform  = "rotateY(0deg)";
            flipper.style.transition = "transform 0.45s ease";
          }
        }
      });

      rafId.current = requestAnimationFrame(tick);
    }

    rafId.current = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(rafId.current); };
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: "220vh", position: "relative" }}>
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
            <div style={{ perspective: "900px", width: "100%", aspectRatio: "3/4" }}>
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
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
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
                      borderRadius: 4,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
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
                      fontSize: "clamp(0.85rem, 1.3vw, 1.2rem)",
                      color: "#F8F5F0",
                      fontWeight: 700,
                    }}>
                      {card.label}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.55rem",
                      color: "#F8F5F0",
                      opacity: 0.5,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
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
