# Amsterdam Waterpark visitor guide

Independent Indonesian and English information for the Pasar Kemis, Tangerang venue. This is not an operator site or ticket seller.

Use the pinned pnpm version: install with `pnpm install --frozen-lockfile`, then run `pnpm check`, `pnpm test`, `pnpm build` and `pnpm exec wrangler deploy --dry-run`. Astro builds eight language/topic pages and a noindex error page to ignored `dist/`. Source assets and reproducible icon generation are included. The verified Cloudflare project is `amswaterpark`.

The Worker preserves path/query in canonical HTTP/www redirects, serves static ASSETS with real 404 status, and proxies a bounded regional Open-Meteo forecast request. The forecast is not a poolside sensor or venue opening decision. Legal pages retain their noindex policy and are excluded from the sitemap.

Google Maps and Google Fonts are external services. Analytics loads only after explicit consent. Cookie Settings immediately applies refusal, including when local storage cannot save it; session markers help avoid restoring an old grant in the same tab. No account, booking, contact form or feedback email is provided.

See [research notes](research.md) and [image notes](PHOTO_MANIFEST.md). Source-platform attribution alone is not evidence of image reuse permission. Existing images are retained as neutral reference material without adding a licence, photographer or verified-location claim.

Local checks do not establish production status, narrow-screen visual geometry, navigation operation or actual browser image loading. Those require a separate final verification.
