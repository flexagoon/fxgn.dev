// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import playformCompress from "@playform/compress";

import tailwindcss from "@tailwindcss/vite";

const codeTheme = {
  settings: [
    {
      settings: {
        background: "#ffffff",
        foreground: "#000000",
      },
    },
    {
      scope: ["keyword.control", "keyword.other"],
      settings: {
        fontStyle: "underline bold",
      },
    },
    {
      scope: ["constant.language"],
      settings: {
        fontStyle: "underline italic",
      },
    },
    {
      scope: "support.function",
      settings: {
        fontStyle: "bold italic",
      },
    },
    {
      scope: "string",
      settings: {
        foreground: "#666666",
        fontStyle: "italic",
      },
    },
    {
      scope: ["comment"],
      settings: {
        foreground: "#888888",
        fontStyle: "italic",
      },
    },
  ],
};

export default defineConfig({
  site: "https://fxgn.dev",

  trailingSlash: "always",

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
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
