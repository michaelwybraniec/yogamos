<script setup lang="ts">
  import { en, es, fr } from '@nuxt/ui/locale'

  const locale = ref('en')
</script>
<template>
  <ULocaleSelect v-model="locale" :locales="[en, es, fr]" />
</template>
