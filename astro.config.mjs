// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";

import { SITE_URL } from "./site.config.mjs";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  vite: {
    plugins: [tailwindcss()]
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Libre Bodoni",
      cssVariable: "--font-brand",
      weights: [400, 600],
      styles: ["normal"],
      subsets: ["latin"],
    },
    {
      provider: fontProviders.google(),
      name: "DM Sans",
      cssVariable: "--font-dm",
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin"],
    },
  ],

  integrations: [icon()]
});
