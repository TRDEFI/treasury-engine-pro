import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionTag({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[11px] text-signal">{index}</span>
      <span className="label-mono">{children}</span>
      <span className="rule-flow h-px flex-1 opacity-40" />
    </div>
  );
}

export function Panel({
  children,
  className,
  title,
  meta,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
  meta?: string;
}) {
  return (
    <div className={cn("panel rounded-md", className)}>
      {(title || meta) && (
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <span className="label-mono text-foreground/80">{title}</span>
          {meta && <span className="font-mono text-[11px] text-muted-foreground">{meta}</span>}
        </div>
      )}
      {children}
    </div>
  );
}

export function Metric({
  label,
  value,
  sub,
  tone = "default",
}: {
  label: string;
  value: string;
  sub?: string;
  tone?: "default" | "signal" | "positive";
}) {
  return (
    <div className="px-4 py-4">
      <div className="label-mono">{label}</div>
      <div
        className={cn(
          "mt-2 font-mono text-2xl tabular-nums",
          tone === "signal" && "text-signal",
          tone === "positive" && "text-positive",
        )}
      >
        {value}
      </div>
      {sub && <div className="mt-1 font-mono text-[11px] text-muted-foreground">{sub}</div>}
    </div>
  );
}
