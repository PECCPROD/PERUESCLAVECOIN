import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://PECCPROD.github.io',
  base: '/PERUESCLAVECOIN/',
  vite: {
    plugins: [tailwindcss()]
  }
});