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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    storage: {
      data: {
        driver: 'vercelKV'
        /* Vercel KV driver options */
      }
    }
  }
});