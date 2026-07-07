import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Copy, Check, Send, ExternalLink } from "lucide-react";
import { SocialIcons } from "@/components/SocialIcons";
import { socials } from "@/lib/socials";

const emails = [
  { addr: "emailnik@mahobainsight.in", label: "work" },
  { addr: "music.nikhilr@gmail.com", label: "personal" },
];

const TO_EMAIL = "emailnik@mahobainsight.in";

export function HomeContact() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 pb-24 border-t border-border">
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
          <SocialIcons items={socials} variant="row" />
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

function buildSubject(name: string) {
  return `[nikhiljha.dev] Message from ${name || "a visitor"}`;
}
function buildBody(message: string, name: string, email: string) {
  return `${message}\n\n— ${name}\n${email}`;
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const valid = name.trim() && email.trim() && message.trim();

  const openMail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    const subject = encodeURIComponent(buildSubject(name));
    const body = encodeURIComponent(buildBody(message, name, email));
    // Opens the user's default mail app (Apple Mail, Outlook, Thunderbird, or
    // whatever they've set as mailto handler — including Gmail on many browsers).
    window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const openGmail = () => {
    if (!valid) return;
    const subject = encodeURIComponent(buildSubject(name));
    const body = encodeURIComponent(buildBody(message, name, email));
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${TO_EMAIL}&su=${subject}&body=${body}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form onSubmit={openMail} className="mt-3 space-y-3 rounded-xl border border-border bg-card p-4">
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
      <div className="flex flex-wrap gap-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neon text-neon font-mono text-sm hover:bg-neon/10 transition-colors"
        >
          <Send className="w-4 h-4" />
          {sent ? "opening mail…" : "open in mail app"}
        </button>
        <button
          type="button"
          onClick={openGmail}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-muted-foreground font-mono text-sm hover:border-neon hover:text-neon transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          open in gmail
        </button>
      </div>
      <p className="text-[11px] font-mono text-muted-foreground">
        // your details prefill the mail — nothing is stored on this site. hit send from your mail app to deliver.
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
