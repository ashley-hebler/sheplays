import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(
    {
      isr: {
        // caches all pages on first request and saves for 8 hours
        expiration: 60 * 60 * 8,
      },
    }
  ),
  integrations: [
    AstroPWA({
      manifest: {
        name: "Sheplays.net",
        short_name: "Sheplays.net",
        description: "Women's sports times and broadcasts",
        theme_color: "#011627ff",
        icons: [
          {
            src: "/favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
});