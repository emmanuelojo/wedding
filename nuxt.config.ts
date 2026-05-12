import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt'
  ],
  googleFonts: {
    families: {
      'Cormorant+Garamond': [300, 400, 500, 600, 700],
      'Inter': [300, 400, 500, 600]
    },
    display: 'swap'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
