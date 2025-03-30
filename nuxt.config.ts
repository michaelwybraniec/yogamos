export default defineNuxtConfig({
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/eslint',
    '@nuxt/ui-pro',
    '@nuxt/content',
    'nuxt-og-image',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/test-utils/module',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    'nuxt-gtag'
  ],

  devtools: { enabled: true },

  app: {
    baseURL: '/',
    head: {
      title: 'Yogamos',
      htmlAttrs: {
        lang: 'en'
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://yogamos.es',
    name: 'Yogamos?',
    defaultLocale: 'en',
    indexable: true
  },

  content: {
    renderer: {
      anchorLinks: false
    },
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

  experimental: {
    viewTransition: true
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: ['/', '/es', '/fr'],
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

  gtag: {
    tags: ['G-R07RC0PQFE', 'GTM-KRT53PKV']
  },

  i18n: {
    bundle: {
      optimizeTranslationDirective: false // recommended by the Nuxt i18n team because it will be deprecated
    },
    defaultLocale: 'en',
    langDir: '../locales/',
    detectBrowserLanguage: false,
    lazy: true,
    // locales: ['en', 'es', 'fr']
    locales: [
      {
        code: 'es',
        name: 'Español',
        file: 'es.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'fr',
        name: 'Français',
        file: 'fr.json'
      }
    ]
  }
})
