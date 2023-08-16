// https://nuxt.com/docs/api/configuration/nuxt-config
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
export default defineNuxtConfig({
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    transpile: ['@headlessui/vue'],
  },
  plugins: ['@/plugins/antd.ts'],
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
          // AntDesignVueResolver(),
        ],
      }),
    ],
  },
})
