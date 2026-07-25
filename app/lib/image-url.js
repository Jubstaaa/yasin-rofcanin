// Images live in the `yasinrofcanin` DigitalOcean Space, not in this repo.
// The site is a static export, so there is no /_next/image optimizer at
// runtime; the sources were converted to webp up front instead (583KB -> 429KB,
// matching what Vercel's optimizer used to serve).
const CDN_BASE_URL = "https://yasinrofcanin.fra1.cdn.digitaloceanspaces.com";

export const imageUrl = (name) => `${CDN_BASE_URL}/images/${name}`;
