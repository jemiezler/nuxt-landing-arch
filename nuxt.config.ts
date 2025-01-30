import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/fonts', '@nuxt/image'],
  fonts: {
    families: [
      { name: 'Roboto', provider: 'google' },
    ],
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    baseURL: "/nuxt-landing-arch/", // Set GitHub Pages base URL
  },
  nitro: {
    preset: "static", // 👈 Ensure Nuxt builds a static site
    prerender: {
      routes: ["/"], // 👈 Ensures the index page is generated
    },
  },
  routeRules: {
    "/**": { prerender: true }, // 👈 Ensures all routes are pre-generated
  },
});