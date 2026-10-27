import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Domain decided; register ariabumiresources.com and point it at Cloudflare Pages.
export default defineConfig({
  site: 'https://ariabumiresources.com',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
