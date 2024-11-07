// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
      '~/assets/main.css'
  ],
  modules: [
    '@pinia/nuxt',
    'nuxt-swiper'

  ],
})
