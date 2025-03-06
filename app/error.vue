<script setup lang="ts">
  import type { NuxtError } from '#app'

  const msg = ref('OMG Error!')

  defineProps({
    error: {
      type: Object as PropType<NuxtError>,
      required: true
    }
  })

  useHead({
    htmlAttrs: {
      lang: 'en'
    }
  })

  useSeoMeta({
    title: 'Page not found',
    description: 'We are sorry but this page could not be found.'
  })
</script>

<template>
  <div>{{ msg }}</div>
</template>
