/** @type {import('next').NextConfig} */
const nextConfig = {
  // Every route prerenders — no API routes, no server actions, nothing dynamic —
  // so the site ships as plain files served by Caddy rather than a Node
  // container. That is zero RAM on a droplet with about 200MB to spare.
  output: "export",
  images: {
    // A static export has no /_next/image optimizer. The sources were converted
    // to webp ahead of time, so serving them untouched costs nothing.
    unoptimized: true,
  },
};

export default nextConfig;
