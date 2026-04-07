// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/a11y", "@nuxt/hints", "@nuxt/image"],

  ssr: true,

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/events"],
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
      meta: [{ name: "theme-color", content: "#0b0d12" }],
    },
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
});
