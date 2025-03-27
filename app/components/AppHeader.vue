<script setup lang="ts">
  const route = useRoute()

  const items = computed(() => [
    {
      label: 'Docs',
      to: '/docs',
      active: route.path.startsWith('/docs')
    },
    {
      label: 'Pricing',
      to: '/pricing'
    },
    {
      label: 'About',
      to: '/about'
    },
    {
      label: 'Blog',
      to: '/blog'
    }
  ])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <LogoPro class="h-6 w-auto shrink-0" />
      </NuxtLink>
      <NuxtLink to="/"><b>YOGAMOS?</b></NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link" />

    <template #right>
      <LangSwitcher variant="ghost" />
      <UColorModeSwitch />
      <!-- <UColorModeSelect /> -->
      <UButton
        label="Login"
        color="neutral"
        variant="ghost"
        to="/login" />
      <UButton
        label="Sign up"
        color="neutral"
        trailing-icon="i-lucide-arrow-right"
        class="hidden lg:flex"
        to="/signup" />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5" />

      <USeparator class="my-6" />

      <UButton
        label="Sign in"
        color="neutral"
        variant="subtle"
        to="/login"
        block
        class="mb-3" />
      <UButton
        label="Sign up"
        color="neutral"
        to="/signup"
        block />
    </template>
  </UHeader>
  <UBanner
    to="https://one-front.com"
    size="xs"
    target="_blank"
    class="bg-stone-500 text-stone-50"
    icon="i-lucide-info"
    title="The Yogamos service is currently in development, powered by ONE-FRONT™." />
</template>
