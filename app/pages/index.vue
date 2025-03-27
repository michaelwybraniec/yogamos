<script setup lang="ts">
  const colorMode = useColorMode()

  const { data: page } = await useAsyncData('index', () =>
    queryCollection('index').first()
  )

  useSeoMeta({
    titleTemplate: '',
    title: page.value?.title,
    ogTitle: page.value?.title,
    description: page.value?.description,
    ogDescription: page.value?.description
  })
</script>

<template>
  <div v-if="page">
    <UPageHero
      :headline="page.hero.headline"
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links">
      <PromotionalVideo />
      <StarsBg v-show="colorMode.value === 'dark'" />
    </UPageHero>

    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :orientation="section.orientation"
      :reverse="section.reverse"
      :features="section.features">
      <ImagePlaceholder />
    </UPageSection>

    <UPageSection
      :title="page.features.title"
      :description="page.features.description">
      <UPageGrid v-if="colorMode.value">
        <UPageCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
          spotlight
          class="rounded-2xl"
          :style="{
            '--spotlight-size':
              colorMode.value === 'dark' ? '1000px' : '300px', // Ensure same value on both SSR and client
            '--spotlight-color':
              colorMode.value === 'dark'
                ? undefined
                : 'var(--dusk-400)'
          }" />
      </UPageGrid>
    </UPageSection>

    <UPageSection
      id="testimonials"
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description">
      <UPageColumns class="xl:columns-4">
        <UPageCard
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          variant="subtle"
          :description="testimonial.quote"
          :ui="{
            description:
              'before:content-[open-quote] after:content-[close-quote]'
          }">
          <template #footer>
            <UUser
              v-bind="testimonial.user"
              size="lg" />
          </template>
        </UPageCard>
      </UPageColumns>
    </UPageSection>

    <USeparator />

    <UPageCTA
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden">
      <div
        class="absolute left-1/2 size-40 -translate-x-1/2 -translate-y-80 transform rounded-full blur-[250px] sm:size-50 dark:bg-(--ui-primary)" />

      <StarsBg v-show="colorMode.value === 'dark'" />
    </UPageCTA>
  </div>
</template>
