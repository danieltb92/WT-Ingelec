import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// Import the Vercel adapter
// import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: "https://wtingelec.com.co",
  integrations: [tailwind(), sitemap()],
  // output: 'server',
  // adapter: vercel(),
  // vite: {
  //   server: {
  //     allowedHosts:
  //       ['all',
  //       'million-ext-cult-affiliation.trycloudflare.com'] // This allows the server to accept requests from any host, which is useful for development environments.
  //   }
  // }
});
