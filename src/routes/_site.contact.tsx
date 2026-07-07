import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, Check, Mail, Send, Github, Linkedin, Twitter, Newspaper } from "lucide-react";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nikhil Jha" },
      { name: "description", content: "Get in touch with Nikhil Jha — email, socials, or send a direct message." },
      { property: "og:title", content: "Contact — Nikhil Jha" },
      { property: "og:description", content: "Reach out for collaborations, journalism, or Lovable builds." },
    ],
  }),
  component: Contact,
});

const emails = [
  { addr: "emailnik@mahobainsight.in", label: "work" },
  { addr: "music.nikhilr@gmail.com", label: "personal" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/DeveloNikhil", handle: "DeveloNikhil", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/xnikhilr", handle: "xnikhilr", Icon: Linkedin },
  { label: "X / Twitter", href: "https://x.com/Nikhill_0", handle: "@Nikhill_0", Icon: Twitter },
  { label: "Mahoba Insight", href: "https://mahobainsight.in", handle: "mahobainsight.in", Icon: Newspaper },
];

function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-16 pb-24">
      <p className="font-mono text-neon text-sm">// contact.init()</p>
      <h1 className="mt-2 font-sans font-extrabold tracking-tight text-4xl sm:text-6xl">
        Let's talk<span className="text-neon">.</span>
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Journalism tip-offs, collaborations, or an app you'd like vibe-coded on
        Lovable — pick a channel below.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <h2 className="font-mono text-xs uppercase text-muted-foreground">email</h2>
          {emails.map((e) => (
            <EmailRow key={e.addr} email={e.addr} label={e.label} />
          ))}

          <h2 className="font-mono text-xs uppercase text-muted-foreground pt-6">socials</h2>
          <div className="grid grid-cols-2 gap-2">
            {socials.map(({ label, href, handle, Icon }) => (
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
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase text-muted-foreground">send a message</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}

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
