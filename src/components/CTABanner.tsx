import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAAction {
  label: string;
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary";
}

interface CTABannerProps {
  heading: string;
  subheading?: string;
  actions: CTAAction[];
  variant?: "dark" | "muted" | "accent";
  className?: string;
}

export function CTABanner({
  heading,
  subheading,
  actions,
  variant = "dark",
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "py-20 px-6",
        variant === "dark" && "bg-[var(--primary)]",
        variant === "muted" && "bg-[var(--muted)]",
        variant === "accent" && "bg-[var(--accent)]",
        className
      )}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className={cn(
            "font-serif text-3xl md:text-4xl font-light mb-4",
            (variant === "dark" || variant === "accent") && "text-white",
            variant === "muted" && "text-[var(--foreground)]"
          )}
        >
          {heading}
        </h2>
        {subheading && (
          <p
            className={cn(
              "mb-8 leading-relaxed",
              (variant === "dark" || variant === "accent") && "text-white/70",
              variant === "muted" && "text-[var(--muted-foreground)]"
            )}
          >
            {subheading}
          </p>
        )}
        <div className="flex flex-wrap gap-4 justify-center">
          {actions.map((action) => {
            const isExternal = action.external || action.href.startsWith("mailto:") || action.href.startsWith("tel:");
            const Comp = isExternal ? "a" : Link;
            return (
              <Button
                key={action.label}
                asChild
                size="lg"
                className={cn(
                  action.variant === "secondary"
                    ? "bg-transparent border border-white/30 text-white hover:bg-white/10"
                    : "bg-[var(--accent)] hover:opacity-90 border-0 text-white"
                )}
              >
                <Comp href={action.href}>
                  {action.label} <ArrowRight size={16} />
                </Comp>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
