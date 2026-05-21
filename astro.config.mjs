// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://box28012.com",

  vite: {
    plugins: [tailwindcss()]
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Libre Bodoni",
      cssVariable: "--font-brand",
      weights: [400, 500, 600, 700],
      styles: ["normal", "italic"],
      subsets: ["latin"],
    },
    {
      provider: fontProviders.local(),
      name: "Chulapa",
      cssVariable: "--font-sans",
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/chulapa/Chulapa-Regular.otf"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/chulapa/Chulapa-Bold.otf"],
          },
          {
            weight: 300,
            style: "normal",
            src: ["./src/assets/fonts/chulapa/Chulapa-Light.otf"],
          },
        ],
      },
    },
    {
      provider: fontProviders.google(),
      name: "DM Sans",
      cssVariable: "--font-dm",
      weights: [300, 400, 500, 700, 800, 900],
      styles: ["normal", "italic"],
      subsets: ["latin"],
    },
    // {
    //   provider: fontProviders.google(),
    //   name: "IBM Plex Sans Condensed",
    //   cssVariable: "--font-ibm",
    //   weights: [300, 400, 500, 700, 800, 900],
    //   styles: ["normal", "italic"],
    //   subsets: ["latin"],
    // }
  ],

  integrations: [icon()]
});
