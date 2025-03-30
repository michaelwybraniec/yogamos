<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import type { Collections } from '@nuxt/content'

  const { locale } = useI18n()
  const colorMode = useColorMode()

  const collection = computed(() => {
    return (locale.value === 'en' ? 'about_en' : `about_${locale.value}`) as keyof Collections
  })

  const { data: page } = await useAsyncData(
    collection.value,
    async () =>
      (await queryCollection(collection.value).first()) as
        | Collections['about_en']
        | Collections['about_fr']
        | Collections['about_es']
  )

  if (!page.value)
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found'
    })

  // Define Open Graph Image Component
  defineOgImageComponent('Saas')

  const features = [
    {
      title: page.value.mission.title,
      description: page.value.mission.description,
      icon: 'i-lucide-smile'
    },
    {
      title: page.value.story.title,
      description: page.value.story.description,
      icon: 'i-lucide-rocket'
    },
    {
      title: page.value.founders.title,
      description: page.value.founders.description,
      icon: 'i-lucide-user-circle'
    }
  ]
</script>

<template>
  <div v-if="!page">
    <UContainer>Loading...</UContainer>
  </div>

  <div v-else>
    <UPageSection
      :title="page.title"
      :description="page.description"
      :features="features"
      orientation="horizontal"
      icon="i-lucide-users"
      reverse>
      <NuxtImg
        src="/yogamos_logo.svg"
        alt="Yogamos Logo"
        sizes="100vw sm:50vw md:400px"
        densities="x1 x2"
        placeholder="/yogamos_logo.svg"
        class="w-full rounded-[calc(var(--ui-radius)*2)]" />
    </UPageSection>

    <USeparator />
    <UContainer>
      <UCard variant="soft">
        <UPageGrid class="gap-6">
          <UPageCard
            v-for="(person, index) in page.founders.team"
            :key="index"
            orientation="vertical"
            reverse
            variant="soft"
            class="inverted flex flex-col rounded-xl p-6 text-center">
            <StarsBg v-show="colorMode.value === 'dark'" />

            <div class="flex justify-center">
              <client-only>
                <NuxtImg
                  :src="person.avatar.src"
                  alt="Team member avatar"
                  placeholder
                  class="h-auto w-60 rounded-full border-[10px] sm:w-60 md:w-60 lg:w-60"
                  :style="{
                    borderColor: colorMode.value === 'dark' ? 'var(--light-900)' : 'var(--dusk-100)'
                  }"
                  densities="x1 x2" />
              </client-only>
            </div>

            <div class="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              {{ person.name }}
            </div>
            <div class="text-md text-gray-600 dark:text-gray-400">
              {{ person.role }}
            </div>
            <div class="text-sm text-gray-500 italic dark:text-gray-400">
              {{ person.bio }}
            </div>
          </UPageCard>
        </UPageGrid>
        <template #footer>
          <div class="text-center">
            {{ page.founders.description }}
          </div>
        </template>
      </UCard>
    </UContainer>

    <!-- FAQ Section -->
    <UPageSection
      :title="page.faq?.title"
      :description="page.faq?.description">
      <UPageAccordion
        :items="page.faq?.items ?? []"
        multiple
        class="mx-auto max-w-4xl" />
    </UPageSection>
  </div>
</template>
