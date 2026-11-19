# yasinrofcanin.com

Personal homepage for Yasin Rofcanin. A single-page Astro site that ships as a
**static build** — there is no server runtime — so it is served as plain files by the shared Caddy on the
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

The sources were converted to webp up front (583KB -> 429KB), so the site serves
them untouched with plain `<img>` tags. Every reference goes through `imageUrl()`
in `src/lib/image-url.ts`, so the CDN host appears exactly once.

To add or replace an image: convert it to webp, upload it under `images/` in
that Space with `Cache-Control: public, max-age=31536000, immutable`, and
reference it with `imageUrl("name.webp")`.

## Develop

```bash
bun install
bun run dev        # astro dev
bun run build      # static site in dist/
bun run typecheck  # astro check
bun run lint && bun run format:check && bun run test
```

## Deploy

Pushing to `main` builds the site and uploads `dist/` to
`/opt/proxy/sites/yasinrofcanin` on the droplet. Caddy serves it from disk, so
there is no container and nothing to restart — the new files are live the
moment rsync finishes. See `.github/workflows/deploy.yml`.
