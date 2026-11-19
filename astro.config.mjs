import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig, fontProviders } from 'astro/config'

import { CDN_BASE_URL } from './src/lib/image-url'

export default defineConfig({
    integrations: [
        icon({
            // Only the sets the page uses, so the build never pulls in the full
            // Iconify catalogue.
            include: {
                fa: ['paper-plane', 'pencil'],
                'fa-brands': ['linkedin'],
                'fa-solid': ['envelope', 'university'],
                mdi: ['menu', 'close'],
            },
        }),
    ],
    fonts: [
        {
            cssVariable: '--font-quattrocento-sans',
            name: 'Quattrocento Sans',
            provider: fontProviders.google(),
            weights: [400, 700],
            styles: ['normal'],
        },
        {
            cssVariable: '--font-rancho',
            name: 'Rancho',
            provider: fontProviders.google(),
            weights: [400],
            styles: ['normal'],
        },
    ],
    // Astro hashes its own scripts and styles into a CSP meta tag. Headers a
    // meta tag cannot carry (HSTS, frame-ancestors, nosniff) belong to the proxy.
    security: {
        csp: {
            directives: [
                "default-src 'self'",
                `img-src 'self' data: ${CDN_BASE_URL}`,
                "font-src 'self'",
                // Cloudflare Web Analytics reports here; its beacon is allowed below.
                "connect-src 'self' https://cloudflareinsights.com",
                'frame-src https://www.youtube-nocookie.com',
                "object-src 'none'",
                "base-uri 'self'",
                "form-action 'self'",
                'upgrade-insecure-requests',
            ],
            scriptDirective: {
                // 'self' covers Cloudflare's same-origin email-decode script.
                resources: ["'self'", 'https://static.cloudflareinsights.com'],
            },
        },
    },
    vite: { plugins: [tailwindcss()] },
})
