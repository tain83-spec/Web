import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  attribution?: string;
  variant?: "default" | "dark" | "accent";
  className?: string;
}

export function TestimonialCard({
  quote,
  attribution,
  variant = "default",
  className,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex flex-col gap-6 p-8",
        variant === "default" && "border border-[var(--border)] bg-[var(--card)]",
        variant === "dark" && "bg-[var(--primary)] text-[var(--primary-foreground)]",
        variant === "accent" && "bg-[var(--muted)]",
        className
      )}
    >
      {/* decorative quote mark */}
      <span
        className={cn(
          "font-serif text-5xl leading-none select-none",
          variant === "dark"
            ? "text-[var(--primary-foreground)]/20"
            : "text-[var(--accent)]/30"
        )}
        aria-hidden
      >
        &ldquo;
      </span>

      <blockquote
        className={cn(
          "font-serif text-xl font-light italic leading-relaxed -mt-6",
          variant === "dark"
            ? "text-[var(--primary-foreground)]/90"
            : "text-[var(--foreground)]/80"
        )}
      >
        {quote}
      </blockquote>

      {attribution && (
        <figcaption className="flex items-center gap-3">
          <div className="h-px w-6 bg-[var(--accent)]" />
          <span
            className={cn(
              "text-xs uppercase tracking-[0.18em]",
              variant === "dark"
                ? "text-[var(--primary-foreground)]/50"
                : "text-[var(--muted-foreground)]"
            )}
          >
            {attribution}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
