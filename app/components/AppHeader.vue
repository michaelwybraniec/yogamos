<script setup lang="ts">
  // import { useRoute } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  import { useLocalePath } from '#i18n'

  // const route = useRoute()
  const { t } = useI18n()
  const localePath = useLocalePath()

  const items = computed(() => [
    {
      label: t('nav.about'),
      to: localePath('/about')
    },
    {
      label: t('nav.blog'),
      to: localePath('/blog')
    },
    {
      label: t('nav.pricing'),
      to: localePath('/pricing')
    }
  ])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink :to="localePath('/')">
        <!-- ✅ Ensure homepage is localized -->
        <LogoPro class="h-6 w-auto shrink-0" />
      </NuxtLink>
      <NuxtLink :to="localePath('/')"><b>YOGAMOS?</b></NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link" />

    <template #right>
      <LangSwitcher variant="ghost" />
      <UColorModeSwitch />
      <UButton
        :label="t('nav.login')"
        color="neutral"
        variant="ghost"
        :to="localePath('/login')" />
      <UButton
        :label="t('nav.signup')"
        color="neutral"
        trailing-icon="i-lucide-arrow-right"
        class="hidden lg:flex"
        :to="localePath('/signup')" />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5" />

      <USeparator class="my-6" />

      <UButton
        :label="t('nav.login')"
        color="neutral"
        variant="subtle"
        :to="localePath('/login')"
        block
        class="mb-3" />
      <UButton
        :label="t('nav.signup')"
        color="neutral"
        :to="localePath('/signup')"
        block />
    </template>
  </UHeader>
  <UBanner
    to="https://one-front.com"
    size="xs"
    target="_blank"
    class="bg-stone-500 text-stone-50"
    icon="i-lucide-info"
    :title="t('nav.banner')" />
</template>
