import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig, fontProviders } from 'astro/config'

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
    vite: { plugins: [tailwindcss()] },
})
