export default defineNuxtConfig({
  css: ['@/assets/style/main.scss'],
  vite: {
    assetsInclude: ['**/*.mov'],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/style/_variables" as *;
                            @use "@/assets/style/extends" as *;`
        }
      }
    }
  },
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-icon'
  ],
  googleFonts: {
    families: {
      Lato: {
        wght: [300, 400, 700],
        ital: [300]
      }
    }
  },
  typescript: {
    typeCheck: true
  }
})
