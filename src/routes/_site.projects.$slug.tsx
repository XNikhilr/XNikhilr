import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects, screenshotUrl } from "@/lib/projects";

export const Route = createFileRoute("/_site/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug && p.detail);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.name} — Nikhil Jha` },
        { name: "description", content: p.about },
        { property: "og:title", content: `${p.name} — Nikhil Jha` },
        { property: "og:description", content: p.about },
        { property: "og:image", content: screenshotUrl(p.url) },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: screenshotUrl(p.url) },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="font-mono text-magenta">// 404</p>
      <h1 className="text-3xl font-bold mt-3">Project not found</h1>
      <Link to="/work" className="inline-block mt-6 text-neon font-mono">← back to /work</Link>
    </div>
  ),
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();
  const accent =
    p.accent === "neon" ? "text-neon" : p.accent === "magenta" ? "text-magenta" : "text-amber";
  const border =
    p.accent === "neon" ? "border-neon" : p.accent === "magenta" ? "border-magenta" : "border-amber";
  const shot = screenshotUrl(p.url);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-12 pb-24">
      <Link to="/work" className="text-xs font-mono text-muted-foreground hover:text-neon">
        ← cd ../work
      </Link>

      <header className="mt-6">
        <p className={`font-mono text-sm ${accent}`}>// {p.platform} · case study</p>
        <h1 className="mt-2 font-sans font-extrabold tracking-tight text-4xl sm:text-6xl">
          {p.name}
          <span className={accent}>.</span>
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{p.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-md border ${border} ${accent} font-mono text-sm hover:bg-secondary`}
          >
            visit live site ↗
          </a>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border font-mono text-xs text-muted-foreground">
            {p.url.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </header>

      <section className="mt-10">
        <div className={`rounded-xl border ${border}/40 overflow-hidden bg-secondary/30`}>
          <div className="flex items-center gap-1.5 px-4 py-2 border-b border-border/70 bg-background/60">
            <span className="w-2.5 h-2.5 rounded-full bg-magenta/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-neon/70" />
            <span className="ml-3 text-[11px] font-mono text-muted-foreground truncate">
              {p.url}
            </span>
          </div>
          <img
            src={shot}
            alt={`${p.name} screenshot`}
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
        <p className="text-[11px] font-mono text-muted-foreground mt-2 text-center">
          live screenshot · rendered on demand
        </p>
      </section>

      <section className="mt-12 grid md:grid-cols-[1fr_260px] gap-10">
        <div>
          <h2 className="font-sans text-2xl font-bold">About the project</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">{p.long ?? p.about}</p>
          <h2 className="font-sans text-2xl font-bold mt-8">Built with Lovable</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Shipped end-to-end using Lovable's vibe-coding workflow — the entire
            frontend, routing, and deploys were composed conversationally, then
            polished by hand. A reminder that fast doesn't have to mean sloppy.
          </p>
        </div>
        <aside className="rounded-xl border border-border bg-card p-5 h-fit">
          <p className="text-xs font-mono text-muted-foreground uppercase">tech stack</p>
          <ul className="mt-3 space-y-2">
            {p.stack.map((s) => (
              <li key={s} className="text-sm font-mono flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${p.accent === "neon" ? "bg-neon" : p.accent === "magenta" ? "bg-magenta" : "bg-amber"}`} />
                {s}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <div className="mt-16 flex items-center justify-between border-t border-border pt-6">
        <Link to="/work" className="text-sm font-mono text-muted-foreground hover:text-neon">
          ← all projects
        </Link>
        <Link to="/contact" className="text-sm font-mono text-neon">
          want something like this? →
        </Link>
      </div>
    </div>
  );
}
