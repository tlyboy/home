import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      brand: {
        primary: 'var(--brand-primary)',
        primaryDark: 'var(--brand-primary-dark)',
        light: 'var(--brand-light)',
        dark: 'var(--brand-dark)',
      },
    },
  },
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-brand-primary text-white cursor-pointer hover:bg-brand-primary-dark disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-brand-primary !outline-none'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
})
