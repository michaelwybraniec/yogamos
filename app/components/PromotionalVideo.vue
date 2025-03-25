<script setup lang="ts">
  const colorMode = useColorMode()
</script>

<template>
  <div class="relative">
    <UPageCard
      variant="subtle"
      :class="
        colorMode.value === 'dark'
          ? 'rounded-2xl [--spotlight-size:1000px]'
          : 'rounded-2xl [--spotlight-color:var(--dusk-500)] [--spotlight-size:300px]'
      "
      title="Find Balance with Yogamos!"
      description="Experience the benefits of yoga with Yogamos. Improve flexibility, strength, and mindfulness through guided sessions and community support. It is your space to reconnect with yourself through yoga. Whether you’re just starting or deepening your practice, we provide guided sessions, meditation practices, and wellness insights to support your journey. "
      orientation="horizontal"
      icon="i-mdi-yoga"
      spotlight
      layout="responsive"
      :ui="{
        description: 'text-[18px]',
        title: 'text-[24px]'
      }">
      <NuxtImg
        src="/yogamos_logo.svg"
        alt="Yogamos Logo"
        sizes="100vw sm:50vw md:400px"
        densities="x1 x2"
        class="w-full"
        placeholder="/yogamos_logo.svg" />
    </UPageCard>
  </div>
</template>
