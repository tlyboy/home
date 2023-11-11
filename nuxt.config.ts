// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/styles/main.css',
    '~/assets/styles/nprogress.css',
  ],
  modules: [
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
  ],
  colorMode: {
    classSuffix: '',
  },
  imports: {
    dirs: ['stores'],
  },
})
