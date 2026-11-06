# BOX 28012

Astro website for https://box28012.com. Requires Node >=22.12 and pnpm.

## Commands

- `pnpm dev`: start local development.
- `pnpm build:production`: build the live site, allowing search indexing.
- `pnpm build:preview`: build a preview, with `noindex, nofollow`.
- `pnpm check`: check types.
- `pnpm lint`: lint code.

Builds require `SITE_ENV=production` or `SITE_ENV=preview`. The build scripts
above set it for you. Local development needs no setting.

## Deployment

Upload `dist/` to the static web host. Use preview builds for staging, ideally
with password protection. Never publish a production build to a preview host.

`pnpm deploy` uses Cloudflare for client previews only, not production.

Configure the production host to:

- Redirect HTTP, www, and other domains to `https://box28012.com`.
- Redirect page URLs to trailing slashes and remove `index.html` from URLs.
- Return 404 for missing pages instead of showing Home.
- Allow access to `robots.txt` and `sitemap.xml`, without blocking indexing.

Disable old public previews. Submit `/sitemap.xml` to Google Search Console
and Bing Webmaster Tools.

## SEO files

- `site.config.mjs`: domain and indexing settings.
- `src/components/base-head.astro`: shared search and social metadata.
- `src/pages/`: page titles, descriptions, sitemap, and crawler rules.
- `src/data/home.ts`: business details and structured data.

Search crawlers and Google-Extended are allowed. Selected training bots are
blocked in `robots.txt`; these rules depend on crawlers respecting them.
