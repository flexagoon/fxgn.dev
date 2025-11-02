// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";

import codeTheme from "./src/styles/shiki/codeTheme";
import caddyLang from "./src/styles/shiki/caddyfile.tmLanguage.json" assert {type: 'json'};

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
