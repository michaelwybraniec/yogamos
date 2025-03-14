<script setup lang="ts">
  import { useToast } from '#imports'

  const columns = [
    {
      label: 'Yoga Resources',
      children: [
        {
          label: 'Asana Library'
        },
        {
          label: 'Meditation Guides'
        },
        {
          label: 'Breathwork Techniques'
        },
        {
          label: 'Philosophy & Sutras'
        }
      ]
    },
    {
      label: 'Practice',
      children: [
        {
          label: 'Online Classes'
        },
        {
          label: 'Workshops'
        },
        {
          label: 'Challenges'
        },
        {
          label: 'Community Forum'
        }
      ]
    },
    {
      label: 'About Us',
      children: [
        {
          label: 'Our Story'
        },
        {
          label: 'Yoga Retreats'
        },
        {
          label: 'Instructors'
        },
        {
          label: 'Blog'
        }
      ]
    }
  ]

  const toast = useToast()
  const email = ref('')
  const loading = ref(false)

  function onSubmit() {
    loading.value = true

    toast.add({
      title: 'Namaste! 🌿',
      description: 'You’ve joined our yoga journey. Stay mindful!'
    })
  }
</script>

<template>
  <USeparator icon="i-ph-flower-duotone" class="h-px" />
  <UFooter :ui="{ top: 'border-b border-[var(--ui-border)]' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #right>
            <form @submit.prevent="onSubmit">
              <UFormField name="email" label="Join our Yoga Journey" size="lg">
                <UInput
                  v-model="email"
                  type="email"
                  class="w-full"
                  placeholder="Enter your email"
                >
                  <template #trailing>
                    <UButton
                      type="submit"
                      size="xs"
                      color="primary"
                      label="Join"
                    />
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
        © {{ new Date().getFullYear() }} Yogamos. Stay present, stay balanced.
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
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
