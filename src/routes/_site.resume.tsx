import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Nikhil Jha" },
      { name: "description", content: "Short resume of Nikhil Jha — developer, founder based in Mahoba, India." },
      { property: "og:title", content: "Resume — Nikhil Jha" },
      { property: "og:description", content: "Short resume of Nikhil Jha." },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-16 pb-24">
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-secondary/40 font-mono text-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-neon/70" />
          <span className="ml-2 text-muted-foreground">~/nikhil-jha/resume.md</span>
          <span className="ml-auto text-muted-foreground hidden sm:inline">
            press <kbd className="px-1.5 py-0.5 rounded bg-background border border-border">Ctrl</kbd>+<kbd className="px-1.5 py-0.5 rounded bg-background border border-border">P</kbd> to print
          </span>
        </div>

        <div className="p-6 sm:p-10 font-mono text-sm leading-relaxed">
          <header className="mb-8">
            <p className="text-neon"># Nikhil Jha</p>
            <p className="text-muted-foreground mt-1">
              Developer · Founder · Publisher · Mahoba, India
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span>hello@nikhiljha.in</span>
              <span>·</span>
              <span>mahobainsight.in</span>
              <span>·</span>
              <span>bundelkhandinsight.in</span>
              <span>·</span>
              <span>urmilajanki.in</span>
            </div>
          </header>

          <Section title="## summary">
            <p className="text-foreground/90 font-sans">
              Self-taught developer and founder building regional media
              platforms and community-first web products for Bharat.
              Comfortable across the stack — from CMS engineering and
              editorial workflows to design systems and performance.
            </p>
          </Section>

          <Section title="## experience">
            <Job
              role="Founder & Editor"
              org="Mahoba Insight"
              period="2023 — present"
              points={[
                "Founded and operate a hyperlocal digital newspaper for Mahoba district.",
                "Own product, design, engineering and editorial direction.",
                "Grown to a daily readership across Bundelkhand.",
              ]}
            />
            <Job
              role="Founder"
              org="Bundelkhand Insight"
              period="2024 — present"
              points={[
                "Expanded the Insight model to cover the entire Bundelkhand region.",
                "Built multi-district CMS workflows and contributor tooling.",
              ]}
            />
            <Job
              role="Founder"
              org="Urmila Janki"
              period="2024 — present"
              points={[
                "Devotional & cultural publishing platform focused on bhakti and folk literature.",
                "Designed a quiet reading-first interface with careful Devanagari typography.",
              ]}
            />
          </Section>

          <Section title="## skills">
            <div className="grid sm:grid-cols-2 gap-y-1 font-sans">
              <Row k="Languages" v="TypeScript, JavaScript, PHP, Python (basic)" />
              <Row k="Frontend" v="React, Next.js, Tailwind, Framer Motion" />
              <Row k="Backend / CMS" v="Node, WordPress, custom themes/plugins" />
              <Row k="Design" v="Figma, editorial layout, brand systems" />
              <Row k="Infra" v="Cloudflare, Vercel, basic Linux, DNS" />
              <Row k="Writing" v="Hindi (native), English (professional)" />
            </div>
          </Section>

          <Section title="## education">
            <Row k="Self-taught" v="Web, design, product — since 2020" />
          </Section>

          <Section title="## contact" last>
            <p className="text-muted-foreground font-sans">
              For work, collaborations, or a chai in Mahoba —{" "}
              <a href="mailto:hello@nikhiljha.in" className="text-neon">
                hello@nikhiljha.in
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
  last,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section className={last ? "" : "mb-8"}>
      <h2 className="text-magenta mb-3">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function Job({
  role,
  org,
  period,
  points,
}: {
  role: string;
  org: string;
  period: string;
  points: string[];
}) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex flex-wrap items-baseline gap-x-2">
        <span className="text-foreground font-sans font-semibold">{role}</span>
        <span className="text-muted-foreground">@</span>
        <span className="text-neon">{org}</span>
        <span className="ml-auto text-xs text-muted-foreground">{period}</span>
      </div>
      <ul className="mt-2 space-y-1">
        {points.map((p) => (
          <li key={p} className="text-muted-foreground font-sans">
            <span className="text-neon mr-2">▸</span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex gap-3">
      <span className="text-magenta min-w-[110px]">{k}:</span>
      <span className="text-foreground/90">{v}</span>
    </div>
  );
}
