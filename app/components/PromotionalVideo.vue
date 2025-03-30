<script setup lang="ts">
  import { useI18n } from '#imports'

  const { t } = useI18n()
  const colorMode = useColorMode()
  const spotlightSize = ref('300px')

  onMounted(() => {
    spotlightSize.value =
      colorMode.value === 'dark' ? '1000px' : '300px'
  })
</script>

<template>
  <div class="relative">
    <UPageCard
      variant="subtle"
      :class="`rounded-2xl [--spotlight-size:${spotlightSize}]`"
      :title="t('hero.title')"
      :description="t('hero.description')"
      orientation="horizontal"
      icon="i-mdi-yoga"
      spotlight
      layout="responsive"
      :ui="{ description: 'text-[18px]', title: 'text-[24px]' }">
      <NuxtImg
        src="/yogamos_logo.svg"
        :alt="t('hero.logo_alt')"
        sizes="100vw sm:50vw md:400px"
        densities="x1 x2"
        class="w-full"
        placeholder="/yogamos_logo.svg" />
    </UPageCard>
  </div>
</template>
