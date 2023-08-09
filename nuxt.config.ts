// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  build: {
    transpile: ['@headlessui/vue'],
  },
  
})
