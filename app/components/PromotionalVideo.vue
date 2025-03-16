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
          : 'rounded-2xl [--spotlight-color:var(--dusk-800)] [--spotlight-size:100px]'
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
      }"
    >
      <NuxtImg
        src="/yogamos_logo.svg"
        alt="Yogamos Logo"
        sizes="100vw sm:50vw md:400px"
        densities="x1 x2"
        placeholder="/yogamos_logo.svg"
      />
    </UPageCard>
    <!-- <UPageCard
      title="Tailwind CSS"
      description="Nuxt UI v3 integrates with latest Tailwind CSS v4 beta, bringing significant improvements."
      icon="i-simple-icons-tailwindcss"
      orientation="horizontal"
    >
      <img src="/yogamos_logo.svg" alt="Tailwind CSS" class="w-full" />
    </UPageCard> -->
  </div>
</template>
