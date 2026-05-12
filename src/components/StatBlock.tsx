import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
  note?: string;
}

interface StatBlockProps {
  stats: Stat[];
  className?: string;
}

export function StatBlock({ stats, className }: StatBlockProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]", className)}>
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-1 px-8 py-6 first:pl-0 last:pr-0">
          <p className="font-serif text-4xl font-light text-[var(--foreground)]">{stat.value}</p>
          <p className="text-sm font-medium text-[var(--foreground)]">{stat.label}</p>
          {stat.note && (
            <p className="text-xs text-[var(--muted-foreground)]">{stat.note}</p>
          )}
        </div>
      ))}
    </div>
  );
}
