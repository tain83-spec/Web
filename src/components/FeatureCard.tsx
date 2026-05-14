import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  href?: string;
  icon?: LucideIcon;
  tag?: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  href,
  icon: Icon,
  tag,
  className,
}: FeatureCardProps) {
  const inner = (
    <div
      className={cn(
        "group flex flex-col gap-4 p-6 border border-[var(--border)] h-full transition-all duration-200",
        href && "hover:border-[var(--foreground)] cursor-pointer",
        className
      )}
    >
      {Icon && (
        <div className="w-9 h-9 flex items-center justify-center bg-[var(--muted)] text-[var(--accent)]">
          <Icon size={18} />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-2">
        {tag && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">{tag}</span>
        )}
        <h3 className="font-serif text-xl font-medium group-hover:text-[var(--accent)] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{description}</p>
      </div>
      {href && (
        <div className="flex items-center gap-2 text-xs font-medium text-[var(--muted-foreground)] group-hover:text-[var(--accent)] transition-colors">
          Learn more
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="h-full">{inner}</Link>;
  }
  return inner;
}
