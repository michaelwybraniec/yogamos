<script setup lang="ts">
  const { data: page } = await useAsyncData('pricing', () =>
    queryCollection('pricing').first()
  )

  // Ensure page data is available before setting meta tags
  watchEffect(() => {
    if (page.value) {
      useSeoMeta({
        title: page.value?.title,
        ogTitle: page.value?.title,
        description: page.value?.description,
        ogDescription: page.value?.description
      })
    }
  })

  // Define Open Graph Image Component
  defineOgImageComponent('Saas')

  // Toggle between Monthly & Yearly pricing
  const isYearly = ref<'0' | '1'>('0')

  const items = shallowRef([
    { label: 'Monthly', value: '0' },
    { label: 'Yearly', value: '1' }
  ])
</script>

<template>
  <div v-if="page">
    <!-- Page Hero Section -->

    <UPageHero v-bind="page.hero">
      <template #links>
        <UTabs
          v-model="isYearly"
          :items="items"
          color="neutral"
          class="w-72"
          :ui="{ list: 'rounded-full', indicator: 'rounded-full' }" />
      </template>
    </UPageHero>

    <!-- Pricing Plans -->
    <UContainer>
      <UPricingPlans scale>
        <UPricingPlan
          v-for="(plan, index) in page.plans"
          :key="index"
          :title="plan.title"
          :description="plan.description"
          :features="plan.features"
          :price="
            isYearly === '1' ? plan.price.year : plan.price.month
          "
          :billing-cycle="isYearly === '1' ? '/year' : '/month'" />
      </UPricingPlans>
    </UContainer>

    <UPageSection>
      <UPageLogos>
        <UIcon
          v-for="icon in page.logos.icons"
          :key="icon"
          :name="icon"
          class="h-12 w-12 flex-shrink-0 text-(--ui-text-muted)" />
      </UPageLogos>
    </UPageSection>

    <!-- FAQ Section -->
    <UPageSection
      :title="page.faq?.title"
      :description="page.faq?.description">
      <UPageAccordion
        :items="page.faq?.items ?? []"
        multiple
        class="mx-auto max-w-7xl" />
    </UPageSection>
  </div>
</template>
