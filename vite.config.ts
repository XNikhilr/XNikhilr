// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deploy target selection:
// - Inside a Lovable build, the preset is force-pinned to `cloudflare-module` regardless of what we set here.
// - Outside Lovable (e.g. Netlify CI), Nitro honors this config. We prefer the explicit env var so that:
//     * `NITRO_PRESET=netlify` (set automatically on Netlify) targets Netlify Functions.
//     * Local `bun run build` without env vars falls back to `cloudflare-module` for parity with Lovable.
const nitroPreset = process.env.NITRO_PRESET || (process.env.NETLIFY ? "netlify" : "cloudflare-module");

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset: nitroPreset,
  },
});
