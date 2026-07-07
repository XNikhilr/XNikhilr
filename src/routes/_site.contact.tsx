import { createFileRoute } from "@tanstack/react-router";
import { HomeContact } from "@/components/HomeContact";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nikhil Jha" },
      { name: "description", content: "Get in touch with Nikhil Jha — email, socials, or send a direct message." },
      { property: "og:title", content: "Contact — Nikhil Jha" },
      { property: "og:description", content: "Reach out for collaborations, journalism, or Lovable builds." },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: "Contact — Nikhil Jha" },
      { name: "twitter:description", content: "Reach out for collaborations, journalism, or Lovable builds." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact — Nikhil Jha",
          url: "/contact",
          mainEntity: {
            "@type": "Person",
            name: "Nikhil Jha",
            alternateName: "XNikhilr",
            email: [
              "mailto:emailnik@mahobainsight.in",
              "mailto:music.nikhilr@gmail.com",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mahoba",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
            sameAs: [
              "https://github.com/XNikhilr",
              "https://www.linkedin.com/in/xnikhilr",
              "https://x.com/Nikhill_0",
              "https://mahobainsight.in",
            ],
          },
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="pt-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-4">
        <p className="font-mono text-neon text-xs sm:text-sm">// route: /contact</p>
      </div>
      <HomeContact />
    </div>
  );
}
