// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.css', '~/assets/styles/index.scss'],
  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@element-plus/nuxt'],
  colorMode: {
    classSuffix: '',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/element/index.scss" as *;`,
        },
      },
    },
  },
  elementPlus: {
    importStyle: 'scss',
  },
})
