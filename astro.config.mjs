import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
// import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://wtingelec.com.co",
  base: "/",
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

