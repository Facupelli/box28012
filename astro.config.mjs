// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import { SITE_URL } from "./site.config.mjs";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: "DM Sans",
      cssVariable: "--font-dm",
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin"],
    },
    {
      provider: fontProviders.local(),
      name: "Chulapa",
      cssVariable: "--astro-font-chulapa",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/chulapa/Chulapa-Light.otf"],
            weight: 300,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/chulapa/Chulapa-Regular.otf"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/chulapa/Chulapa-Bold.otf"],
            weight: 700,
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Pontejos Display",
      cssVariable: "--astro-font-pontejos-display",
      options: {
        variants: [
          {
            src: [
              "./src/assets/fonts/pontejos/MTMPontejos2Test-EstrechaSuelta.otf",
            ],
            weight: 400,
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Pontejos Identity",
      cssVariable: "--astro-font-pontejos-identity",
      options: {
        variants: [
          {
            src: [
              "./src/assets/fonts/pontejos/MTMPontejos2Test-AnchaApretada.otf",
            ],
            weight: 400,
            style: "normal",
          },
        ],
      },
    },
  ],

  integrations: [icon()],
});
