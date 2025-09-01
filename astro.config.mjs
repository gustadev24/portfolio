// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { ALL_LOCALES, DEFAULT_LOCALE } from './src/i18n/index';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      SITE_URL: envField.string({ context: 'client', access: 'public', default: 'http://localhost:4321' })
    }
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  i18n: {
    locales: ALL_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
