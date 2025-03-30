<script setup lang="ts">
  import { useToast, useI18n } from '#imports'

  const { t } = useI18n()

  const columns = ref([])

  watchEffect(() => {
    columns.value = [
      {
        label: t('footer.yoga_resources'),
        children: [
          { label: t('footer.asana_library') },
          { label: t('footer.meditation_guides') },
          { label: t('footer.breathwork_techniques') },
          { label: t('footer.philosophy_sutras') }
        ]
      },
      {
        label: t('footer.practice'),
        children: [
          { label: t('footer.online_classes') },
          { label: t('footer.workshops') },
          { label: t('footer.challenges') },
          { label: t('footer.community_forum') }
        ]
      },
      {
        label: t('footer.about_us'),
        children: [
          { label: t('footer.our_story') },
          { label: t('footer.yoga_retreats') },
          { label: t('footer.instructors') },
          { label: t('footer.blog') }
        ]
      }
    ]
  })

  const toast = useToast()
  const email = ref('')
  const loading = ref(false)

  function onSubmit() {
    loading.value = true

    toast.add({
      title: t('footer.namaste_title'),
      description: t('footer.namaste_description')
    })
  }
</script>

<template>
  <USeparator class="h-px" />
  <UFooter :ui="{ top: 'border-b border-[var(--ui-border)]' }">
    <template #top>
      <UContainer>
        <UFooterColumns
          :columns="columns"
          class="p-10">
          <template #right>
            <form @submit.prevent="onSubmit">
              <UFormField
                name="email"
                :label="t('footer.join_journey')"
                size="lg">
                <UInput
                  v-model="email"
                  type="email"
                  class="w-full"
                  :placeholder="t('footer.email_placeholder')">
                  <template #trailing>
                    <UButton
                      type="submit"
                      size="xs"
                      color="primary"
                      :label="t('footer.join')" />
                  </template>
                </UInput>
              </UFormField>
            </form>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-sm text-(--ui-text-muted)">
        {{
          t('footer.copyright', { year: new Date().getFullYear() })
        }}
        <NuxtLink
          class="font-bold"
          to="https://one-front.com">
          ONE-FRONT™
        </NuxtLink>
      </p>
    </template>

    <template #right>
      <UColorModeButton />

      <UButton
        to="https://github.com/nuxt-ui-pro/saas"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="neutral"
        variant="ghost" />
    </template>
  </UFooter>
</template>
