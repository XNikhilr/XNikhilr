import type { CSSProperties } from "react";
import { socials, type Social } from "@/lib/socials";

type Variant = "grid" | "row" | "compact";

type Props = {
  items?: Social[];
  variant?: Variant;
  className?: string;
};

/**
 * Branded social icon buttons with per-platform hover color + glow ring.
 * Uses inline CSS vars so each icon can drive its own brand color on hover.
 */
export function SocialIcons({ items = socials, variant = "grid", className = "" }: Props) {
  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {items.map((s) => (
          <SocialIconButton key={s.label} social={s} compact />
        ))}
      </div>
    );
  }

  if (variant === "row") {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 ${className}`}>
        {items.map((s) => (
          <SocialRow key={s.label} social={s} />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 ${className}`}>
      {items.map((s) => (
        <SocialTile key={s.label} social={s} />
      ))}
    </div>
  );
}

function brandStyle(s: Social): CSSProperties {
  return { ["--brand" as string]: s.brand };
}

function SocialTile({ social }: { social: Social }) {
  const Icon = social.icon;
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer"
      aria-label={social.label}
      style={brandStyle(social)}
      className="social-btn group relative flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-border bg-card transition-all hover:-translate-y-0.5"
    >
      <Icon className="w-6 h-6 text-muted-foreground transition-colors group-hover:[color:var(--brand)]" />
      <span className="text-xs font-mono text-foreground">{social.label}</span>
      <span className="text-[10px] text-muted-foreground truncate max-w-full">{social.handle}</span>
    </a>
  );
}

function SocialRow({ social }: { social: Social }) {
  const Icon = social.icon;
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer"
      style={brandStyle(social)}
      className="social-btn group flex items-center gap-3 px-3 py-2.5 rounded-md border border-border bg-card transition-all"
    >
      <Icon className="w-4 h-4 transition-colors group-hover:[color:var(--brand)]" />
      <span className="min-w-0">
        <span className="block text-sm font-mono">{social.label}</span>
        <span className="block text-[10px] text-muted-foreground truncate">{social.handle}</span>
      </span>
      <span className="ml-auto text-xs text-muted-foreground group-hover:[color:var(--brand)]">↗</span>
    </a>
  );
}

function SocialIconButton({ social, compact }: { social: Social; compact?: boolean }) {
  const Icon = social.icon;
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer"
      aria-label={social.label}
      title={social.label}
      style={brandStyle(social)}
      className={`social-btn group inline-flex items-center justify-center rounded-md border border-border bg-card transition-all ${
        compact ? "w-9 h-9" : "w-10 h-10"
      }`}
    >
      <Icon className="w-4 h-4 text-muted-foreground transition-colors group-hover:[color:var(--brand)]" />
    </a>
  );
}
