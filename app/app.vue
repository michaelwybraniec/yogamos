<script setup lang="ts">
  import * as locales from '@nuxt/ui-pro/locale'
  import { useI18n } from '#i18n'

  const { locale } = useI18n()
  const config = useRuntimeConfig()
  const lang = computed(() => locales[locale.value].code)
  const dir = computed(() => locales[locale.value].dir)
  // const { t } = useI18n()
  // const localePath = useLocalePath()

  useHead({
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${config.app.baseURL}favicon.ico`
      }
    ],
    htmlAttrs: {
      lang,
      dir
    }
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

  // const links = [
  //   {
  //     label: t('nav.about'),
  //     icon: 'i-lucide-credit-card',
  //     to: localePath('about')
  //   },
  //   {
  //     label: t('nav.blog'),
  //     icon: 'i-lucide-pencil',
  //     to: localePath('blog')
  //   },
  //   {
  //     label: t('nav.pricing'),
  //     icon: 'i-lucide-money',
  //     to: localePath('pricing')
  //   }
  // ]
</script>

<template>
  <UApp :locale="locales[locale]">
    <NuxtLoadingIndicator color="red" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
