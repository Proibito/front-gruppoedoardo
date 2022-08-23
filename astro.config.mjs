import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: cloudflare({ mode: "directory" })
});