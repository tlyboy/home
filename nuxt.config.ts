// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/styles/main.css',
  ],
  modules: [
    '@vue-macros/nuxt',
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
