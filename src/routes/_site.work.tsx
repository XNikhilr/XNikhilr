import { createFileRoute } from "@tanstack/react-router";
import biLogo from "@/assets/bundelkhand-insight-logo.jpg.asset.json";


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

type Project = {
  name: string;
  tagline: string;
  url: string;
  logo?: string;
  about: string;
  stack: string[];
  accent: "neon" | "magenta" | "amber";
};

const projects: Project[] = [
  {
    name: "Mahoba Insight",
    tagline: "Hyperlocal news for Mahoba, straight from the ground.",
    url: "https://www.mahobainsight.in",
    logo: "https://www.mahobainsight.in/wp-content/uploads/2026/03/trace.svg",
    about:
      "A hyperlocal digital newspaper covering Mahoba district — politics, culture, crime, civic issues and the quiet stories national media skips. Built to give a small city a serious voice.",
    stack: ["WordPress", "Custom Theme", "Cloudflare", "Hindi-first UX"],
    accent: "neon",
  },
  {
    name: "Bundelkhand Insight",
    tagline: "The regional lens for the whole Bundelkhand.",
    url: "https://bid.mahobainsight.in",
    logo: biLogo.url,
    about:
      "A regional media platform expanding the Insight model across Bundelkhand — Mahoba, Hamirpur, Banda, Chitrakoot, Jhansi, Lalitpur, Jalaun, and beyond. Reporting on water, farming, elections and heritage.",
    stack: ["WordPress", "React widgets", "Multi-district CMS"],
    accent: "magenta",
  },
  {
    name: "LexPress AI",
    tagline: "AI workspace built for journalism and law.",
    url: "https://lexpressai-forge.lovable.app",
    about:
      "A production-ready SaaS experiment for legal research and editorial workflows — AI-assisted drafting, document analysis, and a clean workspace UI built on the Lovable stack.",
    stack: ["TanStack Start", "AI Gateway", "Lovable"],
    accent: "amber",
  },
  {
    name: "PNR Status Express",
    tagline: "Clean, focused Indian train PNR status checker.",
    url: "https://traintrack1-check.lovable.app",
    about:
      "A lightweight Lovable-built app that fetches live PNR status from IRCTC and presents it without clutter. Simple input, fast result, no noise.",
    stack: ["TanStack Start", "IRCTC API", "Lovable"],
    accent: "neon",
  },
  {
    name: "MetroFlow Narova",
    tagline: "A Lovable-built metro navigation concept.",
    url: "https://metroflow-narova.lovable.app",
    about:
      "An experimental metro/route navigation interface built to explore transit UX, real-time directions, and a modern mobile-first flow.",
    stack: ["TanStack Start", "Lovable", "Transit UX"],
    accent: "magenta",
  },
];

function Work() {
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

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 space-y-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </section>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accentClass =
    project.accent === "neon"
      ? "text-neon"
      : project.accent === "magenta"
      ? "text-magenta"
      : "text-amber";
  const ringClass =
    project.accent === "neon"
      ? "hover:border-neon"
      : project.accent === "magenta"
      ? "hover:border-magenta"
      : "hover:border-amber";

  return (
    <article
      className={`group rounded-xl border border-border bg-card overflow-hidden transition-colors ${ringClass}`}
    >
      <div className="grid md:grid-cols-[240px_1fr] gap-0">
        <div className="flex items-center justify-center p-8 bg-secondary/40 border-b md:border-b-0 md:border-r border-border">
          {project.logo ? (
            <img
              src={project.logo}
              alt={`${project.name} logo`}
              className="max-h-24 w-auto object-contain"
              loading="lazy"
            />
          ) : (
            <div className={`text-4xl font-sans font-black ${accentClass} text-glow`}>
              {project.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mb-3">
            <span>project_{String(index + 1).padStart(2, "0")}</span>
            <span>·</span>
            <span className={accentClass}>● live</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight">
            {project.name}
          </h2>
          <p className={`mt-1 text-sm font-mono ${accentClass}`}>
            {project.tagline}
          </p>
          <p className="mt-4 text-muted-foreground font-sans leading-relaxed">
            {project.about}
          </p>

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

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 text-sm font-mono ${accentClass} hover:text-glow`}
            >
              <span>{project.url.replace(/^https?:\/\//, "")}</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
