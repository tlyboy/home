import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
  },
  runtimeConfig: {
    githubToken: '',
  },
})
