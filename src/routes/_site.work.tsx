import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/_site/work")({
  head: () => ({
    meta: [
      { title: "Work — Nikhil Jha" },
      { name: "description", content: "Projects by Nikhil Jha: Mahoba Insight, Bundelkhand Insight, Urmila Janki, and Lovable experiments." },
      { property: "og:title", content: "Work — Nikhil Jha" },
      { property: "og:description", content: "Regional media, community platforms, and Lovable-built experiments." },
    ],
  }),
  component: Work,
});

const platforms = ["All", "Media", "Cultural", "Lovable"] as const;
const sorts = ["Default", "A → Z", "Z → A"] as const;

function Work() {
  const [platform, setPlatform] = useState<(typeof platforms)[number]>("All");
  const [sort, setSort] = useState<(typeof sorts)[number]>("Default");
  const [tech, setTech] = useState<string>("All");

  const allTech = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.stack.forEach((t) => s.add(t)));
    return ["All", ...Array.from(s).sort()];
  }, []);

  const filtered = useMemo(() => {
    let list = projects.filter(
      (p) =>
        (platform === "All" || p.platform === platform) &&
        (tech === "All" || p.stack.includes(tech)),
    );
    if (sort === "A → Z") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "Z → A") list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }, [platform, sort, tech]);

  return (
    <div className="relative">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-8">
        <p className="text-neon text-sm mb-3 font-mono">// ls ./projects</p>
        <h1 className="font-sans font-extrabold tracking-tight text-4xl sm:text-6xl">
          Things I've built<span className="text-neon">.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground font-sans">
          Regional media platforms I run daily, plus experiments and tools built
          on Lovable — all share the same obsession with useful, fast interfaces.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-4">
        <div className="rounded-xl border border-border bg-card/60 p-4 flex flex-col gap-3">
          <FilterRow label="platform">
            {platforms.map((p) => (
              <Chip key={p} active={platform === p} onClick={() => setPlatform(p)}>
                {p}
              </Chip>
            ))}
          </FilterRow>
          <FilterRow label="tech">
            {allTech.map((t) => (
              <Chip key={t} active={tech === t} onClick={() => setTech(t)}>
                {t}
              </Chip>
            ))}
          </FilterRow>
          <FilterRow label="sort">
            {sorts.map((s) => (
              <Chip key={s} active={sort === s} onClick={() => setSort(s)}>
                {s}
              </Chip>
            ))}
          </FilterRow>
          <div className="text-[11px] font-mono text-muted-foreground pt-1">
            → {filtered.length} project{filtered.length === 1 ? "" : "s"} matched
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 space-y-6 mt-4">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
        {filtered.length === 0 && (
          <div className="text-center text-muted-foreground font-mono py-20">
            // no matches — try clearing a filter
          </div>
        )}
      </section>
    </div>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 flex-wrap">
      <span className="text-[11px] font-mono text-muted-foreground uppercase pt-1.5 shrink-0 w-16">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "text-[11px] font-mono px-2.5 py-1 rounded-md border transition-colors " +
        (active
          ? "border-neon text-neon bg-neon/10"
          : "border-border text-muted-foreground hover:border-neon/60 hover:text-foreground")
      }
    >
      {children}
    </button>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accentClass =
    project.accent === "neon" ? "text-neon" : project.accent === "magenta" ? "text-magenta" : "text-amber";
  const ringClass =
    project.accent === "neon"
      ? "hover:border-neon hover:shadow-[0_0_40px_-10px_hsl(var(--neon))]"
      : project.accent === "magenta"
      ? "hover:border-magenta hover:shadow-[0_0_40px_-10px_hsl(var(--magenta))]"
      : "hover:border-amber hover:shadow-[0_0_40px_-10px_hsl(var(--amber))]";

  const inner = (
    <div className="grid md:grid-cols-[240px_1fr] gap-0">
      <div className="flex items-center justify-center p-8 bg-secondary/40 border-b md:border-b-0 md:border-r border-border transition-transform duration-300 group-hover:scale-[1.02]">
        {project.logo ? (
          <img
            src={project.logo}
            alt={`${project.name} logo`}
            className="max-h-24 w-auto object-contain"
            loading="lazy"
          />
        ) : (
          <div className={`text-4xl font-sans font-black ${accentClass} text-glow`}>
            {project.name.split(" ").map((w) => w[0]).join("")}
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mb-3">
          <span>project_{String(index + 1).padStart(2, "0")}</span>
          <span>·</span>
          <span className={accentClass}>● live</span>
          <span>·</span>
          <span>{project.platform}</span>
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-glow transition">
          {project.name}
        </h2>
        <p className={`mt-1 text-sm font-mono ${accentClass}`}>{project.tagline}</p>
        <p className="mt-4 text-muted-foreground font-sans leading-relaxed">{project.about}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] font-mono px-2 py-1 rounded border border-border text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4 items-center">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`inline-flex items-center gap-2 text-sm font-mono ${accentClass} hover:text-glow`}
          >
            <span>{project.url.replace(/^https?:\/\//, "")}</span>
            <span>↗</span>
          </a>
          {project.detail && (
            <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground">
              → view case study
            </span>
          )}
        </div>
      </div>
    </div>
  );

  const cls = `group block rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-0.5 ${ringClass}`;

  if (project.detail) {
    return (
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className={cls}
      >
        {inner}
      </Link>
    );
  }
  return <article className={cls}>{inner}</article>;
}
