import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 font-body text-xs uppercase tracking-[0.08em]",
        variant === "default" && "bg-[var(--surface)] text-[var(--mid)]",
        variant === "outline" && "border border-[var(--rule)] text-[var(--mid)]",
        variant === "accent" && "bg-[var(--accent)] text-white",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
