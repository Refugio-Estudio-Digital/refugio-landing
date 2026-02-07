// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://refugioestudio.netlify.app/',
    vite: {
        plugins: [tailwindcss()],
    },
  integrations: [sitemap(), react()],
  experimental: {
        fonts: [
            {
                provider: fontProviders.fontsource(),
                name: 'Montserrat',
                cssVariable: '--font-montserrat',
            },
            {
                provider: fontProviders.fontsource(),
                name: 'Lora',
                cssVariable: '--font-lora',
            },
        ],
    },
});