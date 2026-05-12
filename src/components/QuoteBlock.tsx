import { cn } from "@/lib/utils";

interface QuoteBlockProps {
  quote: string;
  attribution?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function QuoteBlock({ quote, attribution, size = "md", className }: QuoteBlockProps) {
  return (
    <div className={cn("border-l-2 border-[var(--accent)] pl-6", className)}>
      <blockquote
        className={cn(
          "font-serif italic text-[var(--foreground)]/75 leading-relaxed",
          size === "sm" && "text-lg",
          size === "md" && "text-xl md:text-2xl",
          size === "lg" && "text-2xl md:text-3xl",
        )}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      {attribution && (
        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
          — {attribution}
        </p>
      )}
    </div>
  );
}
