// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxtjs/i18n',
    'nuxt-og-image',
    '@nuxtjs/mdc'
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  ui: {
    // fonts: false
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: ['/', '/docs'],
      crawlLinks: true
    }
  },

  typescript: {
    strict: false
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    locales: [
      { code: 'es', iso: 'en-ES', name: 'Español' },
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'fr', iso: 'fr-fr', name: 'Français' }
    ]
  }
})
