import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HomeContact } from "./HomeContact";

export function SiteShell() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Outlet />
        {isHome ? <HomeContact /> : null}
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    { to: "/", label: "~/home" },
    { to: "/work", label: "~/work" },
    { to: "/resume", label: "~/resume" },
  ] as const;
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-block w-2 h-2 rounded-full bg-neon glow-neon" />
          <span className="text-sm font-semibold tracking-tight">
            <span className="text-muted-foreground">const </span>
            <span className="text-neon">nikhil</span>
            <span className="text-muted-foreground"> = </span>
            <span className="text-amber">dev()</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-2 sm:px-3 py-1.5 rounded-md text-muted-foreground hover:text-neon hover:bg-secondary transition-colors"
              activeProps={{ className: "px-2 sm:px-3 py-1.5 rounded-md text-neon bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const [now, setNow] = useState<string>("");
  useEffect(() => {
    const tick = () => {
      const d = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: false,
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setNow(d);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
          <span>
            <span className="text-neon">●</span> Mahoba, Uttar Pradesh · India
          </span>
        </div>
        <div className="tabular-nums">
          <span className="text-muted-foreground">$ date → </span>
          <span className="text-foreground">{now || "…"}</span>
          <span className="text-neon"> IST</span>
        </div>
        <div>© {new Date().getFullYear()} Nikhil Jha</div>
      </div>
    </footer>
  );
}
