import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SocialIcons } from "@/components/SocialIcons";
import { socials } from "@/lib/socials";


export const Route = createFileRoute("/_site/")({
  component: Home,
});

const roles = [
  "developer",
  "founder",
  "designer",
  "storyteller",
  "chai enthusiast",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = roles[i % roles.length];
    const speed = del ? 45 : 90;
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), 1200);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-amber">
      {text}
      <span className="cursor-blink text-neon">▌</span>
    </span>
  );
}

function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-24 pb-20">
        <div className="text-xs text-muted-foreground mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
          <span>online · accepting projects</span>
        </div>

        <p className="text-neon text-sm mb-3 font-mono">// hello_world.ts</p>
        <h1 className="font-sans font-extrabold tracking-tight text-5xl sm:text-7xl md:text-8xl leading-[0.95]">
          <span className="text-muted-foreground">$ </span>
          <span className="text-glow">Nikhil</span>
          <br />
          <span className="text-neon text-glow">Jha</span>
          <span className="text-magenta">.</span>
        </h1>

        <div className="mt-8 text-lg sm:text-2xl font-mono">
          <span className="text-muted-foreground">const role = </span>
          <span className="text-magenta">"</span>
          <Typewriter />
          <span className="text-magenta">"</span>
          <span className="text-muted-foreground">;</span>
        </div>

        <p className="mt-10 max-w-2xl text-muted-foreground text-base sm:text-lg leading-relaxed font-sans">
          I build{" "}
          <span className="text-foreground">regional media platforms</span>,{" "}
          <span className="text-foreground">community tools</span>, and{" "}
          <span className="text-foreground">quietly opinionated web apps</span>
          {" "}from Mahoba. Vibecoded. Deployed at 3AM. Fueled by chai and
          conviction.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-neon text-primary-foreground font-semibold text-sm hover:glow-neon transition-all"
          >
            <span>./view_work</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-sm hover:border-neon hover:text-neon transition-colors"
          >
            cat resume.md
          </Link>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <TerminalCard title="about.md">
            <p className="text-sm leading-relaxed text-muted-foreground">
              I'm Nikhil — a self-taught developer and founder building for{" "}
              <span className="text-foreground">Bharat</span>. I care about
              overlooked places, honest journalism, and software that respects
              the reader.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Currently running{" "}
              <span className="text-neon">Mahoba Insight</span>,{" "}
              <span className="text-neon">Bundelkhand Insight</span>, and{" "}
              <span className="text-neon">Urmila Janki</span>.
            </p>
          </TerminalCard>

          <TerminalCard title="stack.json">
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              {[
                ["frontend", "React · TS · Tailwind"],
                ["backend", "Node · WordPress"],
                ["design", "Figma · pen & paper"],
                ["writing", "Hindi · English"],
                ["deploys", "Vercel · Cloudflare"],
                ["mode", "vibecoded ✓"],
              ].map(([k, v]) => (
                <div key={k} className="contents">
                  <span className="text-magenta">{k}:</span>
                  <span className="text-foreground truncate">{v}</span>
                </div>
              ))}
            </div>
          </TerminalCard>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
          // socials --list
        </h2>
        <SocialIcons items={socials} variant="grid" />
      </section>

      {/* Contact section is rendered by SiteShell below the footer on the home route. */}
    </div>
  );
}

function TerminalCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-secondary/40">
        <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-neon/70" />
        <span className="ml-2 text-xs text-muted-foreground font-mono">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
