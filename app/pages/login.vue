<script setup lang="ts">
  import * as z from 'zod'
  import type { FormSubmitEvent } from '@nuxt/ui'
  import { useToast } from '#imports'

  definePageMeta({
    layout: 'auth'
  })

  useSeoMeta({
    title: 'Login'
  })

  const toast = useToast()

  const fields = [
    {
      name: 'email',
      type: 'text' as const,
      label: 'Email',
      placeholder: 'Enter your email',
      required: true
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password' as const,
      placeholder: 'Enter your password'
    },
    {
      name: 'remember',
      label: 'Remember me',
      type: 'checkbox' as const
    }
  ]

  const providers = [
    {
      label: 'Google',
      icon: 'i-simple-icons-google',
      onClick: () => {
        toast.add({
          title: 'Google',
          description: 'Login with Google'
        })
      }
    },
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      onClick: () => {
        toast.add({
          title: 'GitHub',
          description: 'Login with GitHub'
        })
      }
    }
  ]

  const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters')
  })

  type Schema = z.output<typeof schema>

  const loading = ref(false)

  async function onSubmit(payload: FormSubmitEvent<Schema>) {
    if (loading.value) return
    loading.value = true

    console.log('Submitted', payload)
    toast.add({
      title: 'Submitted successfully!',
      description: `${payload.data.email}`
    })

    setTimeout(() => {
      loading.value = false
    }, 2000) // Simulating API call
  }
</script>

<template>
  <UAuthForm
    :fields="fields"
    :schema="schema"
    :providers="providers"
    title="Welcome back"
    icon="i-lucide-lock"
    :submit="{ label: 'Create account', loading }"
    @submit="onSubmit">
    <template #description>
      Don't have an account?
      <ULink to="/signup" class="text-primary-500 font-medium">
        Sign up.
      </ULink>
    </template>

    <template #password-hint>
      <ULink to="/" class="text-primary-500 font-medium">
        Forgot password?
      </ULink>
    </template>

    <template #footer>
      By signing in, you agree to our
      <ULink to="/" class="text-primary-500 font-medium">
        Terms of Service.
      </ULink>
    </template>
  </UAuthForm>
</template>
