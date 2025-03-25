<script setup lang="ts">
  // import * as locales from '@nuxt/ui/locale'

  // const { locale } = useI18n()
  // const lang = computed(() => locales[locale.value].code)
  // const dir = computed(() => locales[locale.value].dir)

  // useHead({
  //   htmlAttrs: {
  //     lang,
  //     dir
  //   }
  // })

  // const colorMode = useColorMode()

  // const color = computed(() =>
  //   colorMode.value === 'dark' ? '#111827' : 'white'
  // )

  useHead({
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
      // {
      //   key: 'theme-color',
      //   name: 'thcoloreme-color',
      //   content:
      // }
    ],
    link: [{ rel: 'icon', href: '/favicon.ico' }]
    // htmlAttrs: {
    //   lang: 'en'
    // }
  })

  useSeoMeta({
    titleTemplate: '%s - Yogamos | Yoga for Mind & Body',
    ogImage: 'https://yogamos.pe/social-card.png',
    twitterImage: 'https://yogamos.pe/social-card.png',
    twitterCard: 'summary_large_image',
    description:
      'Experience the benefits of yoga with Yogamos. Improve flexibility, strength, and mindfulness through guided sessions and community support.',
    ogType: 'website',
    ogSiteName: 'Yogamos',
    ogTitle: 'Yogamos - Yoga for Mind & Body',
    ogDescription:
      'Join Yogamos for guided yoga sessions, wellness tips, and a supportive community. Enhance your health and well-being with us.',
    twitterTitle: 'Yogamos - Transform Your Mind & Body with Yoga',
    twitterDescription:
      'Discover the power of yoga with Yogamos. Improve flexibility, reduce stress, and build strength with our expert-led sessions.'
  })

  const { data: navigation } = await useAsyncData(
    'navigation',
    () => queryCollectionNavigation('docs'),
    {
      transform: data =>
        data.find(item => item.path === '/docs')?.children || []
    }
  )
  const { data: files } = useLazyAsyncData(
    'search',
    () => queryCollectionSearchSections('docs'),
    {
      server: false
    }
  )

  const links = [
    {
      label: 'About',
      icon: 'i-lucide-book',
      to: '/docs/getting-started'
    },
    {
      label: 'About',
      icon: 'i-lucide-credit-card',
      to: '/about'
    },
    {
      label: 'Blog',
      icon: 'i-lucide-pencil',
      to: '/blog'
    }
  ]

  provide('navigation', navigation)
</script>

<template>
  <!-- <UApp :locale="locales[locale]"> -->
  <UApp>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        shortcut="meta_k"
        :navigation="navigation"
        :links="links"
        :fuse="{ resultLimit: 42 }" />
    </ClientOnly>
  </UApp>
</template>
