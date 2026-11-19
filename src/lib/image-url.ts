// Images live in the `yasinrofcanin` DigitalOcean Space, not in this repo, and
// are pre-converted to webp, so they are served untouched.
export const CDN_BASE_URL = 'https://yasinrofcanin.fra1.cdn.digitaloceanspaces.com'

export const imageUrl = (name: string): string => `${CDN_BASE_URL}/images/${name}`
