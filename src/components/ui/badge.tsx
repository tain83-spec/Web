import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        variant === "default" && "bg-[var(--muted)] text-[var(--muted-foreground)]",
        variant === "outline" && "border border-[var(--border)] text-[var(--muted-foreground)]",
        variant === "accent" && "bg-[var(--accent)] text-white",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
