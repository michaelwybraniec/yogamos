<script setup lang="ts">
  import { useI18n } from '#imports'

  const { locale, setLocale } = useI18n()

  const changeLocale = async (newLocale: 'es' | 'en' | 'fr') => {
    await setLocale(newLocale)
  }

  const items = [
    { label: '🇬🇧 English', value: 'en' },
    { label: '🇪🇸 Español', value: 'es' },
    { label: '🇫🇷 Français', value: 'fr' }
  ]

  const selectedLocale = ref(locale.value)
</script>

<template>
  <USelect
    v-model="selectedLocale"
    :items="items"
    @update:model-value="changeLocale" />
</template>
