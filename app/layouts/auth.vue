<template>
  <div class="overlay flex h-screen items-center justify-center">
    <UButton
      icon="i-lucide-chevron-left"
      to="/"
      size="xl"
      color="neutral"
      variant="subtle"
      class="absolute top-8 left-8 rounded-full" />

    <UPageCard variant="subtle" class="w-full max-w-sm">
      <slot />
    </UPageCard>
  </div>
</template>
