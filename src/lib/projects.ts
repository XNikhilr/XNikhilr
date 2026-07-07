import biLogo from "@/assets/bundelkhand-insight-logo.jpg.asset.json";

export type Accent = "neon" | "magenta" | "amber";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  url: string;
  logo?: string;
  about: string;
  long?: string;
  stack: string[];
  platform: "Media" | "Lovable" | "Cultural";
  accent: Accent;
  detail?: boolean;
};

export const projects: Project[] = [
  {
    slug: "mahoba-insight",
    name: "Mahoba Insight",
    tagline: "Hyperlocal news for Mahoba, straight from the ground.",
    url: "https://www.mahobainsight.in",
    logo: "https://www.mahobainsight.in/wp-content/uploads/2026/03/trace.svg",
    about:
      "A hyperlocal digital newspaper covering Mahoba district — politics, culture, crime, civic issues and the quiet stories national media skips. Built to give a small city a serious voice.",
    stack: ["WordPress", "Custom Theme", "Cloudflare", "Hindi-first UX"],
    platform: "Media",
    accent: "neon",
  },
  {
    slug: "bundelkhand-insight",
    name: "Bundelkhand Insight",
    tagline: "The regional lens for the whole Bundelkhand.",
    url: "https://bid.mahobainsight.in",
    logo: biLogo.url,
    about:
      "A regional media platform expanding the Insight model across Bundelkhand — Mahoba, Hamirpur, Banda, Chitrakoot, Jhansi, Lalitpur, Jalaun, and beyond. Reporting on water, farming, elections and heritage.",
    stack: ["WordPress", "React widgets", "Multi-district CMS"],
    platform: "Media",
    accent: "magenta",
  },
  {
    slug: "urmila-janki",
    name: "Urmila Janki",
    tagline: "A digital home for devotion and dharmic literature.",
    url: "https://uj.mahobainsight.in",
    about:
      "A cultural & devotional publishing platform — bringing bhakti, folk traditions, and stories of Sita and Urmila to a modern reader. Long-form reading, curated audio, and a quiet, respectful design.",
    stack: ["Next.js", "MDX", "Sanskrit typography"],
    platform: "Cultural",
    accent: "amber",
  },
  {
    slug: "lexpress-ai",
    name: "LexPress AI",
    tagline: "AI workspace built for journalism and law.",
    url: "https://lexpressai-forge.lovable.app",
    about:
      "A production-ready SaaS experiment for legal research and editorial workflows — AI-assisted drafting, document analysis, and a clean workspace UI built on the Lovable stack.",
    long:
      "LexPress AI is an experiment in building a serious, focused AI workspace for the legal and editorial world. It combines document ingestion, AI-assisted drafting, contextual research and a distraction-free writing surface. Built end-to-end on the Lovable stack in a matter of days — proof that vibe-coded software can still feel production-grade.",
    stack: ["TanStack Start", "AI Gateway", "React", "Tailwind", "Lovable"],
    platform: "Lovable",
    accent: "neon",
    detail: true,
  },
  {
    slug: "pnr-status",
    name: "PNR Status Express",
    tagline: "Clean, focused Indian train PNR status checker.",
    url: "https://traintrack1-check.lovable.app",
    about:
      "A lightweight Lovable-built app that fetches live PNR status from IRCTC and presents it without clutter. Simple input, fast result, no noise.",
    long:
      "Every Indian railway PNR tool on the web is drowning in ads and pop-ups. PNR Status Express is the opposite: type a 10-digit PNR, get a clean, readable status card with coach, berth, and confirmation chances. Built on the Lovable stack, mobile-first, and deliberately small.",
    stack: ["TanStack Start", "IRCTC API", "React", "Tailwind", "Lovable"],
    platform: "Lovable",
    accent: "magenta",
    detail: true,
  },
  {
    slug: "metroflow",
    name: "MetroFlow Narova",
    tagline: "A Lovable-built metro navigation concept.",
    url: "https://metroflow-norava.lovable.app",
    about:
      "An experimental metro/route navigation interface built to explore transit UX, real-time directions, and a modern mobile-first flow.",
    long:
      "MetroFlow Narova is a design-forward transit navigation concept — the kind of UI a modern metro app should have. It focuses on clear route visualisation, quick station search, and a swipe-friendly journey view. A pure UX playground built on Lovable to test how far a concept app can be pushed in a single vibe-coding session.",
    stack: ["TanStack Start", "React", "Tailwind", "Transit UX", "Lovable"],
    platform: "Lovable",
    accent: "amber",
    detail: true,
  },
];

export function screenshotUrl(url: string) {
  const clean = url.replace(/^https?:\/\//, "");
  return `https://image.thum.io/get/width/1200/crop/800/noanimate/https://${clean}`;
}
