import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, Copy, Check, Send } from "lucide-react";
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

      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 pb-24">
        <p className="font-mono text-neon text-sm">// contact.init()</p>
        <h2 className="mt-2 font-sans font-extrabold tracking-tight text-3xl sm:text-5xl">
          Let's talk<span className="text-neon">.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Journalism tip-offs, collaborations, or an app you'd like vibe-coded — pick a channel below.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase text-muted-foreground">email</h3>
            {emails.map((e) => (
              <EmailRow key={e.addr} email={e.addr} label={e.label} />
            ))}

            <h3 className="font-mono text-xs uppercase text-muted-foreground pt-6">socials</h3>
            <div className="grid grid-cols-2 gap-2">
              {socials.map(({ label, href, handle, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-md border border-border hover:border-neon hover:text-neon transition-colors group"
                >
                  <Icon className="w-4 h-4" />
                  <span className="min-w-0">
                    <span className="block text-sm font-mono">{label}</span>
                    <span className="block text-[10px] text-muted-foreground truncate">{handle}</span>
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground group-hover:text-neon">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase text-muted-foreground">send a message</h3>
            <ContactForm />
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon transition-colors font-mono"
          >
            <span>open full contact page</span>
            <span>→</span>
          </Link>
        </div>
      </section>
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

const emails = [
  { addr: "emailnik@mahobainsight.in", label: "work" },
  { addr: "music.nikhilr@gmail.com", label: "personal" },
];

const socials = [
  { label: "GitHub", handle: "DeveloNikhil", href: "https://github.com/DeveloNikhil", icon: Github },
  { label: "LinkedIn", handle: "xnikhilr", href: "https://www.linkedin.com/in/xnikhilr", icon: Linkedin },
  { label: "X / Twitter", handle: "@Nikhill_0", href: "https://x.com/Nikhill_0", icon: Twitter },
  { label: "Mahoba Insight", handle: "mahobainsight.in", href: "https://mahobainsight.in", icon: Newspaper },
  { label: "Email", handle: "emailnik@mahobainsight.in", href: "mailto:emailnik@mahobainsight.in", icon: Mail },
];

function EmailRow({ email, label }: { email: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };
  return (
    <div className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2.5">
      <Mail className="w-4 h-4 text-neon" />
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-mono uppercase text-muted-foreground">{label}</div>
        <a href={`mailto:${email}`} className="text-sm font-mono truncate block hover:text-neon">
          {email}
        </a>
      </div>
      <button
        onClick={copy}
        aria-label={`Copy ${email}`}
        className="p-2 rounded-md border border-border hover:border-neon hover:text-neon transition-colors"
      >
        {copied ? <Check className="w-4 h-4 text-neon" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    const subject = encodeURIComponent(`[nikhiljha.dev] Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:emailnik@mahobainsight.in?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="mt-3 space-y-3 rounded-xl border border-border bg-card p-4">
      <Field label="name">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          required
          className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-neon"
          placeholder="your name"
        />
      </Field>
      <Field label="email">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={200}
          required
          className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-neon"
          placeholder="you@domain.com"
        />
      </Field>
      <Field label="message">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={2000}
          required
          rows={5}
          className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-neon resize-y"
          placeholder="what's on your mind?"
        />
      </Field>
      <button
        type="submit"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neon text-neon font-mono text-sm hover:bg-neon/10 transition-colors"
      >
        <Send className="w-4 h-4" />
        {sent ? "opening mail…" : "send message"}
      </button>
      <p className="text-[11px] font-mono text-muted-foreground">
        // opens your mail client — no data stored on this site.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[10px] font-mono uppercase text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
