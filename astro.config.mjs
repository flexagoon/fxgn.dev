// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";

import codeTheme from "./src/styles/shiki/codeTheme";
import caddyLang from "./src/styles/shiki/caddyfile.tmLanguage.json" assert { type: "json" };

export default defineConfig({
  site: "https://fxgn.dev",

  trailingSlash: "never",

  integrations: [
    mdx(),
    sitemap(),
    playformCompress({
      Exclude: ["./images/logo-.*"],
    }),
  ],

  experimental: {
    fonts: [
      {
        provider: fontProviders.local(),
        name: "Inter",
        cssVariable: "--font-inter",
        options: {
          variants: [
            {
              style: "normal",
              src: ["./src/styles/fonts/subset/InterVariable.woff2"],
            },
            {
              style: "italic",
              src: ["./src/styles/fonts/subset/InterVariable-Italic.woff2"],
            },
          ],
        },
      },
    ],
  },

  markdown: {
    shikiConfig: {
      theme: codeTheme,
      langs: [
        {
          aliases: ['caddy', 'caddyfile'],
          ...caddyLang
        }
      ]
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
