import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: "https://positivustheme.vercel.app",
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel(),
  vite: {
    server: {
      allowedHosts:
        'all' // This allows the server to accept requests from any host, which is useful for development environments.   
    }
  }
});

