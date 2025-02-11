<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to YOGAMOS</h1>
          <h2>A yoga delivery to the world.</h2>
          <ColorScheme
            ><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']"
          /></ColorScheme>
        </div>
      </template>
      <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank"
        >Open Nuxt UI Documentation</UButton
      >
    </UCard>
  </UContainer>
</template>
