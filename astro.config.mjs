import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// The single domain configuration point. Defaults to the confirmed domain; SITE_URL still overrides at build time.
const site = process.env.SITE_URL || "https://amswaterpark.com";

export default defineConfig({
  site,
  // The site has no database, login, CMS, or server-side rendering requirement.
  // It builds to static assets, then the dedicated Worker below serves those assets.
  output: "static",
  vite: { plugins: [tailwindcss()] },
  integrations: site ? [sitemap()] : []
});
