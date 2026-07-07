import { Github, Linkedin, Twitter, Mail, Newspaper, type LucideIcon } from "lucide-react";

export type Social = {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
  /** Brand hex used for hover text + ring/glow. */
  brand: string;
};

export const socials: Social[] = [
  {
    label: "GitHub",
    handle: "XNikhilr",
    href: "https://github.com/XNikhilr",
    icon: Github,
    brand: "#f5f5f5",
  },
  {
    label: "LinkedIn",
    handle: "xnikhilr",
    href: "https://www.linkedin.com/in/xnikhilr",
    icon: Linkedin,
    brand: "#0A66C2",
  },
  {
    label: "X / Twitter",
    handle: "@Nikhill_0",
    href: "https://x.com/Nikhill_0",
    icon: Twitter,
    brand: "#1DA1F2",
  },
  {
    label: "Mahoba Insight",
    handle: "mahobainsight.in",
    href: "https://mahobainsight.in",
    icon: Newspaper,
    brand: "#F59E0B",
  },
  {
    label: "Email",
    handle: "emailnik@mahobainsight.in",
    href: "mailto:emailnik@mahobainsight.in",
    icon: Mail,
    brand: "#EC4899",
  },
];
