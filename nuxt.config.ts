import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN',
      },
      title: 'Guany 的首页',
    },
  },
  css: ['~/assets/styles/main.css'],
  modules: ['@nuxtjs/color-mode', '@element-plus/nuxt'],
  colorMode: {
    classSuffix: '',
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `@use "~/assets/styles/element/index.scss" as element;`,
        },
      },
    },
  },
  elementPlus: {
    importStyle: 'scss',
    defaultLocale: 'zh-CN',
    themes: ['dark'],
  },
})
