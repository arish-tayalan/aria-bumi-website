import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// No custom domain: the site stays on its free Cloudflare Pages address.
export default defineConfig({
  site: 'https://aria-bumi-website.pages.dev',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
