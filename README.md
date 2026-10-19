# yasinrofcanin.com

Personal homepage for Yasin Rofcanin. A single-page Next.js app that ships as a
**static export** — every route prerenders, there are no API routes and no
server actions — so it is served as plain files by the shared Caddy on the
droplet rather than by a Node process.

Not to be confused with `yasin-rofcanin-site`, the separate Payload-backed beta
at `beta.yasinrofcanin.com`. The two stay independent.

## Provenance

This repository was reconstructed on 2026-07-25. The site had been deployed to
Vercel from the CLI and was never connected to git, so the source was pulled
back out of the production deployment (`dpl_6x4tMan6Fr3JftyZqcoau8vKpUKV`)
through the Vercel files API. The recovered tree was verified against the live
page: identical visible text, to the character.

## Images

The photographs are **not in this repository**. They live in the `yasinrofcanin`
DigitalOcean Space and are served from its CDN:

```
https://yasinrofcanin.fra1.cdn.digitaloceanspaces.com/images/<name>.webp
```

A static export has no `/_next/image` optimizer, so the sources were converted
to webp up front (583KB -> 429KB, matching what Vercel's optimizer used to
serve) and `next.config.mjs` sets `images.unoptimized`. Every reference goes
through `imageUrl()` in `app/lib/image-url.js`, so the CDN host appears exactly
once.

To add or replace an image: convert it to webp, upload it under `images/` in
that Space with `Cache-Control: public, max-age=31536000, immutable`, and
reference it with `imageUrl("name.webp")`.

## Develop

```bash
bun install
bun run dev
```

## Deploy

Pushing to `main` builds the export and rsyncs `out/` to
`/opt/proxy/sites/yasinrofcanin` on the droplet. Caddy serves it from disk, so
there is no container and nothing to restart — the new files are live the
moment rsync finishes. See `.github/workflows/deploy.yml`.
