<script setup lang="ts">
  const { data: page } = await useAsyncData('about', () =>
    queryCollection('about').first()
  )
  const route = useRoute()

  // Define Open Graph Image Component
  defineOgImageComponent('Saas')

  console.log({ page, routePath: route.path })
  // Ensure page data is available before setting meta tags
  // watchEffect(() => {
  //   if (page.value) {
  //     useSeoMeta({
  //       title: page.value?.title,
  //       ogTitle: page.value?.title,
  //       description: page.value?.description,
  //       ogDescription: page.value?.description
  //     })
  //   }
  // })
</script>

<template>
  <div v-if="!page">
    <UContainer>Loading...</UContainer>
  </div>

  <div v-else>
    <!-- <UPageHeader v-bind="page" class="py-[50px]" /> -->
    <UPageSection
      :title="page.title"
      :description="page.description"
    />
    <!-- {{ page }} -->

    <!-- <USeparator /> -->
    <UContainer>
      <UCard variant="soft">
        <UPageGrid class="gap-6">
          <UPageCard
            v-for="(person, index) in page.founders.team"
            :key="index"
            orientation="vertical"
            reverse
            variant="soft"
            class="inverted flex flex-col rounded-xl p-6 text-center"
          >
            <NuxtImg
              :src="person.avatar.src"
              alt="Team member avatar"
              placeholder
              class="h-auto w-24 rounded-full border-5 sm:w-[10cm] md:w-[10cm]"
              densities="x1 x2"
            />
            <div
              class="mt-4 text-xl font-semibold text-gray-900 dark:text-white"
            >
              {{ person.name }}
            </div>
            <div class="text-md text-gray-600 dark:text-gray-400">
              {{ person.role }}
            </div>
            <div
              class="text-sm text-gray-500 italic dark:text-gray-400"
            >
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
      :description="page.faq?.description"
    >
      <UPageAccordion
        :items="page.faq?.items ?? []"
        multiple
        class="mx-auto max-w-4xl"
      />
    </UPageSection>
  </div>
</template>
