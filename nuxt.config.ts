import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.css', '~/assets/styles/index.scss'],
  modules: ['@nuxtjs/color-mode', '@element-plus/nuxt'],
  colorMode: {
    classSuffix: '',
  },
  vite: {
    plugins: [tailwindcss()],
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
