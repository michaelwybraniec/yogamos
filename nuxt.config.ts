// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui-pro',
    '@nuxt/content',
    'nuxt-og-image',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/test-utils/module'
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },

  ui: {
    // fonts: false
    // icons: ['ph', 'simple-icons']
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
  }

  // i18n: {
  //   strategy: 'no_prefix',
  //   defaultLocale: 'en',
  //   locales: [
  //     { code: 'es', iso: 'en-ES', name: 'Español' },
  //     { code: 'en', iso: 'en-US', name: 'English' },
  //     { code: 'fr', iso: 'fr-fr', name: 'Français' }
  //   ]
  // }
})
