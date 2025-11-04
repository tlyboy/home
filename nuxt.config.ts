import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-09-11',
  devtools: { enabled: true },
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
    public: {
      icpNumber: '',
      icpLink: '',
      policeNumber: '',
      policeLink: '',
    },
  },
})
